import { useState } from "react";
import { ChevronDown, ChevronRight, Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle } from "@/components/ui/drawer";
import { Empty, EmptyDescription, EmptyHeader, EmptyTitle } from "@/components/ui/empty";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";
import { type PromptTreeNode } from "./prompt-library-view-model";
import type { PromptDraft, PromptLibraryParseError } from "./prompt-library.types";

export function LibraryLoading() {
  return <div className="px-prompt-library-state" role="status"><Spinner /> Loading prompt library…</div>;
}

export function LibraryEmpty({ onCreate }: { onCreate: () => void }) {
  return <Empty className="px-prompt-empty-state">
    <EmptyHeader>
      <EmptyTitle>No prompts yet</EmptyTitle>
      <EmptyDescription>Create a prompt to start building your reusable library.</EmptyDescription>
    </EmptyHeader>
    <Button onClick={onCreate}>Create prompt</Button>
  </Empty>;
}

export function PromptLibraryToolbar({ query, onQueryChange, tags, activeTag, onTagChange }: {
  query: string; onQueryChange: (value: string) => void; tags: string[]; activeTag: string | null; onTagChange: (tag: string | null) => void;
}) {
  return <div className="px-prompt-library-toolbar">
    <div className="px-prompt-search"><Search size={15} />
      <Input type="search" value={query} onChange={(e) => onQueryChange(e.target.value)} placeholder="Search prompts" aria-label="Search prompts" />
      {query && <Button variant="ghost" size="icon" onClick={() => onQueryChange("")} aria-label="Clear search"><X size={15} /></Button>}
    </div>
    <div className="px-prompt-tags" aria-label="Filter by tag">
      <Button variant={activeTag ? "outline" : "secondary"} size="sm" onClick={() => onTagChange(null)}>All tags</Button>
      {tags.map((tag) => <Button key={tag} variant={activeTag === tag ? "default" : "outline"} size="sm" onClick={() => onTagChange(activeTag === tag ? null : tag)}>{tag}</Button>)}
    </div>
  </div>;
}

export function PromptTree({ tree, collapsed, selectedId, onToggle, onSelect }: {
  tree: PromptTreeNode[]; collapsed: Set<string>; selectedId: string | null; onToggle: (key: string) => void; onSelect: (id: string) => void;
}) {
  return <nav className="px-prompt-tree" aria-label="Prompt folders">
    {tree.map((node) => <TreeNode key={node.kind === "folder" ? node.key : node.prompt.id} node={node} collapsed={collapsed} selectedId={selectedId} onToggle={onToggle} onSelect={onSelect} />)}
  </nav>;
}
function TreeNode({ node, collapsed, selectedId, onToggle, onSelect }: { node: PromptTreeNode; collapsed: Set<string>; selectedId: string | null; onToggle: (key: string) => void; onSelect: (id: string) => void }) {
  if (node.kind === "prompt") return <button className="px-prompt-row" type="button" aria-selected={selectedId === node.prompt.id} onClick={() => onSelect(node.prompt.id)}>
    <span>{node.prompt.name}</span><small>{node.prompt.filename}</small>
  </button>;
  const closed = collapsed.has(node.key);
  return <div className="px-prompt-folder">
    <button className="px-prompt-folder-row" type="button" aria-expanded={!closed} onClick={() => onToggle(node.key)}>{closed ? <ChevronRight size={14} /> : <ChevronDown size={14} />}{node.label}</button>
    {!closed && <div className="px-prompt-children">{node.prompts.map((p) => <TreeNode key={p.prompt.id} node={p} collapsed={collapsed} selectedId={selectedId} onToggle={onToggle} onSelect={onSelect} />)}{node.folders.map((f) => <TreeNode key={f.key} node={f} collapsed={collapsed} selectedId={selectedId} onToggle={onToggle} onSelect={onSelect} />)}</div>}
  </div>;
}

