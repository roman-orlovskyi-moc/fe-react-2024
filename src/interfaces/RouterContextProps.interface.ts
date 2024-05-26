import type { RouteParameters } from '../types/RouteParameters.type.ts';

import type { Route } from './Route.interface.ts';

export interface RouterContextProps {
    route: Route;
    setRoutePath: (route: string, parameters?: RouteParameters) => void;
    setRoutePathParameters: (parameters: RouteParameters) => void;
    backToPreviousRoute: (alternativePath?: string, alternativeParameters?: RouteParameters) => void;
}
