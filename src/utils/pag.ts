import { PAGInit } from 'libpag';
import PagWasm from '@assets/wasm/libpag.wasm';

export const loadLibPag = async () =>
  PAGInit({
    locateFile: () => PagWasm,
  });
