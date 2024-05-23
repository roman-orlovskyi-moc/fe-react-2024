import type { ColorScheme } from '../types/ColorScheme.type.ts';

import type { Cart } from './Cart.interface.tsx';
import type { CartItem } from './CartItem.interface.tsx';

export interface AppContextProps {
    themeMode: ColorScheme;
    setThemeMode: (mode: ColorScheme) => void;
    cart: Cart;
    addToCart: (item: CartItem) => void;
}
