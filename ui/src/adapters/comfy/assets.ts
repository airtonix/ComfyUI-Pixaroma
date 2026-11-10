// The legacy helper owns ComfyUI's hosted-path and authentication rules.
// @ts-expect-error ComfyUI ships this module outside the React TypeScript project.
import {
  pixApiUrl as legacyApiUrl,
  pixAsset as legacyAsset,
} from "../../../../js/shared/api_url.mjs";

export function pixApiUrl(route: string): string {
  return legacyApiUrl(route);
}

export function pixAsset(path: string): string {
  return legacyAsset(path);
}
