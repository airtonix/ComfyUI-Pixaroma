"""Read-only filename planning shared by XY Plot preview and output saving."""

import os
import re
import time

from ._save_helpers import (
    _expand_date_tokens,
    _safe_prefix,
    _sanitize_segment,
    _PREFIX_MAX_LEN,
    _PREFIX_OUTPUT_MAX,
)

_TOKEN_RE = re.compile(r"%([^\s%](?:[^%\r\n]*[^\s%])?)%")
_NATIVE_FIELDS = {
    "year": "tm_year",
    "month": "tm_mon",
    "day": "tm_mday",
    "hour": "tm_hour",
    "minute": "tm_min",
    "second": "tm_sec",
}


def plan_xy_filename(filename_prefix, output_dir, width=None, height=None):
    """Return the exact save destination without creating or reserving anything.

    Unknown dimensions remain tokens; names and counters are then unavailable
    only when the pattern needs those dimensions. Node references must already
    have been resolved by the client against the execution snapshot.
    """
    result = {
        "prefix": "",
        "filename": None,
        "subfolder": "",
        "disk_filename": None,
        "width": width,
        "height": height,
        "counter": None,
        "warnings": [],
        "errors": [],
    }
    errors, warnings = result["errors"], result["warnings"]
    if not isinstance(filename_prefix, str) or not filename_prefix.strip():
        errors.append("Enter a filename prefix.")
        return result
    if len(filename_prefix) > _PREFIX_MAX_LEN:
        errors.append(f"Filename prefix must be {_PREFIX_MAX_LEN} characters or fewer.")
        return result
    normalized = filename_prefix.strip().replace("\\", "/")
    if (
        normalized.startswith("/")
        or re.match(r"^[A-Za-z]:", normalized)
        or ".." in normalized.split("/")
    ):
        errors.append(
            "Use a relative subfolder inside the output directory; parent paths are not allowed."
        )
        return result
    unmatched = _TOKEN_RE.sub("", normalized)
    if re.search(r"%[^\W\d]", unmatched):
        errors.append("A filename placeholder is missing its closing percent sign.")
        return result
    expanded = _expand_date_tokens(normalized)
    now = time.localtime()
    for name, field in _NATIVE_FIELDS.items():
        value = str(getattr(now, field))
        expanded = expanded.replace(
            f"%{name}%", value if name == "year" else value.zfill(2)
        )
    for name, value in (("width", width), ("height", height)):
        if value is not None:
            expanded = expanded.replace(f"%{name}%", str(value))
    for match in _TOKEN_RE.finditer(expanded):
        token = match.group(1)
        if token not in ("width", "height"):
            if token in ("counter", "input", "batch_num"):
                errors.append(f"%{token}% is not supported by XY Plot filenames.")
            else:
                errors.append(
                    "Unknown filename placeholder. Use supported date/time, dimension, or resolved node-widget tokens."
                )
    if "%date:" in expanded:
        errors.append("Date tokens need a non-empty format and a closing percent sign.")
    if errors:
        return result
    needs_dimensions = "%width%" in expanded or "%height%" in expanded
    # Reuse the save sanitizer, including Unicode, reserved device names and caps.
    prefix = _safe_prefix(expanded)
    if not prefix:
        errors.append(
            "The filename has no usable name or exceeds the expanded input limit."
        )
        return result
    cleaned = "/".join(
        part
        for part in (_sanitize_segment(p) for p in expanded.split("/") if p)
        if part
    )
    if prefix != expanded or normalized != filename_prefix:
        warnings.append(
            "Filename cleanup changes whitespace, separators, empty segments, reserved names, or unsupported characters."
        )
    if len(cleaned) > _PREFIX_OUTPUT_MAX:
        warnings.append(
            f"The sanitized prefix is truncated to {_PREFIX_OUTPUT_MAX} characters."
        )
    if os.path.splitext(prefix)[1].lower() in (
        ".png",
        ".jpg",
        ".jpeg",
        ".webp",
        ".gif",
        ".bmp",
        ".tif",
        ".tiff",
    ):
        warnings.append(
            "The image extension in the prefix is kept as part of the stem; saving adds the PNG extension."
        )
    subfolder, name = os.path.split(prefix)
    result.update(prefix=prefix, subfolder=subfolder)
    output_root = os.path.realpath(output_dir)
    folder = os.path.realpath(os.path.join(output_root, subfolder))
    try:
        contained = os.path.commonpath((output_root, folder)) == output_root
    except ValueError:
        contained = False
    if not contained:
        errors.append(
            "The destination must stay inside the output directory, including symbolic links."
        )
        return result
    if needs_dimensions:
        warnings.append("Grid dimensions will be available after the plot runs.")
        return result
    counter = _native_counter(folder, name)
    result.update(
        filename=f"{name}_{counter:05}_.png",
        disk_filename=f"{name}_grid.png",
        counter=counter,
    )
    return result


def _native_counter(folder, name):
    """Match get_save_image_path's prefix and numeric-counter scan, without mkdir."""
    try:
        filenames = os.listdir(folder)
    except FileNotFoundError:
        return 1
    counters = []
    for filename in filenames:
        prefix = filename[: len(name) + 1]
        if not prefix.endswith("_") or os.path.normcase(
            prefix[:-1]
        ) != os.path.normcase(name):
            continue
        try:
            counter = int(filename[len(name) + 1 :].split(".")[0].split("_")[0])
        except ValueError:
            counter = 0
        counters.append(counter)
    return max(counters, default=0) + 1
