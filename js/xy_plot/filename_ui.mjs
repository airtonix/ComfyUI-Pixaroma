// XY filename workbench. Drafts stay in this body-mounted overlay until Apply;
// filename.mjs and the server own reference resolution and save planning.
import { app } from "/scripts/app.js";
import { placeZoomedPopup } from "../shared/popup_zoom.mjs";
import { readState } from "./core.mjs";
import { getFilenamePrefix, getFilenameContext, requestFilenamePlan } from "./filename.mjs";

let active = null;
let sequence = 0;

/** Mount in the filename row supplied by the node renderer. Does not resize the node. */
export function renderFilenameControl(node, mount, { beforeOpen } = {}) {
  injectStyles();
  let button = mount.querySelector(".pix-xy-filename-launch");
  if (!button) {
    button = element("button", "Filename…", "pix-xy-filename-launch");
    button.type = "button";
    button.setAttribute("aria-haspopup", "dialog");
    mount.append(button);
  }
  button.setAttribute("aria-expanded", String(active?.node === node));
  button.onclick = () => {
    if (active?.node === node) { closeFilenameBuilder(node); return; }
    beforeOpen?.();
    openBuilder(node, button);
  };
  for (const type of ["pointerdown", "keydown"]) button.addEventListener(type, stopPropagation);
  return button;
}

/** Close the singleton, or only the supplied owner's builder. Discards its draft. */
export function closeFilenameBuilder(owner) {
  if (!active || (owner && active.node !== owner)) return;
  const session = active;
  active = null;
  clearTimeout(session.timer);
  session.request?.abort();
  session.listeners.abort();
  session.popup.remove();
  session.anchor.setAttribute("aria-expanded", "false");
  if (session.anchor.isConnected) session.anchor.focus({ preventScroll: true });
}

