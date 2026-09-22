import { pixApiUrl } from "./assets";

export class ComfyApiError extends Error {
  readonly status: number;
  readonly route: string;

  constructor(message: string, status: number, route: string) {
    super(message);
    this.name = "ComfyApiError";
    this.status = status;
    this.route = route;
  }
}

function errorMessage(payload: unknown, status: number): string {
  if (typeof payload === "string" && payload.trim()) return payload.trim();
  if (payload && typeof payload === "object") {
    const body = payload as Record<string, unknown>;
    for (const key of ["error", "message", "msg", "detail", "details"]) {
      const value = body[key];
      if (typeof value === "string" && value.trim()) return value.trim();
    }
    if (body.error && typeof body.error === "object") {
      return errorMessage(body.error, status);
    }
  }
  return `ComfyUI request failed (${status})`;
}

export async function fetchJson<T>(route: string, init?: RequestInit): Promise<T> {
  const response = await fetch(pixApiUrl(route), init);
  const text = await response.text();
  let payload: unknown = null;
  if (text) {
    try {
      payload = JSON.parse(text);
    } catch {
      payload = text;
    }
  }
  if (!response.ok) throw new ComfyApiError(errorMessage(payload, response.status), response.status, route);
  return payload as T;
}
