import { useEffect, useMemo, useState } from "react";
import { RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle } from "@/components/ui/drawer";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { buildPromptTree, collectTags, filterPrompts, validatePromptDraft } from "./prompt-library-view-model";
import type { PromptLibraryAdapter } from "./prompt-library.adapter";
import type { PromptCreateRequest, PromptDraft, PromptLibrary as PromptLibraryData, PromptLibraryParseError, PromptRecord, PromptUpdateRequest } from "./prompt-library.types";
import { LibraryEmpty, LibraryLoading, PromptEditorDrawer, PromptLibraryErrors, PromptLibraryToolbar, PromptTree } from "./prompt-library-components";

export type PromptLibraryProps = { adapter: PromptLibraryAdapter; initialLibrary?: PromptLibraryData; prefill?: string; onInsert?: (value: string, symbol: "@" | "#") => void; onClose?: () => void; onDirtyChange?: (dirty: boolean) => void };
type Dialog = "delete" | "dirty" | "import" | "export" | null;
const toDraft = (p: PromptRecord): PromptDraft => ({ id: p.id, sourcePath: p.sourcePath, name: p.name, tags: [...p.tags], body: p.body, kind: p.kind, prefix: p.prefix === "@" || p.prefix === "#" ? p.prefix : undefined, storedPrefix: p.prefix === "$" || p.prefix === "&" ? p.prefix : undefined });
const emptyDraft = (prefill = ""): PromptDraft => ({ id: "new-prompt", sourcePath: "new-prompt.md", name: "New prompt", tags: [], body: prefill, kind: "text", prefix: "@" });

function importedDraft(value: unknown): PromptDraft {
  if (!value || typeof value !== "object") throw new Error("Import must contain a prompt draft or record JSON");
  const input = value as Record<string, unknown>;
  const draft: PromptDraft = { id: typeof input.id === "string" ? input.id : "", sourcePath: typeof input.sourcePath === "string" ? input.sourcePath : "", name: typeof input.name === "string" ? input.name : "", tags: Array.isArray(input.tags) ? input.tags.filter((tag): tag is string => typeof tag === "string") : [], body: typeof input.body === "string" ? input.body : "", kind: input.kind === "list" ? "list" : "text", prefix: input.prefix === "#" ? "#" : input.prefix === "@" ? "@" : undefined, storedPrefix: input.prefix === "$" || input.prefix === "&" ? input.prefix : input.storedPrefix === "$" || input.storedPrefix === "&" ? input.storedPrefix : undefined };
  const errors = validatePromptDraft(draft);
  if (typeof input.id !== "string" || typeof input.sourcePath !== "string" || typeof input.name !== "string" || typeof input.body !== "string" || !Array.isArray(input.tags) || input.tags.some((tag) => typeof tag !== "string") || (input.kind !== "text" && input.kind !== "list") || (input.prefix !== undefined && !["@", "#", "$", "&"].includes(input.prefix as string)) || (input.storedPrefix !== undefined && input.storedPrefix !== "$" && input.storedPrefix !== "&")) errors.push("fields");
  if (errors.length) throw new Error(`Import contains invalid prompt data: ${[...new Set(errors)].join(", ")}`);
  return draft;
}

