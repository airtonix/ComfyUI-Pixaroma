# React/shadcn migration assessment

## Current state

The repository has a working React/shadcn pilot, but it is currently isolated to the Help Browser.

- `ui/src/widget-registry.ts:13` discovers React features with `import.meta.glob`.
- `ui/src/mount.tsx:12` exposes only `mountHelpBrowser(...)` through `window.PixaromaReactUi`.
- `js/help_browser/index.js:460` adapts the existing imperative help index into React `HelpEntry` objects and falls back to the old browser when the bundle is unavailable.
- The old imperative Help Browser remains active as the fallback and still owns pins, node creation, drag-and-drop, settings persistence, and navigation.
- The build emits one browser bundle into `js/react/` via `ui/vite.config.ts:25`.
- The local “shadcn” components are present, but styling is currently handcrafted CSS in `ui/src/styles.css`; there is no Tailwind configuration or shadcn CLI setup.
- The working tree already contains substantial unrelated/uncommitted changes, including `ui/` and `js/react/`. Migration work should be based on a clean or explicitly scoped branch.

The existing node UI system is much more extensive than the React pilot:

- Many nodes use `addDOMWidget`.
- State is variously held in:
  - `node.properties`
  - hidden serialized Python inputs
  - hidden non-serialized mirror widgets
  - runtime-only fields on the node
  - global settings
- Many nodes patch `onNodeCreated`, `onConfigure`, `onResize`, `onDrawForeground`, `onRemoved`, and `app.graphToPrompt`.
- Several nodes contain renderer-specific behavior for Classic LiteGraph and Nodes 2.0/Vue.
- Existing imperative UI helpers in `js/framework/components.mjs`, `js/framework/text_editor.mjs`, `js/framework/canvas.mjs`, and numerous `ui.mjs` files already form a de facto component library.

## Recommended migration principle

Do **not** migrate node integrations by moving ComfyUI lifecycle logic into React.

The safest boundary is:

```text
ComfyUI extension adapter
  ├─ owns node lifecycle and renderer integration
  ├─ owns serialization and graphToPrompt behavior
  ├─ owns DOM widget creation, sizing, cleanup, and event bridging
  └─ mounts a controlled React component

React component
  ├─ renders controls
  ├─ receives a serializable view model
  ├─ emits user-intent events
  └─ has no knowledge of LiteGraph, app.graph, node ids, or ComfyUI APIs
```

React should replace the **face** of a DOM widget, not the node adapter.

---

# Proposed migration phases

## P0 — Define the adapter boundary before migrating nodes

Create a small typed adapter layer in `ui/src/` and a matching imperative bridge in `js/react/`.

### Suggested React-side contract

```ts
export type PixaromaNodeId = string | number;

export type NodeWidgetModel<State> = {
  nodeId: PixaromaNodeId;
  nodeType: string;
  state: State;
  disabled?: boolean;
  compact?: boolean;
  accent?: string;
  renderer: "classic" | "nodes2";
};

export type NodeWidgetActions<State> = {
  onChange: (next: State) => void;
  onCommit?: (next: State) => void;
  onResizeRequest?: (height: number) => void;
  onOpenSettings?: () => void;
  onOpenHelp?: () => void;
};

export type NodeWidgetProps<State> =
  NodeWidgetModel<State> & NodeWidgetActions<State>;

export type NodeWidgetHandle = {
  focus?: (field?: string) => void;
  refresh?: () => void;
  measure?: () => { minWidth?: number; minHeight: number };
};
```

The React component should receive a complete normalized state snapshot. It should not receive a raw node object or arbitrary callback bags.

### Suggested imperative bridge contract

```ts
export type NodeWidgetBridge<State> = {
  mount(
    container: HTMLElement,
    model: NodeWidgetModel<State>,
    actions: NodeWidgetActions<State>,
  ): {
    update(model: NodeWidgetModel<State>): void;
    unmount(): void;
    measure(): { minWidth?: number; minHeight: number };
  };
};
```

