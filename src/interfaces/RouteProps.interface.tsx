import type { RouteParameters } from '../types/RouteProps.type.tsx';

export interface RouteProps {
    path: string;
    parameters?: RouteParameters;
}