function element(tag, text, className) {
  const item = document.createElement(tag);
  if (text != null) item.textContent = text;
  if (className) item.className = className;
  return item;
}
function stopPropagation(event) { event.stopPropagation(); }
function button(text, action) {
  const item = element("button", text);
  item.type = "button";
  item.addEventListener("click", action);
  return item;
}
function labeled(label, control) {
  const wrapper = element("label", null, "pix-xy-fn-field");
  wrapper.append(element("span", label), control);
  return wrapper;
}
function openBuilder(node, anchor) {
  closeFilenameBuilder();
  const id = `pix-xy-fn-${++sequence}`;
  const popup = element("section", null, "pix-xy-fn");
  popup.setAttribute("role", "dialog");
  popup.setAttribute("aria-modal", "false");
  popup.setAttribute("aria-labelledby", `${id}-title`);
  popup.style.setProperty("--pix-acc", getComputedStyle(anchor).getPropertyValue("--pix-acc") || "#f66744");
  const session = { node, anchor, popup, listeners: new AbortController(), request: null, timer: null,
    revision: 0, validated: null, caret: [0, 0], context: null };
  active = session;
  anchor.setAttribute("aria-expanded", "true");
  const heading = element("header");
  const title = element("h2", "Build a filename");
  title.id = `${id}-title`;
  const close = button("×", () => closeFilenameBuilder(node));
  close.setAttribute("aria-label", "Close filename builder; discard draft");
  heading.append(title, close);
  const tabs = element("div", null, "pix-xy-fn-tabs");
  tabs.setAttribute("role", "tablist");
  tabs.setAttribute("aria-label", "Filename views");
  const build = element("div", null, "pix-xy-fn-scroll");
  const reference = element("div", null, "pix-xy-fn-scroll");
  reference.innerHTML = referenceHTML();
  [build, reference].forEach((panel, i) => {
    panel.id = `${id}-panel-${i}`;
    panel.setAttribute("role", "tabpanel");
    panel.setAttribute("aria-labelledby", `${id}-tab-${i}`);
  });
  const tabButtons = ["Build", "Reference"].map((name, i) => {
    const tab = button(name, () => selectTab(i));
    tab.id = `${id}-tab-${i}`;
    tab.setAttribute("role", "tab");
    tab.setAttribute("aria-controls", `${id}-panel-${i}`);
    tab.addEventListener("keydown", (event) => {
      let target;
      if (event.key === "ArrowRight" || event.key === "ArrowLeft") target = 1 - i;
      if (event.key === "Home") target = 0;
      if (event.key === "End") target = 1;
      if (target == null) return;
      event.preventDefault(); selectTab(target); tabButtons[target].focus();
    });
    tabs.append(tab);
    return tab;
  });
  function selectTab(index) {
    tabButtons.forEach((tab, i) => {
      tab.setAttribute("aria-selected", String(index === i));
      tab.tabIndex = index === i ? 0 : -1;
    });
    build.hidden = index !== 0; reference.hidden = index !== 1;
    place(session);
  }
  const pattern = element("textarea");
  pattern.value = getFilenamePrefix(node);
  pattern.rows = 3;
  pattern.spellcheck = false;
  pattern.setAttribute("aria-describedby", `${id}-help ${id}-status`);
  session.pattern = pattern;
  session.caret = [pattern.value.length, pattern.value.length];
  const help = element("p", "Insert at the caret. PNG extension and output numbering are automatic.", "pix-xy-fn-muted");
  help.id = `${id}-help`;
  build.append(labeled("Filename pattern", pattern), help);
  const remember = () => { session.caret = [pattern.selectionStart, pattern.selectionEnd]; };
  for (const type of ["select", "keyup", "click", "blur"]) pattern.addEventListener(type, remember);
  pattern.addEventListener("input", () => { remember(); schedulePreview(session); });
  const insert = (text) => {
    const [start, end] = session.caret;
    pattern.value = pattern.value.slice(0, start) + text + pattern.value.slice(end);
    pattern.focus({ preventScroll: true });
    pattern.setSelectionRange(start + text.length, start + text.length);
    remember(); schedulePreview(session);
  };
  const chips = element("div", null, "pix-xy-fn-row");
  for (const [label, token] of [["+ Date", "%date:yyyy-MM-dd%"], ["+ Time", "%date:hh-mm-ss%"], ["+ Width", "%width%"], ["+ Height", "%height%"]]) {
    chips.append(button(label, () => insert(token)));
  }
  chips.append(button("+ Date folder", () => {
    const folder = "%date:yyyy-MM-dd%/";
    if (!pattern.value.startsWith(folder)) {
      pattern.value = folder + pattern.value;
      session.caret = session.caret.map((position) => position + folder.length);
      schedulePreview(session);
    }
    pattern.focus({ preventScroll: true });
    pattern.setSelectionRange(...session.caret);
  }));
  build.append(chips);
  const formats = element("select");
  for (const format of ["yyyy-MM-dd", "yyyyMMdd", "dd-MM-yyyy", "yyyy/MM/dd", "yyyy-MM-dd_hh-mm-ss"]) {
    const option = element("option", format); option.value = format; formats.append(option);
  }
  const formatRow = element("div", null, "pix-xy-fn-row");
  formatRow.append(labeled("Alternate date format", formats), button("Insert date", () => insert(`%date:${formats.value}%`)));
  build.append(formatRow);
  const picker = element("details");
  picker.append(element("summary", "Insert a node value"));
  const nodeSelect = element("select");
  const widgetSelect = element("select");
  const value = element("p", null, "pix-xy-fn-muted");
  const insertNode = button("Insert node value", () => {
    const entry = session.context.entries[Number(widgetSelect.value)];
    if (entry && !entry.disabledReason) insert(entry.token);
  });
  const pickerFields = element("div", null, "pix-xy-fn-row");
  pickerFields.append(labeled("Named node", nodeSelect), labeled("Widget", widgetSelect));
  picker.append(pickerFields, value, insertNode);
  build.append(picker);
  session.picker = { nodeSelect, widgetSelect, value, insertNode };
  nodeSelect.addEventListener("change", () => fillWidgets(session));
  widgetSelect.addEventListener("change", () => showWidget(session));
  picker.addEventListener("toggle", () => { if (picker.open) refreshCatalog(session); });
  const templates = element("details");
  templates.append(element("summary", "Start with a template"), element("p", "Replaces this draft only. Apply commits it.", "pix-xy-fn-muted"));
  const recipes = element("div", null, "pix-xy-fn-row");
  for (const [label, text] of [["Simple", "xy_plot"], ["Daily", "plots/%date:yyyy-MM-dd%/xy_%width%x%height%"], ["Timestamp", "plots/xy_%date:yyyy-MM-dd_hh-mm-ss%"]]) {
    recipes.append(button(label, () => {
      pattern.value = text; session.caret = [text.length, text.length];
      pattern.focus({ preventScroll: true }); pattern.setSelectionRange(text.length, text.length);
      schedulePreview(session);
    }));
  }
  templates.append(recipes); build.append(templates);
  const destination = element("section", null, "pix-xy-fn-destination");
  destination.append(element("h3", "Destination preview"));
  session.output = element("code"); session.disk = element("code"); session.dimensions = element("p", null, "pix-xy-fn-muted");
  destination.append(element("strong", "Save Output · relative to ComfyUI output"), session.output,
    element("strong", "Save Disk · browser download name"), session.disk, session.dimensions);
  const status = element("div", null, "pix-xy-fn-status");
  status.id = `${id}-status`; status.setAttribute("role", "status"); status.setAttribute("aria-live", "polite");
  session.status = status;
  build.append(destination, status);
  const footer = element("footer");
  const apply = button("Apply", () => applyDraft(session));
  apply.className = "pix-xy-fn-primary"; apply.disabled = true; session.apply = apply;
  footer.append(element("span", "Only Apply changes the node.", "pix-xy-fn-muted"), button("Cancel", () => closeFilenameBuilder(node)), apply);
  popup.append(heading, tabs, build, reference, footer);
  document.body.append(popup);
  const signal = session.listeners.signal;
  popup.addEventListener("pointerdown", stopPropagation);
  popup.addEventListener("keydown", (event) => {
    event.stopPropagation();
    if (event.key !== "Tab") return;
    const controls = [...popup.querySelectorAll("button, input, textarea, select, summary, [tabindex]")]
      .filter((control) => !control.disabled && control.tabIndex >= 0 && control.getClientRects().length);
    const first = controls[0];
    const last = controls[controls.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault(); last?.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault(); first?.focus();
    }
  });
  popup.addEventListener("wheel", (event) => {
    event.stopPropagation();
    const scroll = event.target.closest(".pix-xy-fn-scroll");
    if (!scroll || (event.deltaY < 0 && scroll.scrollTop <= 0) || (event.deltaY > 0 && scroll.scrollTop + scroll.clientHeight >= scroll.scrollHeight - 1)) event.preventDefault();
  }, { passive: false });
  document.addEventListener("pointerdown", (event) => {
    if (!popup.contains(event.target) && !anchor.contains(event.target)) closeFilenameBuilder(node);
  }, { capture: true, signal });
  document.addEventListener("wheel", (event) => {
    if (!popup.contains(event.target)) closeFilenameBuilder(node);
  }, { capture: true, passive: true, signal });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") { event.preventDefault(); event.stopPropagation(); closeFilenameBuilder(node); }
  }, { capture: true, signal });
  window.addEventListener("resize", () => place(session), { signal });
  selectTab(0); refreshCatalog(session); schedulePreview(session);
  pattern.focus({ preventScroll: true }); pattern.setSelectionRange(...session.caret);
}

