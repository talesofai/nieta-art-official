/// <reference types="astro/client" />

declare module "*.wasm" {
  const result: string
  export default result
}