import type { Route } from '../interfaces/Route.interface.tsx';
import type { RouteParameters } from '../types/RouteParameters.type.tsx';

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
