import { describe, expect, it } from "vitest";
import nestedRecord from "./fixtures/prompt-library/styles/cinematic.md?raw";
import subjectsRecord from "./fixtures/prompt-library/lists/subjects.md?raw";
import duplicateOne from "./fixtures/prompt-library/duplicates/Film.md?raw";
import duplicateTwo from "./fixtures/prompt-library/duplicates/film.md?raw";
import invalidRecord from "./fixtures/prompt-library-invalid/no-frontmatter.md?raw";
import traversalRecord from "./fixtures/prompt-library-invalid/traversal.md?raw";
import {
  parsePromptLibrary,
  parsePromptMarkdown,
  renderPromptMarkdown,
} from "@/features/prompt-library/prompt-library-markdown";

describe("prompt Markdown parser", () => {
  it("parses nested records without using the filename as the display name", () => {
    expect(parsePromptMarkdown("styles/cinematic.md", nestedRecord)).toEqual({
      id: "styles/cinematic",
      sourcePath: "styles/cinematic.md",
      name: "Film look",
      tags: ["cinematic", "Warm Light"],
      body: "A subject\nwith a second line.\n",
      category: "styles",
      folders: ["styles"],
      filename: "cinematic.md",
      kind: "text",
      prefix: "$",
      unknownFrontmatter: [{ key: "source", value: "camera" }],
    });
  });

  it("round-trips known and unknown frontmatter and normalizes newlines", () => {
    const record = parsePromptMarkdown("lists/subjects.md", subjectsRecord.replaceAll("\n", "\r\n"));
    expect(renderPromptMarkdown(record)).toBe(`---\nname: Subjects\ntags:\n  - animal\n  - Warm Light\nkind: list\nmetadata:\n  - one\n  - two\n---\nfox\nowl\n`);
  });

  it("accepts a record with an empty body at end of input", () => {
    expect(parsePromptMarkdown("styles/empty.md", "---\nname: Empty\nkind: text\n---")).toMatchObject({
      id: "styles/empty",
      body: "",
    });
  });

  it("preserves empty unknown frontmatter values when rendering", () => {
    const record = parsePromptMarkdown("styles/empty-field.md", "---\nname: Empty field\nkind: text\nsource:\n---\nbody");
    expect(record.unknownFrontmatter).toEqual([{ key: "source", value: null }]);
    expect(parsePromptMarkdown(record.sourcePath, renderPromptMarkdown(record)).unknownFrontmatter).toEqual([
      { key: "source", value: null },
    ]);
  });

  it("reports malformed records with the source path", () => {
    expect(() => parsePromptMarkdown("broken/no-kind.md", "---\nname: Broken\n---\ntext")).toThrow(
      "broken/no-kind.md: kind must be text or list",
    );
    expect(() => parsePromptMarkdown("../escape.md", traversalRecord)).toThrow(
      'sourcePath: invalid relative path "../escape.md"',
    );
  });

  it("keeps valid records when a library contains malformed records", () => {
    const result = parsePromptLibrary([
      { sourcePath: "styles/ok.md", source: "---\nname: OK\nkind: text\n---\nbody" },
      { sourcePath: "styles/bad.md", source: invalidRecord },
    ]);
    expect(result.library.prompts.map(({ id }) => id)).toEqual(["styles/ok"]);
    expect(result.errors).toEqual([{ sourcePath: "styles/bad.md", message: "styles/bad.md: missing frontmatter delimiters" }]);
  });

  it("rejects case-insensitive duplicate IDs and does not load either record", () => {
    const result = parsePromptLibrary([
      { sourcePath: "Styles/Film.md", source: duplicateOne },
      { sourcePath: "styles/film.md", source: duplicateTwo },
    ]);
    expect(result.library.prompts).toEqual([]);
    expect(result.errors).toEqual([
      { sourcePath: "Styles/Film.md", message: 'duplicate id "styles/film" conflicts with styles/film.md' },
      { sourcePath: "styles/film.md", message: 'duplicate id "styles/film" conflicts with Styles/Film.md' },
    ]);
  });

  it("does not require a manifest to parse records", () => {
    const result = parsePromptLibrary([
      { sourcePath: "styles/film.md", source: "---\nname: Film\nkind: text\n---\nbody" },
    ]);
    expect(result.errors).toEqual([]);
    expect(result.library.prompts[0].category).toBe("styles");
  });
});
