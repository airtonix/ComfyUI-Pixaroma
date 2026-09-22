## Current state

### React pilot

The React surface is currently limited to Help:

- `ui/src/features/help/HelpBrowser.tsx`
- `ui/src/features/help/data.ts`
- `ui/src/mount.tsx`
- `ui/src/widget-browser.tsx`
- `ui/src/components/ui/{button,badge,card,input}.tsx`
- `ui/src/styles.css`

The existing pilot already establishes useful patterns:

- Vite build emits to `js/react/`.
- `mount.tsx` exposes `window.PixaromaReactUi`.
- `WidgetBrowser` provides a feature registry and mountable widget surface.
- Help is passed a normalized view model rather than directly consuming the legacy registry.
- CSS is injected once and the React root is independently mounted/unmounted.
- `npm --prefix ui run typecheck` currently passes.

The “shadcn” layer is presently a small local compatibility layer. The components use shadcn conventions—Radix Slot, CVA, `cn`, Lucide—but the actual visual system is custom Pixaroma CSS rather than stock Tailwind/shadcn styling.

### Current workflow browser

The workflow browser is still entirely imperative and spread across:

- `js/workflow_browser/index.js`
  - global mutable state object `S`
  - loading, filtering, selection, keyboard handling, dialogs, actions, and lifecycle
- `api.mjs`
  - the existing ComfyUI/server integration boundary
- `window.mjs`
  - floating window, resize/drag behavior, focus restoration, toast handling, modal behavior
- `grid.mjs`
  - cards/list rows, inline rename persistence, drag initiation
- `folders.mjs`
  - folder tree, folder ordering, folder rename, drop targets
- `detail.mjs`
  - selected workflow details, notes, actions, model/LoRA list
- `tidy.mjs`
  - unsaved names, duplicate groups, missing-node review
- `search.mjs`
  - weighted relevance search
- `cover.mjs`
  - graph-map rendering, hand covers, output-cover capture
- `drag.mjs`
  - global stray-drop protection
- `css.mjs`
  - the complete workflow-browser visual system
- `js/help_browser/index.js`
  - demonstrates how a legacy browser can switch to the React mount, but the workflow browser has no equivalent adapter yet.

The workflow implementation contains a substantial amount of hard-won behavior around:

- preserving unsaved workflow edits
- ComfyUI workflow-store synchronization
- temporary workflow save-as
- bookmark loading before toggling favourites
- stale index handling
- path-safe rename/move behavior
- duplicate deletion confirmation
- drag/drop safety
- rename preservation across re-renders
- focus and keyboard behavior
- folder-order write serialization
- cover fallback and output capture

Those behaviors should be treated as compatibility requirements, not incidental implementation details.

---

# Recommended component boundaries

Use a feature-local structure rather than putting workflow code into the generic `WidgetBrowser` abstraction too early.

```text
ui/src/
  app/
    PixaromaApp.tsx
    mount.tsx
  components/ui/
    ...
  features/
    help/
      ...
    workflows/
      components/
        WorkflowBrowser.tsx
        WorkflowToolbar.tsx
        WorkflowSidebar.tsx
        ShortcutList.tsx
        FolderTree.tsx
        CollectionList.tsx
        WorkflowGrid.tsx
        WorkflowList.tsx
        WorkflowCard.tsx
        WorkflowRow.tsx
        WorkflowDetail.tsx
        TidyView.tsx
        WorkflowCover.tsx
        WorkflowContextMenu.tsx
        ConfirmDialog.tsx
        RenameField.tsx
        ResizeHandle.tsx
      hooks/
        useWorkflowBrowser.ts
        useWorkflowData.ts
        useWorkflowSelection.ts
        useWorkflowKeyboard.ts
        useWorkflowDragDrop.ts
        useWorkflowPanel.ts
      model/
        types.ts
        selectors.ts
        search.ts
        folders.ts
        tidy.ts
        covers.ts
      adapters/
        workflowApi.ts
        comfyWorkflowStore.ts
        comfyRuntime.ts
      index.tsx
  adapters/
    comfy/
      apiUrl.ts
      app.ts
      bookmarks.ts
```

## Component responsibilities

### `WorkflowBrowser`

Owns the browser-level composition:

- selected view
- toolbar
- sidebar
- main content
- optional detail pane
- modal portal
- responsive/narrow layout

It should not directly call `fetch`, `app.loadGraphData`, Pinia, or `window.LiteGraph`.

### `WorkflowToolbar`

Owns:

- search input
- grid/list toggle
- sort selector
- density selector
- save-current-workflow action
- close button
- result count

Inputs and callbacks should be explicit:

