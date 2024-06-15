import { useContext } from 'react';

import { ThemeModeContext } from '../context/ThemeMode.context.ts';
import type { ThemeModeContextProps } from '../interfaces/ThemeModeContextProps.interface.ts';

export const useThemeMode = (): ThemeModeContextProps => useContext(ThemeModeContext);
