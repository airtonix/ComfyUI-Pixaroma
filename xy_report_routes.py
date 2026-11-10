"""Serve the live XY report through ComfyUI, without another HTTP service."""

import asyncio
import json
from pathlib import Path

from aiohttp import web

_REPORT_PAGE = Path(__file__).parent / "web" / "xy_report.html"
_BASE = "/pixaroma/api/xy_plot/reports"
_HEARTBEAT_SECONDS = 15


def register_routes(routes):
    """Register on PromptServer.instance.routes; ComfyUI supplies its /api alias."""
    routes.get("/pixaroma/xy-report/{session_id}")(report_page)
    routes.post(_BASE)(report_create)
    routes.get(_BASE + "/{session_id}")(report_manifest)
    routes.get(_BASE + "/{session_id}/events")(report_events)
    routes.get(_BASE + "/{session_id}/cells/{xi}/{yi}")(report_cell)
    routes.get(_BASE + "/{session_id}/cells/{xi}/{yi}/metadata")(report_metadata)


async def report_page(request):
    report, _ = _report_backend()
    try:
        report.validate_session_id(request.match_info["session_id"])
    except ValueError as error:
        return _bad_request(error)
    return web.FileResponse(_REPORT_PAGE, headers={"Cache-Control": "no-cache"})


async def report_create(request):
    report, cache = _report_backend()
    try:
        data = await request.json()
        manifest, created = report.create_report(cache, data)
    except (ValueError, TypeError) as error:
        return _bad_request(error)
    return web.json_response(
        manifest,
        status=201 if created else 200,
        headers=_headers(_manifest_etag(manifest)),
    )


async def report_manifest(request):
    report, cache = _report_backend()
    try:
        manifest = report.get_manifest(cache, request.match_info["session_id"])
    except ValueError as error:
        return _bad_request(error)
    if manifest is None:
        raise web.HTTPNotFound(text="XY report is missing or has expired")
    etag = _manifest_etag(manifest)
    if _unchanged(request, etag):
        return web.Response(status=304, headers=_headers(etag))
    return web.json_response(manifest, headers=_headers(etag))


async def report_events(request):
    """Stream coalesced changes; reconnects always receive a complete snapshot."""
    report, cache = _report_backend()
    session_id = request.match_info["session_id"]
    try:
        report.validate_session_id(session_id)
    except ValueError as error:
        return _bad_request(error)
    subscription = _event_broker().subscribe(session_id)
    response = web.StreamResponse(
        headers={
            "Content-Type": "text/event-stream",
            "Cache-Control": "no-cache, no-transform",
            "X-Accel-Buffering": "no",
        }
    )
    generation = context_revision = None
    try:
        # Subscribe first so changes during snapshot capture or writes stay pending.
        event, data = await asyncio.to_thread(report.stream_snapshot, cache, session_id)
        await response.prepare(request)
        await response.write(b"retry: 2000\n\n")
        while True:
            await response.write(_event_message(event, data))
            generation = data.get("generation")
            context_revision = data.get("context_revision")
            while True:
                try:
                    coordinates = await asyncio.wait_for(
                        subscription.wait(), timeout=_HEARTBEAT_SECONDS
                    )
                    break
                except asyncio.TimeoutError:
                    # Heartbeats detect idle disconnects without touching the cache.
                    await response.write(b": heartbeat\n\n")
            event, data = await asyncio.to_thread(
                report.stream_snapshot,
                cache,
                session_id,
                coordinates,
                generation,
                context_revision,
            )
    except ConnectionError:
        pass
    finally:
        subscription.close()
    return response


async def report_cell(request):
    report, cache = _report_backend()
    try:
        snapshot = report.get_cell(
            cache,
            request.match_info["session_id"],
            request.match_info["xi"],
            request.match_info["yi"],
        )
    except ValueError as error:
        return _bad_request(error)
    if snapshot is None:
        raise web.HTTPNotFound(text="XY report cell is not available")
    image, metadata, revision = snapshot
    _require_revision(request, revision, metadata["generation"])
    etag = _cell_etag(metadata, revision, "image")
    if _unchanged(request, etag):
        return web.Response(status=304, headers=_headers(etag))
    png = await asyncio.to_thread(report.encode_cell_png, image, metadata)
    return web.Response(body=png, content_type="image/png", headers=_headers(etag))


async def report_metadata(request):
    report, cache = _report_backend()
    try:
        snapshot = report.get_cell(
            cache,
            request.match_info["session_id"],
            request.match_info["xi"],
            request.match_info["yi"],
        )
    except ValueError as error:
        return _bad_request(error)
    if snapshot is None:
        raise web.HTTPNotFound(text="XY report cell is not available")
    _, metadata, revision = snapshot
    _require_revision(request, revision, metadata["generation"])
    etag = _cell_etag(metadata, revision, "metadata")
    if _unchanged(request, etag):
        return web.Response(status=304, headers=_headers(etag))
    return web.json_response(metadata, headers=_headers(etag))


def _report_backend():
    # server_routes is imported while node modules are still loading.
    from .nodes import _xy_report, node_xy_plot

    return _xy_report, node_xy_plot


def _event_broker():
    from .nodes import _xy_report_events

    return _xy_report_events


def _event_message(event, data):
    return ("event: %s\ndata: %s\n\n" % (event, json.dumps(data))).encode("utf-8")


def _manifest_etag(manifest):
    return '"xy-report-%s-%s-%s"' % (
        manifest["generation"],
        manifest["context_revision"],
        manifest["revision"],
    )


def _cell_etag(metadata, revision, kind):
    return '"xy-cell-%s-%s-%s-%s-%s"' % (
        kind,
        metadata["generation"],
        metadata["xi"],
        metadata["yi"],
        revision,
    )


def _require_revision(request, revision, generation):
    values = request.query.getall("v", [])
    generations = request.query.getall("generation", [])
    if not values and not generations:
        return
    if (
        len(values) != 1
        or not 1 <= len(values[0]) <= 20
        or not values[0].isascii()
        or not values[0].isdigit()
        or int(values[0]) < 1
    ):
        raise web.HTTPBadRequest(
            text="Cell revision must be a positive integer",
            headers={"Cache-Control": "no-store"},
        )
    if (
        len(generations) != 1
        or len(generations[0]) != 32
        or any(character not in "0123456789abcdef" for character in generations[0])
    ):
        raise web.HTTPBadRequest(
            text="Versioned cell URLs require a 32-character hexadecimal generation",
            headers={"Cache-Control": "no-store"},
        )
    if int(values[0]) != revision or generations[0] != generation:
        raise web.HTTPConflict(
            text="Cell generation or revision has changed; refresh the report manifest",
            headers={"Cache-Control": "no-store"},
        )


def _headers(etag):
    return {"ETag": etag, "Cache-Control": "private, no-cache"}


def _unchanged(request, etag):
    return any(
        value.strip().removeprefix("W/") in (etag, "*")
        for value in request.headers.get("If-None-Match", "").split(",")
    )


def _bad_request(error):
    return web.json_response(
        {"error": str(error)}, status=400, headers={"Cache-Control": "no-store"}
    )
