## Current state

### React/shadcn pilot

The React app under `ui/` is currently a Help Browser pilot:

- `ui/src/main.tsx` mounts `WidgetBrowser` with only the `help` widget.
- `ui/src/mount.tsx` exposes `window.PixaromaReactUi.mountHelpBrowser(...)`.
- `ui/src/widget-browser.tsx` provides the sidebar/content shell and widget switching.
- `ui/src/components/ui/` contains a small local shadcn-style set:
  - `Button`
  - `Badge`
  - `Card`
  - `Input`
- There is no test runner or React testing dependency in `ui/package.json`.
- The UI currently uses local `px-*` CSS classes rather than the usual generated Tailwind/shadcn utility implementation.

The existing ComfyUI integration pattern is sound: imperative code creates an overlay/root and invokes a React mount API. The Prompt Library should follow the same pattern rather than making the React app aware of ComfyUI nodes or graph state.

### Existing Prompt Library

The current library implementation is split across:

- `js/prompt/library.mjs`
  - Synchronous initial GET through `XMLHttpRequest`
  - In-memory normalized cache
  - Debounced PUT persistence
  - Compatibility helpers used by prompt selectors
- `js/prompt/library_editor.mjs`
  - Large imperative fullscreen editor
  - Direct DOM creation and event wiring
  - Direct API calls
  - Search, tag filtering, folder tree, CRUD, import/export
  - Prompt insertion through `options.onInsert`
  - Graph undo guard lifecycle
- `nodes/_prompt_library.py`
  - Markdown frontmatter parser/renderer
  - Safe nested IDs such as `styles/cinematic`
  - Atomic writes
  - Whole-library synchronization
  - Legacy migration
- `server_routes.py`
  - Markdown library API:
    - `GET /pixaroma/api/prompt/library/markdown`
    - `PUT /pixaroma/api/prompt/library/markdown`
    - `POST /pixaroma/api/prompt/library/markdown`
    - `GET /pixaroma/api/prompt/library/markdown/{prompt_id}`
    - `DELETE /pixaroma/api/prompt/library/markdown/{prompt_id}`
    - `POST /pixaroma/api/prompt/library/markdown/refresh`
  - Per-user storage under `pixaroma/prompt-tags`
  - Path containment and validation at the server boundary
- `tests/test_prompt_library.py`
  - Strong Python coverage for parsing, paths, migration, synchronization, and invalid records
- `tests/test_prompt_library_ui.mjs`
  - Source-pattern test for the current imperative editor
- `tests/test_prompt_selectors.mjs`
  - Existing selector behavior coverage

The React migration should preserve the Markdown API and the selector-facing compatibility facade. The editor is a UI replacement, not a reason to move prompt expansion or persistence logic into React.

---

# Proposed migration tasks

## 1. Define the React feature and adapter boundary

Create a feature boundary such as:

```text
ui/src/features/prompt-library/
  PromptLibrary.tsx
  PromptLibraryShell.tsx
  PromptLibraryBrowser.tsx
  PromptLibraryEditor.tsx
  PromptLibraryToolbar.tsx
  PromptLibraryFilters.tsx
  PromptRecordForm.tsx
  PromptTagEditor.tsx
  PromptDeleteDialog.tsx
  PromptImportDialog.tsx
  PromptExportMenu.tsx
  prompt-library.types.ts
  prompt-library.adapter.ts
  prompt-library.reducer.ts
  prompt-library.utils.ts
  index.tsx
```

The feature should expose one widget definition:

```ts
export const widget = {
  id: "prompt-library",
  label: "Prompt Library",
  icon: "✦",
  order: 20,
  component: PromptLibrary,
};
```

Do not pass `app`, `node`, ComfyUI graph objects, or the global library cache into React components.

### Mount contract

Extend the React mount API with a narrow library-specific entry point:

```ts
export type PromptLibraryMountOptions = {
  accent?: string;
  prefill?: string;
  onInsert?: (value: string, symbol: "@" | "#") => void;
  onClose?: () => void;
  onDirtyChange?: (dirty: boolean) => void;
};

export type PixaromaReactUi = {
  mountHelpBrowser(...): () => void;
  mountPromptLibrary(
    container: HTMLElement,
    options?: PromptLibraryMountOptions,
  ): () => void;
};
```

The adapter should own the translation from legacy editor options to this contract.

The existing callers in:

- `js/prompt/index.js`
- `js/ai_prompt/ui.mjs`
- `js/music_prompt/ui.mjs`

should eventually invoke a shared bridge such as:

