import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const rootDir = path.dirname(fileURLToPath(import.meta.url));
const docsDir = path.resolve(rootDir, "../docs/help");

function runtimeStubs() {
  return {
    name: "pixaroma-runtime-stubs",
    resolveId(id: string) {
      if (id === "/scripts/app.js" || id === "/scripts/api.js") return `\0pixaroma-runtime:${id}`;
    },
    load(id: string) {
      if (!id.startsWith("\0pixaroma-runtime:")) return undefined;
      return "export const app = globalThis.__pixaromaTestApp ?? {}; export const api = globalThis.__pixaromaTestApi ?? {};";
    },
  };
}

function helpDocuments() {
  const virtualId = "virtual:pixaroma-help-documents";
  const resolvedId = `\0${virtualId}`;
  return {
    name: "pixaroma-help-documents",
    resolveId(id: string) { return id === virtualId ? resolvedId : undefined; },
    load(id: string) {
      if (id !== resolvedId) return undefined;
      const files = fs.readdirSync(docsDir).filter((file) => file.endsWith(".md") && file !== "README.md");
      const documents = files.map((file) => ({ path: file, source: fs.readFileSync(path.join(docsDir, file), "utf8") }));
      return `export default ${JSON.stringify(documents)};`;
    },
  };
}

export default defineConfig(({ command, mode }) => ({
  plugins: [react(), helpDocuments(), ...(mode === "test" ? [runtimeStubs()] : [])],
  base: command === "build" ? "./" : "/",
  resolve: {
    alias: {
      "@": path.resolve(rootDir, "./src"),
    },
  },
  server: {
    port: 5174,
    strictPort: true,
    proxy: {
      "/api": "http://127.0.0.1:8188",
      "/extensions": "http://127.0.0.1:8188",
      "/scripts": "http://127.0.0.1:8188",
    },
  },
  test: {
    environment: "jsdom",
    setupFiles: [path.resolve(rootDir, "./test/setup.ts")],
    globals: true,
  },
  build: {
    outDir: path.resolve(rootDir, "../js/react"),
    emptyOutDir: true,
    sourcemap: true,
    rollupOptions: {
      external: ["/scripts/api.js", "/scripts/app.js"],
      input: path.resolve(rootDir, "index.html"),
      output: {
        entryFileNames: "pixaroma-ui.js",
        chunkFileNames: "pixaroma-ui-[name].js",
        assetFileNames: "pixaroma-ui-[name][extname]",
      },
    },
  },
}));
