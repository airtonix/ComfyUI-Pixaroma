"""Live XY report snapshots share the node's bounded cell cache and lock.

Images stay in the existing session cells. Report streams read only small records;
only an explicit cell request encodes a PNG.
"""

import io
import re
from datetime import datetime, timezone
from uuid import uuid4

from ._save_helpers import _build_pnginfo, _json_safe
from ._xy_layout import MAX_PLOT_CELLS, validate_wrap
from ._xy_report_events import notify

_SESSION_ID = re.compile(r"[A-Za-z0-9_-]{1,100}\Z")


def create_report(cache, data):
    """Create a waiting session, or return an existing session without resetting it."""
    if not isinstance(data, dict):
        raise ValueError("Report settings must be an object")
    session_id = validate_session_id(data.get("session_id"))
    cols = validate_dimension(data.get("cols"))
    rows = validate_dimension(data.get("rows"))
    if cols * rows > MAX_PLOT_CELLS:
        raise ValueError(
            "A plot supports at most 10000 images; reduce the X or Y values"
        )
    settings = {
        "cols": cols,
        "rows": rows,
        "x_labels": _labels(data.get("x_labels", []), cols),
        "y_labels": _labels(data.get("y_labels", []), rows),
        "x_name": _text(data.get("x_name", "")),
        "y_name": _text(data.get("y_name", "")),
        "prefix": _text(data.get("prefix", "xy_plot")),
        "lock_seed": data.get("lock_seed", True),
    }
    if not isinstance(settings["lock_seed"], bool):
        raise ValueError("lock_seed must be a boolean")
    settings["wrap"] = validate_wrap(
        data.get("wrap"), cols, rows, settings["x_labels"], settings["y_labels"]
    )
    with cache._LOCK:
        created = session_id not in cache._SESSIONS
        if created:
            cache._SESSIONS[session_id] = new_session(session_id, settings)
            cache._touch_session(session_id)
            notify(session_id)
        return manifest(session_id, cache._SESSIONS[session_id]), created


def get_manifest(cache, session_id):
    """Return a manifest without refreshing the session's eviction order."""
    validate_session_id(session_id)
    with cache._LOCK:
        session = cache._SESSIONS.get(session_id)
        return manifest(session_id, session) if session else None


def stream_snapshot(
    cache,
    session_id,
    coordinates=None,
    known_generation=None,
    known_context_revision=None,
):
    """Snapshot report metadata without rendering images or refreshing retention.

    A reset, generation change, or context change returns the full manifest.
    Otherwise only the requested coordinates' latest public records are returned.
    """
    validate_session_id(session_id)
    with cache._LOCK:
        session = cache._SESSIONS.get(session_id)
        if session is None:
            return "missing", {"session_id": session_id}
        report = session["report"]
        if (
            coordinates is None
            or known_generation != report["generation"]
            or known_context_revision != report["context_revision"]
        ):
            return "snapshot", manifest(session_id, session)
        cells = [
            _public_cell(session_id, report, xi, yi, report["cells"][(xi, yi)])
            for xi, yi in sorted(coordinates, key=lambda key: (key[1], key[0]))
            if xi < session["cols"]
            and yi < session["rows"]
            and (xi, yi) in report["cells"]
        ]
        return "update", {
            "session_id": session_id,
            "generation": report["generation"],
            "context_revision": report["context_revision"],
            "revision": report["revision"],
            "updated_at": report["updated_at"],
            **_progress(session),
            "cells": cells,
        }


def get_cell(cache, session_id, xi, yi):
    """Snapshot a cell reference and its recorded metadata under the shared lock.

    PIL images are replaced, never mutated, after insertion. The caller can
    encode this reference outside the lock without a second raster allocation.
    """
    validate_session_id(session_id)
    xi, yi = validate_coordinate(xi), validate_coordinate(yi)
    with cache._LOCK:
        session = cache._SESSIONS.get(session_id)
        if not session or xi >= session["cols"] or yi >= session["rows"]:
            return None
        image = session["cells"].get((xi, yi))
        record = session.get("report", {}).get("cells", {}).get((xi, yi))
        if image is None or record is None:
            return None
        metadata = {
            "xi": xi,
            "yi": yi,
            "revision": record["revision"],
            "generation": session["report"]["generation"],
            **record["metadata"],
        }
        return image, metadata, record["revision"]


def encode_cell_png(image, metadata):
    """Encode an original cached cell, with the execution-time PNG metadata."""
    pnginfo = _build_pnginfo(
        prompt=metadata["prompt"], extra_pnginfo=metadata["extra_pnginfo"]
    )
    with io.BytesIO() as output:
        image.save(output, format="PNG", pnginfo=pnginfo)
        return output.getvalue()


def new_session(session_id, settings):
    """Build an empty session. The caller must hold the node's session lock."""
    now = _now()
    session = {
        "session_id": session_id,
        "cells": {},
        "cols": settings["cols"],
        "rows": settings["rows"],
        "x_labels": settings.get("x_labels", []),
        "y_labels": settings.get("y_labels", []),
        "x_name": settings.get("x_name", ""),
        "y_name": settings.get("y_name", ""),
        "draw_labels": settings.get("draw_labels", True),
        "wrap": settings.get("wrap"),
        "theme": settings.get("theme", "dark"),
        "grid_name": "pixaroma_xy_grid_%s.png"
        % "".join(c for c in str(session_id) if c.isalnum() or c in "_-")[:80],
        "prefix": settings.get("prefix", "xy_plot"),
        "lock_seed": settings.get("lock_seed", True),
        "report": {
            "generation": uuid4().hex,
            "revision": 0,
            "context_revision": 0,
            "received": 0,
            "created_at": now,
            "updated_at": now,
            "cells": {},
        },
    }
    session["report"]["context"] = _context(session)
    return session


