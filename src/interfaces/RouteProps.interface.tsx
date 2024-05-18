import type { RouteParameters } from '../types/RouteParameters.type.tsx';

export interface RouteProps {
    path: string;
    parameters?: RouteParameters;
}