```ts
type WorkflowToolbarProps = {
  query: string;
  sort: WorkflowSort;
  view: WorkflowView;
  density: WorkflowDensity;
  resultCount: number;
  totalCount: number;
  onQueryChange: (query: string) => void;
  onSortChange: (sort: WorkflowSort) => void;
  onViewChange: (view: WorkflowView) => void;
  onDensityChange: (density: WorkflowDensity) => void;
  onSaveCurrent: () => void;
  onClose: () => void;
};
```

### `WorkflowSidebar`

Renders only navigation state:

- All workflows
- Favourites
- Recent
- Needs tidying
- folders
- collections

Folder mutations should be dispatched through callbacks, not implemented inside the tree renderer.

### `WorkflowGrid` / `WorkflowList`

Both should consume the same `WorkflowEntry` and selection/action model.

Do not duplicate action logic between grid and list. The card and row components should call shared handlers:

- select
- open
- favourite
- context menu
- start drag
- rename

### `WorkflowDetail`

Owns selected workflow presentation and action controls:

- cover
- path/status
- node count
- missing nodes
- note editor
- model/LoRA list
- open/favourite/rename/duplicate/cover/reveal/delete actions

The note editor should receive a controlled value and an explicit save callback. The debounce/flush behavior belongs in a hook or controller, not in the presentational component.

### `TidyView`

Consumes derived issue groups:

- unsaved names
- duplicates
- missing nodes

It should not know how deletion, rename, or clipboard operations work. It only emits intent callbacks.

### `WorkflowCover`

Use a single React component for both grid and detail contexts:

- hand-selected image
- output image
- graph-map canvas fallback
- broken-image fallback

The graph-map drawing code can initially remain in a small adapter/helper, but it should be made lifecycle-safe with `useEffect`/`useLayoutEffect` and cleanup.

---

# Data model to introduce

Create typed React-facing types rather than passing the legacy `S` object into components.

```ts
type WorkflowEntry = {
  rel: string;
  name: string;
  folder?: string;
  modified?: number;
  node_count?: number;
  error?: string;
  models?: string[];
  loras?: string[];
  class_types?: string[];
  text?: string;
  map?: GraphMapEntry[];
  note?: string;
  missingNodes?: string[];
};

type WorkflowFolder = string;

type WorkflowCollection = {
  id: string;
  label: string;
  group: "kind" | "model";
  count: number;
  items: string[];
};

type WorkflowSelection =
  | { kind: "all" }
  | { kind: "fav" }
  | { kind: "recent" }
  | { kind: "tidy" }
  | { kind: "folder"; value: string }
  | { kind: "collection"; value: string };

type WorkflowBrowserState = {
  entries: WorkflowEntry[];
  folders: string[];
  collections: WorkflowCollection[];
  issues: WorkflowIssues;
  meta: WorkflowMeta;
  favourites: Set<string>;
  openPaths: string[];
  selection: WorkflowSelection;
  selected: Set<string>;
  query: string;
  sort: WorkflowSort;
  view: WorkflowView;
  density: WorkflowDensity;
};
```

Avoid exposing legacy private fields such as `_note` and `_missing` to React components. Normalize those at the adapter boundary.

---

# ComfyUI adapter boundaries

The existing `js/workflow_browser/api.mjs` is already the correct conceptual boundary. Preserve its behavior and either:

1. expose it to React through a small bridge, or
2. port it into typed TypeScript without changing its observable behavior.

Do not let React components import `/scripts/app.js`, `/scripts/api.js`, or access Pinia directly.

## Recommended adapter interfaces

### `WorkflowRepository`

Wraps Pixaroma server routes:

```ts
interface WorkflowRepository {
  fetchIndex(): Promise<WorkflowIndex>;
  fetchMeta(): Promise<WorkflowMetaResponse>;
  saveMeta(patch: WorkflowMetaPatch): Promise<WorkflowMetaResponse>;
  folderAction(body: FolderAction): Promise<unknown>;
  reveal(path: string): Promise<unknown>;
  setCover(rel: string, dataUrl: string): Promise<CoverResponse>;
  clearCover(rel: string): Promise<unknown>;
}
```

This owns:

- `/pixaroma/api/workflows/index`
- `/pixaroma/api/workflows/meta`
- folder actions
- reveal
- cover upload/removal
- API URL wrapping through `pixApiUrl`

### `ComfyWorkflowStore`

Wraps `app.extensionManager.workflow`:

```ts
interface ComfyWorkflowStore {
  activePath(): string;
  openPaths(): string[];
  isModified(rel: string): boolean;
  openWorkflow(rel: string): Promise<void>;
  renameWorkflow(rel: string, newRel: string): Promise<void>;
  removeWorkflow(rel: string): Promise<void>;
  duplicateWorkflow(rel: string, newRel: string): Promise<void>;
  saveCurrentAs(newRel: string): Promise<void>;
  sync(): Promise<void>;
}
```

