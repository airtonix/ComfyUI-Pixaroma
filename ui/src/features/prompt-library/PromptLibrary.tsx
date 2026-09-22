import { useEffect, useMemo, useState } from "react";
import { RefreshCw, Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { buildPromptTree, collectTags, filterPrompts, type PromptTreeNode } from "./prompt-library-view-model";
import type { PromptLibraryAdapter } from "./prompt-library.adapter";
import type { PromptLibrary as PromptLibraryData, PromptLibraryParseError, PromptRecord } from "./prompt-library.types";

export type PromptLibraryProps = {
  adapter: PromptLibraryAdapter;
  initialLibrary?: PromptLibraryData;
};

export function PromptLibrary({ adapter, initialLibrary }: PromptLibraryProps) {
  const [library, setLibrary] = useState<PromptLibraryData | null>(initialLibrary ?? null);
  const [loading, setLoading] = useState(!initialLibrary);
  const [error, setError] = useState<Error | null>(null);
  const [loadErrors, setLoadErrors] = useState<PromptLibraryParseError[]>([]);
  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [collapsed, setCollapsed] = useState<Set<string>>(() => new Set());
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    if (initialLibrary) return;
    let active = true;
    setLoading(true);
    adapter.load().then((next) => {
      if (!active) return;
      setLibrary(next.library);
      setLoadErrors(next.errors);
      setError(null);
    }).catch((reason: unknown) => {
      if (active) setError(reason instanceof Error ? reason : new Error(String(reason)));
    }).finally(() => active && setLoading(false));
    return () => { active = false; };
  }, [adapter, initialLibrary]);

  const prompts = library?.prompts ?? [];
  const filtered = useMemo(() => filterPrompts(prompts, query, activeTag ? [activeTag] : []), [activeTag, prompts, query]);
  const tags = useMemo(() => collectTags(prompts), [prompts]);
  const tree = useMemo(() => buildPromptTree(filtered), [filtered]);
  const selected = prompts.find((prompt) => prompt.id === selectedId) ?? null;

  async function retry() {
    setError(null);
    setLoadErrors([]);
    setLoading(true);
    try {
      const next = await adapter.load();
      setLibrary(next.library);
      setLoadErrors(next.errors);
    } catch (reason) { setError(reason instanceof Error ? reason : new Error(String(reason))); }
    finally { setLoading(false); }
  }

  async function refresh() {
    setRefreshing(true);
    try {
      const next = await adapter.refresh();
      setLibrary(next.library);
      if (selectedId && !next.library.prompts.some((prompt) => prompt.id === selectedId)) setSelectedId(null);
      setLoadErrors(next.errors);
      setError(null);
    } catch (reason) { setError(reason instanceof Error ? reason : new Error(String(reason))); }
    finally { setRefreshing(false); }
  }

  if (loading) return <div className="px-prompt-library-state" role="status">Loading prompt library…</div>;
  if (error && !library) return <div className="px-prompt-library-state" role="alert"><p>Unable to load the prompt library: {error.message}</p><PromptLibraryErrors errors={loadErrors} /><Button onClick={retry}>Retry</Button></div>;

  return <main className="px-prompt-library" aria-label="Prompt Library">
    <header className="px-prompt-library-header"><div><h1>Prompt Library</h1><p>{filtered.length} of {prompts.length} prompts</p></div><Button variant="secondary" onClick={refresh} disabled={refreshing} aria-label="Refresh prompt library"><RefreshCw size={15} />{refreshing ? "Refreshing…" : "Refresh"}</Button></header>
    <div className="px-prompt-library-toolbar"><div className="px-prompt-search"><Search size={15} /><Input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search prompts" aria-label="Search prompts" />{query && <Button variant="ghost" size="icon" onClick={() => setQuery("")} aria-label="Clear search"><X size={15} /></Button>}</div><div className="px-prompt-tags" aria-label="Filter by tag"><Button variant={activeTag ? "outline" : "secondary"} size="sm" onClick={() => setActiveTag(null)}>All tags</Button>{tags.map((tag) => <Button key={tag} variant={activeTag === tag ? "default" : "outline"} size="sm" onClick={() => setActiveTag(activeTag === tag ? null : tag)}>{tag}</Button>)}</div></div>
    {(error || loadErrors.length > 0) && <div className="px-prompt-inline-error" role="alert">{error && <p>{error.message}</p>}<PromptLibraryErrors errors={loadErrors} /></div>}
    <div className="px-prompt-library-body"><nav className="px-prompt-tree" aria-label="Prompt folders">{tree.map((node) => <TreeNode key={node.kind === "folder" ? node.key : node.prompt.id} node={node} collapsed={collapsed} onToggle={(key) => setCollapsed((current) => { const next = new Set(current); if (next.has(key)) next.delete(key); else next.add(key); return next; })} selectedId={selectedId} onSelect={setSelectedId} />)}{filtered.length === 0 && <p className="px-prompt-empty">No prompts found.</p>}</nav><section className="px-prompt-preview" aria-live="polite">{selected ? <PromptPreview prompt={selected} /> : <p className="px-prompt-empty">Select a prompt to view it.</p>}</section></div>
  </main>;
}

function TreeNode({ node, collapsed, onToggle, selectedId, onSelect }: { node: PromptTreeNode; collapsed: Set<string>; onToggle: (key: string) => void; selectedId: string | null; onSelect: (id: string) => void }) {
  if (node.kind === "prompt") return <button className="px-prompt-row" type="button" aria-selected={selectedId === node.prompt.id} onClick={() => onSelect(node.prompt.id)}><span>{node.prompt.name}</span><small>{node.prompt.filename}</small></button>;
  const isCollapsed = collapsed.has(node.key);
  return <div className="px-prompt-folder"><button className="px-prompt-folder-row" type="button" aria-expanded={!isCollapsed} onClick={() => onToggle(node.key)}><span aria-hidden="true">{isCollapsed ? "▸" : "▾"}</span>{node.label}</button>{!isCollapsed && <div className="px-prompt-children">{node.prompts.map((prompt) => <TreeNode key={prompt.prompt.id} node={prompt} collapsed={collapsed} onToggle={onToggle} selectedId={selectedId} onSelect={onSelect} />)}{node.folders.map((folder) => <TreeNode key={folder.key} node={folder} collapsed={collapsed} onToggle={onToggle} selectedId={selectedId} onSelect={onSelect} />)}</div>}</div>;
}

function PromptLibraryErrors({ errors }: { errors: PromptLibraryParseError[] }) {
  if (errors.length === 0) return null;
  return <ul aria-label="Prompt library record errors">{errors.map((loadError, index) => <li key={`${loadError.sourcePath}-${index}`}><code>{loadError.sourcePath}</code>: {loadError.message}</li>)}</ul>;
}

function PromptPreview({ prompt }: { prompt: PromptRecord }) { return <article><div className="px-prompt-preview-heading"><h2>{prompt.name}</h2><span>{prompt.kind}</span></div><p className="px-prompt-path">{prompt.sourcePath}</p>{prompt.tags.length > 0 && <div className="px-prompt-preview-tags">{prompt.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>}<pre>{prompt.body}</pre></article>; }