function place(session) {
  if (!session.anchor.isConnected) { closeFilenameBuilder(session.node); return; }
  const pop = session.popup;
  placeZoomedPopup(pop, session.anchor, { baseMaxWidthPx: 660, anchorWidthIsMin: false });
  pop.style.maxHeight = `${Math.max(1, window.innerHeight - 16)}px`;
  const top = parseFloat(pop.style.top) || 8;
  pop.style.top = `${Math.max(8, Math.min(top, window.innerHeight - pop.offsetHeight - 8))}px`;
}
function refreshCatalog(session) {
  session.context = getFilenameContext(session.node, session.pattern.value);
  const { nodeSelect } = session.picker;
  const previous = nodeSelect.value;
  nodeSelect.replaceChildren();
  const names = new Map();
  for (const entry of session.context.entries) names.set(`${entry.nodeId}\0${entry.name}`, entry);
  for (const [key, entry] of names) {
    const option = element("option", `${entry.name} · #${entry.nodeId}`); option.value = key; nodeSelect.append(option);
  }
  if ([...nodeSelect.options].some((option) => option.value === previous)) nodeSelect.value = previous;
  nodeSelect.disabled = !names.size;
  fillWidgets(session);
}
function fillWidgets(session) {
  const { nodeSelect, widgetSelect } = session.picker;
  const previous = widgetSelect.value;
  widgetSelect.replaceChildren();
  session.context.entries.forEach((entry, index) => {
    if (`${entry.nodeId}\0${entry.name}` !== nodeSelect.value) return;
    const option = element("option", `${entry.widgetName} · ${entry.source}${entry.disabledReason ? ` — ${entry.disabledReason}` : ""}`);
    option.value = String(index); option.disabled = !!entry.disabledReason; widgetSelect.append(option);
  });
  if ([...widgetSelect.options].some((option) => option.value === previous && !option.disabled)) widgetSelect.value = previous;
  else widgetSelect.selectedIndex = [...widgetSelect.options].findIndex((option) => !option.disabled);
  widgetSelect.disabled = ![...widgetSelect.options].some((option) => !option.disabled);
  showWidget(session);
}
function showWidget(session) {
  const { widgetSelect, value, insertNode } = session.picker;
  const entry = session.context.entries[Number(widgetSelect.value)];
  value.style.whiteSpace = "pre-wrap";
  const selected = widgetSelect.value !== "" && entry;
  insertNode.disabled = !selected || !!entry.disabledReason;
  const unavailable = session.context.entries
    .filter((item) => `${item.nodeId}\0${item.name}` === session.picker.nodeSelect.value && item.disabledReason)
    .map((item) => `${item.widgetName} (${item.source}): ${item.disabledReason}`);
  value.textContent = [
    selected ? `${entry.token} · ${entry.source}: ${entry.disabledReason || String(entry.value)}`
      : "No available scalar widgets for this node.",
    ...unavailable,
  ].join("\n");
}
function schedulePreview(session) {
  clearTimeout(session.timer); session.request?.abort(); session.revision++;
  session.validated = null; session.apply.disabled = true;
  refreshCatalog(session);
  session.output.textContent = "Waiting for server validation…";
  session.disk.textContent = "Waiting for server validation…";
  session.dimensions.textContent = "";
  const errors = session.context.errors || [];
  session.pattern.setAttribute("aria-invalid", String(errors.length > 0));
  session.status.textContent = [...errors, ...(session.context.warnings || [])].join("\n") || "Checking with the saving server…";
  if (errors.length) return;
  session.timer = setTimeout(() => preview(session, session.revision), 250);
}
async function preview(session, revision) {
  const request = new AbortController(); session.request = request;
  const pattern = session.pattern.value;
  const context = getFilenameContext(session.node, pattern);
  if (context.errors.length) { schedulePreview(session); return; }
  const saveMaxSize = readState(session.node).saveMaxSize;
  const last = session.node._pixXyLastGrid;
  try {
    const data = await requestFilenamePlan(session.node, pattern, request.signal);
    if (active !== session || revision !== session.revision) return;
    if (!data || !Array.isArray(data.errors) || !Array.isArray(data.warnings) || typeof data.prefix !== "string") {
      throw new Error("The server returned an invalid filename preview. Update Pixaroma and restart ComfyUI.");
    }
    const errors = data.errors;
    session.pattern.setAttribute("aria-invalid", String(errors.length > 0));
    session.status.textContent = [...data.warnings, ...errors].join("\n") || "Pattern is valid. Dates and time above are resolved by the saving server.";
    session.output.textContent = errors.length ? "Correct the pattern to see its destination."
      : data.filename ? `${data.subfolder ? `${data.subfolder}/` : ""}${data.filename}` : `Pending grid dimensions · prefix: ${data.prefix}`;
    session.disk.textContent = errors.length ? "Correct the pattern to see its download name."
      : data.disk_filename || "Pending grid dimensions";
    session.dimensions.textContent = `${data.width != null && data.height != null ? `Exported grid: ${data.width} × ${data.height}` : "Exported grid size: unknown until a grid is available"}. ${data.counter != null ? `Counter ${data.counter} is not reserved.` : "Numbering is automatic; preview does not reserve a counter."} Dates use the server clock at preview/save time.`;
    session.validated = !errors.length ? { pattern, resolvedPrefix: context.resolvedPrefix, revision, saveMaxSize, last } : null;
    session.apply.disabled = !session.validated;
    place(session);
  } catch (error) {
    if (error.name === "AbortError" || active !== session || revision !== session.revision) return;
    session.validated = null; session.apply.disabled = true;
    session.status.textContent = error.message || "Cannot reach the saving server. Check the connection and retry.";
    session.output.textContent = "Preview unavailable"; session.disk.textContent = "Preview unavailable";
  }
}
function applyDraft(session) {
  const validated = session.validated;
  const context = getFilenameContext(session.node, session.pattern.value);
  if (!validated || validated.pattern !== session.pattern.value || validated.revision !== session.revision || context.errors.length || context.resolvedPrefix !== validated.resolvedPrefix || validated.saveMaxSize !== readState(session.node).saveMaxSize || validated.last !== session.node._pixXyLastGrid) {
    schedulePreview(session); return;
  }
  const node = session.node;
  const widget = node.widgets?.find((item) => item?.name === "filename_prefix");
  if (!widget) { session.status.textContent = "The filename_prefix widget is no longer available. Close this builder and reload the node."; session.apply.disabled = true; return; }
  if (widget.value !== session.pattern.value) {
    const previous = widget.value;
    node.graph?.beforeChange?.();
    widget.value = session.pattern.value;
    widget.callback?.call(widget, widget.value, app.canvas, node, undefined, undefined);
    node.onWidgetChanged?.(widget.name, widget.value, previous, widget);
    node.graph?.afterChange?.();
    node.setDirtyCanvas?.(true, true);
    app.canvas?.setDirty?.(true, true);
  }
  closeFilenameBuilder(node);
}

