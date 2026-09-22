export type PromptId = string;

export type PromptKind = "text" | "list";
export type PromptStoredPrefix = "@" | "#" | "$" | "&";
export type PromptDraftPrefix = "@" | "#";

/** A frontmatter field that is not part of the prompt library contract. */
export type PromptFrontmatterField = {
  key: string;
  value: unknown;
};

/**
 * The normalized representation of one Markdown-backed prompt.
 *
 * `id` is the storage identity. It is the normalized relative `sourcePath`
 * without its terminal `.md` extension.
 */
export type PromptRecord = {
  id: PromptId;
  sourcePath: string;
  name: string;
  tags: string[];
  body: string;
  category: string;
  folders: string[];
  filename: string;
  kind: PromptKind;
  /** Preserved metadata only. It does not select expansion behavior. */
  prefix?: PromptStoredPrefix;
  unknownFrontmatter?: PromptFrontmatterField[];
};

export type PromptLibrary = {
  version: 1;
  prompts: PromptRecord[];
};

export type PromptLibraryParseError = {
  sourcePath: string;
  message: string;
};

export type PromptLibraryLoadResult = {
  library: PromptLibrary;
  errors: PromptLibraryParseError[];
};

export type PromptDraft = {
  id: PromptId;
  sourcePath: string;
  name: string;
  tags: string[];
  body: string;
  kind: PromptKind;
  prefix?: PromptDraftPrefix;
  storedPrefix?: "$" | "&";
};

export type PromptCreateRequest = Omit<PromptDraft, "storedPrefix"> & {
  previous_id?: never;
};

export type PromptUpdateRequest = Omit<PromptDraft, "prefix" | "storedPrefix"> & {
  prefix?: PromptStoredPrefix;
  previous_id: PromptId;
};

export type SavePromptRequest = PromptCreateRequest | PromptUpdateRequest;
