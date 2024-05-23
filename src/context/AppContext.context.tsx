import React, { createContext, useEffect, useState } from 'react';

import {
    parseColorScheme,
    parseStoredCartData,
    prepareUpdatedCartData,
    setStoredCartData,
    setStoredColorScheme,
    updateRootColorSchemeClass,
} from '../helpers/appContextHelper.ts';
import type { AppContextProps } from '../interfaces/AppContextProps.interface.tsx';
import type { Cart } from '../interfaces/Cart.interface.tsx';
import type { CartItem } from '../interfaces/CartItem.interface.tsx';
import type { ColorScheme } from '../types/ColorScheme.type.tsx';

export const AppContext = createContext<AppContextProps>({
    themeMode: 'dark',
    setThemeMode: (mode: ColorScheme) => {},
    cart: { items: [] },
    addToCart: (item: CartItem) => {},
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

    const [cart, setCart] = useState<Cart>(() => parseStoredCartData());

    useEffect(() => {
        setStoredCartData(cart);
    }, [cart]);

    const addToCart = (item: CartItem) => setCart((currentCart: Cart) => prepareUpdatedCartData(currentCart, item));

    return <AppContext.Provider value={{ themeMode, setThemeMode, cart, addToCart }}>{children}</AppContext.Provider>;
};
