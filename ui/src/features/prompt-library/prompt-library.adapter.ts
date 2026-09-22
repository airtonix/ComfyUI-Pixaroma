import type {
  PromptId,
  PromptLibraryLoadResult,
  PromptRecord,
} from "./prompt-library.types";
import { normalizePromptRecord } from "./prompt-library-markdown";
import { pixApiUrl } from "@/adapters/comfy/assets";

export type PromptLibraryFetch = (input: RequestInfo | URL, init?: RequestInit) => Promise<Response>;

export class PromptLibraryApiError extends Error {
  readonly route: string;
  readonly status?: number;
  readonly code?: string;

  constructor(message: string, route: string, status?: number, code?: string) {
    super(message);
    this.name = "PromptLibraryApiError";
    this.route = route;
    this.status = status;
    this.code = code;
  }
}

export type PromptLibraryAdapter = {
  load(signal?: AbortSignal): Promise<PromptLibraryLoadResult>;
  refresh(signal?: AbortSignal): Promise<PromptLibraryLoadResult>;
  get(id: PromptId, signal?: AbortSignal): Promise<PromptRecord>;
};

export type PromptLibraryAdapterOptions = {
  baseUrl?: string;
  fetchImpl?: PromptLibraryFetch;
};

const DEFAULT_BASE_URL = "/pixaroma/api/prompt/library/markdown";

function errorMessage(payload: unknown, status: number): { message: string; code?: string } {
  if (payload && typeof payload === "object") {
    const body = payload as Record<string, unknown>;
    const error = body.error;
    if (typeof error === "string" && error.trim()) return { message: error.trim(), code: typeof body.code === "string" ? body.code : undefined };
    if (error && typeof error === "object") {
      const nested = error as Record<string, unknown>;
      if (typeof nested.message === "string" && nested.message.trim()) {
        return { message: nested.message.trim(), code: typeof nested.code === "string" ? nested.code : undefined };
      }
    }
    for (const key of ["message", "detail", "details"]) {
      if (typeof body[key] === "string" && (body[key] as string).trim()) return { message: (body[key] as string).trim() };
    }
  }
  if (typeof payload === "string" && payload.trim()) return { message: payload.trim() };
  return { message: `Prompt library request failed (${status})` };
}

async function readPayload(response: Response, route: string): Promise<unknown> {
  const text = await response.text();
  if (!text.trim()) return null;
  try {
    return JSON.parse(text);
  } catch {
    throw new PromptLibraryApiError(
      response.ok ? "Prompt library returned invalid JSON" : `Prompt library request failed with a non-JSON response (${response.status})`,
      route,
      response.status,
      "invalid_json",
    );
  }
}

function invalidResponse(message: string, route: string): PromptLibraryApiError {
  return new PromptLibraryApiError(`Invalid prompt library response: ${message}`, route, undefined, "invalid_response");
}

function normalizedLibrary(payload: unknown, route: string): PromptLibraryLoadResult {
  if (!payload || typeof payload !== "object") throw invalidResponse("response must be an object", route);
  const value = payload as Record<string, unknown>;
  if (value.version !== 1) throw invalidResponse("version must be 1", route);
  if (!Array.isArray(value.prompts)) throw invalidResponse("prompts must be an array", route);

  const prompts: PromptRecord[] = [];
  const errors: PromptLibraryLoadResult["errors"] = [];
  const byId = new Map<string, PromptRecord>();
  const duplicates = new Set<string>();
  for (const [index, recordValue] of value.prompts.entries()) {
    const sourcePath = recordValue && typeof recordValue === "object" && typeof (recordValue as Record<string, unknown>).sourcePath === "string"
      ? (recordValue as Record<string, string>).sourcePath
      : `prompts[${index}]`;
    try {
      const record = normalizePromptRecord(recordValue);
      const key = record.id.toLocaleLowerCase();
      const previous = byId.get(key);
      if (previous) {
        duplicates.add(key);
        errors.push({ sourcePath: previous.sourcePath, message: `duplicate id "${key}" conflicts with ${record.sourcePath}` });
        errors.push({ sourcePath: record.sourcePath, message: `duplicate id "${key}" conflicts with ${previous.sourcePath}` });
      } else if (!duplicates.has(key)) {
        byId.set(key, record);
      }
    } catch (error) {
      errors.push({ sourcePath, message: error instanceof Error ? error.message : String(error) });
    }
  }
  for (const record of byId.values()) {
    if (!duplicates.has(record.id.toLocaleLowerCase())) prompts.push(record);
  }
  return { library: { version: 1, prompts }, errors };
}

export function createPromptLibraryAdapter(options: PromptLibraryAdapterOptions = {}): PromptLibraryAdapter {
  const baseUrl = options.baseUrl ?? DEFAULT_BASE_URL;
  const fetchImpl = options.fetchImpl ?? fetch;

  async function request(route: string, init?: RequestInit): Promise<unknown> {
    const response = await fetchImpl(pixApiUrl(route), init);
    const payload = await readPayload(response, route);
    if (!response.ok) {
      const error = errorMessage(payload, response.status);
      throw new PromptLibraryApiError(error.message, route, response.status, error.code);
    }
    return payload;
  }

  return {
    async load(signal) {
      const route = baseUrl;
      return normalizedLibrary(await request(route, { signal }), route);
    },
    async refresh(signal) {
      const route = `${baseUrl}/refresh`;
      return normalizedLibrary(await request(route, { method: "POST", signal }), route);
    },
    async get(id, signal) {
      const route = `${baseUrl}/${encodeURIComponent(id)}`;
      const payload = await request(route, { signal });
      if (!payload || typeof payload !== "object" || !("prompt" in payload)) {
        throw invalidResponse("prompt must be an object", route);
      }
      try {
        return normalizePromptRecord((payload as Record<string, unknown>).prompt);
      } catch (error) {
        throw invalidResponse(error instanceof Error ? error.message : String(error), route);
      }
    },
  };
}
