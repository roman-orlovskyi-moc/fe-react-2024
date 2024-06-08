import React, { createContext, useEffect, useState } from 'react';

import { parseColorScheme, setStoredColorScheme } from '@/helpers/ThemeModeContext.helper.ts';

import type { ThemeModeContextProps } from '../interfaces/ThemeModeContextProps.interface.ts';
import type { ColorScheme } from '../types/ColorScheme.type.ts';

export const ThemeModeContext = createContext<ThemeModeContextProps>({
    colorScheme: 'dark',
    setColorScheme: (colorScheme: ColorScheme) => {},
});

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
