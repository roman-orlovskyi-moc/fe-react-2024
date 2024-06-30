import { createSlice } from '@reduxjs/toolkit';

import type { CartState } from '@/interfaces/CartState.interface.ts';

import { handleSetCartItem, parseStoredCartData } from './helpers.ts';

const initialState: CartState = {
    cart: parseStoredCartData(),
    cartItemsCount: 0,
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
