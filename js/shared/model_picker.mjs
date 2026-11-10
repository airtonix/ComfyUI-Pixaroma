// Shared folder-aware model picker. Navigation normalizes separators; selection keeps original filenames.

let _pop = null;
let _cleanup = null;
let _anchor = null;

function injectCSS() {
  if (document.getElementById("pix-model-picker-css")) return;
  const s = document.createElement("style");
  s.id = "pix-model-picker-css";
  s.textContent = `
    .pix-model-picker { position:fixed; z-index:10020; width:300px; max-width:92vw; background:#242424;
      border:1px solid var(--acc,#e8a23a); border-radius:9px; box-shadow:0 14px 44px rgba(0,0,0,0.6);
      overflow:hidden; font:12px 'Segoe UI',system-ui,sans-serif; color:#ddd;
      display:flex; flex-direction:column; max-height:60vh; }
    .pix-model-picker :where(button) { background:none; border:0; width:100%; text-align:left; }
    .pix-model-picker button:focus-visible { outline:2px solid var(--acc,#e8a23a); outline-offset:-2px; }
    .pix-model-picker-crumb button { width:auto; padding:0; font:inherit; }
    .pix-model-picker-srch { margin:8px; display:flex; align-items:center; gap:7px; background:#161616;
      border:1px solid var(--acc,#e8a23a); border-radius:6px; padding:6px 9px; }
    .pix-model-picker-srch input { flex:1; min-width:0; background:transparent; border:0; outline:none;
      color:#fff; font:12px monospace; }
    .pix-model-picker-srch .ic { color:#888; flex:none; }
    .pix-model-picker-crumb { display:flex; flex-wrap:wrap; align-items:center; gap:2px; padding:3px 12px 6px;
      font:10.5px 'Segoe UI',sans-serif; color:#8a8a8a; border-bottom:1px solid #1c1c1c; }
    .pix-model-picker-crumb .c { cursor:pointer; color:#a8a8a8; }
    .pix-model-picker-crumb .c:hover { color:var(--acc,#e8a23a); }
    .pix-model-picker-crumb .c.here { color:#e0e0e0; cursor:default; }
    .pix-model-picker-crumb .s { color:#555; }
    .pix-model-picker-list { overflow-y:auto; overflow-x:hidden; padding:2px 0 6px; }
    .pix-model-picker-list::-webkit-scrollbar { width:7px; }
    .pix-model-picker-list::-webkit-scrollbar-thumb { background:#555; border-radius:3px; }
    .pix-model-picker-grp { font-size:9.5px; text-transform:uppercase; letter-spacing:.6px; color:#7a7a7a;
      padding:6px 12px 3px; }
    .pix-model-picker-opt { padding:6px 12px; font:11.5px monospace; color:#bbb; cursor:pointer;
      white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
    .pix-model-picker-opt:hover { background:#2f2f2f; color:#fff; }
    .pix-model-picker-opt.cur { color:var(--acc,#e8a23a); }
    .pix-model-picker-opt .sub { color:#666; }
    .pix-model-picker-folder { display:flex; align-items:center; gap:8px; padding:7px 12px; cursor:pointer;
      font:11.5px 'Segoe UI',sans-serif; color:#d0d0d0; }
    .pix-model-picker-folder:hover { background:#2f2f2f; color:#fff; }
    .pix-model-picker-folder .fi { color:#e0b24a; flex:none; }
    .pix-model-picker-folder .nm { flex:1; min-width:0; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
    .pix-model-picker-folder .ct { color:#777; font:10px monospace; } .pix-model-picker-folder .ch { color:#777; }
    /* Keep the way out prominent when a workflow opens inside a folder. */
    .pix-model-picker-back { display:flex; align-items:center; gap:6px; padding:8px 12px;
      cursor:pointer; color:var(--acc,#e8a23a); font:600 12.5px 'Segoe UI',sans-serif;
      border-bottom:1px solid #333; }
    .pix-model-picker-back:hover { background:#2f2f2f; }
    .pix-model-picker-back .ar { font-size:14px; line-height:1; }
    .pix-model-picker-empty { padding:14px 12px; color:#777; text-align:center; }
  `;
  document.head.appendChild(s);
}

