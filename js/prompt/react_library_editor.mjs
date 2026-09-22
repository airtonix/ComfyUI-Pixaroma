import "../react/pixaroma-ui.js";
import { installGraphUndoGuard } from "../shared/graph_undo_guard.mjs";
const LIBRARY_URL = "/pixaroma/api/prompt/library/markdown";
let active = null;

function reactApi() {
  return globalThis.window?.PixaromaReactUi;
}

function closeActive() {
  if (!active) return;
  const current = active;
  active = null;
  current.undoOff?.();
  current.unmount?.();
  current.container.remove();
}

export function openReactLibraryEditor(node, options = {}) {
  closeActive();
  const api = reactApi();
  if (!api?.mountPromptLibrary) {
    throw new Error("Pixaroma prompt library React mount is unavailable");
  }

  const container = document.createElement("div");
  container.className = "pix-prled-react-host";
  document.body.appendChild(container);
  const state = { node, container, unmount: null, undoOff: null };
  const close = () => {
    if (active !== state) return;
    closeActive();
    options.onClose?.();
  };
  active = state;
  state.undoOff = installGraphUndoGuard(() => container.isConnected);
  try {
    state.unmount = api.mountPromptLibrary(container, {
      baseUrl: LIBRARY_URL,
      accent: options.accent,
      prefill: options.prefill,
      onInsert: options.onInsert,
      onClose: close,
      onDirtyChange: options.onDirtyChange,
    });
    return;
  } catch (error) {
    closeActive();
    throw error;
  }
}

export function closeReactLibraryEditorFor(node) {
  if (active?.node === node) closeActive();
}

export function closeReactLibraryEditor() {
  closeActive();
}
