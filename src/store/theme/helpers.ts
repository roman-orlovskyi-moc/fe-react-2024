import type { PayloadAction } from '@reduxjs/toolkit';

import type { ThemeState } from '@/interfaces/ThemeState.interface.ts';
import type { ColorScheme } from '@/types/ColorScheme.type.ts';

export const parseColorScheme = (): ColorScheme => {
    const savedScheme: string | null = getStoredColorScheme();
    const validColorSchemes: ColorScheme[] = ['dark', 'light'];
    const browserThemeMode: ColorScheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

    return savedScheme && validColorSchemes.includes(savedScheme as ColorScheme) ? (savedScheme as ColorScheme) : browserThemeMode;
};

const getStoredColorScheme = (): string | null => localStorage.getItem('themeMode');

export const handleSetColorScheme = (state: ThemeState, action: PayloadAction<ColorScheme>): void => {
    state.colorScheme = action.payload;
    setStoredColorScheme(action.payload);
};

const setStoredColorScheme = (colorScheme: ColorScheme) => localStorage.setItem('themeMode', colorScheme);
