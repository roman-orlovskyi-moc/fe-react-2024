import type { Cart } from './Cart.interface.ts';
import type { CartItem } from './CartItem.interface.ts';

export interface CartContextProps {
    cart: Cart;
    addToCart: (item: CartItem) => void;
    updateCartItemQuantity: (itemId: number, newQuantity: number) => void;
    removeCartItem: (itemId: number) => void;
    clearCart: () => void;
}
