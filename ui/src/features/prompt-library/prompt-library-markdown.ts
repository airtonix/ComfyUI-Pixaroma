import type {
  PromptFrontmatterField,
  PromptLibraryLoadResult,
  PromptRecord,
} from "./prompt-library.types";

type MarkdownFile = { sourcePath: string; source: string };

type Frontmatter = Record<string, unknown>;

const KNOWN_FIELDS = new Set(["name", "tags", "kind", "prefix"]);

function invalidPath(field: string, value: string): Error {
  return new Error(`${field}: invalid relative path ${JSON.stringify(value)}`);
}

function pathParts(field: string, value: string, extension: string): string[] {
  if (!value || value.startsWith("/") || /^[A-Za-z]:[\\/]/.test(value) || value.startsWith("\\\\") || value.includes("\\")) {
    throw invalidPath(field, value);
  }
  const parts = value.split("/");
  if (parts.some((part) => !part || part === "." || part === "..") || value.endsWith("/") || !value.endsWith(extension)) {
    throw invalidPath(field, value);
  }
  return parts;
}

function normalizedPath(sourcePath: string): { id: string; folders: string[]; filename: string } {
  const parts = pathParts("sourcePath", sourcePath, ".md");
  return {
    id: sourcePath.slice(0, -3),
    folders: parts.slice(0, -1),
    filename: parts.at(-1)!,
  };
}

