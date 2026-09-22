import { StrictMode } from "react";
import { createRoot, type Root } from "react-dom/client";
import { helpEntries, mergeRuntimeHelp, type HelpEntry } from "@/features/help/data";
import { WidgetBrowser } from "@/widget-browser";
import styles from "@/styles.css?inline";

export type MountOptions = {
  initialId?: string;
  onClose?: () => void;
};

export type PixaromaReactUi = {
  mountHelpBrowser(container: HTMLElement, entries: HelpEntry[], options?: MountOptions): () => void;
};

const roots = new WeakMap<HTMLElement, Root>();
const styleId = "pixaroma-react-styles";

function injectStyles() {
  if (document.getElementById(styleId)) return;
  const style = document.createElement("style");
  style.id = styleId;
  style.textContent = styles;
  document.head.appendChild(style);
}

export const pixaromaReactUi: PixaromaReactUi = {
  mountHelpBrowser(container, entries, options = {}) {
    roots.get(container)?.unmount();
    injectStyles();
    container.classList.add("pixaroma-react-root");
    const root = createRoot(container);
    roots.set(container, root);
    const content = mergeRuntimeHelp(helpEntries, entries);
    root.render(
      <StrictMode>
        <div className="pixaroma-react">
          <WidgetBrowser defaultWidget="help" widgetProps={{ help: { entries: content, initialId: options.initialId, onClose: options.onClose } }}>
            <WidgetBrowser.Sidebar>
              <WidgetBrowser.SidebarItem widget="help" />
            </WidgetBrowser.Sidebar>
            <WidgetBrowser.Content>
              <WidgetBrowser.Sandbox widget="help" />
            </WidgetBrowser.Content>
          </WidgetBrowser>
        </div>
      </StrictMode>,
    );
    return () => {
      root.unmount();
      container.classList.remove("pixaroma-react-root");
      roots.delete(container);
    };
  },
};

if (typeof window !== "undefined") {
  window.PixaromaReactUi = pixaromaReactUi;
}
