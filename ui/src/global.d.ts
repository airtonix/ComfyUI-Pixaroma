import type { PixaromaReactUi } from "./mount";

declare global {
  interface Window {
    PixaromaReactUi?: PixaromaReactUi;
  }
}

export {};