The bridge should:

1. Mount a React root into the supplied `addDOMWidget` element.
2. Update props without remounting.
3. Return an idempotent `unmount`.
4. Remove listeners, observers, timers, and document-level handlers.
5. Never mutate node state during render.
6. Keep one React root per DOM widget container.
7. Detect and clean up an existing root if ComfyUI recreates the widget DOM.

### P0 tasks

- Replace `ComponentType<any>` in `ui/src/widget-registry.ts:3` with typed feature definitions.
- Add a `NodeWidgetRegistry` separate from the Help Browser registry.
- Add a shared `mountNodeWidget` bridge alongside `mountHelpBrowser`.
- Define explicit state serialization policy:
  - `persistedState`
  - `runState`
  - `runtimeState`
  - `displayState`
- Add an adapter test fixture that simulates:
  - fresh node creation
  - workflow configuration
  - repeated updates
  - unmount/remount
  - StrictMode effect replay

## P1 — Migrate low-risk scalar controls

Start with nodes whose state is small, local, and already represented by ordinary inputs.

Recommended first candidates:

1. **Number**
   - `js/number/index.js`
   - Simple control surface.
   - Good test of numeric coercion, dirty state, and size behavior.
   - Avoid changing the node’s actual serialized input contract.

2. **WH / Resolution / Longest Side**
   - `js/wh/index.js`
   - `js/resolution/index.js`
   - `js/longest_side/index.js`
   - Reusable numeric fields, segmented choices, and presets.
   - Good candidates for shadcn `Input`, `Button`, `ToggleGroup`-style primitives.

3. **Duration**
   - `js/duration/index.js`
   - Tests numeric editing plus preset selection without large state arrays.

4. **Sliders**
   - `js/sliders/index.js`
   - Reusable slider/number-row component.
   - Preserve the existing coercion and output behavior exactly.

### Deliverables

- `ScalarField`
- `NumericField`
- `SegmentedChoice`
- `SliderField`
- `FieldRow`
- `NodeToolbar`

These should use the existing local shadcn primitives where possible. Do not introduce a broad design-system rewrite first.

### Acceptance criteria

- Existing workflow JSON is byte-compatible unless a user changes a value.
- No node size changes on workflow load.
- Editing a control updates the same state path as before.
- Both Classic and Nodes 2.0 render correctly.
- Existing node settings and help entry points continue to work.

## P2 — Migrate stateful list editors

Recommended candidates:

1. **Prompt Stack**
   - `js/prompt_stack/index.js`
   - `js/prompt_stack/render.mjs`
   - `js/prompt_stack/core.mjs`
   - Strong React candidate because it is a list editor with reorder, enable/disable, text fields, and preview.
   - Existing state contract is explicit: `node.properties.promptStackState`, then `graphToPrompt` injects `PromptStackState`.

2. **Find and Replace**
   - `js/find_replace/index.js`
   - State includes rules, flags, preview, autosizing, and execution results.
   - Good second stateful migration after the adapter is proven.

3. **Prompt Each / Prompt Multi / Prompt Pack**
   - Similar row-based editing patterns.
   - Migrate only after the common row editor and serialization contract are stable.

### Required state contract for Prompt Stack

React should work with:

```ts
type PromptStackRow = {
  id: string;
  enabled: boolean;
  label: string;
  text: string;
};

type PromptStackState = {
  version: 1;
  rows: PromptStackRow[];
  separator: string;
};
```

The adapter should own:

```text
node.properties.promptStackState
        ↓
normalized PromptStackState
        ↓
React component
        ↓
onChange(nextState)
        ↓
node.properties.promptStackState
        ↓
graphToPrompt injects hidden PromptStackState
```

Important: the React view must not inject the hidden Python input itself. The existing `app.graphToPrompt` hook remains the owner of execution-time payload construction.

