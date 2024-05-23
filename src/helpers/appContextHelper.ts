import type { ColorScheme } from '../types/ColorScheme.type.tsx';

export const parseColorScheme = (): ColorScheme => {
    const savedScheme: string | null = getStoredColorScheme();
    const validColorSchemes: ColorScheme[] = ['dark', 'light'];
    const browserThemeMode: ColorScheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

    return savedScheme && validColorSchemes.includes(savedScheme as ColorScheme) ? (savedScheme as ColorScheme) : browserThemeMode;
};

const getStoredColorScheme = (): string | null => localStorage.getItem('themeMode');

export const updateRootColorSchemeClass = (colorScheme: ColorScheme) => {
    const removeThemeClasses: string[] = ['dark', 'light'];

    document.documentElement.classList.remove(...removeThemeClasses);
    document.documentElement.classList.add(colorScheme);
};

export const setStoredColorScheme = (colorScheme: ColorScheme) => localStorage.setItem('themeMode', colorScheme);
