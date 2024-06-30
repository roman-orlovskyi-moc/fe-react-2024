import type { Cart } from './Cart.interface.ts';

export interface CartState {
    cart: Cart;
    cartItemsCount: number;
}
