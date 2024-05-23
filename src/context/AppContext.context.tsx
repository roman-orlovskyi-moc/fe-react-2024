import React, { createContext, useEffect, useState } from 'react';

import { parseColorScheme, setStoredColorScheme, updateRootColorSchemeClass } from '../helpers/appContextHelper.ts';
import type { AppContextProps } from '../interfaces/AppContextProps.interface.tsx';
import type { ColorScheme } from '../types/ColorScheme.type.tsx';

export const AppContext = createContext<AppContextProps>({
    themeMode: 'dark',
    setThemeMode: (mode: ColorScheme) => {},
});

interface AppContextProviderProps {
    children: React.ReactNode;
}

export const AppContextProvider: React.FC<AppContextProviderProps> = ({ children }) => {
    const [themeMode, setThemeMode] = useState<ColorScheme>(() => parseColorScheme());

    useEffect(() => {
        updateRootColorSchemeClass(themeMode);
        setStoredColorScheme(themeMode);
    }, [themeMode]);

    return <AppContext.Provider value={{ themeMode, setThemeMode }}>{children}</AppContext.Provider>;
};
