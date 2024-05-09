export type RouteParameters = Record<string | symbol, string>;

export interface RouteProps {
    path: string;
    parameters?: RouteParameters;
}
