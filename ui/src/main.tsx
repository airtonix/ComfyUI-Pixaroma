import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { helpEntries } from "@/features/help/data";
import { WidgetBrowser } from "@/widget-browser";
import "@/styles.css";

const root = document.getElementById("root");
if (root) {
  createRoot(root).render(
    <StrictMode>
      <div className="pixaroma-react">
        <WidgetBrowser defaultWidget="help" widgetProps={{ help: { entries: helpEntries } }}>
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
}
