import { createSlice } from '@reduxjs/toolkit';

import type { Cart } from '@/interfaces/Cart.interface.ts';
import type { CartState } from '@/interfaces/CartState.interface.ts';

import { calculateCartItemsCount, handleSetCartItem, parseStoredCartData } from './helpers.ts';

const parsedStoredCartData: Cart = parseStoredCartData();

const initialState: CartState = {
    cart: parsedStoredCartData,
    cartItemsCount: calculateCartItemsCount(parsedStoredCartData.items),
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setCartItem: handleSetCartItem,
    },
});

export const { setCartItem } = cartSlice.actions;

export default cartSlice.reducer;
