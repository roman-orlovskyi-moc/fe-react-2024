import type { CartItemProps } from './CartItemProps.interface.tsx';
import type { CartProps } from './CartProps.interface.tsx';
import type { RouteParameters, RouteProps } from './RouteProps.interface.tsx';

export type ColorScheme = 'dark' | 'light';

export interface AppContextProps {
    themeMode: ColorScheme;
    setThemeMode: (mode: ColorScheme) => void;
    cart: CartProps;
    addToCart: (item: CartItemProps) => void;
    route: RouteProps;
    setRoutePath: (route: string) => void;
    setRoutePathParameters: (parameters: RouteParameters) => void;
}
