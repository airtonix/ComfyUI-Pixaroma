// The folder-aware picker edits the native combo so workflows and API prompts
// use ComfyUI's normal input serialization, without a second state store.
import { app } from "/scripts/app.js";
import { pixApiUrl } from "../shared/api_url.mjs";
import { openModelPicker, closeModelPicker } from "../shared/model_picker.mjs";
import {
  hideJsonWidget, applyAdaptiveCanvasOnly, installCanvasZoomPassthrough,
  notifyGraphChanged, registerNodeHelp,
} from "../shared/index.mjs";
import { accentOf, installNodeAccent, registerNodeAccent } from "../shared/node_settings.mjs";

const CLASS = "PixaromaDiffusionModelLoader";
const HEIGHT = 48;

app.registerExtension({
  name: "Pixaroma.DiffusionModelLoader",
  beforeRegisterNodeDef(nodeType, nodeData) {
    if (nodeData.name !== CLASS) return;

    const created = nodeType.prototype.onNodeCreated;
    nodeType.prototype.onNodeCreated = function () {
      const result = created?.apply(this, arguments);
      setupPicker(this);
      return result;
    };

    const configured = nodeType.prototype.onConfigure;
    nodeType.prototype.onConfigure = function () {
      const result = configured?.apply(this, arguments);
      queueMicrotask(() => refreshSelection(this));
      return result;
    };

    const connectionsChanged = nodeType.prototype.onConnectionsChange;
    nodeType.prototype.onConnectionsChange = function () {
      const result = connectionsChanged?.apply(this, arguments);
      refreshSelection(this);
      return result;
    };

    const refreshed = nodeType.prototype.refreshComboInNode;
    nodeType.prototype.refreshComboInNode = function () {
      const result = refreshed?.apply(this, arguments);
      refreshSelection(this);
      return result;
    };

    const removed = nodeType.prototype.onRemoved;
    nodeType.prototype.onRemoved = function () {
      closeModelPicker(this._pixDiffusionButton);
      this._pixDiffusionButton = null;
      return removed?.apply(this, arguments);
    };
  },
});

function setupPicker(node) {
  injectCSS();
  const native = hideJsonWidget(node.widgets, "unet_name");
  if (!native) return;

  const button = document.createElement("button");
  button.type = "button";
  button.className = "pix-diffusion-picker";
  button.setAttribute("aria-label", "Choose diffusion model");
  const label = document.createElement("span");
  label.className = "pix-diffusion-label";
  label.textContent = "Diffusion model";
  const name = document.createElement("span");
  name.className = "pix-diffusion-name";
  button.append(label, name);
  node._pixDiffusionButton = button;
  installNodeAccent(node, button);
  installCanvasZoomPassthrough(button);

  button.addEventListener("click", () => {
    openModelPicker(button, {
      current: native.value || "",
      accent: accentOf(node),
      searchPlaceholder: "Search diffusion models…",
      emptyMessage: "No diffusion models found. Add files to models/diffusion_models or configure extra model paths.",
      loadNames: async () => {
        const names = await listModels();
        native.options.values = names;
        return names;
      },
      onPick: (value) => {
        if (native.value === value) return;
        native.value = value;
        native.callback?.(value);
        refreshSelection(node);
        node.setDirtyCanvas?.(true, true);
        notifyGraphChanged();
      },
    });
  });

  const callback = native.callback;
  native.callback = function () {
    const result = callback?.apply(this, arguments);
    refreshSelection(node);
    return result;
  };

  const widget = node.addDOMWidget("diffusion_model_picker", "pixaroma_diffusion_model_picker", button, {
    getValue: () => null,
    setValue: () => {},
    getMinHeight: () => HEIGHT,
    getMaxHeight: () => HEIGHT,
    serialize: false,
    margin: 4,
  });
  widget.computeLayoutSize = () => ({ minHeight: HEIGHT, minWidth: 240 });
  applyAdaptiveCanvasOnly(widget);
  refreshSelection(node);
}

function refreshSelection(node) {
  const button = node._pixDiffusionButton;
  if (!button) return;
  const native = node.widgets?.find((widget) => widget.name === "unet_name");
  const linked = node.inputs?.some((input) => input.name === "unet_name" && input.link != null);
  const value = typeof native?.value === "string" ? native.value : "";
  button.disabled = !!linked;
  button.querySelector(".pix-diffusion-name").textContent = linked
    ? "Provided by connected input"
    : value.replace(/\\/g, "/").split("/").pop() || "Choose a model…";
  button.title = linked ? "The connected input supplies the model filename." : value || "Choose a diffusion model";
}

async function listModels() {
  const response = await fetch(pixApiUrl("/pixaroma/api/diffusion-model/list"), { cache: "no-store" });
  if (!response.ok) throw new Error("Could not list diffusion models. Try opening the picker again.");
  const result = await response.json();
  if (result.error || !Array.isArray(result.models)) {
    throw new Error("Could not scan diffusion model folders. Check that the model folders are accessible.");
  }
  return result.models;
}

function injectCSS() {
  if (document.getElementById("pix-diffusion-picker-css")) return;
  const style = document.createElement("style");
  style.id = "pix-diffusion-picker-css";
  style.textContent = `
    .pix-diffusion-picker { width:100%; height:${HEIGHT}px; box-sizing:border-box;
      display:flex; flex-direction:column; justify-content:center; gap:3px; padding:6px 12px;
      text-align:left; color:#ddd; background:#242424; border:1px solid #555;
      border-radius:6px; cursor:pointer; font:12px system-ui,sans-serif; }
    .pix-diffusion-picker:hover, .pix-diffusion-picker:focus-visible {
      border-color:var(--pix-acc,#f66744); outline:2px solid var(--pix-acc,#f66744); outline-offset:1px; }
    .pix-diffusion-picker:disabled { opacity:.6; cursor:default; }
    .pix-diffusion-label { font-size:10px; color:#aaa; }
    .pix-diffusion-name { display:block; width:100%; overflow:hidden; text-overflow:ellipsis;
      white-space:nowrap; font-family:monospace; }
  `;
  document.head.appendChild(style);
}

registerNodeAccent(CLASS, { title: "Diffusion Model Loader" });
registerNodeHelp(CLASS, {
  title: "Diffusion Model Loader",
  tagline: "Find a diffusion model by folder or filename.",
  sections: [
    {
      heading: "Choose a model",
      body: "Click the model name to browse folders. Use Back or the breadcrumbs to move up. Search finds filenames and folder names across the whole library. The list refreshes whenever you open it.",
    },
    {
      heading: "Connect the model",
      body: "Connect MODEL to a sampler or LoRA loader. This node loads only the diffusion model: load your text encoder (CLIP) and VAE separately. Weight dtype uses the same settings as ComfyUI's Load Diffusion Model node; leave it at default unless your model needs a specific setting.",
    },
    {
      heading: "Model folders",
      body: "ComfyUI's registered diffusion_models folders supply the list, including legacy models/unet and extra_model_paths.yaml locations. Missing or incompatible files raise a loading error. GGUF requires its own loader.",
    },
  ],
});
