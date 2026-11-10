import documents from "virtual:pixaroma-help-documents";
import { loadHelpDocuments, type HelpEntry, type HelpSection } from "./content";

export type { HelpEntry, HelpSection } from "./content";

export const helpEntries = loadHelpDocuments(documents);

export function mergeRuntimeHelp(entries: HelpEntry[], runtime: HelpEntry[]) {
  const byId = new Map(runtime.map((entry) => [entry.id, entry]));
  const merged = entries.map((entry) => {
    const extra = byId.get(entry.id);
    if (!extra) return entry;
    return {
      ...entry,
      comfyClass: extra.comfyClass || entry.comfyClass,
      controls: extra.controls,
      sections: entry.sections.length ? entry.sections : extra.sections,
      tagline: entry.tagline || extra.tagline,
      footer: entry.footer || extra.footer,
    };
  });
  const known = new Set(entries.map((entry) => entry.id));
  return [...merged, ...runtime.filter((entry) => !known.has(entry.id))];
}
