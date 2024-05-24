import React, { createContext, useEffect, useState } from 'react';

import { ROUTES } from '../constants/routes.ts';
import { buildRoutePath, parseLocationHash, prepareRoutePathParameters } from '../helpers/RouterContextHelper.ts';
import type { Route } from '../interfaces/Route.interface.ts';
import type { RouterContextProps } from '../interfaces/RouterContextProps.interface.ts';
import type { RouteParameters } from '../types/RouteParameters.type.ts';

export const RouterContext = createContext<RouterContextProps>({
    route: { path: ROUTES.ABOUT, parameters: {} },
    setRoutePath: (route: string, parameters?: RouteParameters) => {},
    setRoutePathParameters: (parameters: RouteParameters) => {},
    backToPreviousRoute: (alternativePath?: string, alternativeParameters?: RouteParameters) => {},
});

interface RouterContextProviderProps {
    children: React.ReactNode;
}

export const RouterContextProvider: React.FC<RouterContextProviderProps> = ({ children }) => {
    const [route, setRoute] = useState<Route>(parseLocationHash());
    const [previousRoute, setPreviousRoute] = useState<Route | null>(null);

    useEffect(() => {
        const handleHashChange = () => {
            setRoute((currentRoute) => {
                setPreviousRoute(currentRoute);

                return parseLocationHash();
            });
        };

        window.addEventListener('hashchange', handleHashChange);

        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, []);

    const setRoutePath = (path: string, parameters?: RouteParameters) => {
        window.location.hash = buildRoutePath(path, parameters);
    };

    const setRoutePathParameters = (parameters: RouteParameters) => {
        setRoutePath(route.path, prepareRoutePathParameters(route.parameters || {}, parameters));
    };

    const backToPreviousRoute = (alternativePath?: string, alternativeParameters?: RouteParameters) => {
        if (previousRoute) {
            setRoutePath(previousRoute.path, previousRoute.parameters);
        } else {
            setRoutePath(alternativePath || ROUTES.ABOUT, alternativeParameters);
        }
    };

    return (
        <RouterContext.Provider value={{ route, setRoutePath, setRoutePathParameters, backToPreviousRoute }}>
            {children}
        </RouterContext.Provider>
    );
};
