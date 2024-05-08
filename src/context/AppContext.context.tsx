import React, { createContext, useEffect, useState } from 'react';

import type { AppContextProps, ColorScheme } from '@/interfaces/AppContextProps.interface.tsx';
import type { CartItemProps } from '@/interfaces/CartItemProps.interface.tsx';
import type { CartProps } from '@/interfaces/CartProps.interface.tsx';

export const AppContext = createContext<AppContextProps>({
    themeMode: 'dark',
    setThemeMode: (mode: ColorScheme) => {},
    cart: { items: [] },
    addToCart: (item: CartItemProps) => {},
    route: '#/about',
    setRoutePath: (route: string) => {},
});

interface AppContextProviderProps {
    children: React.ReactNode;
}

export const AppContextProvider: React.FC<AppContextProviderProps> = ({ children }) => {
    const browserThemeMode: ColorScheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

    const [themeMode, setThemeMode] = useState<ColorScheme>(() => {
        const savedScheme: string | null = localStorage.getItem('themeMode');
        const validColorSchemes: ColorScheme[] = ['dark', 'light'];

        return savedScheme && validColorSchemes.includes(savedScheme as ColorScheme) ? (savedScheme as ColorScheme) : browserThemeMode;
    });

    useEffect(() => {
        const removeThemeClasses: string[] = ['dark', 'light'];

        if (browserThemeMode === themeMode) {
            document.documentElement.classList.remove(...removeThemeClasses);
            localStorage.removeItem('themeMode');
        } else {
            document.documentElement.classList.remove(...removeThemeClasses);
            document.documentElement.classList.add(themeMode);
            localStorage.setItem('themeMode', themeMode);
        }
    }, [browserThemeMode, themeMode]);

    function isCartItemProps(object: any): object is CartItemProps {
        return object && 'id' in object && 'title' in object && 'image' in object && 'price' in object && 'quantity' in object;
    }

    function isCartProps(object: any): object is CartProps {
        return object && Array.isArray(object.items) && object.items.every((element: any) => isCartItemProps(element));
    }

    const [cart, setCart] = useState<CartProps>(() => {
        const savedCartData: string | null = localStorage.getItem('cart');
        const parsedCartData = savedCartData ? JSON.parse(savedCartData) : null;

        return isCartProps(parsedCartData) ? (parsedCartData as CartProps) : { items: [] };
    });

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (item: CartItemProps) => {
        setCart((currentCart) => {
            const itemIndex: number = currentCart.items.findIndex((cartItem) => cartItem.id === item.id);

            if (itemIndex === -1) {
                return { items: [...currentCart.items, item] };
            } else {
                const newCartItems = currentCart.items.map((cartItem) =>
                    cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + item.quantity } : cartItem,
                );

                return { items: newCartItems };
            }
        });
    };

    const [route, setRoute] = useState<string>(window.location.hash || '#/about');

    const setRoutePath = (routePath: string) => {
        setRoute(routePath);
        window.location.hash = routePath;
    };

    return <AppContext.Provider value={{ themeMode, setThemeMode, cart, addToCart, route, setRoutePath }}>{children}</AppContext.Provider>;
};
