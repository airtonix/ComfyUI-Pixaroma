import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";

const root = path.resolve(new URL("..", import.meta.url).pathname);
const out = path.join(root, "docs/help");
fs.mkdirSync(out, { recursive: true });
for (const hidden of ["PixaromaReferenceNode", "Pixaroma_VueReferenceNode"]) fs.rmSync(path.join(out, `${hidden}.md`), { force: true });

function evaluate(file, source) {
  let code = fs.readFileSync(path.join(root, file), "utf8");
  code = code.replace(/^import .*?;\s*$/gm, "");
  code = code.replace(/^export /gm, "");
  code = code.replace(/for \(const \[cls, def\] of Object\.entries\(HELP\) registerNodeHelp\(cls, def\);/, "");
  code = code.replace(/registerNodeHelp\([^;]+;?/g, "");
  if (file.includes("guides.mjs") || file.includes("canvas_defs.mjs")) code = code.replace(/LINKS\.([A-Z_]+)/g, "\"https://example.invalid\"");
  if (file.includes("canvas_defs.mjs")) code = code.replace(/pixAsset\([^)]*\)/g, "\"\"");
  code += `\n__result = ${source};`;
  const context = { __result: null };
  vm.createContext(context);
  vm.runInContext(code, context, { filename: file });
  return context.__result;
}

function yaml(value) {
  if (Array.isArray(value)) return `[${value.map((x) => JSON.stringify(String(x))).join(", ")}]`;
  return JSON.stringify(value ?? "");
}
function mdText(value) {
  return String(value ?? "").replace(/\r/g, "").trim();
}
function renderSections(sections) {
  return (sections || []).map((s) => {
    const out = [];
    if (s.heading) out.push(`## ${s.heading}`);
    if (s.body) out.push(mdText(s.body));
    if (s.bullets?.length) out.push(s.bullets.map((x) => `- ${x}`).join("\n"));
    if (s.defs?.length) out.push(s.defs.map((x) => `**${x[0] ?? x}** — ${x[1] ?? ""}`).join("\n\n"));
    if (s.links?.length) out.push(s.links.map((x) => `[${x[0] ?? x}](${x[1] ?? ""})`).join("\n"));
    if (s.table?.rows) {
      const headers = s.table.headers || s.table.rows[0]?.map((_, i) => `Column ${i + 1}`) || [];
      out.push([`| ${headers.join(" | ")} |`, `| ${headers.map(() => "---").join(" | ")} |`, ...s.table.rows.map((r) => `| ${r.join(" | ")} |`)].join("\n"));
    }
    return out.filter(Boolean).join("\n\n");
  }).filter(Boolean).join("\n\n");
}
function categoryFor(id, kind) {
  if (kind !== "node") return kind === "guide" ? "Start here" : "Canvas tools";
  if (/^(Pixaroma3D|PixaromaPaint|PixaromaImageComposition|PixaromaAudioStudio)/.test(id)) return "Editors";
  if (/Image|Video|Audio|Outpaint|Crop|Resize|Preview|Compare|Background/.test(id)) return "Image";
  if (/Prompt|Text|Label|Note|Reader|Dropdown|Music|Watermark/.test(id)) return "Prompt & Text";
  if (/Seed|Number|Duration|Resolution|Sizes|Sliders|WH/.test(id)) return "Values";
  if (/Switch|Loop|Combine|SetNode|GetNode|Mute|XY|Run/.test(id)) return "Logic & Flow";
  return "Utility";
}
function writeArticle(article, id, kind, category, order) {
  const safe = id.replace(/[^a-zA-Z0-9._-]/g, "-");
  const documentId = kind === "node" ? `node:${id}` : id;
  const fm = ["---", `id: ${yaml(documentId)}`, `title: ${yaml(article.title || id)}`, `kind: ${kind}`, `category: ${yaml(category)}`, `order: ${order}`, `icon: ${yaml(article.icon || "")}`, `tags: ${yaml(article.keywords || "")}`];
  if (kind === "node") fm.push(`comfyClass: ${yaml(id)}`);
  if (article.related?.length) fm.push(`related: ${yaml(article.related)}`);
  fm.push("---");
  const body = [article.tagline ? `> ${article.tagline}` : "", renderSections(article.sections), article.footer ? `> **Tip:** ${article.footer}` : ""].filter(Boolean).join("\n\n");
  fs.writeFileSync(path.join(out, `${safe}.md`), fm.join("\n") + "\n\n" + body + "\n");
}

const help = evaluate("js/help_toolbar/help_defs.mjs", "HELP");
const aliases = evaluate("js/help_browser/keywords.mjs", "KEYWORDS");
let order = 0;
for (const [id, article] of Object.entries(help)) {
  if (["PixaromaReferenceNode", "Pixaroma_VueReferenceNode"].includes(id)) continue;
  article.keywords = [aliases[id], article.keywords].filter(Boolean).join(" ");
  writeArticle(article, id, "node", categoryFor(id, "node"), order++);
}
const guides = evaluate("js/help_browser/guides.mjs", "GUIDES");
for (const article of guides) writeArticle(article, article.key, "guide", categoryFor(article.key, "guide"), order++);
const canvas = evaluate("js/help_browser/canvas_defs.mjs", "CANVAS_FEATURES");
for (const article of canvas) writeArticle(article, article.key, "canvas", categoryFor(article.key, "canvas"), order++);
fs.writeFileSync(path.join(out, "README.md"), "# Help content\n\nEach article is one Markdown document. YAML frontmatter owns identity, navigation, and indexing metadata; headings and Markdown blocks own the article body. Node controls remain runtime-enriched from ComfyUI definitions so this content stays accurate for the installed frontend.\n\nThese files are the React browser's bundled source of truth. Search aliases belong in the frontmatter tags field.\n");
console.log(`wrote ${Object.keys(help).length + guides.length + canvas.length} help articles`);
