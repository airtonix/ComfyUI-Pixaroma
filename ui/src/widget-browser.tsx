import { Component, createContext, Suspense, useContext, useEffect, useMemo, useState, type ErrorInfo, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { cleanupWidgets, findWidget, loadWidgets, widgets, type WidgetDefinition } from "@/widget-registry";

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
  const [loaded, setLoaded] = useState(widgets.length > 0);
  useEffect(() => {
    let mounted = true;
    loadWidgets().then(() => mounted && setLoaded(true));
    return () => {
      mounted = false;
      cleanupWidgets();
    };
  }, []);
  if (!loaded) return <div className="px-widget-loading">Loading widgets…</div>;

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

class WidgetErrorBoundary extends Component<{ fallback?: WidgetDefinition["errorFallback"]; children: ReactNode }, { error: Error | null }> {
  state = { error: null };

  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("Pixaroma widget failed to render", error, info.componentStack);
  }

  render() {
    if (!this.state.error) return this.props.children;
    const { fallback } = this.props;
    return typeof fallback === "function" ? fallback(this.state.error) : fallback ?? <div className="px-widget-error">Unable to load this widget.</div>;
  }
}

function Sandbox({ widget }: { widget: string }) {
  const { activeWidget, widgetProps } = useWidgetBrowser();
  if (activeWidget.id !== widget) return null;
  const definition = findWidget(widget);
  if (!definition) return <div className="px-widget-empty">Unknown widget: {widget}</div>;
  const Component = definition.component;
  return <WidgetErrorBoundary fallback={definition.errorFallback}><Suspense fallback={definition.loadingFallback ?? <div className="px-widget-loading">Loading widget…</div>}><Component {...(widgetProps[widget] ?? {})} /></Suspense></WidgetErrorBoundary>;
}

WidgetBrowser.Sidebar = Sidebar;
WidgetBrowser.SidebarItem = SidebarItem;
WidgetBrowser.Content = Content;
WidgetBrowser.Sandbox = Sandbox;

export { WidgetBrowser };