export function PromptEditorDrawer({ draft, open, onOpenChange, onChange, onSave, onDelete, onImport, onExport, onInsert, canDelete, mutating }: {
  draft: PromptDraft | null; open: boolean; onOpenChange: (open: boolean) => void; onChange: (draft: PromptDraft) => void; onSave: () => void; onDelete: () => void; onImport: () => void; onExport: () => void; onInsert?: (value: string, symbol: "@" | "#") => void; canDelete: boolean; mutating: boolean;
}) {
  if (!draft) return null;
  return <Drawer open={open} onOpenChange={onOpenChange}>
    <DrawerContent className="px-prompt-editor-drawer">
      <DrawerHeader><DrawerTitle>{canDelete ? "Edit prompt" : "New prompt"}</DrawerTitle><DrawerDescription>Shape the prompt, then save it to your library.</DrawerDescription></DrawerHeader>
      <PromptForm draft={draft} onChange={onChange} onSave={onSave} onDelete={onDelete} onImport={onImport} onExport={onExport} onInsert={onInsert} canDelete={canDelete} mutating={mutating} />
    </DrawerContent>
  </Drawer>;
}
function PromptForm({ draft, onChange, onSave, onDelete, onImport, onExport, onInsert, canDelete, mutating }: { draft: PromptDraft; onChange: (draft: PromptDraft) => void; onSave: () => void; onDelete: () => void; onImport: () => void; onExport: () => void; onInsert?: (value: string, symbol: "@" | "#") => void; canDelete: boolean; mutating: boolean }) {
  const patch = (value: Partial<PromptDraft>) => onChange({ ...draft, ...value });
  return <div className="px-prompt-editor">
    <Field><FieldLabel htmlFor="prompt-name">Name</FieldLabel><Input id="prompt-name" value={draft.name} onChange={(e) => patch({ name: e.target.value })} /></Field>
    <Field><FieldLabel htmlFor="prompt-path">Path</FieldLabel><Input id="prompt-path" value={draft.sourcePath} onChange={(e) => { const sourcePath = e.target.value; patch({ sourcePath, id: sourcePath.endsWith(".md") ? sourcePath.slice(0, -3) : sourcePath }); }} /></Field>
    <Field><FieldLabel htmlFor="prompt-body">Body</FieldLabel><textarea id="prompt-body" value={draft.body} onChange={(e) => patch({ body: e.target.value })} /></Field>
    <TagEditor tags={draft.tags} onChange={(tags) => patch({ tags })} onInsert={onInsert} />
    <DrawerFooter><Button onClick={onSave} disabled={mutating}>{mutating ? <><Spinner /> Saving…</> : "Save"}</Button><Button variant="secondary" onClick={() => onInsert?.(draft.id, draft.kind === "list" ? "#" : "@")} disabled={!onInsert}>Insert</Button><Button variant="outline" onClick={onImport}>Import</Button><Button variant="outline" onClick={onExport}>Export</Button>{canDelete && <Button variant="secondary" onClick={onDelete}>Delete</Button>}</DrawerFooter>
  </div>;
}
function TagEditor({ tags, onChange, onInsert }: { tags: string[]; onChange: (tags: string[]) => void; onInsert?: (value: string, symbol: "@" | "#") => void }) {
  const [value, setValue] = useState("");
  return <Field><FieldLabel htmlFor="prompt-tags">Tags</FieldLabel><Input id="prompt-tags" value={value} placeholder="Type a tag and press Enter" onChange={(e) => setValue(e.target.value)} onKeyDown={(e) => { if (e.key !== "Enter") return; e.preventDefault(); const tag = value.trim(); if (tag && !tags.some((item) => item.toLocaleLowerCase() === tag.toLocaleLowerCase())) onChange([...tags, tag]); setValue(""); }} /><div className="px-prompt-edit-tags">{tags.map((tag) => <Button key={tag} type="button" variant="outline" size="sm" onClick={() => onInsert?.(tag, "#")}>{tag}</Button>)}</div></Field>;
}

export function PromptLibraryErrors({ errors }: { errors: PromptLibraryParseError[] }) {
  return errors.length ? <ul aria-label="Prompt library record errors">{errors.map((e, i) => <li key={`${e.sourcePath}-${i}`}><code>{e.sourcePath}</code>: {e.message}</li>)}</ul> : null;
}
