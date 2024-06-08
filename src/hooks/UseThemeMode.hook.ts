import { useContext } from 'react';

import { ThemeModeContext } from '../context/ThemeMode.context.tsx';
import type { ThemeModeContextProps } from '../interfaces/ThemeModeContextProps.interface.ts';

export const useThemeMode = (): ThemeModeContextProps => useContext(ThemeModeContext);