### Specific migration tasks

- Extract the current normalization rules from `core.mjs` into a pure TypeScript-compatible contract or a tested shared fixture.
- Preserve row IDs for stable React keys. Do not use array indexes as keys during reorder.
- Keep the existing `version` field and add explicit migrations for future versions.
- Keep `separator` resolution in the adapter or existing settings owner, not in the React component.
- Preserve `serialize: false` for the DOM widget.
- Preserve the existing “render only on configure, grow only after user interaction” behavior.
- Keep the existing `ResizeObserver` and resize-floor ownership in the adapter.
- Reuse existing drag/reorder behavior only after verifying pointer events do not conflict with canvas node dragging.

## P3 — Migrate rich text and prompt editors

Candidates:

- Prompt
- AI Prompt
- Music Prompt
- Video Prompt
- Text
- Text Join
- Text Overlay
- Text Watermark

These are high-value but high-risk because they combine:

- textarea editing
- autocomplete and keyboard handling
- custom highlighting/backdrops
- text selection and native clipboard behavior
- prompt expansion
- execution-time transformations
- modal editors
- context menus
- persisted and runtime-only state

### Recommended order

1. Text / Text Join
2. Prompt Stack, if not already completed
3. Prompt
4. AI Prompt
5. Music Prompt / Video Prompt

Do not start with AI Prompt. `js/ai_prompt/index.js` already has renderer switching, seed behavior, settings panels, connection-dependent rendering, result handling, and multiple lifecycle hooks. It is a poor first React integration.

### Rich-editor adapter rule

The adapter should expose semantic events:

```ts
type PromptEditorActions = {
  onTextChange(text: string): void;
  onSelectionChange(selection: { start: number; end: number }): void;
  onCommitText(text: string): void;
  onRequestAutocomplete(query: string): void;
  onOpenLibrary(): void;
  onOpenSettings(): void;
};
```

Avoid exposing DOM events, `node`, `app`, or `LiteGraph` to the React component.

The React implementation must preserve:

- exact text, including whitespace and line endings where meaningful
- selection behavior
- paste/drop behavior
- native browser Cut/Copy/Paste inside fields
- ComfyUI canvas shortcuts outside fields
- autocomplete keyboard semantics
- the distinction between template text and resolved run text

## P4 — Migrate media and canvas-heavy widgets last

Defer these until the bridge has proven lifecycle and sizing behavior:

- Load Image
- Load Image Mini
- Load Video
- Load Video Frame
- Load Audio
- Paint
- Crop
- Inpaint Crop
- Outpaint
- Image Resize
- Preview
- Composer
- 3D Builder
- Audio Studio
- Monitor

These depend on:

- canvases and image/video elements
- drag-and-drop from files or the ComfyUI clipspace
- native upload widgets
- asynchronous image loading
- output-slot alignment
- adaptive canvas-only behavior
- renderer-specific DOM layouts
- preview caching and execution events

For these nodes, React should initially own only panels and controls. Keep canvas drawing, media loading, DOM widget sizing, and ComfyUI-native upload integration imperative.

---

# Adapter lifecycle requirements

## Creation

Current integrations correctly account for the fact that `onNodeCreated` runs before workflow configuration.

Examples:

- `js/prompt_stack/index.js:191`
- `js/find_replace/index.js:140`
- `js/seed/index.js:1071`

The React adapter should:

1. Create the DOM container synchronously.
2. Mount an initial placeholder or default model.
3. Defer state-dependent rendering until configuration has had a chance to restore `node.properties`.
4. Avoid writing defaults if a persisted state already exists.
5. Avoid setting node size asynchronously for restored nodes.

A common adapter flag is appropriate:

```js
node._pixReactConfigured = false;
```

It should be runtime-only and must never be serialized.

## Configuration / workflow loading

`onConfigure` must be treated as a read/restore path.

The adapter may:

