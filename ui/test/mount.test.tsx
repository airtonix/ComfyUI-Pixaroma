import { act } from "react";
import { createElement } from "react";
import { vi } from "vitest";

vi.mock("@/widget-browser", () => ({ WidgetBrowser: () => null }));
vi.mock("@/features/help/data", () => ({ helpEntries: [], mergeRuntimeHelp: vi.fn() }));

const { mountReact } = await import("@/mount");

describe("mountReact", () => {
  it("mounts content, injects styles, and cleans up the container", async () => {
    const container = document.createElement("div");
    document.body.appendChild(container);
    const cleanup = vi.fn();

    let dispose!: () => void;
    await act(async () => {
      dispose = mountReact(container, createElement("span", null, "Hello"), cleanup);
    });

    expect(container.querySelector(".pixaroma-react")?.textContent).toBe("Hello");
    expect(container.classList.contains("pixaroma-react-root")).toBe(true);
    expect(document.querySelectorAll("#pixaroma-react-styles")).toHaveLength(1);

    await act(async () => dispose());

    expect(container.innerHTML).toBe("");
    expect(container.classList.contains("pixaroma-react-root")).toBe(false);
    expect(cleanup).toHaveBeenCalledOnce();
  });

  it("disposes the existing mount before replacing it", async () => {
    const container = document.createElement("div");
    document.body.appendChild(container);
    const firstCleanup = vi.fn();
    const secondCleanup = vi.fn();

    await act(async () => {
      mountReact(container, createElement("span", null, "First"), firstCleanup);
      mountReact(container, createElement("span", null, "Second"), secondCleanup);
    });

    expect(firstCleanup).toHaveBeenCalledOnce();
    expect(container.textContent).toContain("Second");

    await act(async () => {
      mountReact(container, createElement("span", null, "Third"), vi.fn())();
    });
    expect(secondCleanup).toHaveBeenCalledOnce();
  });
});
