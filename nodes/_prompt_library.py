import os
import re
import tempfile
from pathlib import Path


class PromptRecordError(ValueError):
    pass


_PATH_RE = re.compile(r"^[^/\\]+(?:/[^/\\]+)*$")


def _invalid(field, value):
    raise PromptRecordError(f"{field}: invalid relative path {value!r}")


def prompt_filename(prompt_id):
    if not isinstance(prompt_id, str) or not prompt_id:
        _invalid("id", prompt_id)
    if prompt_id.endswith(".md"):
        source_path = prompt_id
    else:
        source_path = prompt_id + ".md"
    if not _PATH_RE.match(source_path):
        _invalid("id", prompt_id)
    parts = source_path.split("/")
    if any(not part or part in (".", "..") or part.startswith(".") or ":" in part for part in parts):
        _invalid("id", prompt_id)
    return source_path


def _source_path(path):
    if not isinstance(path, str) or not path.endswith(".md") or not _PATH_RE.match(path):
        _invalid("sourcePath", path)
    parts = path.split("/")
    if any(not part or part in (".", "..") or part.startswith(".") or ":" in part for part in parts):
        _invalid("sourcePath", path)
    return path


def _clean_tags(tags):
    if tags is None:
        return []
    if not isinstance(tags, list):
        raise PromptRecordError("tags must be a list")
    result = []
    seen = set()
    for tag in tags:
        if not isinstance(tag, str):
            raise PromptRecordError("tags must contain only strings")
        tag = tag.strip()
        if tag and tag.casefold() not in seen:
            seen.add(tag.casefold())
            result.append(tag)
    return result


def _parse_frontmatter(lines):
    values = {}
    current_list = None
    for line in lines:
        if line.startswith("  - ") and current_list is not None:
            current_list.append(line[4:].strip())
            continue
        current_list = None
        if ":" not in line:
            raise PromptRecordError("invalid frontmatter")
        key, value = line.split(":", 1)
        key = key.strip()
        if not key or key.startswith("-"):
            raise PromptRecordError("invalid frontmatter")
        value = value.strip()
        if not value:
            values[key] = []
            current_list = values[key]
        else:
            values[key] = value
    return values


def parse_prompt_markdown(text):
    if not isinstance(text, str):
        raise PromptRecordError("markdown must be a string")
    text = text.replace("\r\n", "\n").replace("\r", "\n")
    if not text.startswith("---\n"):
        raise PromptRecordError("frontmatter is required")
    end = text.find("\n---\n", 4)
    if end < 0:
        raise PromptRecordError("frontmatter is not closed")
    values = _parse_frontmatter(text[4:end].split("\n"))
    name = values.pop("name", "")
    if not isinstance(name, str) or not name.strip():
        raise PromptRecordError("name is required")
    tags = _clean_tags(values.pop("tags", []))
    record = {"name": name.strip(), "tags": tags, "body": text[end + 5:]}
    if record["body"].startswith("\n"):
        record["body"] = record["body"][1:]
    if record["body"].endswith("\n"):
        record["body"] = record["body"][:-1]
    record.update(values)
    return record


def render_prompt_markdown(record):
    if not isinstance(record, dict):
        raise PromptRecordError("record must be an object")
    name = record.get("name")
    if not isinstance(name, str) or not name.strip():
        raise PromptRecordError("name is required")
    body = record.get("body", "")
    if not isinstance(body, str):
        raise PromptRecordError("body must be a string")
    tags = _clean_tags(record.get("tags", []))
    lines = ["---", f"name: {name.strip()}", "tags:"]
    lines.extend(f"  - {tag}" for tag in tags)
    for key, value in record.items():
        if key in {"name", "tags", "body", "id", "sourcePath"}:
            continue
        if isinstance(value, str) and "\n" not in value:
            lines.append(f"{key}: {value}")
    return "\n".join(lines) + "\n---\n" + body.rstrip("\n") + "\n"


def _record_for_path(path, root):
    relative = Path(path).relative_to(root).as_posix()
    source_path = _source_path(relative)
    record = parse_prompt_markdown(Path(path).read_text(encoding="utf-8"))
    folders = list(Path(source_path).parts[:-1])
    if folders and folders[0].casefold() not in {tag.casefold() for tag in record["tags"]}:
        record["tags"].append(folders[0])
    record.update({
        "id": source_path[:-3],
        "sourcePath": source_path,
        "category": folders[0] if folders else "",
        "folders": folders,
        "filename": Path(source_path).name,
    })
    return record


def list_prompt_files(directory):
    root = Path(directory).resolve()
    if not root.exists():
        return []
    records = []
    for path in sorted(root.rglob("*.md")):
        if path.is_symlink() or not path.is_file():
            continue
        try:
            records.append(_record_for_path(path, root))
        except (OSError, UnicodeError, PromptRecordError):
            continue
    return sorted(records, key=lambda record: record["id"])


def _safe_path(root, filename):
    root = Path(root).resolve()
    path = (root / filename).resolve()
    if root not in path.parents:
        raise PromptRecordError(f"path escapes library: {filename!r}")
    return path


def sync_prompt_files(directory, records):
    root = Path(directory).resolve()
    prepared = []
    seen = set()
    for record in records:
        if not isinstance(record, dict):
            raise PromptRecordError("record must be an object")
        prompt_id = record.get("id")
        filename = prompt_filename(prompt_id)
        key = filename.casefold()
        if key in seen:
            raise PromptRecordError(f"duplicate id: {prompt_id!r}")
        seen.add(key)
        _safe_path(root, filename)
        rendered = render_prompt_markdown(record)
        prepared.append((filename, rendered))
    root.mkdir(parents=True, exist_ok=True)
    expected = {filename for filename, _ in prepared}
    for existing in sorted(root.rglob("*.md")):
        if existing.is_file() and not existing.is_symlink() and existing.relative_to(root).as_posix() not in expected:
            existing.unlink()
    for filename, rendered in prepared:
        path = _safe_path(root, filename)
        path.parent.mkdir(parents=True, exist_ok=True)
        fd, temp_name = tempfile.mkstemp(prefix=".prompt-", dir=str(path.parent), text=True)
        try:
            with os.fdopen(fd, "w", encoding="utf-8") as stream:
                stream.write(rendered)
            os.replace(temp_name, path)
        finally:
            if os.path.exists(temp_name):
                os.unlink(temp_name)


def migrate_legacy_prompt_records(directory, records):
    migrated = []
    used = set()
    for record in records or []:
        if not isinstance(record, dict) or not isinstance(record.get("name"), str) or not isinstance(record.get("text", ""), str):
            continue
        base = re.sub(r"[^a-z0-9]+", "-", record["name"].casefold()).strip("-") or "prompt"
        prompt_id = base
        index = 2
        while prompt_id.casefold() in used:
            prompt_id = f"{base}-{index}"
            index += 1
        used.add(prompt_id.casefold())
        migrated.append({"id": prompt_id, "name": record["name"].strip(), "tags": [record["cat"]] if isinstance(record.get("cat"), str) and record["cat"] else [], "body": record.get("text", "")})
    sync_prompt_files(directory, migrated)
