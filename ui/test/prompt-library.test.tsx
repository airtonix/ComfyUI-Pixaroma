import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { PromptLibrary } from "@/features/prompt-library/PromptLibrary";
import type { PromptLibraryAdapter } from "@/features/prompt-library/prompt-library.adapter";
import type { PromptLibrary as PromptLibraryData } from "@/features/prompt-library/prompt-library.types";

const library: PromptLibraryData = {
  version: 1,
  prompts: [
    { id: "styles/cinematic", sourcePath: "styles/cinematic.md", name: "Film look", tags: ["warm", "cinematic"], body: "A film look", category: "styles", folders: ["styles"], filename: "cinematic.md", kind: "text" },
    { id: "styles/soft", sourcePath: "styles/soft.md", name: "Soft light", tags: ["soft"], body: "Soft light", category: "styles", folders: ["styles"], filename: "soft.md", kind: "text" },
    { id: "subjects", sourcePath: "subjects.md", name: "Subjects", tags: ["people"], body: "People", category: "", folders: [], filename: "subjects.md", kind: "list" },
  ],
};

function adapter(overrides: Partial<PromptLibraryAdapter> = {}): PromptLibraryAdapter {
  return { load: vi.fn(async () => ({ library, errors: [] })), refresh: vi.fn(async () => ({ library, errors: [] })), save: vi.fn(async () => library.prompts[0]), delete: vi.fn(async () => {}), ...overrides };
}

describe("PromptLibrary", () => {
  it("shows loading and retries a failed load", async () => {
    const load = vi.fn().mockRejectedValueOnce(new Error("offline")).mockResolvedValue({ library, errors: [] });
    render(<PromptLibrary adapter={adapter({ load })} />);
    expect(screen.getByRole("status").textContent).toContain("Loading prompt library");
    expect((await screen.findByRole("alert")).textContent).toContain("offline");
    fireEvent.click(screen.getByRole("button", { name: "Retry" }));
    expect(await screen.findByRole("button", { name: /Film look/ })).toBeTruthy();
    expect(load).toHaveBeenCalledTimes(2);
  });

  it("searches, filters by tag, selects a prompt, and refreshes", async () => {
    const refresh = vi.fn(async () => ({ library, errors: [] }));
    render(<PromptLibrary adapter={adapter({ refresh })} />);
    expect(await screen.findByRole("button", { name: /Film look/ })).toBeTruthy();
    fireEvent.change(screen.getByRole("searchbox", { name: "Search prompts" }), { target: { value: "soft" } });
    expect(screen.getByRole("button", { name: /Soft light/ })).toBeTruthy();
    expect(screen.queryByRole("button", { name: /Film look/ })).toBeNull();
    fireEvent.click(screen.getByRole("button", { name: "Clear search" }));
    fireEvent.click(screen.getByRole("button", { name: "warm" }));
    expect(screen.getByRole("button", { name: /Film look/ })).toBeTruthy();
    expect(screen.queryByRole("button", { name: /Soft light/ })).toBeNull();
    fireEvent.click(screen.getByRole("button", { name: /Film look/ }));
    expect(screen.getByRole("button", { name: /Film look/ }).getAttribute("aria-selected")).toBe("true");
    expect(screen.getByText("A film look")).toBeTruthy();
    fireEvent.click(screen.getByRole("button", { name: "Refresh prompt library" }));
    await waitFor(() => expect(refresh).toHaveBeenCalledOnce());
    expect(screen.getByRole("button", { name: /Film look/ }).getAttribute("aria-selected")).toBe("true");
    expect(screen.queryByRole("button", { name: /Soft light/ })).toBeNull();
  });

  it("shows the source path and message for malformed records while keeping valid prompts", async () => {
    const errors = [{ sourcePath: "styles/broken.md", message: "name must be a string" }];
    render(<PromptLibrary adapter={adapter({ load: vi.fn(async () => ({ library, errors })) })} />);

    expect(await screen.findByRole("button", { name: /Film look/ })).toBeTruthy();
    const alert = screen.getByRole("alert");
    expect(alert.textContent).toContain("styles/broken.md");
    expect(alert.textContent).toContain("name must be a string");
  });

  it("closes after discarding a dirty draft", async () => {
    const onClose = vi.fn();
    render(<PromptLibrary adapter={adapter()} onClose={onClose} />);
    fireEvent.click(await screen.findByRole("button", { name: /Film look/ }));
    fireEvent.change(screen.getByRole("textbox", { name: "Prompt body" }), { target: { value: "Changed" } });
    fireEvent.click(screen.getByRole("button", { name: "Close" }));
    fireEvent.click(screen.getByRole("button", { name: "Discard changes" }));
    expect(onClose).toHaveBeenCalledOnce();
  });

  it("keeps a dirty draft when refresh removes its server record", async () => {
    const refresh = vi.fn(async () => ({ library: { version: 1 as const, prompts: [] }, errors: [] }));
    render(<PromptLibrary adapter={adapter({ refresh })} />);
    fireEvent.click(await screen.findByRole("button", { name: /Film look/ }));
    fireEvent.change(screen.getByRole("textbox", { name: "Prompt body" }), { target: { value: "Keep this draft" } });
    fireEvent.click(screen.getByRole("button", { name: "Refresh" }));
    await waitFor(() => expect(refresh).toHaveBeenCalledOnce());
    expect(screen.getByRole("textbox", { name: "Prompt body" })).toHaveValue("Keep this draft");
    expect(screen.getByRole("alert").textContent).toContain("Your draft is preserved");
  });

  it("rejects malformed imported prompt JSON without changing the editor", async () => {
    render(<PromptLibrary adapter={adapter()} />);
    fireEvent.click(await screen.findByRole("button", { name: /Film look/ }));
    fireEvent.click(screen.getByRole("button", { name: "Import" }));
    fireEvent.change(screen.getByRole("textbox", { name: "Import prompt JSON" }), { target: { value: "{}" } });
    fireEvent.click(screen.getByRole("button", { name: "Load draft" }));
    expect(screen.getByRole("dialog")).toBeTruthy();
    expect(screen.getByRole("alert").textContent).toContain("invalid prompt data");
    expect(screen.getByRole("textbox", { name: "Prompt body" })).toHaveValue("A film look");
  });

  it("exposes nested folders and empty state", async () => {
    render(<PromptLibrary adapter={adapter({ load: vi.fn(async () => ({ library: { version: 1, prompts: [] }, errors: [] })) })} />);
    expect(await screen.findByText("No prompts found.")).toBeTruthy();
    render(<PromptLibrary adapter={adapter()} />);
    expect((await screen.findByRole("button", { name: "styles" })).getAttribute("aria-expanded")).toBe("true");
    fireEvent.click(screen.getByRole("button", { name: "styles" }));
    expect(screen.getByRole("button", { name: "styles" }).getAttribute("aria-expanded")).toBe("false");
  });
});