```js
openReactLibraryEditor(node, {
  prefill,
  accent,
  onInsert,
  onClose,
});
```

The bridge should continue to own:

- `installGraphUndoGuard`
- target-node tracking
- closing the editor for a particular node
- ComfyUI toast notifications
- insertion into the originating node

React should only receive `onInsert`, `onClose`, and display-oriented options.

---

## 2. Establish explicit domain types

Define a single TypeScript representation matching the normalized JavaScript library:

```ts
export type PromptId = string;

export type PromptRecord = {
  id: PromptId;
  path: string;
  name: string;
  tags: string[];
  body: string;
};

export type PromptLibrary = {
  version: 1;
  prompts: PromptRecord[];
};
```

Use separate types for drafts and API payloads:

```ts
export type PromptDraft = {
  id: string;
  name: string;
  tags: string[];
  body: string;
};

export type SavePromptRequest = PromptDraft & {
  previous_id?: string;
};
```

Do not use `Record<string, unknown>` for prompt records inside the feature. The current `WidgetBrowser` uses that shape for generic widgets, but Prompt Library needs a typed contract.

Normalization should be explicit and compatible with `library.mjs`:

- Ignore malformed records.
- Trim names and tags.
- Deduplicate prompt names case-insensitively.
- Deduplicate tags case-insensitively while preserving first-seen spelling.
- Remove a terminal `.md` from IDs in the UI model.
- Preserve nested paths.
- Treat missing bodies as empty strings.

---

## 3. Create a fetch-based persistence adapter

Add an adapter with injectable transport rather than making components call `fetch` directly:

```ts
export type PromptLibraryAdapter = {
  load(): Promise<PromptLibrary>;
  refresh(): Promise<PromptLibrary>;
  createOrUpdate(request: SavePromptRequest): Promise<PromptRecord>;
  delete(id: PromptId): Promise<void>;
  sync(library: PromptLibrary): Promise<void>;
};
```

Default implementation:

```ts
createPromptLibraryAdapter({
  baseUrl = "/pixaroma/api/prompt/library/markdown",
  fetchImpl = fetch,
});
```

The adapter should:

- Use asynchronous `fetch`.
- Check `response.ok`.
- Parse structured `{ error: string }` failures.
- Return normalized `PromptLibrary` and `PromptRecord` values.
- Encode IDs safely at the request boundary.
- Keep route details out of React components.
- Preserve server-authoritative IDs after rename.
- Support `AbortSignal` for refresh/search-related cancellation where useful.

Suggested route mapping:

| Adapter method | Endpoint |
|---|---|
| `load()` | `GET /pixaroma/api/prompt/library/markdown` |
| `refresh()` | `POST /pixaroma/api/prompt/library/markdown/refresh` |
| `createOrUpdate()` | `POST /pixaroma/api/prompt/library/markdown` |
| `delete(id)` | `DELETE /pixaroma/api/prompt/library/markdown/{id}` |
| `sync()` | `PUT /pixaroma/api/prompt/library/markdown` |

The adapter must not use the compatibility cache in `library.mjs`. Instead, after a successful mutation it should notify the legacy facade through an explicit bridge:

```ts
export type PromptLibraryEvents = {
  onLibraryChanged?: (library: PromptLibrary) => void;
};
```

The JavaScript bridge can translate that to:

```js
reloadLibrary();
notifyLibrary();
```

This avoids making the React feature depend on the internal implementation of `library.mjs`.

---

## 4. Keep `library.mjs` as the selector compatibility layer

Do not replace `library.mjs` in the first migration phase.

It still supplies:

- `getPrompts()`
- `findTag()`
- `promptsForTag()`
- `promptsForPath()`
- `getCategories()`
- selector subscriptions
- prompt expansion inputs

Recommended changes later, after React parity:

1. Extract shared normalization rules into a small standalone module.
2. Make both `library.mjs` and the React adapter use the same rules.
3. Replace synchronous XHR in `getLibrary()` with an initialization/bootstrap path only if selector timing permits it.
4. Keep `getLibrary()` synchronous for selectors until their initialization contract is deliberately redesigned.

The editor migration should not force a synchronous-to-asynchronous rewrite of prompt expansion.

---

## 5. Split the editor into behavioral component boundaries

### `PromptLibrary`

Owns feature state and lifecycle:

- loading/error/success state
- selected prompt ID
- query
- active tag
- collapsed folders
- dirty draft state
- mutation state
- refresh and mutation callbacks

Prefer `useReducer` over many independent state variables because the current editor has several linked transitions.

### `PromptLibraryShell`

Owns the fullscreen layout:

