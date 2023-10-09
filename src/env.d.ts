/// <reference types="astro/client" />

declare module '*.wasm' {
  const result: string;
  export default result;
}

declare module '*.pag' {
  const result: string;
  export default result;
}

declare module '*.json' {
  const result: string;
  export default result;
}
