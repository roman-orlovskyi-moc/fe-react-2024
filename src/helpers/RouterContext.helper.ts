import { ROUTES } from '../constants/Routes.constant.ts';
import type { Route } from '../interfaces/Route.interface.ts';
import type { RouteParameters } from '../types/RouteParameters.type.ts';

export const parseLocationHash = (): Route => parseRoute(window.location.hash || ROUTES.ABOUT);

export const parseRoute = (route: string): Route => {
    const routeWithoutHash: string = route.replace(/^#/, '');
    const url = new URL(routeWithoutHash, 'https://example.com');
    const parameters: RouteParameters = {};

    for (const [key, value] of url.searchParams) {
        parameters[key] = value;
    }

    return { path: url.pathname, parameters };
};

export const buildRoutePath = (path: string, parameters?: RouteParameters): string => {
    const parametersString: string = new URLSearchParams(parameters).toString();
    const searchParametersString: string = parametersString ? `?${parametersString}` : '';

    return `${path}${searchParametersString}`;
};

export const prepareRoutePathParameters = (currentParameters: RouteParameters, newParameters: RouteParameters): RouteParameters => {
    if (newParameters) {
        const parameters: RouteParameters = { ...currentParameters, ...newParameters };

        Object.keys(parameters).forEach((key: string) => {
            if (!parameters[key]) {
                delete parameters[key];
            }
        });

        return parameters;
    } else {
        return {};
    }
};
