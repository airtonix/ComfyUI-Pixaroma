import { StrictMode, type ReactNode } from "react";
import { createRoot, type Root } from "react-dom/client";
import { helpEntries, mergeRuntimeHelp, type HelpEntry } from "@/features/help/data";
import { createPromptLibraryAdapter, type PromptLibraryAdapterOptions } from "@/features/prompt-library/prompt-library.adapter";
import type { PromptLibrary as PromptLibraryData } from "@/features/prompt-library/prompt-library.types";
import { WidgetBrowser } from "@/widget-browser";
import styles from "@/styles.css?inline";

export type MountOptions = {
  initialId?: string;
  onClose?: () => void;
};

export type PromptLibraryMountOptions = Omit<PromptLibraryAdapterOptions, "baseUrl"> & {
  baseUrl: string;
  initialLibrary?: PromptLibraryData;
};

export type PixaromaReactUi = {
  mountHelpBrowser(container: HTMLElement, entries: HelpEntry[], options?: MountOptions): () => void;
  mountPromptLibrary(container: HTMLElement, options: PromptLibraryMountOptions): () => void;
};

type MountCleanup = () => void;
type MountRecord = {
  root: Root;
  cleanup: MountCleanup;
  dispose: MountCleanup;
  mounted: boolean;
};

const roots = new WeakMap<HTMLElement, MountRecord>();
const styleId = "pixaroma-react-styles";

function injectStyles() {
  if (document.getElementById(styleId)) return;
  const style = document.createElement("style");
  style.id = styleId;
  style.textContent = styles;
  document.head.appendChild(style);
}

export function mountReact(container: HTMLElement, content: ReactNode, cleanup: MountCleanup = () => {}): MountCleanup {
  roots.get(container)?.dispose();
  injectStyles();
  container.classList.add("pixaroma-react-root");

  const record: MountRecord = {
    root: createRoot(container),
    cleanup,
    dispose: () => {},
    mounted: true,
  };
  record.dispose = () => {
    if (!record.mounted) return;
    record.mounted = false;
    try {
      record.root.unmount();
    } finally {
      try {
        record.cleanup();
      } finally {
        if (roots.get(container) === record) {
          roots.delete(container);
          container.classList.remove("pixaroma-react-root");
        }
      }
    }
  };
  roots.set(container, record);
  record.root.render(<StrictMode><div className="pixaroma-react">{content}</div></StrictMode>);

  return record.dispose;
}

export const pixaromaReactUi: PixaromaReactUi = {
  mountHelpBrowser(container, entries, options = {}) {
    const content = mergeRuntimeHelp(helpEntries, entries);
    return mountReact(
      container,
      <WidgetBrowser defaultWidget="help" widgetProps={{ help: { entries: content, initialId: options.initialId, onClose: options.onClose } }}>
        <WidgetBrowser.Sidebar>
          <WidgetBrowser.SidebarItem widget="help" />
        </WidgetBrowser.Sidebar>
        <WidgetBrowser.Content>
          <WidgetBrowser.Sandbox widget="help" />
        </WidgetBrowser.Content>
      </WidgetBrowser>,
    );
  },
  mountPromptLibrary(container, options) {
    const { initialLibrary, ...adapterOptions } = options;
    const adapter = createPromptLibraryAdapter(adapterOptions);
    return mountReact(
      container,
      <WidgetBrowser defaultWidget="prompt-library" widgetProps={{ "prompt-library": { adapter, initialLibrary } }}>
        <WidgetBrowser.Sidebar>
          <WidgetBrowser.SidebarItem widget="prompt-library" />
        </WidgetBrowser.Sidebar>
        <WidgetBrowser.Content>
          <WidgetBrowser.Sandbox widget="prompt-library" />
        </WidgetBrowser.Content>
      </WidgetBrowser>,
    );
  },
};

if (typeof window !== "undefined") {
  window.PixaromaReactUi = pixaromaReactUi;
}
