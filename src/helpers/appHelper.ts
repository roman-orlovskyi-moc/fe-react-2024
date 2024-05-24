import type { ColorScheme } from '../types/ColorScheme.type.ts';

export const parseColorScheme = (): ColorScheme => {
    const savedScheme: string | null = getStoredColorScheme();
    const validColorSchemes: ColorScheme[] = ['dark', 'light'];
    const browserThemeMode: ColorScheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

    return savedScheme && validColorSchemes.includes(savedScheme as ColorScheme) ? (savedScheme as ColorScheme) : browserThemeMode;
};

const getStoredColorScheme = (): string | null => localStorage.getItem('themeMode');

export const updateRootColorSchemeClass = (appWrapper: HTMLDivElement | null, colorScheme: ColorScheme) => {
    if (appWrapper) {
        const removeThemeClasses: string[] = ['dark', 'light'];

        appWrapper.classList.remove(...removeThemeClasses);
        appWrapper.classList.add(colorScheme);
    }
};

export const setStoredColorScheme = (colorScheme: ColorScheme) => localStorage.setItem('themeMode', colorScheme);
