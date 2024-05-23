import type { Cart } from './Cart.interface.tsx';
import type { CartItem } from './CartItem.interface.tsx';

export interface CartContextProps {
    cart: Cart;
    addToCart: (item: CartItem) => void;
}