- read `node.properties`
- normalize legacy state
- update the React model
- rebuild non-serialized DOM
- reconnect observers

The adapter must not:

- write `node.size`
- call `setSize`
- rewrite persisted state merely to normalize it
- add serialized widgets or slots
- trigger a graph dirty state

This is especially important because existing integrations explicitly protect against dirty-on-load behavior:

- `js/prompt_stack/index.js:266`
- `js/find_replace/index.js:218`
- `js/seed/index.js:1149`

## User changes

Only user actions should:

- write `node.properties`
- call `setDirtyCanvas`
- call `setSize`
- trigger graph dirty state where currently required
- update hidden execution state

The adapter should distinguish:

```text
React render/update       → no graph mutation
React onChange            → persisted state mutation
React onResizeRequest     → user-driven size mutation
graphToPrompt             → run-only payload mutation
onExecuted                → runtime preview mutation
```

## Removal

Every React node adapter needs an idempotent cleanup path.

It must:

- unmount the React root
- disconnect `ResizeObserver`
- remove `MutationObserver`
- cancel timers and animation frames
- remove document-level keydown/pointer listeners
- cancel pending media loads where applicable
- close owned dialogs/popovers
- clear runtime references from the node
- call the original `onRemoved`

This is a major risk for nodes such as Find/Replace and Prompt Stack, which already have explicit observer cleanup at:

- `js/prompt_stack/index.js:307`
- `js/find_replace/index.js:279`

## StrictMode

The current React mount uses `StrictMode` in `ui/src/mount.tsx:35`.

That is appropriate for development, but it will expose adapters that:

- register listeners in effects without cleanup
- create duplicate observers
- call node mutation from an effect on mount
- assume mount occurs only once

Every node component must be safe under mount → unmount → mount during development.

---

# Serialization and execution risks

## 1. `node.properties` versus hidden Python inputs

Existing nodes intentionally separate display state from execution state.

For example:

- Prompt Stack keeps editor state in `node.properties.promptStackState`.
- Python receives a hidden `PromptStackState` input.
- `graphToPrompt` builds the final execution payload.

React must not collapse these into one state object without preserving the existing boundary.

Recommended rule:

```text
React state = normalized editor state
node.properties = persisted editor state
hidden input = execution payload only
graphToPrompt = sole execution-time injection owner
```

## 2. `serialize: false`

Most React-backed DOM widgets should use:

```js
node.addDOMWidget(name, type, root, {
  serialize: false,
});
```

The React root is presentation, not workflow state. Accidentally serializing the widget can:

- add duplicate widget entries to saved workflows
- make clean workflows appear modified
- break compatibility with existing node definitions
- create extra input slots in newer ComfyUI frontends

## 3. Hidden mirror widgets

Seed has a deliberate hidden mirror widget at `js/seed/index.js:1056`.

That mirror exists for filename token resolution and must remain separate from the React face. A migration must not remove it merely because React has the same value available.

Required tests:

- `%Seed Pixaroma.seed%` resolves after a React edit.
- The mirror remains `serialize: false`.
- Random mode injects the run seed without changing persisted state.
- Saving a workflow does not capture the transient run seed.

## 4. `graphToPrompt`

Several nodes patch `app.graphToPrompt`, including Prompt Stack and Find/Replace.

The React migration must not move this logic into components. Tests need to cover:

- top-level nodes
- nested subgraphs
- composite prompt IDs
- duplicate inner node IDs in separate subgraphs
- malformed or legacy state
- preview/execution parity
- API export paths that also use graph serialization

## 5. State migration

Persisted state should carry a version:

```ts
type VersionedState =
  | { version: 1; /* current fields */ }
  | { version: 2; /* future fields */ };
```

Normalization should be pure and idempotent:

```text
normalize(normalize(state)) === normalize(state)
```

Do not write normalized state during `onConfigure`; write it only after a user edit unless an explicit compatibility migration requires otherwise.

---

# Rendering and layout risks

