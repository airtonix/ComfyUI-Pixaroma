import { useEffect, useMemo, useState } from "react";
import type * as React from "react";
import { ArrowLeft, ArrowRight, Search, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { type HelpEntry, type HelpSection } from "./data";

export type HelpBrowserProps = { entries: HelpEntry[]; initialId?: string; onClose?: () => void };

function sectionText(section: HelpSection) {
  return [section.heading, ...(section.paragraphs || []), ...(section.bullets || []), ...(section.definitions || []).flatMap((item) => [item.term, item.description]), ...(section.links || []).map((item) => item.label)].filter(Boolean).join(" ");
}

export function HelpBrowser({ entries, initialId, onClose }: HelpBrowserProps) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const categories = useMemo(() => ["All", ...new Set(entries.map((entry) => entry.category))], [entries]);
  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return entries.filter((entry) => (category === "All" || entry.category === category) && (!needle || `${entry.title} ${entry.tagline} ${entry.tags.join(" ")} ${entry.sections.map(sectionText).join(" ")}`.toLowerCase().includes(needle)));
  }, [category, entries, query]);
  const selected = entries.find((entry) => entry.id === selectedId) ?? null;

  useEffect(() => setSelectedId(initialId ?? null), [initialId]);
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      event.preventDefault();
      if (query) setQuery("");
      else onClose?.();
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, query]);
  function selectEntry(entry: HelpEntry) { const next = [...history.slice(0, historyIndex + 1), entry.id]; setHistory(next); setHistoryIndex(next.length - 1); setSelectedId(entry.id); }
  function goBack() { if (historyIndex > 0) { const index = historyIndex - 1; setHistoryIndex(index); setSelectedId(history[index]); } }
  function goForward() { if (historyIndex < history.length - 1) { const index = historyIndex + 1; setHistoryIndex(index); setSelectedId(history[index]); } }

  return <main className="px-help-shell" aria-label="Pixaroma Help">
    <header className="px-help-header"><div className="px-brand"><span className="px-brand-mark">✦</span><span>Pixaroma Help</span></div><div className="px-header-actions"><Button variant="ghost" size="icon" onClick={goBack} disabled={historyIndex <= 0} aria-label="Back"><ArrowLeft size={16} /></Button><Button variant="ghost" size="icon" onClick={goForward} disabled={historyIndex >= history.length - 1} aria-label="Forward"><ArrowRight size={16} /></Button>{onClose && <Button variant="ghost" size="icon" onClick={onClose} aria-label="Close"><X size={17} /></Button>}</div></header>
    <div className="px-help-toolbar"><div className="px-search-wrap"><Search size={15} /><Input value={query} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setQuery(event.target.value)} placeholder="Search nodes, topics, or a problem" aria-label="Search help" /></div><Button variant="secondary" onClick={() => { setQuery(""); setCategory("All"); setSelectedId(null); }}>Home</Button></div>
    <div className="px-help-body"><aside className="px-help-sidebar"><div className="px-sidebar-label">Browse</div>{categories.map((item) => <button key={item} className={`px-category ${item === category ? "is-active" : ""}`} onClick={() => { setCategory(item); setSelectedId(null); }}>{item}</button>)}<div className="px-sidebar-label px-sidebar-label-spaced">Results</div><div className="px-result-count">{filtered.length} article{filtered.length === 1 ? "" : "s"}</div></aside><section className="px-help-content">{selected ? <Article entry={selected} onBack={() => setSelectedId(null)} /> : <EntryGrid entries={filtered} onSelect={selectEntry} />}</section></div>
  </main>;
}

function EntryGrid({ entries, onSelect }: { entries: HelpEntry[]; onSelect: (entry: HelpEntry) => void }) { return <div className="px-entry-grid">{entries.map((entry) => <Card key={entry.id} className="px-entry-card" onClick={() => onSelect(entry)}><CardHeader><div className="px-entry-icon">{entry.icon || "?"}</div><Badge variant={entry.kind === "guide" ? "default" : "secondary"}>{entry.category}</Badge><CardTitle>{entry.title}</CardTitle><CardDescription>{entry.tagline}</CardDescription></CardHeader><CardContent><span className="px-card-link">Read article →</span></CardContent></Card>)}</div>; }

function Article({ entry, onBack }: { entry: HelpEntry; onBack: () => void }) { return <article className="px-article"><Button variant="ghost" size="sm" onClick={onBack}>← Back to browse</Button><div className="px-article-heading"><div className="px-entry-icon px-entry-icon-large">{entry.icon || "?"}</div><div><Badge>{entry.category}</Badge><h1>{entry.title}</h1><p>{entry.tagline}</p></div></div><div className="px-article-copy">{entry.sections.map((section, index) => <ArticleSection key={`${entry.id}-${index}`} section={section} />)}{entry.controls && <ControlReference controls={entry.controls} />}{entry.footer && <p className="px-article-footer">{entry.footer}</p>}</div></article>; }

function ControlReference({ controls }: { controls: NonNullable<HelpEntry["controls"]> }) {
  const groups = [["What you wire in", controls.inputs], ["The settings on the node", controls.settings], ["What comes out", controls.outputs]] as const;
  return <>{groups.filter(([, items]) => items.length).map(([title, items]) => <section className="px-article-section" key={title}><h2>{title}</h2><ul>{items.map((item, index) => { const value = item as { name?: string; type?: string; tip?: string; optional?: boolean }; return <li key={index}><strong>{value.name || "Output"}</strong>{value.type && ` (${value.type}${value.optional ? ", optional" : ""})`}{value.tip && ` — ${value.tip}`}</li>; })}</ul></section>)}</>;
}

function ArticleSection({ section }: { section: HelpSection }) { return <section className="px-article-section">{section.heading && <h2>{section.heading}</h2>}{section.paragraphs?.map((paragraph, index) => <p key={index}>{paragraph}</p>)}{section.bullets && <ul>{section.bullets.map((item) => <li key={item}>{item}</li>)}</ul>}{section.definitions && <dl>{section.definitions.map((item) => <div key={item.term}><dt>{item.term}</dt><dd>{item.description}</dd></div>)}</dl>}{section.links?.map((link) => <p key={link.url}><a href={link.url} target="_blank" rel="noreferrer">{link.label}</a></p>)}{section.table && <table><thead><tr>{section.table.headers.map((header) => <th key={header}>{header}</th>)}</tr></thead><tbody>{section.table.rows.map((row, index) => <tr key={index}>{row.map((cell, cellIndex) => <td key={cellIndex}>{cell}</td>)}</tr>)}</tbody></table>}</section>; }
