import React, { createContext, useState } from 'react';

import { buildRoutePath, parseRoute, prepareRoutePathParameters } from '@/helpers/routerContextHelper.ts';

import type { Route } from '../interfaces/Route.interface.ts';
import type { RouterContextProps } from '../interfaces/RouterContextProps.interface.ts';
import type { RouteParameters } from '../types/RouteParameters.type.ts';

export const RouterContext = createContext<RouterContextProps>({
    route: { path: '/about', parameters: {} },
    setRoutePath: (route: string, parameters?: RouteParameters) => {},
    setRoutePathParameters: (parameters: RouteParameters) => {},
    backToPreviousRoute: (alternativePath?: string, alternativeParameters?: RouteParameters) => {},
});

interface RouterContextProviderProps {
    children: React.ReactNode;
}

export const RouterContextProvider: React.FC<RouterContextProviderProps> = ({ children }) => {
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
        <RouterContext.Provider value={{ route, setRoutePath, setRoutePathParameters, backToPreviousRoute }}>
            {children}
        </RouterContext.Provider>
    );
};
