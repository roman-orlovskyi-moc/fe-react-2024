import type { RootState } from '../store.ts';

export const productSelector = (state: RootState) => state.product;
