/// <reference types="vite/client" />

declare module "virtual:pixaroma-help-documents" {
  const documents: Array<{ path: string; source: string }>;
  export default documents;
}
