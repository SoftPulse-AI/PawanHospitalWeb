/// <reference types="vite/client" />

declare module "*.mp4.asset.json" {
  const value: { url: string; type?: string };
  export default value;
}
