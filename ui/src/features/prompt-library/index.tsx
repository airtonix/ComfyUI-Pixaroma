import { lazy } from "react";

const PromptLibrary = lazy(() => import("./PromptLibrary").then((module) => ({ default: module.PromptLibrary })));

export const widget = {
  id: "prompt-library",
  label: "Prompt Library",
  icon: "▤",
  order: 20,
  requires: ["prompt-library-api"],
  loadingFallback: <div className="px-widget-loading">Loading Prompt Library…</div>,
  component: PromptLibrary,
};

export { createPromptLibraryAdapter } from "./prompt-library.adapter";
export type { PromptLibraryAdapter, PromptLibraryAdapterOptions } from "./prompt-library.adapter";
export type { PromptLibraryProps } from "./PromptLibrary";
