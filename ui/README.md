# Pixaroma UI

The React/shadcn pilot for Pixaroma starts with the Help Browser surface.

## Commands

Run through the repository's mise tasks:

```bash
mise run build
mise run dev
mise run types
```

`mise run dev` starts Vite on `http://127.0.0.1:5174` with HMR. It proxies ComfyUI API and extension requests to `127.0.0.1:8188` for local integration work.

The production build is emitted to `js/react/`, which is served by the existing ComfyUI `WEB_DIRECTORY` configuration. The Help Browser extension now loads this bundle and adapts the existing Pixaroma help registry into the React view model. The old imperative implementation remains in the source tree for reference during the migration.
