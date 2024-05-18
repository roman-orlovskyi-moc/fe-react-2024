import type { ColorScheme } from '../types/ColorScheme.type.ts';
import type { RouteParameters } from '../types/RouteParameters.type.tsx';

import type { Cart } from './Cart.interface.tsx';
import type { CartItem } from './CartItem.interface.tsx';
import type { Route } from './Route.interface.tsx';

export interface AppContextProps {
    themeMode: ColorScheme;
    setThemeMode: (mode: ColorScheme) => void;
    cart: Cart;
    addToCart: (item: CartItem) => void;
    route: Route;
    setRoutePath: (route: string, parameters?: RouteParameters) => void;
    setRoutePathParameters: (parameters: RouteParameters) => void;
    backToPreviousRoute: (alternativePath?: string, alternativeParameters?: RouteParameters) => void;
}
