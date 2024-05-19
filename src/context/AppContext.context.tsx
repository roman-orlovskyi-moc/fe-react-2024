import React, { createContext, useEffect, useState } from 'react';

import {
    parseColorScheme,
    parseStoredCartData,
    prepareRoutePathParameters,
    prepareUpdatedCartData,
    setStoredCartData,
    setStoredColorScheme,
    updateRootColorSchemeClass,
} from '../helpers/appContextHelper.ts';
import { buildRoutePath, parseRoute } from '../helpers/routeHelper.ts';
import type { AppContextProps } from '../interfaces/AppContextProps.interface.tsx';
import type { Cart } from '../interfaces/Cart.interface.tsx';
import type { CartItem } from '../interfaces/CartItem.interface.tsx';
import type { Route } from '../interfaces/Route.interface.tsx';
import type { ColorScheme } from '../types/ColorScheme.type.tsx';
import type { RouteParameters } from '../types/RouteParameters.type.tsx';

export const AppContext = createContext<AppContextProps>({
    themeMode: 'dark',
    setThemeMode: (mode: ColorScheme) => {},
    cart: { items: [] },
    addToCart: (item: CartItem) => {},
    route: { path: '/about', parameters: {} },
    setRoutePath: (route: string, parameters?: RouteParameters) => {},
    setRoutePathParameters: (parameters: RouteParameters) => {},
    backToPreviousRoute: (alternativePath?: string, alternativeParameters?: RouteParameters) => {},
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

    const [route, setRoute] = useState<Route>(parseRoute(window.location.hash || '/about'));
    const [previousRoute, setPreviousRoute] = useState<Route | null>(null);

    const setRoutePath = (path: string, parameters?: RouteParameters) => {
        setPreviousRoute(route);
        setRoute({ path, parameters: parameters || {} });
        setLocationHash(path, parameters);
    };

    const setRoutePathParameters = (parameters: RouteParameters) => {
        setRoutePath(route.path, prepareRoutePathParameters(route.parameters || {}, parameters));
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
