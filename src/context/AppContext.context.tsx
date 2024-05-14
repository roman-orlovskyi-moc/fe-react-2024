import React, { createContext, useEffect, useState } from 'react';

import type { AppContextProps, ColorScheme } from '@/interfaces/AppContextProps.interface.tsx';
import type { CartItemProps } from '@/interfaces/CartItemProps.interface.tsx';
import type { CartProps } from '@/interfaces/CartProps.interface.tsx';
import type { RouteParameters, RouteProps } from '@/interfaces/RouteProps.interface.tsx';

import { buildRoutePath, parseRoute } from '../helpers/routeHelper.ts';

export const AppContext = createContext<AppContextProps>({
    themeMode: 'dark',
    setThemeMode: (mode: ColorScheme) => {},
    cart: { items: [] },
    addToCart: (item: CartItemProps) => {},
    route: { path: '/about', parameters: {} },
    setRoutePath: (route: string, parameters?: RouteParameters) => {},
    setRoutePathParameters: (parameters: RouteParameters) => {},
    backToPreviousRoute: (alternativePath?: string, alternativeParameters?: RouteParameters) => {},
});

interface AppContextProviderProps {
    children: React.ReactNode;
}

export const AppContextProvider: React.FC<AppContextProviderProps> = ({ children }) => {
    const [themeMode, setThemeMode] = useState<ColorScheme>(() => {
        const savedScheme: string | null = localStorage.getItem('themeMode');
        const validColorSchemes: ColorScheme[] = ['dark', 'light'];
        const browserThemeMode: ColorScheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

        return savedScheme && validColorSchemes.includes(savedScheme as ColorScheme) ? (savedScheme as ColorScheme) : browserThemeMode;
    });

    useEffect(() => {
        const removeThemeClasses: string[] = ['dark', 'light'];

        document.documentElement.classList.remove(...removeThemeClasses);
        document.documentElement.classList.add(themeMode);
        localStorage.setItem('themeMode', themeMode);
    }, [themeMode]);

    function isCartItemProps(object: any): object is CartItemProps {
        return object && 'id' in object && 'quantity' in object;
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
        setCart((currentCart: CartProps) => {
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

    const [route, setRoute] = useState<RouteProps>(parseRoute(window.location.hash || '/about'));
    const [previousRoute, setPreviousRoute] = useState<RouteProps | null>(null);

    const setRoutePath = (path: string, parameters?: RouteParameters) => {
        setPreviousRoute(route);
        setRoute({ path, parameters: parameters || {} });
        setLocationHash(path, parameters);
    };

    const setRoutePathParameters = (parameters: RouteParameters) => {
        setRoutePath(route.path, { ...route.parameters, ...parameters });
    };

    const backToPreviousRoute = (alternativePath?: string, alternativeParameters?: RouteParameters) => {
        if (previousRoute) {
            setRoutePath(previousRoute.path, previousRoute.parameters);
        } else {
            setRoutePath(alternativePath || '/about', alternativeParameters);
        }
    };

    const setLocationHash = (path: string, parameters?: RouteParameters) => {
        window.location.hash = buildRoutePath(path, parameters);
    };

    return (
        <AppContext.Provider
            value={{ themeMode, setThemeMode, cart, addToCart, route, setRoutePath, setRoutePathParameters, backToPreviousRoute }}
        >
            {children}
        </AppContext.Provider>
    );
};
