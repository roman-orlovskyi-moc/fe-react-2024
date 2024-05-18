import type { RouteParameters } from '../types/RouteParameters.type.tsx';

export interface Route {
    path: string;
    parameters?: RouteParameters;
}
