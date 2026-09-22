import { fetchJson, ComfyApiError } from "./api";
import { getSetting, openWorkflow } from "./app";
import { pixApiUrl, pixAsset } from "./assets";
import { notify, type NotificationType } from "./notifications";

export type ComfyBridge = {
  fetchJson<T>(route: string, init?: RequestInit): Promise<T>;
  notify(message: string, type?: NotificationType): void;
  getSetting<T>(name: string, fallback: T): T;
  openWorkflow(path: string): Promise<void>;
};

export const comfyBridge: ComfyBridge = {
  fetchJson,
  notify,
  getSetting,
  openWorkflow,
};

export { ComfyApiError, fetchJson, getSetting, notify, openWorkflow, pixApiUrl, pixAsset };
export type { NotificationType } from "./notifications";
export {
  cleanupNodeWidget,
  controlledNodeWidgetActions,
  createNodeWidgetBridge,
  hasNodeWidgetRoot,
  mountNodeWidget,
} from "./node-widget";
export { createNodeWidgetHarness } from "./node-widget-harness";
export type {
  NodeWidgetActions,
  NodeWidgetBridge,
  NodeWidgetCleanup,
  NodeWidgetComponent,
  NodeWidgetHandle,
  NodeWidgetHost,
  NodeWidgetModel,
  NodeWidgetMount,
  NodeWidgetProps,
  NodeWidgetRenderer,
  NodeWidgetSerialization,
} from "./node-widget";
export type { NodeWidgetHarness } from "./node-widget-harness";
