import type { ColorScheme } from '../types/ColorScheme.type.ts';

export interface AppContextProps {
    themeMode: ColorScheme;
    setThemeMode: (mode: ColorScheme) => void;
}
