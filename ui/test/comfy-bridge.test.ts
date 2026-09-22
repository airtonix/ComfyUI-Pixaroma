import { describe, expect, it, vi } from "vitest";

const getSettingValue = vi.fn(() => "dark");
const toastAdd = vi.fn();
const comfyApp: { ui: { settings: { getSettingValue: typeof getSettingValue } }; extensionManager: { toast: { add: typeof toastAdd } }; loadGraphData?: (workflow: unknown) => void } = {
  ui: { settings: { getSettingValue } },
  extensionManager: { toast: { add: toastAdd } },
};

vi.mock("/scripts/app.js", () => ({ app: comfyApp }), { virtual: true });
vi.mock("@/adapters/comfy/assets", () => ({ pixApiUrl: (route: string) => route }));

const { getSetting, openWorkflow } = await import("@/adapters/comfy/app");
const { notify } = await import("@/adapters/comfy/notifications");

describe("ComfyUI bridge", () => {
  it("reads settings and preserves fallback values", () => {
    expect(getSetting("theme", "light")).toBe("dark");
    getSettingValue.mockReturnValueOnce(undefined);
    expect(getSetting("missing", "light")).toBe("light");
  });

  it("maps notification severity to ComfyUI toast fields", () => {
    notify("Needs attention", "warning");

    expect(toastAdd).toHaveBeenCalledWith({ severity: "warn", summary: "Pixaroma", detail: "Needs attention", life: 2600 });
  });

  it("loads a workflow through the ComfyUI app bridge", async () => {
    const loadGraphData = vi.fn();
    comfyApp.loadGraphData = loadGraphData;
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue(new Response('{"nodes":[]}', { status: 200 })));

    await openWorkflow("/workflow.json");

    expect(loadGraphData).toHaveBeenCalledWith({ nodes: [] });
  });
});
