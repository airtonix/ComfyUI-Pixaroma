import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { helpEntries } from "@/features/help/data";
import { createPromptLibraryAdapter } from "@/features/prompt-library";
import { WidgetBrowser } from "@/widget-browser";
import "@/mount";
import "@/styles.css";

const root = document.getElementById("root");
if (root) {
  createRoot(root).render(
    <StrictMode>
      <div className="pixaroma-react">
        <WidgetBrowser
          defaultWidget="help"
          widgetProps={{
            help: { entries: helpEntries },
            "prompt-library": { adapter: createPromptLibraryAdapter() },
          }}
        >
          <WidgetBrowser.Sidebar>
            <WidgetBrowser.SidebarItem widget="help" />
            <WidgetBrowser.SidebarItem widget="prompt-library" />
          </WidgetBrowser.Sidebar>
          <WidgetBrowser.Content>
            <WidgetBrowser.Sandbox widget="help" />
            <WidgetBrowser.Sandbox widget="prompt-library" />
          </WidgetBrowser.Content>
        </WidgetBrowser>
      </div>
    </StrictMode>,
  );
}
