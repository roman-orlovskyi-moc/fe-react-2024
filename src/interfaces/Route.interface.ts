import type { RouteParameters } from '../types/RouteParameters.type.ts';

export interface Route {
    path: string;
    parameters?: RouteParameters;
}