export function closeModelPicker(anchorEl) {
  if (anchorEl && anchorEl !== _anchor) return;
  if (_cleanup) { try { _cleanup(); } catch {} }
  _cleanup = null;
  if (_pop) { try { _pop.remove(); } catch {} }
  _pop = null;
  _anchor = null;
}

// Normalize navigation only: ComfyUI expects the original filename on selection.
function group(name) {
  const norm = name.replace(/\\/g, "/");
  const i = norm.lastIndexOf("/");
  return i < 0 ? "" : norm.slice(0, i);
}
function base(name) {
  const i = name.replace(/\\/g, "/").lastIndexOf("/");
  return i < 0 ? name : name.slice(i + 1);
}

export async function openModelPicker(anchorEl, opts) {
  closeModelPicker();
  injectCSS();
  const { current = "", accent = "#e8a23a", loadNames,
    searchPlaceholder = "Search models…", emptyMessage = "No models found.", onPick,
    renderFile, className = "" } = opts || {};

  const pop = document.createElement("div");
  pop.className = "pix-model-picker" + (className ? " " + className : "");
  pop.style.borderColor = accent;
  pop.style.setProperty("--acc", accent);  // the back row reads this

  const srch = document.createElement("div");
  srch.className = "pix-model-picker-srch";
  srch.style.borderColor = accent;
  const ic = document.createElement("span"); ic.className = "ic"; ic.textContent = "⌕";
  const input = document.createElement("input");
  input.type = "text";
  input.placeholder = searchPlaceholder;
  input.setAttribute("aria-label", searchPlaceholder);
  input.addEventListener("keydown", (e) => e.stopPropagation()); // don't trigger canvas shortcuts
  srch.append(ic, input);

  const crumb = document.createElement("div");
  crumb.className = "pix-model-picker-crumb";
  const list = document.createElement("div");
  list.className = "pix-model-picker-list";
  pop.append(srch, crumb, list);
  document.body.appendChild(pop);
  _pop = pop;
  _anchor = anchorEl;

  const r = anchorEl.getBoundingClientRect();
  pop.style.width = Math.min(Math.max(r.width, 240), 360) + "px";
  pop.style.left = Math.max(8, Math.min(r.left, window.innerWidth - pop.offsetWidth - 8)) + "px";

  // Placed below the anchor by default; flipped above if there isn't room. Recomputed
  // once the list has content (its real height is known then).
  function place() {
    const h = pop.offsetHeight;
    if (r.bottom + 4 + h <= window.innerHeight - 8) pop.style.top = (r.bottom + 4) + "px";
    else pop.style.top = Math.max(8, r.top - 4 - h) + "px";
  }
  place();

  const onDown = (e) => { if (!pop.contains(e.target)) closeModelPicker(anchorEl); };
  const onWheel = (e) => { if (!pop.contains(e.target)) closeModelPicker(anchorEl); };
  const onKey = (e) => { if (e.key === "Escape") { e.stopPropagation(); closeModelPicker(anchorEl); } };
  const listenerTimer = setTimeout(() => {
    if (_pop !== pop) return;
    document.addEventListener("pointerdown", onDown, true);
    document.addEventListener("wheel", onWheel, true);
    document.addEventListener("keydown", onKey, true);
    input.focus();
  }, 0);
  _cleanup = () => {
    clearTimeout(listenerTimer);
    document.removeEventListener("pointerdown", onDown, true);
    document.removeEventListener("wheel", onWheel, true);
    document.removeEventListener("keydown", onKey, true);
  };

  list.textContent = "Loading…";
  let all;
  try {
    // Each open asks the caller for a fresh library listing.
    all = await loadNames();
  } catch {
    if (_pop !== pop || !pop.isConnected) return;
    list.textContent = "Could not load models. Close and reopen to try again.";
    place();
    return;
  }
  if (_pop !== pop || !pop.isConnected) return;

  let curPath = current ? group(current) : "";
  // Shared workflows may name folders that do not exist on this installation.
  if (curPath) {
    const prefix = curPath + "/";
    if (!all.some((n) => n.replace(/\\/g, "/").startsWith(prefix))) curPath = "";
  }

  function levelItems() {
    const prefix = curPath ? curPath + "/" : "";
    const folders = new Map();
    const files = [];
    for (const name of all) {
      const norm = name.replace(/\\/g, "/");
      if (curPath && !norm.startsWith(prefix)) continue;
      const rest = norm.slice(prefix.length);
      const slash = rest.indexOf("/");
      if (slash < 0) files.push(name);
      else { const f = rest.slice(0, slash); folders.set(f, (folders.get(f) || 0) + 1); }
    }
    return { folders: [...folders.entries()].sort((a, b) => a[0].localeCompare(b[0])), files };
  }

  function fileRow(name, showSub) {
    const opt = document.createElement("button");
    opt.type = "button";
    opt.className = "pix-model-picker-opt" + (name === current ? " cur" : "");
    opt.title = name;
    if (renderFile) {
      opt.appendChild(renderFile(name, { label: base(name), folder: showSub ? group(name) : "" }));
    } else {
      opt.appendChild(document.createTextNode(base(name)));
      if (showSub) {
        const g = group(name);
        if (g) { const s = document.createElement("span"); s.className = "sub"; s.textContent = " · " + g; opt.appendChild(s); }
      }
    }
    opt.addEventListener("click", () => { closeModelPicker(anchorEl); onPick?.(name); });
    return opt;
  }

  function folderRow(f, count) {
    const row = document.createElement("button");
    row.type = "button";
    row.className = "pix-model-picker-folder";
    const fi = document.createElement("span"); fi.className = "fi"; fi.textContent = "📁";
    const nm = document.createElement("span"); nm.className = "nm"; nm.textContent = f;
    const ct = document.createElement("span"); ct.className = "ct"; ct.textContent = String(count);
    const ch = document.createElement("span"); ch.className = "ch"; ch.textContent = "›";
    row.append(fi, nm, ct, ch);
    row.addEventListener("click", () => { curPath = curPath ? curPath + "/" + f : f; input.value = ""; renderList(); });
    return row;
  }

  function crumbLink(label, path, here) {
    const c = document.createElement("button");
    c.type = "button";
    c.disabled = here;
    c.className = "c" + (here ? " here" : "");
    c.textContent = label;
    if (!here) c.addEventListener("click", () => { curPath = path; input.value = ""; renderList(); });
    return c;
  }

  function renderCrumb() {
    crumb.innerHTML = "";
    if (input.value.trim()) { crumb.style.display = "none"; return; }
    crumb.style.display = "";
    const parts = curPath ? curPath.split("/") : [];
    crumb.appendChild(crumbLink("All", "", parts.length === 0));
    let acc = "";
    parts.forEach((p, i) => {
      const s = document.createElement("span"); s.className = "s"; s.textContent = "›"; crumb.appendChild(s);
      acc = acc ? acc + "/" + p : p;
      crumb.appendChild(crumbLink(p, acc, i === parts.length - 1));
    });
  }

  function emptyRow(text) {
    const e = document.createElement("div");
    e.className = "pix-model-picker-empty";
    e.textContent = text;
    list.appendChild(e);
  }

  function renderList() {
    renderListContents();
    place();
  }

  function renderListContents() {
    renderCrumb();
    list.innerHTML = "";
    const q = input.value.trim().toLowerCase();
    if (q) {
      const matched = all.filter((n) => n.toLowerCase().includes(q));
      if (!matched.length) { emptyRow(all.length ? "No match." : emptyMessage); return; }
      for (const name of matched) list.appendChild(fileRow(name, true));
      return;
    }
    const { folders, files } = levelItems();
    if (curPath) {
      const back = document.createElement("button");
      back.type = "button";
      back.className = "pix-model-picker-back";
      const ar = document.createElement("span");
      ar.className = "ar";
      ar.textContent = "‹";
      back.appendChild(ar);
      const lb = document.createElement("span");
      lb.textContent = "Back";
      back.appendChild(lb);
      back.addEventListener("click", () => {
        const i = curPath.lastIndexOf("/");
        curPath = i < 0 ? "" : curPath.slice(0, i);
        renderList();
      });
      list.appendChild(back);
    }
    for (const [f, count] of folders) list.appendChild(folderRow(f, count));
    for (const name of files) list.appendChild(fileRow(name, false));
    if (!folders.length && !files.length) emptyRow(all.length ? "Empty folder." : emptyMessage);
  }
  renderList();
  input.addEventListener("input", renderList);
}
