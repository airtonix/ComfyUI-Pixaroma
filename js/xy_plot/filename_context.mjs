// XY filename references use scalar widget values, with explicit ambiguity checks.
// Keep this pure so execution-time naming can be checked without a running canvas.
import { resolveFilenameTokens } from "../shared/filename_tokens_core.mjs";

export function resolveFilenameContext(pattern, nodes, executionPrompt = null, sweptWidgets = []) {
  const entries = [];
  const errors = new Set();
  const warnings = new Set();
  const recorded = executionPrompt != null;
  const byNode = new Map();
  for (const node of nodes) {
    const name = referenceName(node);
    const execution = recorded ? executionEntry(node, executionPrompt) : null;
    const nodeEntries = new Map();
    for (const widget of node.widgets || []) {
      if (!widget.name || widget.hidden || widget.type === "hidden" || widget.serialize === false ||
          String(widget.type).startsWith("pixaroma_") || widget.name.startsWith("$$") ||
          ["button", "image", "canvas", "converted-widget"].includes(widget.type) ||
          !isScalar(widget.value)) continue;
      let disabledReason = null;
      let value = widget.value;
      if (!name || /[.%]/.test(name) || /[.%]/.test(widget.name)) {
        disabledReason = "Use a node reference name and widget name without dots or percent signs.";
      } else if (matchingNodes(nodes, name).length !== 1) {
        disabledReason = "Duplicate node reference name. Give these nodes unique names for S&R.";
      } else if (widget.linked) {
        disabledReason = "This input is linked. Its runtime value is not a scalar widget value.";
      } else if (sweptWidgets.some((s) => String(s.nodeId) === String(node.id) && s.widgetName === widget.name)) {
        disabledReason = "This value varies across the grid. One value cannot name the entire plot.";
      } else if (recorded) {
        if (!execution || !Object.prototype.hasOwnProperty.call(execution.inputs || {}, widget.name)) {
          disabledReason = "This widget has no recorded value in the displayed grid's execution.";
        } else if (!isScalar(execution.inputs[widget.name])) {
          disabledReason = "The recorded input is linked or structured, not a scalar value.";
        } else {
          value = execution.inputs[widget.name];
        }
      }
      const entry = {
        token: `%${name}.${widget.name}%`, name, nodeId: String(node.id),
        widgetName: widget.name, value, source: recorded ? "execution" : "live", disabledReason,
      };
      if (nodeEntries.has(widget.name)) {
        entry.disabledReason = "Duplicate widget name on this node.";
        nodeEntries.get(widget.name).disabledReason = entry.disabledReason;
      }
      entries.push(entry);
      nodeEntries.set(widget.name, entry);
    }
    byNode.set(node, nodeEntries);
  }

  const resolvedPrefix = String(pattern).replace(/%([^%]+)%/g, (token, body) => {
    if (body.startsWith("date:") || !body.includes(".")) return token;
    const parts = body.split(".");
    if (parts.length !== 2) {
      errors.add(`Invalid node reference ${token}. Use %Node name.widget_name%.`);
      return token;
    }
    const matches = matchingNodes(nodes, parts[0]);
    if (matches.length !== 1) {
      errors.add(matches.length ? `Ambiguous node reference ${token}. Set a unique Node name for S&R.` : `Node not found for ${token}. Choose an available node value.`);
      return token;
    }
    const entry = byNode.get(matches[0])?.get(parts[1]);
    if (!entry) {
      errors.add(`No scalar widget is available for ${token}. Choose an available node value.`);
      return token;
    }
    if (entry.disabledReason) {
      errors.add(`${token}: ${entry.disabledReason}`);
      return token;
    }
    if (entry.source === "live") warnings.add("Node variables currently use live widgets. After a plot runs, recorded execution values take priority.");
    return resolveFilenameTokens(token, [{
      title: matches[0].title, properties: matches[0].properties,
      widgets: [{ name: entry.widgetName, value: entry.value }],
    }]);
  });
  return { pattern, resolvedPrefix, entries, errors: [...errors], warnings: [...warnings] };
}

// Track actual scalar inputs across cells, including seeds changed outside an axis.
export function recordFilenameValues(history, prompt) {
  const current = history || { values: new Map(), varied: new Map() };
  for (const [nodeId, entry] of Object.entries(prompt || {})) {
    if (entry.class_type === "PixaromaXYPlot") continue;
    for (const [widgetName, value] of Object.entries(entry.inputs || {})) {
      if (!isScalar(value)) continue;
      const key = JSON.stringify([nodeId, widgetName]);
      if (!current.values.has(key)) current.values.set(key, value);
      else if (!Object.is(current.values.get(key), value)) {
        current.varied.set(key, { nodeId, widgetName });
      }
    }
  }
  return current;
}

function referenceName(node) {
  return String(node.properties?.["Node name for S&R"] || node.title || "");
}

function matchingNodes(nodes, name) {
  const named = nodes.filter((node) => node.properties?.["Node name for S&R"] === name);
  return named.length ? named : nodes.filter((node) => node.title === name);
}

function isScalar(value) {
  return value == null || typeof value === "string" || typeof value === "boolean" ||
    (typeof value === "number" && Number.isFinite(value));
}

function executionEntry(node, prompt) {
  // Scoped prompt IDs prevent a same-id node in another subgraph being used.
  const exact = prompt[String(node.id)];
  return exact && (!node.type || exact.class_type === node.type) ? exact : null;
}
