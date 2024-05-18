import type { RouteParameters } from '../types/RouteParameters.type.tsx';

import type { CartItemProps } from './CartItemProps.interface.tsx';
import type { CartProps } from './CartProps.interface.tsx';
import type { RouteProps } from './RouteProps.interface.tsx';

export type ColorScheme = 'dark' | 'light';

export interface AppContextProps {
    themeMode: ColorScheme;
    setThemeMode: (mode: ColorScheme) => void;
    cart: CartProps;
    addToCart: (item: CartItemProps) => void;
    route: RouteProps;
    setRoutePath: (route: string, parameters?: RouteParameters) => void;
    setRoutePathParameters: (parameters: RouteParameters) => void;
    backToPreviousRoute: (alternativePath?: string, alternativeParameters?: RouteParameters) => void;
}