function unquote(value: string): string {
  const trimmed = value.trim();
  if (trimmed.length >= 2 && ((trimmed.startsWith('"') && trimmed.endsWith('"')) || (trimmed.startsWith("'") && trimmed.endsWith("'")))) {
    return trimmed.slice(1, -1).replace(trimmed[0] === '"' ? /\\([\\"nrt])/g : /''/g, (match) => {
      if (match === "''") return "'";
      return ({ "\\n": "\n", "\\r": "\r", "\\t": "\t", '\\"': '"', "\\\\": "\\" } as Record<string, string>)[match] ?? match;
    });
  }
  return trimmed;
}

function parseValue(value: string): unknown {
  const trimmed = value.trim();
  if (trimmed.startsWith("[") && trimmed.endsWith("]")) {
    const inner = trimmed.slice(1, -1).trim();
    return inner ? inner.split(",").map(unquote) : [];
  }
  if (trimmed === "true" || trimmed === "false") return trimmed === "true";
  if (trimmed === "null" || trimmed === "~") return null;
  return unquote(trimmed);
}

function parseFrontmatter(sourcePath: string, source: string): { frontmatter: Frontmatter; body: string } {
  const normalized = source.replace(/\r\n?/g, "\n");
  if (!normalized.startsWith("---\n")) throw new Error(`${sourcePath}: missing frontmatter delimiters`);
  const closingDelimiter = /\n---(?:\n|$)/.exec(normalized.slice(4));
  if (!closingDelimiter) throw new Error(`${sourcePath}: unterminated frontmatter`);
  const end = closingDelimiter.index + 4;
  const bodyStart = end + closingDelimiter[0].length;

  const frontmatter: Frontmatter = {};
  let listKey: string | undefined;
  for (const line of normalized.slice(4, end).split("\n")) {
    if (/^\s+-\s+/.test(line)) {
      if (!listKey || (frontmatter[listKey] !== null && !Array.isArray(frontmatter[listKey]))) {
        throw new Error(`${sourcePath}: list item has no field`);
      }
      if (frontmatter[listKey] === null) frontmatter[listKey] = [];
      (frontmatter[listKey] as unknown[]).push(parseValue(line.replace(/^\s+-\s+/, "")));
      continue;
    }
    const match = /^(\S[^:]*):(?:\s*(.*))?$/.exec(line);
    if (!match) throw new Error(`${sourcePath}: malformed frontmatter line: ${line}`);
    const [, key, value] = match;
    if (key in frontmatter) throw new Error(`${sourcePath}: duplicate frontmatter field "${key}"`);
    if (value) {
      frontmatter[key] = parseValue(value);
      listKey = undefined;
    } else {
      frontmatter[key] = key === "tags" ? [] : null;
      listKey = key;
    }
  }
  return { frontmatter, body: normalized.slice(bodyStart) };
}

function normalizedTags(sourcePath: string, value: unknown): string[] {
  if (value === undefined) return [];
  if (!Array.isArray(value)) throw new Error(`${sourcePath}: tags must be a list`);
  const tags: string[] = [];
  const seen = new Set<string>();
  for (const item of value) {
    if (typeof item !== "string") throw new Error(`${sourcePath}: tags must contain only strings`);
    const tag = item.trim();
    if (tag && !seen.has(tag.toLocaleLowerCase())) {
      seen.add(tag.toLocaleLowerCase());
      tags.push(tag);
    }
  }
  return tags;
}

function frontmatterFields(frontmatter: Frontmatter): PromptFrontmatterField[] | undefined {
  const fields = Object.entries(frontmatter)
    .filter(([key]) => !KNOWN_FIELDS.has(key))
    .map(([key, value]) => ({ key, value }));
  return fields.length ? fields : undefined;
}

export function parsePromptMarkdown(sourcePath: string, source: string): PromptRecord {
  const path = normalizedPath(sourcePath);
  const { frontmatter, body } = parseFrontmatter(sourcePath, source);
  const name = typeof frontmatter.name === "string" ? frontmatter.name.trim() : "";
  if (!name) throw new Error(`${sourcePath}: name must be a non-empty string`);
  if (frontmatter.kind !== "text" && frontmatter.kind !== "list") {
    throw new Error(`${sourcePath}: kind must be text or list`);
  }
  if (frontmatter.prefix !== undefined && !["@", "#", "$", "&"].includes(String(frontmatter.prefix))) {
    throw new Error(`${sourcePath}: prefix must be @, #, $, or &`);
  }

  const record: PromptRecord = {
    id: path.id,
    sourcePath,
    name,
    tags: normalizedTags(sourcePath, frontmatter.tags),
    body,
    category: path.folders[0] ?? "",
    folders: path.folders,
    filename: path.filename,
    kind: frontmatter.kind,
  };
  if (frontmatter.prefix !== undefined) record.prefix = frontmatter.prefix as PromptRecord["prefix"];
  const unknownFrontmatter = frontmatterFields(frontmatter);
  if (unknownFrontmatter) record.unknownFrontmatter = unknownFrontmatter;
  return record;
}

function quote(value: string): string {
  return /^[\w ./@#$&+-]+$/.test(value) ? value : JSON.stringify(value);
}

function renderValue(value: unknown): string {
  if (Array.isArray(value)) return value.map((item) => `\n  - ${quote(String(item))}`).join("");
  if (value === null) return "null";
  if (typeof value === "boolean") return String(value);
  return quote(String(value));
}

export function renderPromptMarkdown(record: PromptRecord): string {
  const fields: PromptFrontmatterField[] = [
    { key: "name", value: record.name },
    ...(record.tags.length ? [{ key: "tags", value: record.tags }] : []),
    { key: "kind", value: record.kind },
    ...(record.prefix ? [{ key: "prefix", value: record.prefix }] : []),
    ...(record.unknownFrontmatter ?? []),
  ];
  const frontmatter = fields.map(({ key, value }) => `${key}:${Array.isArray(value) ? renderValue(value) : ` ${renderValue(value)}`}`).join("\n");
  return `---\n${frontmatter}\n---\n${record.body.replace(/\r\n?/g, "\n")}`;
}

export function normalizePromptRecord(value: unknown): PromptRecord {
  if (!value || typeof value !== "object") throw new Error("record must be an object");
  const record = value as Record<string, unknown>;
  const sourcePath = record.sourcePath;
  if (typeof sourcePath !== "string") throw new Error("sourcePath must be a string");
  const path = normalizedPath(sourcePath);
  if (typeof record.id !== "string" || record.id !== path.id) throw new Error(`${sourcePath}: id must match sourcePath`);
  if (typeof record.name !== "string" || !record.name.trim()) throw new Error(`${sourcePath}: name must be a non-empty string`);
  if (record.body !== undefined && typeof record.body !== "string") throw new Error(`${sourcePath}: body must be a string`);
  if (record.kind !== "text" && record.kind !== "list") throw new Error(`${sourcePath}: kind must be text or list`);
  if (record.prefix !== undefined && !["@", "#", "$", "&"].includes(String(record.prefix))) {
    throw new Error(`${sourcePath}: prefix must be @, #, $, or &`);
  }
  const tags = normalizedTags(sourcePath, record.tags);
  if (record.unknownFrontmatter !== undefined) {
    if (!Array.isArray(record.unknownFrontmatter) || record.unknownFrontmatter.some((field) => {
      return !field || typeof field !== "object" || typeof (field as Record<string, unknown>).key !== "string";
    })) throw new Error(`${sourcePath}: unknownFrontmatter is invalid`);
  }
  return {
    id: path.id,
    sourcePath,
    name: record.name.trim(),
    tags,
    body: record.body ?? "",
    category: path.folders[0] ?? "",
    folders: path.folders,
    filename: path.filename,
    kind: record.kind,
    ...(record.prefix === undefined ? {} : { prefix: record.prefix as PromptRecord["prefix"] }),
    ...(record.unknownFrontmatter === undefined ? {} : { unknownFrontmatter: record.unknownFrontmatter as PromptFrontmatterField[] }),
  };
}

export function parsePromptLibrary(files: MarkdownFile[]): PromptLibraryLoadResult {
  const parsed: PromptRecord[] = [];
  const errors: PromptLibraryLoadResult["errors"] = [];
  for (const file of files) {
    try {
      parsed.push(parsePromptMarkdown(file.sourcePath, file.source));
    } catch (error) {
      errors.push({ sourcePath: file.sourcePath, message: error instanceof Error ? error.message : String(error) });
    }
  }
  const byId = new Map<string, PromptRecord>();
  const duplicates = new Set<string>();
  for (const record of parsed) {
    const key = record.id.toLocaleLowerCase();
    const previous = byId.get(key);
    if (previous) {
      duplicates.add(key);
      errors.push({ sourcePath: previous.sourcePath, message: `duplicate id "${key}" conflicts with ${record.sourcePath}` });
      errors.push({ sourcePath: record.sourcePath, message: `duplicate id "${key}" conflicts with ${previous.sourcePath}` });
    } else if (!duplicates.has(key)) {
      byId.set(key, record);
    }
  }
  return { library: { version: 1, prompts: [...byId.values()].filter((record) => !duplicates.has(record.id.toLocaleLowerCase())) }, errors };
}
