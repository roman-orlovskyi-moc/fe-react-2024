import type { RouteParameters } from '../types/RouteParameters.type.tsx';

import type { Route } from './Route.interface.tsx';

export interface Router {
    route: Route;
    setRoutePath: (route: string, parameters?: RouteParameters) => void;
    setRoutePathParameters: (parameters: RouteParameters) => void;
    backToPreviousRoute: (alternativePath?: string, alternativeParameters?: RouteParameters) => void;
}
