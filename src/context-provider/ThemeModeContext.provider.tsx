import React, { useEffect, useState } from 'react';

import { parseColorScheme, setStoredColorScheme } from '@/helpers/ThemeModeContext.helper.ts';

import { ThemeModeContext } from '../context/ThemeMode.context.ts';
import type { ColorScheme } from '../types/ColorScheme.type.ts';

interface ThemeModeContextProviderProps {
    children: React.ReactNode;
}

export const ThemeModeContextProvider: React.FC<ThemeModeContextProviderProps> = ({ children }) => {
    const [colorScheme, setColorScheme] = useState<ColorScheme>(() => parseColorScheme());

    useEffect(() => {
        setStoredColorScheme(colorScheme);
    }, [colorScheme]);

    return <ThemeModeContext.Provider value={{ colorScheme, setColorScheme }}>{children}</ThemeModeContext.Provider>;
};
