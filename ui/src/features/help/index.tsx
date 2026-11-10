import { lazy } from "react";

const HelpBrowser = lazy(() =>
  import("./HelpBrowser").then((module) => ({ default: module.HelpBrowser })),
);

export const widget = {
  id: "help",
  label: "Help",
  icon: "?",
  order: 10,
  requires: ["runtime-props"],
  loadingFallback: <div className="px-widget-loading">Loading Help…</div>,
  component: HelpBrowser,
};
