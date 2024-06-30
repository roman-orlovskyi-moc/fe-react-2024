import type { PayloadAction } from '@reduxjs/toolkit';

import type { Cart } from '@/interfaces/Cart.interface.ts';
import type { CartItem } from '@/interfaces/CartItem.interface.ts';
import type { CartState } from '@/interfaces/CartState.interface.ts';

export const parseStoredCartData = (): Cart => {
    const savedCartData: string | null = getStoredCartData();
    const parsedCartData = savedCartData ? JSON.parse(savedCartData) : null;

    return isCartProps(parsedCartData) ? (parsedCartData as Cart) : { items: [] };
};

const getStoredCartData = (): string | null => localStorage.getItem('cart');

const isCartItemProps = (object: any): object is CartItem => object && 'id' in object && 'quantity' in object;

const isCartProps = (object: any): object is Cart =>
    object && Array.isArray(object.items) && object.items.every((element: any) => isCartItemProps(element));

export const handleSetCartItem = (state: CartState, action: PayloadAction<CartItem>): void => {
    state.cart = prepareUpdatedCartData(state.cart, action.payload);
    state.cartItemsCount = calculateCartItemsCount(state.cart.items);
    setStoredCartData(state.cart);
};

const prepareUpdatedCartData = (currentCart: Cart, item: CartItem): Cart => {
    const itemIndex: number = currentCart.items.findIndex((cartItem) => cartItem.id === item.id);

    if (itemIndex === -1) {
        return { items: [...currentCart.items, item] };
    } else {
        const newCartItems = currentCart.items.map((cartItem) =>
            cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + item.quantity } : cartItem,
        );

        return { items: newCartItems };
    }
};

const calculateCartItemsCount = (cartItems: CartItem[]): number => cartItems.reduce((sum, item) => sum + item.quantity, 0);

const setStoredCartData = (cartData: Cart) => localStorage.setItem('cart', JSON.stringify(cartData));