- top toolbar
- browser pane
- content pane
- footer
- modal/dialog outlet

It should not know how records are fetched or saved.

### `PromptLibraryToolbar`

Owns:

- search input
- New prompt
- Refresh
- Import
- Export
- Close

Suggested shadcn components:

- `Input`
- `Button`
- `Tooltip`
- `Separator`
- `DropdownMenu`
- `Badge`

### `PromptLibraryBrowser`

Owns the filtered navigation list and count.

Inputs:

```ts
type PromptLibraryBrowserProps = {
  prompts: PromptRecord[];
  selectedId: string | null;
  collapsedFolders: Set<string>;
  onSelect: (id: string) => void;
  onToggleFolder: (path: string) => void;
};
```

Use semantic buttons for rows and folders. The current imperative implementation uses clickable `div` rows; the React migration should improve keyboard behavior without changing selection semantics.

### `PromptLibraryFilters`

Owns:

- All tags control
- tag chips
- active tag state

It should receive computed tags and emit only `onTagChange`.

### `PromptRecordForm`

Owns draft editing:

- name
- relative path
- body
- tags
- validation display
- save/insert/export/delete actions

It should not perform API calls. Use an explicit save callback:

```ts
onSave: (draft: PromptDraft) => Promise<void>;
```

### `PromptTagEditor`

Owns:

- adding tags
- removing tags
- tag insertion callback
- case-insensitive duplicate prevention

It should preserve current behavior where clicking a tag inserts `#tag` into the originating Prompt node.

### `PromptDeleteDialog`

Use a shadcn/Radix alert dialog. Preserve the existing confirmation message and ensure deletion is not performed until confirmed.

### Import/export

Keep import/export isolated from the main form:

- `PromptImportDialog`
- `PromptExportMenu`

The current import implementation supports Markdown and JSON but has a separate, looser parser from Python. The migration should either:
1. preserve this behavior and test it, or
2. centralize the client-side Markdown parser against the server’s strict format.

Do not silently broaden import behavior during migration.

---

## 6. Add pure view-model utilities

Move non-React calculations out of components:

```ts
filterPrompts(prompts, query, activeTag): PromptRecord[];
collectTags(prompts): string[];
buildPromptTree(prompts): PromptTree;
flattenPromptTree(tree): PromptTreeRow[];
validatePromptDraft(draft): ValidationResult;
normalizePromptLibrary(raw): PromptLibrary;
```

`buildPromptTree()` should preserve the existing behavior:

- Nested IDs become folders.
- Root records appear before folders when sorted.
- Folder and file names sort case-insensitively.
- Collapsed folder state is keyed by normalized folder path.
- A record’s display name remains its frontmatter `name`, not its filename.

These utilities are the best place to get high-value tests without rendering the entire app.

---

## 7. Define persistence and mutation behavior

### Initial load

On mount:

1. Show loading state.
2. Call `adapter.load()`.
3. Select no record unless a prefill or initial ID is supplied.
4. Show a recoverable error with Retry if loading fails.

### Refresh

Refresh should:

1. Call the existing `POST .../refresh` endpoint.
2. Replace local records with the returned server state.
3. Preserve the selected ID if it still exists.
4. Clear the selected record if it was removed.
5. Preserve query and active tag.

### Save

Save should:

1. Validate name and path client-side for immediate feedback.
2. Send `previous_id` for rename support.
3. Let the server remain authoritative.
4. Replace the local record with the returned record.
5. Clear dirty state.
6. Notify the legacy selector facade.
7. Preserve the selected record under the returned ID.

Validation should mirror the current server contract but should not replace server validation:

- safe path components
- no duplicate path
- non-empty name
- string body
- string tags

### Delete

Delete should:

1. Open confirmation dialog.
2. Call the adapter only after confirmation.
3. Remove the selected record after success.
4. Notify the selector facade.
5. Preserve other filters and folder expansion state.
6. Surface a mutation error without losing the current draft.

### Dirty drafts

Do not write every keystroke to disk.

Keep the draft local until Save. Add:

- dirty indicator
- close confirmation if dirty
- reset/reload draft action if useful

The existing editor clones the selected record before editing, so this should remain the compatibility behavior.

---

## 8. Add the widget and mounting integration

Migration sequence:

1. Add `prompt-library` to `widget-registry` through `ui/src/features/prompt-library/index.tsx`.
2. Add `mountPromptLibrary()` to `ui/src/mount.tsx`.
3. Keep it out of the default Help Browser display initially unless the product wants it in the sidebar.
4. Add a dedicated imperative bridge in `js/prompt/` that creates the overlay root.
5. Replace `openLibraryEditor()` internals with the bridge.
6. Keep the old function name and exported close functions during the transition so the three existing node integrations do not change.

