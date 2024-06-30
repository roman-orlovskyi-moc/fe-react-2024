import { createSlice } from '@reduxjs/toolkit';

import type { ThemeState } from '@/interfaces/ThemeState.interface.ts';

import { handleSetColorScheme, parseColorScheme } from './helpers.ts';

const initialState: ThemeState = {
    colorScheme: parseColorScheme(),
};

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setColorScheme: handleSetColorScheme,
    },
});

export const { setColorScheme } = themeSlice.actions;

export default themeSlice.reducer;