export function PromptLibrary({ adapter, initialLibrary, prefill, onInsert, onClose, onDirtyChange }: PromptLibraryProps) {
  const [library, setLibrary] = useState<PromptLibraryData | null>(initialLibrary ?? null);
  const [loading, setLoading] = useState(!initialLibrary), [error, setError] = useState<Error | null>(null), [loadErrors, setLoadErrors] = useState<PromptLibraryParseError[]>([]);
  const [query, setQuery] = useState(""), [activeTag, setActiveTag] = useState<string | null>(null), [selectedId, setSelectedId] = useState<string | null>(null), [collapsed, setCollapsed] = useState<Set<string>>(new Set());
  const [refreshing, setRefreshing] = useState(false), [mutating, setMutating] = useState(false), [draft, setDraft] = useState<PromptDraft | null>(prefill ? emptyDraft(prefill) : null), [saved, setSaved] = useState<PromptDraft | null>(null), [dialog, setDialog] = useState<Dialog>(null), [mutationError, setMutationError] = useState<string | null>(null), [importText, setImportText] = useState(""), [closeAfterDiscard, setCloseAfterDiscard] = useState(false);
  const prompts = library?.prompts ?? [];
  const filtered = useMemo(() => filterPrompts(prompts, query, activeTag ? [activeTag] : []), [prompts, query, activeTag]);
  const tags = useMemo(() => collectTags(prompts), [prompts]), tree = useMemo(() => buildPromptTree(filtered), [filtered]);
  const dirty = draft !== null && JSON.stringify(draft) !== JSON.stringify(saved);

  const load = async () => { setLoading(true); setError(null); try { const next = await adapter.load(); setLibrary(next.library); setLoadErrors(next.errors); } catch (reason) { setError(reason instanceof Error ? reason : new Error(String(reason))); } finally { setLoading(false); } };
  useEffect(() => { if (!initialLibrary) void load(); }, [adapter, initialLibrary]);
  useEffect(() => { onDirtyChange?.(dirty); }, [dirty, onDirtyChange]);

  const refresh = async () => { setRefreshing(true); try { const next = await adapter.refresh(); setLibrary(next.library); setLoadErrors(next.errors); if (selectedId && !next.library.prompts.some((p) => p.id === selectedId)) { setSelectedId(null); setSaved(null); if (dirty) setMutationError("The selected prompt is no longer on the server. Your draft is preserved. Discard it before reloading."); else setDraft(null); } } catch (reason) { setError(reason instanceof Error ? reason : new Error(String(reason))); } finally { setRefreshing(false); } };
  const openPrompt = (id: string) => { if (dirty) return setDialog("dirty"); const prompt = prompts.find((item) => item.id === id); if (prompt) { const next = toDraft(prompt); setSelectedId(id); setDraft(next); setSaved(next); setMutationError(null); } };
  const newPrompt = () => { if (dirty) return setDialog("dirty"); setDraft(emptyDraft(prefill)); setSaved(null); setSelectedId(null); setMutationError(null); };
  const closeEditor = () => { if (dirty) { setCloseAfterDiscard(false); setDialog("dirty"); } else { setDraft(null); setSaved(null); setSelectedId(null); } };
  const save = async () => { if (!draft) return; const invalid = validatePromptDraft(draft); if (invalid.length) return setMutationError(`Please fix: ${invalid.join(", ")}`); setMutating(true); setMutationError(null); const { storedPrefix, ...draftRequest } = draft; const request: PromptCreateRequest | PromptUpdateRequest = saved ? { ...draftRequest, ...(storedPrefix ? { prefix: storedPrefix } : {}), previous_id: saved.id } : draftRequest; try { const record = await adapter.save(request); const next = toDraft(record); setLibrary((current) => ({ version: 1, prompts: [...(current?.prompts ?? []).filter((p) => p.id !== saved?.id && p.id !== record.id), record] })); setSelectedId(record.id); setDraft(next); setSaved(next); await refresh(); } catch (reason) { setMutationError(reason instanceof Error ? reason.message : String(reason)); } finally { setMutating(false); } };
  const remove = async () => { if (!selectedId) return; setMutating(true); try { await adapter.delete(selectedId); setLibrary((current) => current && { ...current, prompts: current.prompts.filter((p) => p.id !== selectedId) }); setDraft(null); setSaved(null); setSelectedId(null); setDialog(null); } catch (reason) { setMutationError(reason instanceof Error ? reason.message : String(reason)); } finally { setMutating(false); } };
  const discardChanges = () => { setDialog(null); if (closeAfterDiscard) { setDraft(null); setSaved(null); setSelectedId(null); setCloseAfterDiscard(false); } else setDraft(saved); };

  if (loading) return <Drawer open><DrawerContent className="px-prompt-library-drawer"><LibraryLoading /></DrawerContent></Drawer>;
  if (error && !library) return <Drawer open><DrawerContent className="px-prompt-library-drawer"><div className="px-prompt-library-state" role="alert"><p>Unable to load the prompt library: {error.message}</p><PromptLibraryErrors errors={loadErrors} /><Button onClick={() => void load()}>Retry</Button></div></DrawerContent></Drawer>;
  return <Drawer open onOpenChange={(open: boolean) => { if (!open) { if (dirty) { setCloseAfterDiscard(true); setDialog("dirty"); } else onClose?.(); } }}>
    <DrawerContent className="px-prompt-library-drawer">
      <DrawerHeader className="px-prompt-library-header"><div><DrawerTitle>Prompt Library</DrawerTitle><DrawerDescription>{filtered.length} of {prompts.length} prompts{dirty && " • Unsaved changes"}</DrawerDescription></div><div className="px-prompt-actions"><Button onClick={newPrompt}>New prompt</Button><Button variant="secondary" onClick={() => void refresh()} disabled={refreshing}><RefreshCw size={15} className={refreshing ? "px-spin" : undefined} />{refreshing ? "Refreshing…" : "Refresh"}</Button><Button variant="ghost" onClick={() => { if (dirty) { setCloseAfterDiscard(true); setDialog("dirty"); } else onClose?.(); }}>Close</Button></div></DrawerHeader>
      <PromptLibraryToolbar query={query} onQueryChange={setQuery} tags={tags} activeTag={activeTag} onTagChange={setActiveTag} />
      {(error || loadErrors.length || mutationError) ? <div className="px-prompt-inline-error" role="alert">{error && <p>{error.message}</p>}{mutationError && <p>{mutationError}</p>}<PromptLibraryErrors errors={loadErrors} /></div> : null}
      <div className="px-prompt-library-body">{!prompts.length ? <LibraryEmpty onCreate={newPrompt} /> : !filtered.length ? <div className="px-prompt-empty-state">No prompts match these filters.</div> : <PromptTree tree={tree} collapsed={collapsed} selectedId={selectedId} onToggle={(key) => setCollapsed((old) => { const next = new Set(old); next.has(key) ? next.delete(key) : next.add(key); return next; })} onSelect={openPrompt} />}</div>
      <PromptEditorDrawer draft={draft} open={Boolean(draft)} onOpenChange={(open: boolean) => { if (!open) closeEditor(); }} onChange={setDraft} onSave={() => void save()} onDelete={() => setDialog("delete")} onImport={() => setDialog("import")} onExport={() => setDialog("export")} onInsert={onInsert} canDelete={Boolean(saved)} mutating={mutating} />
    </DrawerContent>
    <PromptDialogs dialog={dialog} draft={draft} importText={importText} mutating={mutating} onDialog={setDialog} onImportText={setImportText} onImport={() => { try { setDraft(importedDraft(JSON.parse(importText))); setSaved(null); setDialog(null); setMutationError(null); } catch (reason) { setMutationError(reason instanceof Error ? reason.message : "Import must contain valid prompt JSON"); } }} onDelete={() => void remove()} onDiscard={discardChanges} />
  </Drawer>;
}