function referenceHTML() {
  return `<h3>Filename reference</h3><p>A prefix is a filename stem, not a complete filename. Folders are relative to ComfyUI’s output directory. Save Disk downloads to your browser’s chosen location; it does not create those output folders.</p>
  <details open><summary>Dates and time · case matters</summary><table><thead><tr><th>Field</th><th>Codes inside %date:…%</th></tr></thead><tbody><tr><td>Year</td><td>yy · yyyy</td></tr><tr><td>Month</td><td>M · MM</td></tr><tr><td>Day</td><td>d · dd</td></tr><tr><td>24-hour hour</td><td>h · hh (H · HH aliases)</td></tr><tr><td>Minute</td><td>m · mm</td></tr><tr><td>Second</td><td>s · ss</td></tr></tbody></table><p><code>MM</code> means month; <code>mm</code> means minute. Use <code>%date:yyyy-MM-dd%</code>, not strftime syntax. Native variables also work: <code>%year% %month% %day% %hour% %minute% %second%</code>. Values come from the server clock when previewing or saving, not your browser clock.</p></details>
  <details><summary>Folders, Unicode, cleanup and limits</summary><p>Use <code>plots/%date:yyyy/MM/dd%/grid</code> for nested folders. Spaces and Unicode names are allowed. Use relative paths, not absolute paths, parent traversal (<code>..</code>), home expansion (<code>~</code>), or environment variables.</p><p>The server cleans unsafe filename characters, adjusts reserved names and enforces input and path-component length limits. Cleanup or shortening is reported in the preview; invalid patterns must be corrected before Apply. The server’s preview is authoritative for your installation and filesystem.</p></details>
  <details><summary>Grid dimensions, numbering and cells</summary><p><code>%width%</code> and <code>%height%</code> mean the exported grid size, including labels and the selected Save size—not individual cell dimensions. Dimensions remain pending before a grid exists. Changing Save size can change these values.</p><p>Save Output automatically adds its next matching counter and PNG extension, for example <code>_00012_.png</code>. Preview never reserves a counter. Save Disk uses the expanded final stem plus <code>_grid.png</code>; your browser controls duplicate-download naming.</p><p>Save Cells creates an automatically numbered <code>&lt;stem&gt;_00012_cells/</code> folder with coordinate filenames such as <code>&lt;stem&gt;_x0_y0.png</code>. Coordinates and counters are automatic, not filename variables. Copy and Open do not use this pattern.</p></details>
  <details><summary>Node references and execution context</summary><p>Insert <code>%Node name.widget_name%</code> using the real node/widget picker. “Node name for S&amp;R” takes priority over the node title. Give duplicate aliases unique names. Dots and percent signs in reference names cannot be represented safely.</p><p>Only available scalar widget values (text, numbers, booleans or null) can resolve. Linked, non-scalar, ambiguous and swept fields are disabled with a reason. Arbitrary node outputs are not widget values.</p><p>Before a run the picker uses live widgets. After a grid exists it prefers the captured execution prompt: a randomized seed in the live graph may no longer be the seed that made the grid. Swept fields cannot truthfully describe the whole grid as one scalar. Missing execution values do not silently fall back to a different live value. Opening or canceling never changes workflow metadata; saved metadata remains execution-time metadata.</p></details>
  <details><summary>Unsupported syntax</summary><p><code>%counter%</code>, <code>%input%</code>, <code>%batch_num%</code>, arbitrary output references, dynamic-prompt expressions, shell variables and strftime codes are not supported. Unknown node/widget references and unsupported variables need correction. Keep raw tokens in the pattern; the saver resolves them when needed.</p></details>`;
}
function injectStyles() {
  if (document.getElementById("pix-xy-filename-css")) return;
  const style = element("style"); style.id = "pix-xy-filename-css";
  style.textContent = `
.pix-xy-filename-launch{font:inherit;color:inherit;background:#292929;border:1px solid #555;border-radius:.35em;padding:.35em .7em;cursor:pointer}
.pix-xy-fn{position:fixed;z-index:100001;display:flex;flex-direction:column;width:55em;max-height:90vh;box-sizing:border-box;background:#222;color:#eeeae7;border:1px solid #555;border-top:2px solid var(--pix-acc,#f66744);border-radius:.65em;box-shadow:0 .8em 3em #0009;font-family:system-ui,sans-serif;line-height:1.5;overflow:hidden;color-scheme:dark}
.pix-xy-fn *{box-sizing:border-box}.pix-xy-fn [hidden]{display:none!important}.pix-xy-fn header,.pix-xy-fn footer{display:flex;align-items:center;gap:.7em;padding:.9em 1.2em;flex-shrink:0}.pix-xy-fn header{justify-content:space-between}.pix-xy-fn h2{font-size:1.3em;margin:0}.pix-xy-fn h3{font-size:1em;margin:.2em 0 .6em}.pix-xy-fn p{margin:.5em 0}.pix-xy-fn button,.pix-xy-fn input,.pix-xy-fn textarea,.pix-xy-fn select{font:inherit;color:inherit;border:1px solid #555;border-radius:.35em;padding:.45em .65em;min-height:2.3em;background:#292929;max-width:100%}.pix-xy-fn button{cursor:pointer}.pix-xy-fn button:hover{border-color:var(--pix-acc)}.pix-xy-fn button:disabled{opacity:.5;cursor:not-allowed}.pix-xy-fn :focus-visible,.pix-xy-filename-launch:focus-visible{outline:2px solid var(--pix-acc,#f66744);outline-offset:2px}.pix-xy-fn textarea,.pix-xy-fn select{background:#1b1b1b;width:100%;min-width:0}.pix-xy-fn textarea{font-family:ui-monospace,monospace;resize:vertical;max-height:12em}.pix-xy-fn-tabs{display:flex;gap:1.2em;padding:0 1.2em;border-bottom:1px solid #444;flex-shrink:0}.pix-xy-fn-tabs button{background:none;border:0;border-bottom:2px solid transparent;border-radius:0}.pix-xy-fn-tabs [aria-selected=true]{border-bottom-color:var(--pix-acc);color:var(--pix-acc)}.pix-xy-fn-scroll{padding:1em 1.2em;overflow:auto;overscroll-behavior:contain;min-height:0;flex:1}.pix-xy-fn-field{display:flex;flex-direction:column;gap:.35em;min-width:0;flex:1}.pix-xy-fn-row{display:flex;gap:.5em;flex-wrap:wrap;align-items:end;margin:.7em 0}.pix-xy-fn-muted{color:#beb8b3;font-size:.92em}.pix-xy-fn details{margin:.75em 0;padding:.6em .8em;background:#262626;border:1px solid #444;border-radius:.4em}.pix-xy-fn summary{cursor:pointer;font-weight:600}.pix-xy-fn-destination{border:1px solid #555;border-left:3px solid var(--pix-acc);border-radius:.4em;padding:.8em;margin-top:1em}.pix-xy-fn-destination strong{display:block;font-size:.92em;margin-top:.5em}.pix-xy-fn code{font-family:ui-monospace,monospace;overflow-wrap:anywhere}.pix-xy-fn-destination code{display:block;margin:.3em 0}.pix-xy-fn-status{white-space:pre-wrap;overflow-wrap:anywhere;margin:.7em 0;color:#edc78a}.pix-xy-fn footer{border-top:1px solid #444}.pix-xy-fn footer>span{margin-right:auto}.pix-xy-fn .pix-xy-fn-primary{background:var(--pix-acc);color:#171717;border-color:var(--pix-acc);font-weight:700}.pix-xy-fn table{border-collapse:collapse;width:100%;text-align:left}.pix-xy-fn td,.pix-xy-fn th{padding:.35em;border-bottom:1px solid #444;vertical-align:top}
`;
  document.head.append(style);
}
