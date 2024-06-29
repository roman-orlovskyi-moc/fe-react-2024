import type { RootState } from '../store.ts';

export const productsSelector = (state: RootState) => state.products;
