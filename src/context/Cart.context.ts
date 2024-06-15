import { createContext } from 'react';

import type { CartContextProps } from '../interfaces/CartContextProps.interface.ts';
import type { CartItem } from '../interfaces/CartItem.interface.ts';

export const CartContext = createContext<CartContextProps>({
    cart: { items: [] },
    addToCart: (item: CartItem) => {},
});
