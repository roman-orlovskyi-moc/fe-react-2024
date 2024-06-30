import type { RootState } from '../store.ts';

export const cartSelector = (state: RootState) => state.cart;