The React root should use the same `.pixaroma-react-root` overlay behavior as Help Browser. The Prompt Library should not depend on the generic `WidgetBrowser` sidebar if it is opened as a fullscreen editor from a node; it can use the feature shell directly.

A reasonable split is:

- `mountPromptLibrary()` for standalone/fullscreen editor use.
- `PromptLibrary` as the feature component.
- Optional widget registration later if Prompt Library becomes a top-level application surface.

---

# Test migration tasks

## 1. Add a frontend test runner

`ui/package.json` currently has only `build`, `dev`, and `typecheck`.

Add a test setup based on:

- Vitest
- jsdom
- React Testing Library
- `@testing-library/user-event`

Suggested scripts:

```json
{
  "test": "vitest run",
  "test:watch": "vitest",
  "typecheck": "tsc --noEmit"
}
```

If avoiding a new mocking dependency, inject `fetchImpl` into the adapter and use a small test fetch stub.

## 2. Adapter contract tests

Test:

- Successful GET normalization.
- Empty/null server response.
- Structured API errors.
- Save with `previous_id`.
- Rename response using the server-returned ID.
- Delete path encoding for nested IDs.
- Refresh endpoint.
- Sync payload shape.
- Non-JSON error responses.

These tests should run without a browser or ComfyUI.

## 3. Utility tests

Test:

- Case-insensitive query matching across name, tags, and body.
- Case-insensitive tag filtering.
- Tag deduplication.
- Nested folder tree construction.
- Root versus nested records.
- Stable sorting.
- Folder collapse path keys.
- Name/path validation.
- Draft cloning does not mutate stored records.

## 4. Component tests

Cover the user-visible behavior:

- Loading state.
- Retry after load failure.
- Empty library state.
- Selecting a row opens its editor.
- Selected row has accessible selected state.
- Search filters rows.
- Tag chip filters rows.
- Folder buttons expose `aria-expanded`.
- Collapsing a folder hides its descendants.
- Editing a draft does not mutate the list preview.
- Save invokes the adapter and updates the selected record.
- Rename sends `previous_id`.
- Delete requires confirmation.
- Cancelled delete does not call the adapter.
- Successful delete clears the editor.
- Clicking a tag invokes `onInsert(tag, "#")`.
- Insert button invokes `onInsert(id, "@")`.
- Close invokes `onClose`.
- Dirty close displays confirmation.

## 5. Compatibility tests

Keep or extend the existing source-pattern test only while the imperative editor exists. Once the React implementation is the active path, replace it with behavior-level tests.

Add an integration test around the bridge:

- `openLibraryEditor(node, options)` mounts React.
- `onInsert` reaches the originating node callback.
- `closeLibraryEditorFor(node)` unmounts only that node’s editor.
- Undo guard is installed while mounted and removed on close.
- Library changes call `reloadLibrary()` and `notifyLibrary()`.

## 6. Preserve Python/server coverage

The existing Python tests already cover most persistence invariants. Add route-level tests if the repository has an established aiohttp test pattern:

- Per-user root resolution.
- Markdown GET.
- POST create.
- POST rename and old-file removal.
- DELETE nested records.
- Refresh.
- Path traversal rejection.
- Invalid frontmatter handling.
- Duplicate IDs during sync.
- Atomic write behavior.

Do not move these tests into React. The server remains the owner of filesystem safety and Markdown persistence.

---

# Recommended implementation order

1. **Define types and adapter contract.**
2. **Implement and test normalization/tree/filter utilities.**
3. **Implement adapter with injectable fetch and tests.**
4. **Build static React shell and browser pane.**
5. **Build record form and tag editor.**
6. **Add dialogs and import/export.**
7. **Add `mountPromptLibrary()` to the React mount API.**
8. **Add the legacy bridge while keeping the imperative editor available behind a fallback.**
9. **Switch `openLibraryEditor()` to React for Prompt, AI Prompt, and Music Prompt.**
10. **Run parity tests against selector notifications and insertion callbacks.**
11. **Remove `library_editor.mjs` only after the fallback is no longer needed.**
12. **Keep `library.mjs` as the selector compatibility layer unless its synchronous initialization is separately redesigned.**

The main architectural rule should be: **React owns editor state and presentation; the adapter owns HTTP; Python owns filesystem and Markdown integrity; `library.mjs` owns selector compatibility and prompt expansion.**

---

# Markdown-backed prompt records