def refresh_context(session):
    """Publish changed report settings. Callers hold the shared session lock."""
    report = session["report"]
    context = _context(session)
    if context == report["context"]:
        return
    if context[:2] != report["context"][:2]:
        report["received"] = sum(
            xi < session["cols"] and yi < session["rows"] for xi, yi in report["cells"]
        )
    report["context"] = context
    report["context_revision"] += 1
    report["updated_at"] = _now()
    notify(session["session_id"])


def _context(session):
    # These fields are immutable or replaced, not edited in place. Keep their
    # references so context tracking does not copy the full axis-label arrays.
    return (
        session["cols"],
        session["rows"],
        session["x_labels"],
        session["y_labels"],
        session["x_name"],
        session["y_name"],
        session.get("wrap"),
        session["prefix"],
        session["lock_seed"],
    )


def record_cell(session, xi, yi, image, prompt, extra_pnginfo, state):
    """Replace one coordinate atomically; callers hold the shared lock.

    The node passes only the first frame of each image batch, as for its grid.
    Metadata is copied now so a later graph edit cannot change this cell.
    """
    # A metadata failure must not remove the image from the existing grid path.
    session["cells"][(xi, yi)] = image
    report = session["report"]
    previous = report["cells"].get((xi, yi))
    revision = previous["revision"] + 1 if previous else 1
    now = _now()
    x_labels, y_labels = session["x_labels"], session["y_labels"]
    metadata = {
        "width": image.width,
        "height": image.height,
        "received_at": now,
        "x": {
            "name": session["x_name"],
            "value": x_labels[xi] if xi < len(x_labels) else "",
            "index": xi,
        },
        "y": {
            "name": session["y_name"],
            "value": y_labels[yi] if yi < len(y_labels) else "",
            "index": yi,
        },
        "prompt": None,
        "workflow": None,
        "extra_pnginfo": None,
        "inputs": None,
    }
    try:
        extra = _json_safe(extra_pnginfo) if isinstance(extra_pnginfo, dict) else {}
        captured = {
            "prompt": _json_safe(prompt),
            "workflow": extra.get("workflow"),
            "extra_pnginfo": extra,
            "inputs": _json_safe(state),
        }
    except Exception as error:
        metadata["metadata_error"] = "Execution metadata could not be recorded"
        print("[Pixaroma] XY Plot: report metadata capture failed: %s" % error)
    else:
        metadata.update(captured)
    report["cells"][(xi, yi)] = {"revision": revision, "metadata": metadata}
    if previous is None and xi < session["cols"] and yi < session["rows"]:
        report["received"] += 1
    report["revision"] += 1
    report["updated_at"] = now
    notify(session["session_id"], (xi, yi))


def manifest(session_id, session):
    report = session["report"]
    cells = []
    for (xi, yi), record in sorted(
        report["cells"].items(), key=lambda item: (item[0][1], item[0][0])
    ):
        if xi >= session["cols"] or yi >= session["rows"]:
            continue
        cells.append(_public_cell(session_id, report, xi, yi, record))
    return {
        "session_id": session_id,
        "generation": report["generation"],
        "context_revision": report["context_revision"],
        "revision": report["revision"],
        "created_at": report["created_at"],
        "updated_at": report["updated_at"],
        **{
            key: session[key]
            for key in (
                "cols",
                "rows",
                "x_name",
                "y_name",
                "x_labels",
                "y_labels",
                "prefix",
                "lock_seed",
            )
        },
        "wrap": session.get("wrap"),
        **_progress(session),
        "cells": cells,
    }


def _public_cell(session_id, report, xi, yi, record):
    metadata = record["metadata"]
    revision = record["revision"]
    url = "%s/cells/%d/%d" % (session_id, xi, yi)
    return {
        "xi": xi,
        "yi": yi,
        "width": metadata["width"],
        "height": metadata["height"],
        "revision": revision,
        "received_at": metadata["received_at"],
        "image_url": "%s?v=%d&generation=%s" % (url, revision, report["generation"]),
        "metadata_url": "%s/metadata?v=%d&generation=%s"
        % (url, revision, report["generation"]),
    }


def _progress(session):
    received = session["report"]["received"]
    total = session["cols"] * session["rows"]
    return {
        "received": received,
        "total": total,
        "status": "complete"
        if received == total
        else "partial"
        if received
        else "waiting",
    }


def validate_session_id(value):
    if not isinstance(value, str) or not _SESSION_ID.fullmatch(value):
        raise ValueError(
            "session_id must use 1 to 100 ASCII letters, digits, underscores or hyphens"
        )
    return value


def validate_dimension(value):
    if (
        isinstance(value, bool)
        or not isinstance(value, int)
        or not 1 <= value <= MAX_PLOT_CELLS
    ):
        raise ValueError("Logical grid dimensions must be integers from 1 to 10000")
    return value


def validate_coordinate(value):
    if isinstance(value, str):
        if not re.fullmatch(r"[0-9]{1,4}", value):
            raise ValueError("Cell coordinates must be integers from 0 to 9999")
        value = int(value)
    if (
        isinstance(value, bool)
        or not isinstance(value, int)
        or not 0 <= value < MAX_PLOT_CELLS
    ):
        raise ValueError("Cell coordinates must be integers from 0 to 9999")
    return value


def _labels(value, dimension):
    if not isinstance(value, list) or any(
        not isinstance(label, str) for label in value[:dimension]
    ):
        raise ValueError("Axis labels must be lists of strings")
    return value[:dimension]


def _text(value):
    if not isinstance(value, str):
        raise ValueError("Axis names and prefix must be strings")
    return value


def _now():
    return datetime.now(timezone.utc).isoformat().replace("+00:00", "Z")
