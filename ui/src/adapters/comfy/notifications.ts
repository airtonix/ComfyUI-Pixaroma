export type NotificationType = "info" | "warning" | "error";

type Toast = {
  add?: (notification: { severity: "info" | "warn" | "error"; summary: string; detail: string; life: number }) => void;
};

type ComfyNotifications = {
  extensionManager?: { toast?: Toast };
};

// @ts-expect-error ComfyUI provides this module at runtime.
import { app } from "/scripts/app.js";

export function notify(message: string, type: NotificationType = "info"): void {
  const toast = (app as ComfyNotifications).extensionManager?.toast;
  if (typeof toast?.add !== "function") return;
  toast.add({ severity: type === "warning" ? "warn" : type, summary: "Pixaroma", detail: message, life: 2600 });
}
