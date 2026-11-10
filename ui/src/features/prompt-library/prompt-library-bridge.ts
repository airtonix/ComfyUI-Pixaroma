import type { PromptLibrary } from "./prompt-library.types";

export const PROMPT_LIBRARY_UPDATED_EVENT = "pixaroma:prompt-library:updated";

type PromptLibraryUpdatedDetail = {
  library: PromptLibrary;
};

export function notifyPromptLibrary(library: PromptLibrary): void {
  if (typeof window === "undefined") return;
  window.dispatchEvent(
    new CustomEvent<PromptLibraryUpdatedDetail>(PROMPT_LIBRARY_UPDATED_EVENT, {
      detail: { library },
    }),
  );
}