## Classic versus Nodes 2.0

Existing code repeatedly documents that writing `node.size` behaves differently between renderers.

Examples:

- `js/prompt_stack/index.js:283`
- `js/find_replace/index.js:256`
- `js/seed/index.js:1157`

The adapter should expose renderer information to React only for presentation decisions. It should not let components directly mutate size.

Sizing belongs to the adapter:

```ts
type LayoutAdapter = {
  getRenderer(): "classic" | "nodes2";
  measureContent(): { minHeight: number; minWidth?: number };
  requestUserResize(size: [number, number]): void;
  setLayoutMetrics(metrics: { minHeight: number; minWidth?: number }): void;
};
```

React should report content measurement; the adapter decides whether and when to commit it.

## `computeLayoutSize`

Nodes 2.0 integrations commonly need:

```js
widget.computeLayoutSize = () => ({
  minHeight: measure(),
  minWidth: 1,
});
```

The `minWidth: 1` behavior is intentional in existing code because a real minimum width can overwrite a saved width on reload. This must be preserved during migration.

## Pointer and canvas interaction

React controls inside node widgets must not accidentally:

- start canvas node dragging
- swallow socket connection events
- intercept wheel zoom
- replace ComfyUI’s context menu outside text fields
- prevent native clipboard operations
- leave pointer capture active after removal

Create a shared adapter utility for:

- canvas zoom passthrough
- native text menu handling
- pointer capture cleanup
- stop-propagation rules limited to control surfaces

Do not apply `stopPropagation()` globally to the React root.

---

# Concrete work breakdown

## Milestone A — Bridge foundation

1. Add typed node widget definitions.
2. Add `mountNodeWidget`.
3. Add per-container root tracking.
4. Add update/unmount APIs.
5. Add cleanup registry for observers, timers, and event listeners.
6. Add state normalizer utilities.
7. Add a renderer/layout adapter.
8. Add a test fixture with fake ComfyUI node methods.
9. Keep Help Browser behavior unchanged.

## Milestone B — Scalar pilot

1. Migrate Number.
2. Migrate WH or Resolution.
3. Extract shared numeric and segmented controls.
4. Compare workflow JSON before/after.
5. Test Classic and Nodes 2.0 layout behavior.
6. Verify no duplicate extension patching on hot reload.

## Milestone C — Prompt Stack

1. Define `PromptStackState`.
2. Port row editor to React.
3. Keep `graphToPrompt` imperative.
4. Keep `addDOMWidget(..., { serialize: false })`.
5. Preserve resize observer and user-only growth.
6. Preserve reorder, enable/disable, labels, separator, and textarea behavior.
7. Remove imperative rendering only after parity tests pass.

## Milestone D — Find/Replace

1. Port rule editor.
2. Preserve preview state separately from persisted rules.
3. Preserve `onExecuted` preview updates.
4. Preserve nested-subgraph injection.
5. Preserve width-sensitive autosizing and resize floor.
6. Verify deletion while preview/help UI is open.

## Milestone E — Rich text

1. Text/Text Join.
2. Prompt.
3. AI Prompt.
4. Music/Video Prompt.
5. Port modal editors only after the base node face is stable.

## Milestone F — Media/canvas

Migrate only sub-panels first. Keep media loading and canvas drawing imperative until there is a tested media lifecycle abstraction.

---

# Test plan

The current test suite is primarily Python and standalone `.mjs` tests:

- `tests/test_prompt_library.py`
- `tests/test_prompt_library_ui.mjs`
- `tests/test_prompt_selectors.mjs`

`ui/package.json` currently has only `build`, `dev`, and `typecheck` scripts. Add a frontend test runner only when the first node widget is migrated; Vitest plus a DOM environment would fit the existing Vite/TypeScript setup.

## Unit tests

### State normalization

