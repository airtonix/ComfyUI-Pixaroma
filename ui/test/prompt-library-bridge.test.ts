import { describe, expect, it, vi } from "vitest";
import { notifyPromptLibrary, PROMPT_LIBRARY_UPDATED_EVENT } from "@/features/prompt-library/prompt-library-bridge";
import type { PromptLibrary } from "@/features/prompt-library/prompt-library.types";

const library: PromptLibrary = {
  version: 1,
  prompts: [
    {
      id: "styles/cinematic",
      sourcePath: "styles/cinematic.md",
      name: "Cinematic",
      tags: ["film"],
      body: "cinematic lighting",
      category: "styles",
      folders: ["styles"],
      filename: "cinematic.md",
      kind: "text",
      prefix: "#",
    },
  ],
};

describe("prompt library bridge", () => {
  it("notifies the selector compatibility boundary with the complete library", () => {
    const listener = vi.fn();
    window.addEventListener(PROMPT_LIBRARY_UPDATED_EVENT, listener);

    notifyPromptLibrary(library);

    expect(listener).toHaveBeenCalledOnce();
    expect(listener.mock.calls[0][0]).toMatchObject({
      type: PROMPT_LIBRARY_UPDATED_EVENT,
      detail: { library },
    });
    window.removeEventListener(PROMPT_LIBRARY_UPDATED_EVENT, listener);
  });
});
