"""Coalesce session changes without retaining images or blocking producer threads."""

import asyncio
import threading

from ._xy_layout import MAX_PLOT_CELLS

_LOCK = threading.Lock()
_SUBSCRIBERS = {}


def subscribe(session_id):
    """Subscribe on the running event loop; close the subscription on disconnect."""
    subscription = _Subscription(session_id, asyncio.get_running_loop())
    with _LOCK:
        _SUBSCRIBERS.setdefault(session_id, set()).add(subscription)
    return subscription


def notify(session_id, coordinate=None):
    """Publish a reset or changed coordinate from any thread, without reading cache."""
    with _LOCK:
        for subscription in tuple(_SUBSCRIBERS.get(session_id, ())):
            if subscription._loop.is_closed():
                subscription._close_locked()
                continue
            if coordinate is None:
                subscription._reset = True
                subscription._coordinates.clear()
            elif not subscription._reset:
                if (
                    len(subscription._coordinates) == MAX_PLOT_CELLS
                    and coordinate not in subscription._coordinates
                ):
                    subscription._reset = True
                    subscription._coordinates.clear()
                else:
                    subscription._coordinates.add(coordinate)
            subscription._schedule_locked()


class _Subscription:
    def __init__(self, session_id, loop):
        self._session_id = session_id
        self._loop = loop
        self._ready = asyncio.Event()
        self._coordinates = set()
        self._reset = False
        self._scheduled = False
        self._closed = False

    async def wait(self):
        """Drain pending changes; None means the caller must read a full snapshot."""
        await self._ready.wait()
        with _LOCK:
            if self._closed:
                raise asyncio.CancelledError
            coordinates = None if self._reset else self._coordinates
            self._coordinates = set()
            self._reset = False
            self._ready.clear()
            # Keep the wake scheduled until draining, including during slow writes.
            self._scheduled = False
            return coordinates

    def close(self):
        """Release this subscriber, including pending changes and any active wait."""
        with _LOCK:
            if self._closed:
                return
            self._close_locked()
            self._schedule_locked()

    def _close_locked(self):
        self._closed = True
        self._reset = False
        self._coordinates.clear()
        subscribers = _SUBSCRIBERS.get(self._session_id)
        if subscribers is not None:
            subscribers.discard(self)
            if not subscribers:
                del _SUBSCRIBERS[self._session_id]

    def _schedule_locked(self):
        if self._scheduled or self._loop.is_closed():
            return
        self._scheduled = True
        try:
            self._loop.call_soon_threadsafe(self._ready.set)
        except RuntimeError:
            # A loop can close between is_closed() and scheduling the wake.
            self._close_locked()
