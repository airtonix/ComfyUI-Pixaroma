"""Map optional single-axis wrapping without changing logical sweep coordinates."""

# Logical axes may be longer than a display row. Keep the old 100 × 100
# total-cell bound without truncating a long single-axis model or prompt list.
MAX_PLOT_CELLS = 10_000
MAX_WRAP_COLUMNS = 100


def validate_wrap(value, cols, rows, x_labels, y_labels):
    """Return a normalized wrap setting, or reject settings outside one active axis."""
    if value is None:
        return None
    if not isinstance(value, dict) or value.get("axis") not in ("x", "y"):
        raise ValueError("wrap must be null or an object with axis x or y")
    count, columns = value.get("count"), value.get("columns")
    if type(count) is not int or not 1 <= count <= MAX_PLOT_CELLS:
        raise ValueError("wrap count must be an integer from 1 to 10000")
    if type(columns) is not int or not 1 <= columns <= MAX_WRAP_COLUMNS:
        raise ValueError("wrap columns must be an integer from 1 to 100")
    axis = value["axis"]
    active, inactive = (x_labels, y_labels) if axis == "x" else (y_labels, x_labels)
    length, other_length = (cols, rows) if axis == "x" else (rows, cols)
    if count != length or len(active) != count or other_length != 1 or inactive:
        raise ValueError(
            "wrap must match exactly one configured axis and its logical count"
        )
    return {"axis": axis, "columns": min(columns, count), "count": count}


def display_dimensions(cols, rows, wrap):
    if wrap is None:
        return cols, rows
    columns = wrap["columns"]
    return columns, (wrap["count"] + columns - 1) // columns


def logical_coordinate(column, row, wrap):
    """Return the original cell key, or None for an unused wrapped position."""
    if wrap is None:
        return column, row
    index = row * wrap["columns"] + column
    if index >= wrap["count"]:
        return None
    return (index, 0) if wrap["axis"] == "x" else (0, index)
