import type { RootState } from '../store.ts';

export const themeSelector = (state: RootState) => state.theme;
