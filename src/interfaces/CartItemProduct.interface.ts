import type { CartItem } from './CartItem.interface.ts';
import type { Product } from './Product.interface.ts';

export interface CartItemProduct extends Product {
    cartItem: Pick<CartItem, 'quantity'>;
}
