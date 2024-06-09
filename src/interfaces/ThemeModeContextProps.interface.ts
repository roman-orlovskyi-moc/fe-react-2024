import type { ColorScheme } from '../types/ColorScheme.type.ts';

export interface ThemeModeContextProps {
    colorScheme: ColorScheme;
    setColorScheme: (colorScheme: ColorScheme) => void;
}
