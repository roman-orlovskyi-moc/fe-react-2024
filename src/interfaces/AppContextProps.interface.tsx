import type { CartItemProps } from './CartItemProps.interface.tsx';
import type { CartProps } from './CartProps.interface.tsx';

export type ColorScheme = 'dark' | 'light';

export interface AppContextProps {
    themeMode: ColorScheme;
    setThemeMode: (mode: ColorScheme) => void;
    cart: CartProps;
    addToCart: (item: CartItemProps) => void;
}
