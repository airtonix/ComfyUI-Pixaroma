// LoRA-specific rows reuse the shared picker's folder navigation and popup lifecycle.
import { openModelPicker } from "../shared/model_picker.mjs";
import { listLoras, thumbUrl } from "./api.mjs";

export function openLoraPicker(anchorEl, { current = "", accent, thumbs = true, onPick } = {}) {
  injectCSS();
  // Refresh saved previews on each open, including changes made in another node.
  const previewVersion = Date.now();
  return openModelPicker(anchorEl, {
    current, accent, onPick,
    className: "pix-lora-picker",
    loadNames: () => listLoras(true),
    searchPlaceholder: "Search LoRAs…",
    emptyMessage: "No LoRAs in models/loras.",
    renderFile: (name, details) => loraRow(name, details, thumbs, previewVersion),
  });
}

function loraRow(name, { label, folder }, thumbs, previewVersion) {
  const row = document.createElement("span");
  row.className = "pix-lora-picker-row";
  if (thumbs) {
    const preview = document.createElement("span");
    preview.className = "pix-lora-picker-preview";
    preview.textContent = "No preview";
    preview.setAttribute("aria-hidden", "true");
    const image = document.createElement("img");
    image.alt = "";
    image.loading = "lazy";
    image.decoding = "async";
    image.width = image.height = 48;
    image.addEventListener("error", () => image.remove(), { once: true });
    image.src = thumbUrl(name, previewVersion);
    preview.appendChild(image);
    row.appendChild(preview);
  }
  const text = document.createElement("span");
  text.className = "pix-lora-picker-text";
  const title = document.createElement("span");
  title.className = "pix-lora-picker-name";
  title.textContent = label;
  text.appendChild(title);
  if (folder) {
    const path = document.createElement("span");
    path.className = "pix-lora-picker-path";
    path.textContent = folder;
    text.appendChild(path);
  }
  row.appendChild(text);
  return row;
}

function injectCSS() {
  if (document.getElementById("pix-lora-picker-css")) return;
  const style = document.createElement("style");
  style.id = "pix-lora-picker-css";
  style.textContent = `
    .pix-lora-picker .pix-model-picker-opt { padding:6px 10px; }
    .pix-lora-picker-row { display:flex; align-items:center; gap:10px; min-height:32px; }
    .pix-lora-picker-preview { position:relative; display:flex; align-items:center; justify-content:center;
      flex:0 0 48px; width:48px; height:48px; overflow:hidden; border-radius:5px;
      background:#161616; color:#aaa; font:9px system-ui,sans-serif; }
    .pix-lora-picker-preview img { position:absolute; inset:0; width:100%; height:100%; object-fit:cover; }
    .pix-lora-picker-text { display:flex; flex-direction:column; gap:4px; min-width:0; text-align:left; }
    .pix-model-picker.pix-lora-picker { min-width:min(360px, 92vw); }
    .pix-lora-picker-name { overflow:hidden; text-overflow:ellipsis; white-space:nowrap; }
    .pix-lora-picker-path { overflow:hidden; text-overflow:ellipsis; white-space:nowrap; color:#aaa; font-size:10px; }
  `;
  document.head.appendChild(style);
}