- Missing state gets defaults.
- Invalid field types are normalized.
- Legacy state versions migrate correctly.
- Normalization is idempotent.
- Unknown fields are ignored or preserved according to policy.
- Invalid persisted state does not mutate the node during configure.

### Controlled React components

- Render from supplied state.
- Emit the expected next state.
- Do not mutate input objects.
- Stable row keys survive reorder.
- Keyboard and pointer interactions produce semantic actions.
- Disabled/readonly state is respected.
- Accessible labels and focus behavior are present.

## Adapter lifecycle tests

Using a fake ComfyUI node:

1. `onNodeCreated` mounts exactly one root.
2. `onConfigure` updates state without writing size.
3. Repeated `onConfigure` does not duplicate observers.
4. React StrictMode does not duplicate listeners.
5. User edits write properties once.
6. `onRemoved` unmounts and cleans everything.
7. Calling cleanup twice is safe.
8. Hot reload/re-registration does not double-wrap prototypes.
9. Remounting the same container unmounts the previous root.

## Serialization tests

For each migrated node:

- Fresh node serialization matches the pre-migration shape.
- Unchanged loaded workflow serializes identically.
- DOM widget is not serialized.
- Hidden mirror widgets remain non-serialized where required.
- User edits serialize the expected persisted state.
- Runtime-only result/preview state does not leak into execution payloads.
- Run-only state does not dirty the workflow.

## `graphToPrompt` tests

- Top-level node state is injected.
- Nested subgraph node state is injected.
- Two subgraphs with the same inner id do not collide.
- Missing node lookup is harmless.
- Malformed state produces the same normalized result used by the preview.
- API export does not lose hidden state.
- Random/run state changes only the queued prompt, not `node.properties`.

## Layout tests

Run against both renderer modes:

- Fresh node receives the intended default size.
- Saved node size is preserved on workflow load.
- Content growth occurs after user edits.
- Content measurement does not cause an infinite resize loop.
- Nodes 2.0 `computeLayoutSize` reports the correct minimum.
- Classic `onResize` behavior remains unchanged.
- Width changes reflow textareas and previews.
- Collapsed nodes do not retain stale observer work.

## Browser acceptance tests

At minimum:

- Drop each migrated node onto the canvas.
- Edit, save, reload, and reopen the workflow.
- Duplicate the node.
- Copy/paste the node.
- Move it into a subgraph.
- Switch between Classic and Nodes 2.0 if available.
- Delete it while a popup or modal is open.
- Queue a run and verify execution output.
- Confirm the workflow is not marked modified merely by opening it.

---

# Priority summary

| Priority | Scope | Reason |
|---|---|---|
| P0 | Adapter contract, lifecycle, serialization fixtures | Prevents React from leaking into ComfyUI ownership boundaries |
| P1 | Number, WH, Resolution, Duration | Low-risk proof of controlled node widgets and layout |
| P1 | Shared shadcn-style scalar primitives | Removes duplicated visual/control code |
| P2 | Prompt Stack | Best first stateful editor; clear persisted/execution boundary |
| P2 | Find/Replace | Exercises preview state, rules, observers, and nested graph injection |
| P3 | Text/Text Join/Prompt | Rich editing and keyboard behavior |
| P3 | AI/Music/Video Prompt | High integration and modal/lifecycle complexity |
| P4 | Media and canvas nodes | Highest renderer, sizing, async, and drag/drop risk |
| Defer | Shared global React state/store | Not needed; risks leaking graph/session concerns into UI code |
| Defer | Full Tailwind/shadcn rewrite | The current pilot can migrate incrementally with its existing local primitives |

The most defensible first implementation sequence is:

```text
Adapter foundation
→ Number or Resolution
→ Prompt Stack
→ Find/Replace
→ Text/Prompt
→ media and canvas widgets
```

This preserves the current ComfyUI integration architecture while allowing React/shadcn to replace the UI layer incrementally rather than forcing node lifecycle, graph serialization, and renderer compatibility into React components.
