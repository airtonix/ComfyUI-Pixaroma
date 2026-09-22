import type { ComponentType, LazyExoticComponent, ReactNode } from "react";

export type WidgetProps = Record<string, unknown>;
export type WidgetComponent<Props extends WidgetProps = WidgetProps> =
  | ComponentType<Props>
  | LazyExoticComponent<ComponentType<Props>>;

export type WidgetDefinition<Props extends WidgetProps = WidgetProps> = {
  id: string;
  label: string;
  icon?: string;
  order?: number;
  component: WidgetComponent<Props>;
  requires: readonly string[];
  loadingFallback?: ReactNode;
  errorFallback?: ReactNode | ((error: Error) => ReactNode);
};

type FeatureModule<Props extends WidgetProps = WidgetProps> = {
  widget?: WidgetDefinition<Props>;
  cleanup?: () => void;
};
const featureModules = import.meta.glob<FeatureModule>("./features/*/index.tsx");
let loadedFeatures: FeatureModule[] = [];
let loadingFeatures: Promise<WidgetDefinition[]> | undefined;

export let widgets: WidgetDefinition[] = [];

export function loadWidgets() {
  if (!loadingFeatures) {
    loadingFeatures = Promise.all(Object.values(featureModules).map((load) => load())).then((features) => {
      loadedFeatures = features;
      widgets = features
        .map((module) => module.widget)
        .filter((widget): widget is WidgetDefinition => Boolean(widget))
        .sort((a, b) => (a.order ?? 0) - (b.order ?? 0) || a.label.localeCompare(b.label));
      return widgets;
    });
  }
  return loadingFeatures;
}

export function findWidget(id: string) {
  return widgets.find((widget) => widget.id === id);
}

export function cleanupWidgets() {
  for (const feature of loadedFeatures) feature.cleanup?.();
}
