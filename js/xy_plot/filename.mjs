// XY filename catalog and server planning bridge. Raw patterns stay in widgets;
// only save requests receive expanded, execution-aware node references.
import { app } from "/scripts/app.js";
import { pixApiUrl } from "../shared/api_url.mjs";
import { readState, resolveAxisValues, targetNodeOf } from "./core.mjs";
import { resolveFilenameContext, recordFilenameValues } from "./filename_context.mjs";

export function getFilenamePrefix(node) {
  const value = node.widgets?.find((widget) => widget.name === "filename_prefix")?.value;
  return typeof value === "string" && value.trim() ? value.trim() : "xy_plot";
}

export function getFilenameContext(node, pattern = getFilenamePrefix(node)) {
  const catalog = filenameNodes(node);
  const prompt = node._pixXyLastGrid ? node._pixXyExecPrompt || null : null;
  let sweeps = getFilenameSweeps(node, catalog);
  if (prompt) {
    // Read the axes captured with this grid, not axes edited since it ran.
    const ownId = catalog.find((entry) => entry.original === node)?.id;
    const stateText = prompt[ownId]?.inputs?.XYPlotState;
    sweeps = [];
    if (typeof stateText === "string") {
      try { sweeps = JSON.parse(stateText).filenameSweeps || []; } catch (_e) { /* old grid */ }
    }
    const history = node._pixXyFilenameHistory;
    if (history?.sessionId === node._pixXyLastGrid?.sessionId) {
      sweeps = [...sweeps, ...history.varied.values()];
    }
  }
  return resolveFilenameContext(pattern, catalog.filter((entry) => entry.original !== node), prompt, sweeps);
}

export function recordFilenameExecution(node, sessionId, prompt) {
  const previous = node._pixXyFilenameHistory;
  const history = recordFilenameValues(previous?.sessionId === sessionId ? previous : null, prompt);
  history.sessionId = sessionId;
  node._pixXyFilenameHistory = history;
}

export function getFilenameSweeps(node, catalog = filenameNodes(node)) {
  const state = readState(node);
  const swept = [];
  for (const axis of [state.x, state.y]) {
    if (axis.nodeId == null || resolveAxisValues(axis).length < 2) continue;
    const target = targetNodeOf(node, axis);
    const entry = catalog.find((item) => item.original === target);
    if (entry) swept.push({ nodeId: entry.id, widgetName: axis.widgetName });
  }
  const variesSeed = [state.x, state.y].some((axis) => ["seed", "noise_seed"].includes(axis.widgetName));
  const locked = state.lockSeed !== false && !variesSeed;
  const total = Math.max(1, resolveAxisValues(state.x).length) * Math.max(1, resolveAxisValues(state.y).length);
  if (!locked && total > 1) {
    for (const entry of catalog) {
      const controls = entry.widgets.filter((widget) => /control_after_generate/.test(widget.name || ""));
      if (!controls.some((widget) => ["randomize", "increment", "decrement"].includes(widget.value))) continue;
      for (const widget of entry.widgets) {
        if (["seed", "noise_seed"].includes(widget.name)) {
          const pinned = [state.x, state.y].some((axis) =>
            axis.widgetName === widget.name && targetNodeOf(node, axis) === entry.original &&
            resolveAxisValues(axis).length === 1);
          if (pinned) continue;
          swept.push({ nodeId: entry.id, widgetName: widget.name });
        }
      }
    }
  }
  return swept;
}

export async function requestFilenamePlan(node, pattern = getFilenamePrefix(node), signal) {
  const context = getFilenameContext(node, pattern);
  if (context.errors.length) return { ...context, filename: null, disk_filename: null, counter: null };
  const response = await fetch(pixApiUrl("/pixaroma/api/xy_plot/filename"), {
    method: "POST", headers: { "Content-Type": "application/json" }, signal,
    body: JSON.stringify({
      filename_prefix: context.resolvedPrefix,
      grid_filename: node._pixXyLastGrid?.filename || null,
      session_id: node._pixXyLastGrid?.sessionId || null,
      save_max_size: readState(node).saveMaxSize || "4096",
    }),
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok && !Array.isArray(data.errors)) {
    throw new Error(response.status === 404
      ? "Restart ComfyUI to load the filename planner, then reload the browser."
      : data.error || `Filename preview failed (HTTP ${response.status}).`);
  }
  return {
    ...data, entries: context.entries,
    resolvedPrefix: context.resolvedPrefix,
    errors: [...context.errors, ...(data.errors || [])],
    warnings: [...context.warnings, ...(data.warnings || [])],
  };
}

function filenameNodes(node) {
  const root = node.graph?.rootGraph || app.graph?.rootGraph || app.graph;
  const result = [];
  const seen = new Set();
  const walk = (graph, prefix = "") => {
    if (!graph || seen.has(graph)) return;
    seen.add(graph);
    for (const current of graph._nodes || graph.nodes || []) {
      const id = `${prefix}${current.id}`;
      result.push({
        id, original: current, title: current.title || current.type,
        type: current.comfyClass || current.type, properties: current.properties,
        widgets: (current.widgets || []).map((widget) => ({
          name: widget.name, value: widget.value, type: widget.type,
          hidden: widget.hidden, serialize: widget.serialize,
          linked: (current.inputs || []).some((input) => input.name === widget.name && input.link != null),
        })),
      });
      const subgraph = current.subgraph;
      if (subgraph) walk(subgraph, `${id}:`);
    }
  };
  walk(root);
  return result;
}