The prompt library must support loading the existing Markdown tree before the React editor replaces the imperative editor. The current user library is a symlink to a shared tag tree containing 416 Markdown records. Every record has YAML-style frontmatter with `name` and `tags`, followed by a non-empty body. Records are nested under categories such as `styles/camera`, `subject/hairstyles`, `room/featureless`, `nationality`, and `nsfw`.

The Markdown format is the source of truth for this migration. Do not reduce records to the legacy JSON shape before the React feature receives them.

## Markdown record contract

Add a typed record that preserves storage identity and display metadata:

```ts
export type PromptRecord = {
  id: string;              // normalized relative path without .md
  sourcePath: string;      // e.g. styles/camera/close-up.md
  name: string;            // frontmatter display name
  tags: string[];
  body: string;
  category: string;        // first path component
  folders: string[];       // path components including category
  filename: string;
  kind: "text" | "list";
  prefix?: "@" | "#" | "$" | "&";
};
```

Identity comes from the normalized relative path, not `name` or the filename stem. Existing records already contain display-name/filename differences, so the UI must preserve both values. A rename must distinguish changing the display name from changing the source path and must send `previous_id` for path changes.

## Markdown parser boundary

Add a pure parser/renderer outside React, for example `prompt-markdown.ts`:

```ts
parsePromptMarkdown(sourcePath: string, source: string): PromptRecord;
parsePromptLibraryResponse(raw: unknown): PromptLibrary;
renderPromptMarkdown(record: PromptRecord): string;
```

The parser must:

- require frontmatter delimiters and `name`;
- parse YAML tag lists;
- preserve multiline body text and documented newline normalization;
- derive category and folders from the relative path;
- preserve display names that differ from filenames;
- reject malformed records with a path-specific error;
- avoid silently turning malformed records into empty prompts;
- preserve unknown frontmatter fields when round-tripping is required.

`styles/manifest.json` is category metadata, not a prompt record. Missing or incomplete manifest metadata must not prevent Markdown records from loading.

## Read-only migration milestone

Before implementing create, update, or delete, add a read-only milestone:

- load all records from the Markdown endpoint;
- render nested records in the correct folder tree;
- use frontmatter names for display;
- use relative paths for IDs;
- preserve bodies and tags;
- support search and tag filtering;
- report malformed records without crashing the entire library;
- refresh from server-authoritative state;
- avoid silently falling back to the JSON-only library.

Do not switch the editor until this milestone can load the existing user tree without losing path, frontmatter, body, tags, or category information.

## Prefix and selector compatibility

The current expansion code defines `@` as a text/snippet tag, `#` as a list tag, and `*` as wildcard syntax. The Markdown tree currently contains no stored `@`, `#`, or `$` prefixes, so prefix semantics must not be inferred from the current files.

Preserve the existing selector mapping:

- text records insert as `@name`;
- list records insert as `#name`;
- wildcard expansion remains owned by `expand.mjs`;
- React does not implement prompt expansion.

The requested `$` and `&` prefixes require an explicit compatibility decision. Before saving or expanding them, define whether they are stored record kinds, insertion modes, or body syntax. Until then, preserve any such metadata without inventing behavior.

## Real-library fixtures and tests

Build fixtures from the existing tree, including:

- `nationality/american.md`;
- `styles/camera/close-up.md`;
- a record whose frontmatter name differs from its filename;
- a multiline body;
- `styles/manifest.json` present and absent;
- malformed frontmatter;
- missing tags;
- duplicate IDs;
- nested path traversal attempts.

Test Markdown GET normalization, recursive records, category/folder extraction, multiline preservation, display-name identity, refresh, server-authoritative renames, and round-trip rendering. Add compatibility tests proving `@` and `#` mapping to the existing selector facade and explicit tests for the eventual `$`/`&` decision.

## API and sequencing constraints

Document whether the Markdown API returns raw documents, normalized records, or both. The normalized response must include `id`, `sourcePath`, frontmatter-derived metadata, body, and category/folder information. Recursive scanning, path containment, symlink/user-root handling, and atomic writes remain server responsibilities.

Revise the implementation order to:

1. Define the Markdown record contract and prefix decision.
2. Implement parser, renderer, and real-library fixtures.
3. Add a read-only Markdown adapter and normalization tests.
4. Build React loading, tree, search, and filter behavior.
5. Add selector compatibility mapping and refresh.
6. Add save, rename, and delete only after round-trip tests pass.
7. Add the imperative bridge and switch callers.
8. Remove the old editor only after Markdown parity and insertion compatibility are proven.
