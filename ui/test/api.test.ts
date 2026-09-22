import { beforeEach, describe, expect, it, vi } from "vitest";

vi.mock("/scripts/api.js", () => ({ api: { apiURL: (route: string) => route } }), { virtual: true });
vi.mock("@/adapters/comfy/assets", () => ({ pixApiUrl: (route: string) => route }));

import { ComfyApiError, fetchJson } from "@/adapters/comfy/api";

const fetchMock = vi.fn();
vi.stubGlobal("fetch", fetchMock);

describe("fetchJson", () => {
  beforeEach(() => fetchMock.mockReset());

  it("returns parsed JSON for successful responses", async () => {
    fetchMock.mockResolvedValue(new Response('{"ok":true}', { status: 200 }));

    await expect(fetchJson<{ ok: boolean }>("/api/example")).resolves.toEqual({ ok: true });
    expect(fetchMock).toHaveBeenCalledWith("/api/example", undefined);
  });

  it("normalizes nested API errors with route and status", async () => {
    fetchMock.mockResolvedValue(new Response(JSON.stringify({ error: { detail: "Not found" } }), { status: 404 }));

    const error = await fetchJson("/api/missing").catch((value) => value);

    expect(error).toBeInstanceOf(ComfyApiError);
    expect(error).toMatchObject({ name: "ComfyApiError", message: "Not found", status: 404, route: "/api/missing" });
  });

  it("uses a stable fallback for empty or invalid error payloads", async () => {
    fetchMock.mockResolvedValue(new Response("not json", { status: 503 }));

    await expect(fetchJson("/api/unavailable")).rejects.toMatchObject({ message: "not json", status: 503 });
  });
});