function PromptDialogs({ dialog, draft, importText, mutating, onDialog, onImportText, onImport, onDelete, onDiscard }: { dialog: Dialog; draft: PromptDraft | null; importText: string; mutating: boolean; onDialog: (dialog: Dialog) => void; onImportText: (value: string) => void; onImport: () => void; onDelete: () => void; onDiscard: () => void }) {
  return <Dialog open={dialog !== null} onOpenChange={(open: boolean) => !open && onDialog(null)}><DialogContent><DialogHeader><DialogTitle>{dialog === "delete" ? "Delete prompt" : dialog === "dirty" ? "Unsaved changes" : dialog === "import" ? "Import prompt" : "Export prompt"}</DialogTitle><DialogDescription>{dialog === "delete" ? `Delete “${draft?.name}”? This action cannot be undone.` : dialog === "dirty" ? "Your draft has unsaved changes." : dialog === "import" ? "Paste a prompt draft or record as JSON." : "Copy this prompt JSON for use elsewhere."}</DialogDescription></DialogHeader>{dialog === "import" && <textarea aria-label="Import prompt JSON" value={importText} onChange={(e) => onImportText(e.target.value)} />}{dialog === "export" && <textarea aria-label="Export prompt JSON" readOnly value={JSON.stringify(draft, null, 2)} />}{dialog === "dirty" && <Button onClick={onDiscard}>Discard changes</Button>}{dialog === "delete" && <Button variant="secondary" onClick={onDelete} disabled={mutating}>Delete</Button>}{dialog === "import" && <Button onClick={onImport}>Load draft</Button>}<DialogFooter><Button variant="ghost" onClick={() => onDialog(null)}>Cancel</Button></DialogFooter></DialogContent></Dialog>;
}
