import { describe, expect, it, vi } from "vitest";

vi.mock("@/adapters/comfy/assets", () => ({ pixApiUrl: (route: string) => route }));

import cinematic from "./fixtures/prompt-library/styles/cinematic.md?raw";
import subjects from "./fixtures/prompt-library/lists/subjects.md?raw";
import { createPromptLibraryAdapter } from "@/features/prompt-library/prompt-library.adapter";
import { PROMPT_LIBRARY_UPDATED_EVENT } from "@/features/prompt-library/prompt-library-bridge";
import { parsePromptMarkdown } from "@/features/prompt-library/prompt-library-markdown";

const library = {
  version: 1 as const,
  prompts: [
    parsePromptMarkdown("styles/cinematic.md", cinematic),
    parsePromptMarkdown("lists/subjects.md", subjects),
  ],
};

function response(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), { status, headers: { "content-type": "application/json" } });
}

describe("prompt library adapter", () => {
  it("loads normalized recursive Markdown records", async () => {
    const fetchImpl = vi.fn().mockResolvedValue(response(library));
    const adapter = createPromptLibraryAdapter({ fetchImpl });

    await expect(adapter.load()).resolves.toEqual({ library, errors: [] });
    expect(fetchImpl).toHaveBeenCalledWith("/pixaroma/api/prompt/library/markdown", { signal: undefined });
  });

  it("refreshes from the server-authoritative Markdown endpoint and notifies selectors", async () => {
    const fetchImpl = vi.fn().mockResolvedValue(response(library));
    const controller = new AbortController();
    const adapter = createPromptLibraryAdapter({ fetchImpl });
    const notify = vi.fn();
    window.addEventListener(PROMPT_LIBRARY_UPDATED_EVENT, notify);

    await adapter.refresh(controller.signal);

    expect(fetchImpl).toHaveBeenCalledWith("/pixaroma/api/prompt/library/markdown/refresh", {
      method: "POST",
      signal: controller.signal,
    });
    expect(notify).toHaveBeenCalledOnce();
    expect(notify.mock.calls[0][0]).toMatchObject({ detail: { library } });
    window.removeEventListener(PROMPT_LIBRARY_UPDATED_EVENT, notify);
  });

  it("does not notify selectors from an older request after a newer request completes", async () => {
    const newerLibrary = {
      version: 1 as const,
      prompts: [{ ...library.prompts[0], id: "styles/newer", sourcePath: "styles/newer.md", filename: "newer.md" }],
    };
    const resolvers: Array<(value: Response) => void> = [];
    const fetchImpl = vi.fn(() => new Promise<Response>(resolve => resolvers.push(resolve)));
    const adapter = createPromptLibraryAdapter({ fetchImpl });
    const notify = vi.fn();
    window.addEventListener(PROMPT_LIBRARY_UPDATED_EVENT, notify);

    const loadPromise = adapter.load();
    const refreshPromise = adapter.refresh();
    resolvers[1](response(newerLibrary));
    await refreshPromise;
    resolvers[0](response(library));
    await loadPromise;

    expect(notify).toHaveBeenCalledOnce();
    expect(notify.mock.calls[0][0]).toMatchObject({ detail: { library: newerLibrary } });
    window.removeEventListener(PROMPT_LIBRARY_UPDATED_EVENT, notify);
  });

  it("normalizes structured API errors", async () => {
    const fetchImpl = vi.fn().mockResolvedValue(response({ error: "Library unavailable", code: "library_unavailable" }, 503));
    const adapter = createPromptLibraryAdapter({ fetchImpl });

    await expect(adapter.load()).rejects.toMatchObject({
      name: "PromptLibraryApiError",
      message: "Library unavailable",
      route: "/pixaroma/api/prompt/library/markdown",
      status: 503,
      code: "library_unavailable",
    });
  });

  it("reports non-JSON failures without falling back to the legacy JSON shape", async () => {
    const fetchImpl = vi.fn().mockResolvedValue(new Response("upstream unavailable", { status: 502 }));
    const adapter = createPromptLibraryAdapter({ fetchImpl });

    await expect(adapter.load()).rejects.toMatchObject({
      name: "PromptLibraryApiError",
      message: "Prompt library request failed with a non-JSON response (502)",
      code: "invalid_json",
    });
  });

  it("rejects legacy JSON responses instead of converting them", async () => {
    const fetchImpl = vi.fn().mockResolvedValue(response({ categories: [], listCats: [], catModes: {}, tags: {} }));
    const adapter = createPromptLibraryAdapter({ fetchImpl });

    await expect(adapter.load()).rejects.toMatchObject({
      name: "PromptLibraryApiError",
      code: "invalid_response",
      message: "Invalid prompt library response: version must be 1",
    });
  });

  it("encodes the complete prompt ID at the request boundary", async () => {
    const prompt = library.prompts[0];
    const fetchImpl = vi.fn().mockResolvedValue(response({ prompt }));
    const adapter = createPromptLibraryAdapter({ fetchImpl });

    await expect(adapter.get("styles/cinematic")).resolves.toEqual(prompt);
    expect(fetchImpl).toHaveBeenCalledWith("/pixaroma/api/prompt/library/markdown/styles%2Fcinematic", { signal: undefined });
  });

  it("keeps valid records and reports malformed records by source path", async () => {
    const fetchImpl = vi.fn().mockResolvedValue(response({
      version: 1,
      prompts: [library.prompts[0], { ...library.prompts[1], sourcePath: "../escape.md", id: "../escape", body: 42 }],
    }));
    const adapter = createPromptLibraryAdapter({ fetchImpl });

    await expect(adapter.load()).resolves.toEqual({
      library: { version: 1, prompts: [library.prompts[0]] },
      errors: [{ sourcePath: "../escape.md", message: "sourcePath: invalid relative path \"../escape.md\"" }],
    });
  });

  it("applies parser normalization and rejects duplicate IDs", async () => {
    const record = library.prompts[0];
    const duplicate = { ...record, sourcePath: "STYLES/CINEMATIC.md", id: "STYLES/CINEMATIC" };
    const fetchImpl = vi.fn().mockResolvedValue(response({
      version: 1,
      prompts: [
        { ...record, name: "  Cinematic  ", tags: [" Warm ", "warm", "", "Film"], body: undefined },
        { ...library.prompts[1], name: "  Subjects  ", tags: [" People ", "people"], body: undefined },
        duplicate,
      ],
    }));
    const adapter = createPromptLibraryAdapter({ fetchImpl });

    await expect(adapter.load()).resolves.toEqual({
      library: {
        version: 1,
        prompts: [{ ...library.prompts[1], name: "Subjects", tags: ["People"], body: "" }],
      },
      errors: [
        { sourcePath: record.sourcePath, message: `duplicate id "styles/cinematic" conflicts with STYLES/CINEMATIC.md` },
        { sourcePath: "STYLES/CINEMATIC.md", message: `duplicate id "styles/cinematic" conflicts with ${record.sourcePath}` },
      ],
    });
  });
});
