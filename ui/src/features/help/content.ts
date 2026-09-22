import helpDocuments from "virtual:pixaroma-help-documents";

export type HelpKind = "guide" | "node" | "canvas";

export type HelpSection = {
  heading?: string;
  paragraphs?: string[];
  bullets?: string[];
  definitions?: Array<{ term: string; description: string }>;
  links?: Array<{ label: string; url: string }>;
  table?: { headers: string[]; rows: string[][] };
};

export type HelpEntry = {
  id: string;
  kind: HelpKind;
  title: string;
  tagline: string;
  category: string;
  order: number;
  icon?: string;
  comfyClass?: string;
  tags: string[];
  related: string[];
  sections: HelpSection[];
  footer?: string;
  controls?: { inputs: unknown[]; settings: unknown[]; outputs: unknown[] };
};

type RawDocument = { path: string; source: string };

function scalar(value: string) {
  const text = value.trim();
  if ((text.startsWith("\"") && text.endsWith("\"")) || (text.startsWith("'") && text.endsWith("'"))) return text.slice(1, -1);
  return text;
}

function list(value: string): string[] {
  const text = value.trim();
  if (!text.startsWith("[") || !text.endsWith("]")) return text ? text.split(/\s+/) : [];
  return text.slice(1, -1).split(",").map((item) => scalar(item)).filter(Boolean);
}

function parseFrontmatter(source: string) {
  if (!source.startsWith("---\n")) throw new Error("missing frontmatter");
  const end = source.indexOf("\n---", 4);
  if (end < 0) throw new Error("unterminated frontmatter");
  const meta: Record<string, string | string[]> = {};
  for (const line of source.slice(4, end).split("\n")) {
    const colon = line.indexOf(":");
    if (colon < 1) throw new Error(`malformed frontmatter line: ${line}`);
    const key = line.slice(0, colon).trim();
    const value = line.slice(colon + 1).trim();
    meta[key] = key === "tags" || key === "related" ? list(value) : scalar(value);
  }
  return { meta, body: source.slice(end + 4).trim() };
}

function footerText(body: string) {
  const match = /> \*\*Tip:\*\* (.+)/s.exec(body);
  return match?.[1];
}

function parseBody(body: string) {
  const blocks = body.split(/\n{2,}/).map((block) => block.trim()).filter(Boolean);
  const sections: HelpSection[] = [];
  let current: HelpSection = {};
  const flush = () => { if (Object.keys(current).length) sections.push(current); current = {}; };
  for (const block of blocks) {
    if (block.startsWith("> **Tip:**")) continue;
    if (block.startsWith("> ")) { current.paragraphs = [...(current.paragraphs || []), block.slice(2).trim()]; continue; }
    if (block.startsWith("## ")) { flush(); current.heading = block.slice(3).trim(); continue; }
    const lines = block.split("\n");
    if (lines.every((line) => line.startsWith("- "))) { current.bullets = [...(current.bullets || []), ...lines.map((line) => line.slice(2))]; continue; }
    if (lines.every((line) => /^\*\*.+\*\* — /.test(line))) {
      current.definitions = [...(current.definitions || []), ...lines.map((line) => { const match = /^\*\*(.+)\*\* — (.*)$/.exec(line)!; return { term: match[1], description: match[2] }; })];
      continue;
    }
    if (lines.length >= 2 && lines[0].startsWith("| ") && lines[1].includes("---")) {
      const cells = (line: string) => line.split("|").slice(1, -1).map((cell) => cell.trim());
      current.table = { headers: cells(lines[0]), rows: lines.slice(2).map(cells) };
      continue;
    }
    const link = /^\[([^\]]+)\]\(([^)]+)\)$/.exec(block);
    if (link) { current.links = [...(current.links || []), { label: link[1], url: link[2] }]; continue; }
    current.paragraphs = [...(current.paragraphs || []), block];
  }
  flush();
  return sections;
}

export function parseHelpDocument(document: RawDocument): HelpEntry {
  const { meta, body } = parseFrontmatter(document.source);
  const required = ["id", "title", "kind", "category", "order"].filter((key) => !meta[key]);
  if (required.length) throw new Error(`${document.path}: missing ${required.join(", ")}`);
  if (!["guide", "node", "canvas"].includes(String(meta.kind))) throw new Error(`${document.path}: invalid kind`);
  const paragraphs = body.split(/\n{2,}/).filter((block) => block.startsWith("> ") && !block.startsWith("> **Tip:**"));
  return {
    id: String(meta.id), kind: meta.kind as HelpKind, title: String(meta.title), tagline: paragraphs[0]?.slice(2) || "",
    category: String(meta.category), order: Number(meta.order), icon: String(meta.icon || ""), comfyClass: meta.comfyClass ? String(meta.comfyClass) : undefined,
    tags: Array.isArray(meta.tags) ? meta.tags : [], related: Array.isArray(meta.related) ? meta.related : [], sections: parseBody(body), footer: footerText(body),
  };
}

export function loadHelpDocuments(documents: RawDocument[] = helpDocuments) {
  const entries = documents.map(parseHelpDocument).sort((a, b) => a.order - b.order || a.title.localeCompare(b.title));
  const ids = new Set<string>();
  for (const entry of entries) { if (ids.has(entry.id)) throw new Error(`duplicate help id: ${entry.id}`); ids.add(entry.id); }
  return entries;
}

export const helpEntries = loadHelpDocuments();
