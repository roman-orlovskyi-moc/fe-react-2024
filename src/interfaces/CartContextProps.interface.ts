import type { Cart } from './Cart.interface.ts';
import type { CartItem } from './CartItem.interface.ts';

export interface CartContextProps {
    cart: Cart;
    addToCart: (item: CartItem) => void;
}
