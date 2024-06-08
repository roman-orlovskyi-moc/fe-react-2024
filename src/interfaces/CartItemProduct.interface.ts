import type { CartItem } from './CartItem.interface.ts';
import type { Product } from './Product.interface.ts';

export interface CartItemProduct extends Product, Omit<CartItem, 'id'> {}
