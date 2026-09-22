import { act } from "react";
import { createElement } from "react";
import { createRoot } from "react-dom/client";
import { afterEach, describe, expect, it, vi } from "vitest";

vi.mock("@/components/ui/button", () => ({ Button: (props: Record<string, unknown>) => createElement("button", props) }));
vi.mock("@/components/ui/badge", () => ({ Badge: (props: Record<string, unknown>) => createElement("span", props) }));
vi.mock("@/components/ui/input", () => ({ Input: (props: Record<string, unknown>) => createElement("input", props) }));
vi.mock("@/components/ui/card", () => {
  const Card = (props: Record<string, unknown>) => createElement("div", props);
  return { Card, CardContent: Card, CardDescription: Card, CardHeader: Card, CardTitle: Card };
});
vi.mock("lucide-react", () => ({ ArrowLeft: () => null, ArrowRight: () => null, Search: () => null, X: () => null }));

import { HelpBrowser } from "@/features/help/HelpBrowser";
import type { HelpEntry } from "@/features/help/data";

const entries: HelpEntry[] = [
  { id: "one", title: "First node", tagline: "A first article", category: "Nodes", tags: ["alpha"], kind: "node", sections: [] },
  { id: "two", title: "Second guide", tagline: "A guide article", category: "Guides", tags: ["beta"], kind: "guide", sections: [] },
];

function render(element: React.ReactNode) {
  const container = document.createElement("div");
  document.body.appendChild(container);
  const root = createRoot(container);
  act(() => root.render(element));
  return { container, root };
}

afterEach(() => document.body.replaceChildren());

describe("HelpBrowser", () => {
  it("supports search, article history, and keyboard-accessible controls", () => {
    const onClose = vi.fn();
    const { container, root } = render(createElement(HelpBrowser, { entries, onClose }));

    const search = container.querySelector<HTMLInputElement>("[aria-label='Search help']")!;
    act(() => {
      const setValue = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "value")!.set!;
      setValue.call(search, "second");
      search.dispatchEvent(new Event("input", { bubbles: true }));
    });
    expect(container.querySelector(".px-result-count")?.textContent).toBe("1 article");

    const home = [...container.querySelectorAll<HTMLButtonElement>("button")].find((button) => button.textContent === "Home")!;
    act(() => home.click());
    const cards = [...container.querySelectorAll<HTMLElement>(".px-entry-card")];
    act(() => cards[0].click());
    const browse = [...container.querySelectorAll<HTMLButtonElement>("button")].find((button) => button.textContent?.includes("Back to browse"))!;
    act(() => browse.click());
    const secondCard = [...container.querySelectorAll<HTMLElement>(".px-entry-card")].find((card) => card.textContent?.includes("Second guide"))!;
    act(() => secondCard.click());
    expect(container.querySelector("h1")?.textContent).toBe("Second guide");

    act(() => (container.querySelector("button[aria-label='Back']") as HTMLButtonElement).click());
    expect(container.querySelector("h1")?.textContent).toBe("First node");

    act(() => (container.querySelector("button[aria-label='Close']") as HTMLButtonElement).click());
    expect(onClose).toHaveBeenCalledOnce();

    act(() => root.unmount());
  });

  it("clears search before closing when Escape is pressed", () => {
    const onClose = vi.fn();
    const { container, root } = render(createElement(HelpBrowser, { entries, onClose }));
    const search = container.querySelector<HTMLInputElement>("[aria-label='Search help']")!;
    const setValue = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "value")!.set!;

    act(() => {
      setValue.call(search, "second");
      search.dispatchEvent(new Event("input", { bubbles: true }));
    });
    expect(search.value).toBe("second");

    act(() => search.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape", bubbles: true })));
    expect(search.value).toBe("");
    expect(onClose).not.toHaveBeenCalled();

    act(() => search.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape", bubbles: true })));
    expect(onClose).toHaveBeenCalledOnce();

    act(() => root.unmount());
  });
});
