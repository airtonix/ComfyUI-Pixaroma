import { fetchJson } from "./api";

// @ts-expect-error ComfyUI provides this module at runtime.
import { app } from "/scripts/app.js";

type ComfySettings = {
  getSettingValue?: (name: string) => unknown;
};

type ComfyApp = {
  ui?: { settings?: ComfySettings };
  loadGraphData?: (workflow: unknown, ...args: unknown[]) => Promise<void> | void;
};

const comfyApp = app as ComfyApp;

export function getSetting<T>(name: string, fallback: T): T {
  const value = comfyApp.ui?.settings?.getSettingValue?.(name);
  return value === undefined ? fallback : (value as T);
}

export async function openWorkflow(path: string): Promise<void> {
  if (typeof comfyApp.loadGraphData !== "function") {
    throw new Error("This ComfyUI build cannot open workflows.");
  }
  const workflow = await fetchJson<unknown>(path);
  await comfyApp.loadGraphData(workflow);
}
