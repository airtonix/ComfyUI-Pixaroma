import { describe, expect, it } from "vitest";
import {
  buildPromptTree,
  clonePromptDraft,
  collectTags,
  filterPrompts,
  flattenPromptTree,
  normalizeCollapseKey,
  validatePromptDraft,
} from "@/features/prompt-library/prompt-library-view-model";
import type { PromptDraft, PromptRecord } from "@/features/prompt-library/prompt-library.types";

const prompts: PromptRecord[] = [
  { id: "zebra", sourcePath: "zebra.md", name: "Zebra", tags: ["Animals", "warm"], body: "A striped animal", category: "", folders: [], filename: "zebra.md", kind: "text" },
  { id: "Art/Portrait", sourcePath: "Art/Portrait.md", name: "Portrait", tags: ["Warm", "people"], body: "Soft light", category: "Art", folders: ["Art"], filename: "Portrait.md", kind: "text" },
  { id: "art/landscape", sourcePath: "art/landscape.md", name: "Landscape", tags: ["nature"], body: "Wide view", category: "art", folders: ["art"], filename: "landscape.md", kind: "list" },
  { id: "Art/Deep/Still", sourcePath: "Art/Deep/Still.md", name: "Still life", tags: ["Nature"], body: "Table", category: "Art", folders: ["Art", "Deep"], filename: "Still.md", kind: "text" },
];

const draft: PromptDraft = {
  id: "Art/Portrait",
  sourcePath: "Art/Portrait.md",
  name: "Portrait",
  tags: ["people"],
  body: "Soft light",
  kind: "text",
  prefix: "@",
};

describe("prompt library view-model utilities", () => {
  it("filters by case-insensitive text and selected tags without mutating input", () => {
    expect(filterPrompts(prompts, "SOFT", [])).toEqual([prompts[1]]);
    expect(filterPrompts(prompts, "", ["WARM"])).toEqual([prompts[0], prompts[1]]);
    expect(filterPrompts(prompts, "art", [])).toEqual([prompts[1], prompts[2], prompts[3]]);
  });

  it("collects unique tags with first spelling and stable alphabetical order", () => {
    expect(collectTags(prompts)).toEqual(["Animals", "nature", "people", "warm"]);
  });

  it("builds and flattens a stable root-first folder tree", () => {
    const tree = buildPromptTree(prompts);
    expect(tree.map((node) => node.kind === "prompt" ? node.prompt.name : node.key)).toEqual(["Zebra", "art"]);
    expect(flattenPromptTree(tree).map((node) => node.prompt.name)).toEqual(["Zebra", "Still life", "Landscape", "Portrait"]);
  });

  it("normalizes collapse keys independent of case and separators", () => {
    expect(normalizeCollapseKey(" /Art\\Deep/ ")).toBe("art/deep");
  });

  it("validates drafts and clones nested mutable values", () => {
    expect(validatePromptDraft(draft)).toEqual([]);
    expect(validatePromptDraft({ ...draft, sourcePath: "../bad.md" })).toContain("sourcePath");
    expect(validatePromptDraft({ ...draft, prefix: "$" as never })).toContain("prefix");

    const copy = clonePromptDraft(draft);
    copy.tags.push("new");
    expect(copy).toEqual({ ...draft, tags: ["people", "new"] });
    expect(draft.tags).toEqual(["people"]);
  });
});
