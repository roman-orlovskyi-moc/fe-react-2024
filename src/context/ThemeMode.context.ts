import { createContext } from 'react';

import type { ThemeModeContextProps } from '../interfaces/ThemeModeContextProps.interface.ts';
import type { ColorScheme } from '../types/ColorScheme.type.ts';

export const ThemeModeContext = createContext<ThemeModeContextProps>({
    colorScheme: 'dark',
    setColorScheme: (colorScheme: ColorScheme) => {},
});
