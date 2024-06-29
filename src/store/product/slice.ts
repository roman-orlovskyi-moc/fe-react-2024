import { createSlice } from '@reduxjs/toolkit';

import type { ProductState } from '@/interfaces/ProductState.interface.ts';

import { handleSetProductLoadingFailure, handleSetProductLoadingSuccess, handleSetProductStartLoading } from './helpers.ts';

const initialState: ProductState = {
    product: undefined,
    status: 'idle',
    error: null,
};

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setProductStartLoading: handleSetProductStartLoading,
        setProductLoadingSuccess: handleSetProductLoadingSuccess,
        setProductLoadingFailure: handleSetProductLoadingFailure,
    },
});

export const { setProductStartLoading, setProductLoadingSuccess, setProductLoadingFailure } = productSlice.actions;

export default productSlice.reducer;