This adapter must preserve the current critical rules:

- never call `load({ force: true })`
- use `wf.activeState` with `app.loadGraphData`
- sync before retrying a missing store workflow
- handle temporary workflows specially in save-as
- preserve modified/open-tab state
- use ComfyUI’s bookmark store rather than writing `.index.json`

### `WorkflowRuntime`

Wraps browser/runtime-only capabilities:

```ts
interface WorkflowRuntime {
  registeredNodeTypes(): Record<string, unknown> | null;
  copyText(text: string): Promise<boolean>;
  pickCoverFile(): Promise<File | null>;
  revealExternalPath(path: string): Promise<void>;
  subscribeToExecuted(
    listener: (event: ExecutedEvent) => void,
  ): () => void;
}
```

This keeps `window.LiteGraph`, clipboard fallback, file pickers, and ComfyUI execution events out of React components.

### Mount bridge

Add a second public mount entry point alongside `mountHelpBrowser`:

```ts
mountWorkflowBrowser(
  container: HTMLElement,
  options?: WorkflowMountOptions,
): () => void;
```

The legacy `js/workflow_browser/index.js` should initially:

- create the floating container
- call `window.PixaromaReactUi.mountWorkflowBrowser`
- retain the existing toolbar command and open/close semantics
- retain the old implementation as fallback during migration

The first migration should not rewrite toolbar registration, command registration, or ComfyUI integration at the same time.

---

# Concrete migration tasks

## Phase 0 — document behavior and establish test seams

1. Extract the current workflow-browser behavior matrix from:
   - `api.mjs`
   - `index.js`
   - `grid.mjs`
   - `folders.mjs`
   - `detail.mjs`
   - `drag.mjs`
2. Add typed interfaces for index, metadata, issues, covers, and store workflows.
3. Add pure tests for existing algorithms before moving them:
   - `searchEntries`
   - `orderedFolders`
   - `ancestorsOf`
   - `openSet`
   - `siblingsOf`
   - `collectTidyRels`
   - selection filtering and sorting
4. Add a fake adapter implementation for React tests.

This phase should not alter runtime behavior.

## Phase 1 — migrate read-only presentation

Implement the React workflow view with no mutations:

1. typed `WorkflowEntry` normalization
2. toolbar
3. sidebar
4. folder tree
5. grid/list views
6. detail pane
7. tidy view
8. graph-map cover rendering
9. selection and keyboard navigation

The old imperative browser continues to own all actions. React receives snapshots and emits only selection/navigation events.

## Phase 2 — migrate safe local interactions

Move:

- query state
- sort/view/density state
- selected workflows
- folder expansion
- grid/list rendering
- detail selection
- back/forward keyboard behavior
- context-menu presentation

Keep server mutations in adapters and action hooks.

## Phase 3 — migrate mutations one group at a time

Recommended order:

1. favourites
2. notes
3. copy-to-clipboard
4. open workflow
5. rename
6. duplicate
7. cover set/remove
8. folder create/rename/reorder
9. delete
10. save-current-as

After each group, compare old and new behavior against the acceptance tests before moving the next group.

## Phase 4 — migrate window behavior

Only after the panel content is stable:

- replace `createWorkflowWindow`
- port persisted rectangle state
- port title dragging
- port window resizing
- port sidebar/detail resize handles
- port narrow-window detail hiding
- port focus restoration
- port toast and modal portals
- port global stray-drop guard

The window shell should be a reusable React `FloatingPanel`, but the drag/resize controller should remain isolated from workflow domain state.

## Phase 5 — remove legacy rendering

Once parity is proven:

- remove calls to `renderGrid`, `renderFolders`, `renderDetail`, and `renderTidy`
- retain `api.mjs` temporarily as the adapter implementation
- remove `window.mjs`, `css.mjs`, and imperative render modules only after no other code imports them
- keep the existing command and toolbar integration as a thin legacy entry point if that remains the ComfyUI extension convention

---

# shadcn migration scope

Do not blindly replace the custom CSS with stock shadcn styling. The existing dark Pixaroma visual language is intentional and shared with the Help browser.

Recommended component additions:

- `Dialog` for confirmation and rename fallback
- `DropdownMenu` for workflow/folder context menus
- `Tooltip` for dense toolbar and icon actions
- `Tabs` or a segmented control for grid/list
- `ScrollArea` only if it does not interfere with ComfyUI overlay sizing
- `Textarea` for notes
- `Badge` for missing-node/error/status states
- `Separator` for sidebar sections
- `ResizablePanelGroup` only if its pointer/focus behavior can be reconciled with the existing floating window
- `Toast` or a local toast component for mutation feedback

