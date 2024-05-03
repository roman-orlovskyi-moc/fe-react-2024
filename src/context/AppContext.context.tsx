import React, { createContext, useEffect, useState } from 'react';

import type { CartItemProps } from '@/interfaces/CartItemProps.interface.tsx';
import type { CartProps } from '@/interfaces/CartProps.interface.tsx';

type ColorScheme = 'dark' | 'light';

interface AppContextProps {
    themeMode: ColorScheme;
    setThemeMode: (mode: ColorScheme) => void;
    cart: CartProps;
    addToCart: (item: CartItemProps) => void;
}

export const AppContext = createContext<AppContextProps>({
    themeMode: 'dark',
    setThemeMode: (mode: ColorScheme) => {},
    cart: { items: [] },
    addToCart: (item: CartItemProps) => {},
});

interface AppContextProviderProps {
    children: React.ReactNode;
}

export const AppContextProvider: React.FC<AppContextProviderProps> = ({ children }) => {
    const browserThemeMode: ColorScheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

    const [themeMode, setThemeMode] = useState<ColorScheme>(() => {
        const savedScheme = localStorage.getItem('themeMode');
        const validColorSchemes: ColorScheme[] = ['dark', 'light'];

        return savedScheme && validColorSchemes.includes(savedScheme as ColorScheme) ? (savedScheme as ColorScheme) : browserThemeMode;
    });

    useEffect(() => {
        const removeThemeClasses = ['dark', 'light'];

        if (browserThemeMode === themeMode) {
            localStorage.removeItem('themeMode');
            document.documentElement.classList.remove(...removeThemeClasses);
        } else {
            localStorage.setItem('themeMode', themeMode);
            document.documentElement.classList.remove(...removeThemeClasses);
            document.documentElement.classList.add(themeMode);
        }

        setThemeMode(themeMode);
    }, [browserThemeMode, themeMode]);

    const [cart, setCart] = useState<CartProps>(() => {
        const savedCartData = localStorage.getItem('cart');

        return savedCartData ? (JSON.parse(savedCartData) as CartProps) : { items: [] };
    });

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (item: CartItemProps) => {
        const itemIndex = cart.items.findIndex((cartItem) => cartItem.id === item.id);

        if (itemIndex === -1) {
            setCart({ items: [...cart.items, item] });
        } else {
            const newCartItems = cart.items.map((cartItem) =>
                cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + item.quantity } : cartItem,
            );

            setCart({ items: newCartItems });
        }
    };

    return <AppContext.Provider value={{ themeMode, setThemeMode, cart, addToCart }}>{children}</AppContext.Provider>;
};
