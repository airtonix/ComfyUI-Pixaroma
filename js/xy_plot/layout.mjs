// Wrapping changes presentation only. Logical coordinates still identify the
// original X/Y values in queued prompts, cached images, and report metadata.
export function planPlotLayout(xCount, yCount, { wrapGrid = false, wrapColumns = 4 } = {}) {
  const hasPlot = xCount > 0 || yCount > 0;
  const cols = xCount || (yCount ? 1 : 0);
  const rows = yCount || (xCount ? 1 : 0);
  const total = hasPlot ? cols * rows : 0;
  const singleAxis = xCount > 0 && !yCount ? "x" : yCount > 0 && !xCount ? "y" : null;
  const columns = Math.min(total, normalizeWrapColumns(wrapColumns));
  const wrap = wrapGrid === true && singleAxis ? { axis: singleAxis, columns, count: total } : null;
  return {
    cols, rows, total, hasPlot, singleAxis, wrap,
    displayCols: wrap ? columns : cols,
    displayRows: wrap ? Math.ceil(total / columns) : rows,
  };
}

export function normalizeWrapColumns(value) {
  const number = Number(value);
  return Number.isFinite(number) ? Math.max(1, Math.min(100, Math.trunc(number))) : 4;
}
