import { describe, expect, it } from "vitest";
import { findWidget, loadWidgets } from "@/widget-registry";

describe("widget registry", () => {
  it("discovers feature widgets and keeps lookup stable", async () => {
    const widgets = await loadWidgets();

    expect(widgets.map((widget) => widget.id)).toContain("help");
    expect(findWidget("help")?.label).toBe("Help");
    expect(findWidget("missing")).toBeUndefined();
  });

  it("shares the in-flight discovery promise", () => {
    expect(loadWidgets()).toBe(loadWidgets());
  });
});
