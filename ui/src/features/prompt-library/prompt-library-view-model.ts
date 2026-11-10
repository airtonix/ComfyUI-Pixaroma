import type { PromptDraft, PromptRecord } from "./prompt-library.types";

export type PromptTreePrompt = {
  kind: "prompt";
  prompt: PromptRecord;
  sortKey: string;
};

export type PromptTreeFolder = {
  kind: "folder";
  key: string;
  label: string;
  folders: PromptTreeFolder[];
  prompts: PromptTreePrompt[];
  sortKey: string;
};

export type PromptTreeNode = PromptTreePrompt | PromptTreeFolder;

const compareText = (left: string, right: string) => {
  const result = left.localeCompare(right, undefined, { sensitivity: "base" });
  return result || left.localeCompare(right);
};

const normalizedText = (value: string) => value.trim().toLocaleLowerCase();

export function filterPrompts(
  prompts: PromptRecord[],
  query = "",
  tags: string[] = [],
): PromptRecord[] {
  const needle = normalizedText(query);
  const selectedTags = tags.map(normalizedText).filter(Boolean);

  return prompts.filter((prompt) => {
    const searchable = [
      prompt.id,
      prompt.sourcePath,
      prompt.name,
      prompt.body,
      prompt.category,
      ...prompt.tags,
    ]
      .join(" ")
      .toLocaleLowerCase();
    const matchesQuery = !needle || searchable.includes(needle);
    const promptTags = new Set(prompt.tags.map(normalizedText));
    return matchesQuery && selectedTags.every((tag) => promptTags.has(tag));
  });
}

export function collectTags(prompts: PromptRecord[]): string[] {
  const tags = new Map<string, string>();
  for (const prompt of prompts) {
    for (const tag of prompt.tags) {
      const key = normalizedText(tag);
      if (key && !tags.has(key)) tags.set(key, tag.trim());
    }
  }
  return [...tags.values()].sort(compareText);
}

export function normalizeCollapseKey(value: string): string {
  return value
    .trim()
    .replaceAll("\\", "/")
    .split("/")
    .map((part) => part.trim())
    .filter(Boolean)
    .join("/")
    .toLocaleLowerCase();
}

export function buildPromptTree(prompts: PromptRecord[]): PromptTreeNode[] {
  const roots: PromptTreeNode[] = [];
  const folders = new Map<string, PromptTreeFolder>();

  for (const prompt of prompts) {
    if (prompt.folders.length === 0) {
      roots.push({ kind: "prompt", prompt, sortKey: normalizeCollapseKey(prompt.sourcePath) });
      continue;
    }

    let parent: PromptTreeFolder | undefined;
    const path: string[] = [];
    for (const folderName of prompt.folders) {
      path.push(folderName);
      const key = normalizeCollapseKey(path.join("/"));
      let folder = folders.get(key);
      if (!folder) {
        folder = { kind: "folder", key, label: folderName, folders: [], prompts: [], sortKey: key };
        folders.set(key, folder);
        if (parent) parent.folders.push(folder);
        else roots.push(folder);
      }
      parent = folder;
    }
    parent?.prompts.push({
      kind: "prompt",
      prompt,
      sortKey: normalizeCollapseKey(prompt.sourcePath),
    });
  }

  return sortTreeNodes(roots);
}

function sortTreeNodes(nodes: PromptTreeNode[]): PromptTreeNode[] {
  return nodes
    .map((node): PromptTreeNode =>
      node.kind === "folder"
        ? {
            ...node,
            folders: sortFolders(node.folders),
            prompts: [...node.prompts].sort((a, b) => compareText(a.sortKey, b.sortKey)),
          }
        : node,
    )
    .sort((left, right) => {
      if (left.kind !== right.kind) return left.kind === "prompt" ? -1 : 1;
      return compareText(left.sortKey, right.sortKey);
    });
}

function sortFolders(folders: PromptTreeFolder[]): PromptTreeFolder[] {
  return sortTreeNodes(folders).filter((node): node is PromptTreeFolder => node.kind === "folder");
}

export function flattenPromptTree(tree: PromptTreeNode[]): PromptTreePrompt[] {
  const flattened: PromptTreePrompt[] = [];
  const visit = (nodes: PromptTreeNode[]) => {
    for (const node of nodes) {
      if (node.kind === "prompt") flattened.push(node);
      else {
        const entries: PromptTreeNode[] = [...node.prompts, ...node.folders];
        entries.sort((a, b) => compareText(a.sortKey, b.sortKey));
        visit(entries);
      }
    }
  };
  visit(tree);
  return flattened;
}

function isRelativePath(value: string, extension: string): boolean {
  return (
    value.endsWith(extension) &&
    !value.startsWith("/") &&
    !/^[A-Za-z]:[\\/]/.test(value) &&
    !value.startsWith("\\\\") &&
    !value.includes("\\") &&
    !value.split("/").some((part) => part === "" || part === "." || part === "..")
  );
}

export function validatePromptDraft(draft: PromptDraft): string[] {
  const errors: string[] = [];
  if (!isRelativePath(draft.sourcePath, ".md")) errors.push("sourcePath");
  if (!isRelativePath(`${draft.id}.md`, ".md") || draft.id !== draft.sourcePath.slice(0, -3))
    errors.push("id");
  if (!draft.name.trim()) errors.push("name");
  if (!Array.isArray(draft.tags) || draft.tags.some((tag) => typeof tag !== "string"))
    errors.push("tags");
  if (draft.kind !== "text" && draft.kind !== "list") errors.push("kind");
  if (draft.prefix !== undefined && draft.prefix !== "@" && draft.prefix !== "#")
    errors.push("prefix");
  return errors;
}

export function clonePromptDraft(draft: PromptDraft): PromptDraft {
  return { ...draft, tags: [...draft.tags] };
}