Important constraint: Radix primitives should be wrappers around the existing Pixaroma palette, not a new competing design system.

The current `Card` is clickable but renders as a plain `div`. During migration, make keyboard behavior explicit:

- `role="button"` where appropriate
- `tabIndex={0}`
- Enter/Space activation
- visible focus state
- avoid nested interactive controls inside an element with `role="button"`; alternatively, make the card a non-interactive container and give the title/cover a dedicated open button.

---

# Test plan

The current UI package has no test script or test dependencies. Add tests before moving mutations.

## Pure unit tests

### Search

Test:

- empty query preserves input order
- all query terms must match
- exact name beats prefix
- prefix beats substring
- name beats folder/model/note matches according to weights
- ties sort by modification time
- notes, LoRAs, model names, class types, and prompt text are searchable

### Folder model

Test:

- nested folders are parent-before-child
- explicit sibling order wins
- unspecified folders fall back alphabetically
- missing parents do not disappear
- ancestors are calculated correctly
- selected nested folders force ancestors open
- siblings are limited to the same parent

### Selection/filtering

Test:

- favourites
- recent top 20
- folder includes descendants
- collection uses item membership
- tidy uses the union of issue paths
- search applies consistently to grid and tidy views
- selected entries disappearing from the index are cleaned up

### Covers

Test:

- hand cover takes precedence
- valid output image becomes a cover
- video output does not produce an `<img>`
- invalid map entries are ignored
- broken image falls back to graph map
- picture extension handling is case-insensitive

## Adapter tests

Use mocked `fetch` and fake ComfyUI objects.

Test:

- API URL wrapping for local and hosted deployments
- index/meta fetch failure
- mutation HTTP failures
- `{ ok: false }` responses
- workflow-store sync retry
- open workflow calls `wf.load()` and `app.loadGraphData`
- open workflow never forces a disk reload
- temporary save-as renames before saving
- normal save-as uses `saveAs`
- rename conflict translation
- case-only rename rejection
- duplicate preserves source bytes
- bookmark loading happens before reading/toggling favourites
- missing Pinia bookmark store produces an actionable error
- deletion uses the store rather than deleting files behind ComfyUI’s back

## React component tests

Use Testing Library with a fake adapter.

Test:

- browser opens with the correct default selection
- sidebar selection updates the visible workflow set
- grid/list switch preserves selection
- detail pane appears for one selection
- multi-selection shows bulk actions
- empty, loading, and error states render
- tidy view groups issues correctly
- search result count matches visible results
- search state is reset by the Home action
- close callback fires
- keyboard navigation moves through visible workflows
- Escape clears search before closing
- cards are keyboard accessible
- modal focus is trapped and restored
- rename Enter commits and Escape cancels
- note blur flushes the pending update

## Drag/drop tests

Use browser-level tests where possible because jsdom does not accurately model native drag behavior.

Verify:

- workflow card drag carries the custom workflow MIME type
- folder drag carries the folder MIME type
- cards can drop on real folders
- folder reorder is limited to siblings
- collections and shortcuts do not accept drops
- stray Pixaroma drops are prevented from inserting into note/search/rename fields
- selection semantics are correct when dragging an unselected card
- drag does not open a card or toggle a star accidentally

## Browser acceptance tests

Run against a live ComfyUI instance:

1. Open the workflow browser from the toolbar.
2. Open an existing workflow.
3. Switch to another workflow with unsaved edits.
4. Return to the first workflow and verify edits remain.
5. Rename, duplicate, move, favourite, and delete workflows.
6. Create and reorder nested folders.
7. Drag workflows onto folders and attempt invalid drops.
8. Set/remove a cover.
9. Run a workflow and verify the output cover updates.
10. Open the tidy view and resolve each issue type.
11. Resize the panel, sidebar, and detail pane.
12. Test narrow viewport behavior.
13. Reload ComfyUI and verify persisted metadata, bookmarks, folder order, density, and panel rectangle.

---

# Suggested first implementation slice

The safest first PR would be:

1. Add typed workflow domain models.
2. Port `searchEntries`, folder ordering, and visible-entry derivation into pure TypeScript.
3. Add unit tests for those functions.
4. Add `WorkflowRepository`, `ComfyWorkflowStore`, and `WorkflowRuntime` interfaces with an implementation backed by the existing `api.mjs` behavior.
5. Add a read-only React workflow browser mount.
6. Keep all existing mutations and the imperative browser as the fallback.

That gives the project a testable React boundary without risking workflow loss, bookmark corruption, unsaved graph edits, or drag/drop regressions.
