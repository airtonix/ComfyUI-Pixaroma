# Prompt Library Markdown Contract

This document defines the target boundary between the Markdown prompt library API and the React prompt-library feature. Markdown is the source of truth. The feature must not reduce a record to the legacy JSON shape before it receives the record.

This is a migration target, not the current server API. The current compatibility boundary is `/pixaroma/api/prompt/library`, which returns the legacy `{ categories, listCats, catModes, tags }` shape. The Markdown API will provide `{ version, prompts }` at its future route; migration work must keep the legacy route working until that boundary changes.

## Normalized record

The TypeScript contract is in `ui/src/features/prompt-library/prompt-library.types.ts`.

Each record has these fields:

- `id`: normalized relative path without the terminal `.md`. This is the stable storage identity.
- `sourcePath`: normalized relative path with the `.md` extension. This is the path used for Markdown storage.

`id` and `sourcePath` use the same POSIX relative-path identity rules. A valid path has one or more non-empty segments, `/` separators, and no leading `./`. Reject absolute paths, Windows drive or UNC paths, backslashes, `.` or `..` segments, empty segments, repeated separators, and a trailing separator. `sourcePath` must end in `.md`; `id` is its exact path with that terminal extension removed. Report malformed paths with the field name and supplied path, for example `sourcePath: invalid relative path "../x.md"`. Compare normalized IDs case-insensitively for duplicate detection, so `Foo.md` and `foo.md` conflict. Keep neither conflicting record and report both source paths.
- `name`: trimmed `name` frontmatter value. It is the display name and can differ from the filename.
- `tags`: string tags from frontmatter. The normalizer trims values, removes empty values, and removes case-insensitive duplicates while keeping the first spelling.
- `body`: the Markdown body after the parser's documented newline normalization. Missing body text is an empty string only when the record is otherwise valid.
- `category`: the first directory component of `sourcePath`.
- `folders`: directory components of `sourcePath`, in path order. The first item is also `category`; a root-level record has an empty folder list and an empty category.
- `filename`: the final source-path component, including `.md`.
- `kind`: `text` or `list`. This keeps the existing selector distinction explicit. The Markdown frontmatter `kind` field is authoritative. Do not infer it from a category, filename, prefix, or legacy JSON shape; records without a valid `kind` are malformed.
- `prefix`: optional stored metadata. It is preserved but does not define expansion behavior.
- `unknownFrontmatter`: optional fields that the parser does not interpret. A renderer must keep these fields when round-trip preservation is required.

The target server response is normalized, not raw Markdown. A library response has the shape `{ "version": 1, "prompts": PromptRecord[] }`. It includes storage identity, source path, frontmatter-derived metadata, body, and category/folder metadata. The server remains responsible for recursive scanning, path containment, user-root and symlink handling, and atomic writes.

`styles/manifest.json` is category metadata. It is not a prompt record. Its absence or incomplete contents must not prevent valid Markdown records from loading.

## Parser and malformed records

The parser requires frontmatter delimiters and a non-empty `name`. It parses YAML tag lists, keeps multiline bodies, derives path metadata, and preserves unknown frontmatter fields. It must reject malformed records with an error that includes the source path. It must not convert a malformed record into an empty prompt. Path errors must identify the rejected field (`id` or `sourcePath`) and the supplied path.

A library load may contain valid and malformed records. The adapter excludes malformed records from `library.prompts` and returns their path-specific errors in `PromptLibraryLoadResult.errors`. A malformed record must not abort the valid records in the same response. Duplicate normalized IDs are malformed input: keep neither duplicate in the normalized collection and report the conflicting source paths.

The parser does not infer metadata from `name`, filename stems, current files, or `styles/manifest.json`.

## Prefix and selector compatibility decision

`@` and `#` keep their existing selector meaning:

- `text` records insert as `@name`.
- `list` records insert as `#name`.
- Wildcard expansion remains owned by `expand.mjs`.
- React does not implement prompt expansion.

`$` and `&` are **reserved, opaque metadata**, not record kinds, insertion modes, or body syntax. The domain type can preserve either value when it arrives from storage, but the parser must not infer it, and the editor, adapter, and selector facade must not expand or insert it. Until a separate compatibility decision defines behavior, save and round-trip paths preserve the value without assigning semantics. New records must not create `$` or `&` metadata. `PromptDraft` and `PromptCreateRequest` therefore accept only `@` or `#` (or no prefix). `PromptUpdateRequest` is the only write shape that can carry a stored `$` or `&`, and only with `previous_id`, so an adapter can preserve opaque metadata during an explicit update. `SavePromptRequest` is the create-or-update union; it must not be used to create a new record with `$` or `&`.

This decision avoids changing prompt expansion based on files that currently contain no stored prefixes. It also gives later work a fixed contract: adding `$` or `&` behavior requires an explicit contract change and compatibility tests.

## Mutation identity

A display-name change updates `name` only. A source-path change updates `id` and `sourcePath` and sends `previous_id` with the old `id`. The server-returned record is authoritative after a mutation.

## Downstream handoff

- T2 must preserve stored `$`/`&` values as opaque metadata and must not emit new ones.
- T3 must return path-specific load errors for malformed paths and case-insensitive ID collisions.
- T7 must map only `text` to `@` and `list` to `#`; it must not assign semantics to `$` or `&`.
