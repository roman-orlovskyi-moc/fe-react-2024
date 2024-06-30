import type { CartItem } from '../interfaces/CartItem.interface.ts';

export const findCartItemById = (cartItems: CartItem[], id: number): CartItem | undefined => cartItems.find((item) => item.id === id);

export const formatPrice = (price: number) => price.toLocaleString('uk-UA');
