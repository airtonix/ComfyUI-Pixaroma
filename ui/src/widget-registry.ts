import type { ComponentType } from "react";

export type WidgetDefinition = {
  id: string;
  label: string;
  icon?: string;
  order?: number;
  component: ComponentType<any>;
};

type FeatureModule = { widget?: WidgetDefinition };

const featureModules = import.meta.glob<FeatureModule>("./features/*/index.tsx", {
  eager: true,
});

export const widgets = Object.values(featureModules)
  .map((module) => module.widget)
  .filter((widget): widget is WidgetDefinition => Boolean(widget))
  .sort((a, b) => (a.order ?? 0) - (b.order ?? 0) || a.label.localeCompare(b.label));

export function findWidget(id: string) {
  return widgets.find((widget) => widget.id === id);
}
