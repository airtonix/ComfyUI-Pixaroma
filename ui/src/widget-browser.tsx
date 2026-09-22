import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { findWidget, widgets, type WidgetDefinition } from "@/widget-registry";

type WidgetBrowserContextValue = {
  activeWidget: WidgetDefinition;
  setActiveWidget: (id: string) => void;
  widgetProps: Record<string, Record<string, unknown>>;
};

const WidgetBrowserContext = createContext<WidgetBrowserContextValue | null>(null);

function useWidgetBrowser() {
  const context = useContext(WidgetBrowserContext);
  if (!context) throw new Error("WidgetBrowser components must be used inside WidgetBrowser");
  return context;
}

type WidgetBrowserProps = {
  defaultWidget?: string;
  widgetProps?: Record<string, Record<string, unknown>>;
  children: ReactNode;
};

function WidgetBrowser({ defaultWidget, widgetProps = {}, children }: WidgetBrowserProps) {
  const initialWidget = findWidget(defaultWidget ?? "") ?? widgets[0];
  if (!initialWidget) return <div className="px-widget-empty">No Pixaroma widgets are registered.</div>;

  return <WidgetBrowserState initialWidget={initialWidget} widgetProps={widgetProps}>{children}</WidgetBrowserState>;
}

function WidgetBrowserState({ initialWidget, widgetProps, children }: { initialWidget: WidgetDefinition; widgetProps: Record<string, Record<string, unknown>>; children: ReactNode }) {
  const [activeId, setActiveId] = useState(initialWidget.id);
  const activeWidget = findWidget(activeId) ?? initialWidget;
  const value = useMemo(() => ({ activeWidget, setActiveWidget: setActiveId, widgetProps }), [activeWidget, widgetProps]);

  return <WidgetBrowserContext.Provider value={value}><div className="px-widget-browser">{children}</div></WidgetBrowserContext.Provider>;
}

function Sidebar({ children }: { children: ReactNode }) {
  return <aside className="px-widget-sidebar" aria-label="Pixaroma widgets"><div className="px-widget-sidebar-title">Pixaroma</div><nav>{children}</nav></aside>;
}

function SidebarItem({ widget }: { widget: string }) {
  const { activeWidget, setActiveWidget } = useWidgetBrowser();
  const definition = findWidget(widget);
  if (!definition) return null;

  return <Button variant="ghost" className={`px-widget-sidebar-item ${activeWidget.id === widget ? "is-active" : ""}`} aria-current={activeWidget.id === widget ? "page" : undefined} onClick={() => setActiveWidget(widget)}><span className="px-widget-sidebar-icon">{definition.icon ?? "•"}</span><span>{definition.label}</span></Button>;
}

function Content({ children }: { children: ReactNode }) {
  return <section className="px-widget-content">{children}</section>;
}

function Sandbox({ widget }: { widget: string }) {
  const { activeWidget, widgetProps } = useWidgetBrowser();
  if (activeWidget.id !== widget) return null;
  const definition = findWidget(widget);
  if (!definition) return <div className="px-widget-empty">Unknown widget: {widget}</div>;
  const Component = definition.component;
  return <Component {...(widgetProps[widget] ?? {})} />;
}

WidgetBrowser.Sidebar = Sidebar;
WidgetBrowser.SidebarItem = SidebarItem;
WidgetBrowser.Content = Content;
WidgetBrowser.Sandbox = Sandbox;

export { WidgetBrowser };
