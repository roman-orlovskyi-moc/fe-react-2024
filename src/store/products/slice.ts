import { createSlice } from '@reduxjs/toolkit';

import type { ProductsState } from '@/interfaces/ProductsState.interface.ts';

import {
    handleSetIsInfiniteScroll,
    handleSetProductsFetchArguments,
    handleSetProductsLoadingFailure,
    handleSetProductsLoadingSuccess,
    handleSetProductsStartLoading,
} from './helpers.ts';

const initialState: ProductsState = {
    products: undefined,
    productsTotal: 0,
    status: 'idle',
    error: null,
    isInfiniteScroll: false,
    productsFetchArguments: { page: 1, limit: 8 },
};

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProductsStartLoading: handleSetProductsStartLoading,
        setProductsLoadingSuccess: handleSetProductsLoadingSuccess,
        setProductsLoadingFailure: handleSetProductsLoadingFailure,
        setIsInfiniteScroll: handleSetIsInfiniteScroll,
        setProductsFetchArguments: handleSetProductsFetchArguments,
    },
});

export const {
    setProductsStartLoading,
    setProductsLoadingSuccess,
    setProductsLoadingFailure,
    setIsInfiniteScroll,
    setProductsFetchArguments,
} = productsSlice.actions;

export default productsSlice.reducer;
