import type { PayloadAction } from '@reduxjs/toolkit';

import type { ProductsFetchArguments } from '@/interfaces/ProductsFetchArguments.ts';
import type { ProductsResponse } from '@/interfaces/ProductsResponse.interface.ts';
import type { ProductsState } from '@/interfaces/ProductsState.interface.ts';

export const handleSetProductsStartLoading = (state: ProductsState): void => {
    state.status = 'loading';
};

export const handleSetProductsLoadingSuccess = (state: ProductsState, action: PayloadAction<ProductsResponse>): void => {
    state.status = 'succeeded';
    state.products =
        state.isInfiniteScroll && state.productsFetchArguments.page > 1 // need to prevent strict mode duplicates
            ? [...(state.products || []), ...action.payload.products]
            : action.payload.products;
    state.productsTotal = action.payload.total;
};

export const handleSetProductsLoadingFailure = (state: ProductsState, action: PayloadAction<string>): void => {
    state.status = 'failed';
    state.products = [];
    state.productsTotal = 0;
    state.error = action.payload;
};

export const handleSetIsInfiniteScroll = (state: ProductsState, action: PayloadAction<boolean>): void => {
    state.isInfiniteScroll = action.payload;
};

export const handleSetProductsFetchArguments = (state: ProductsState, action: PayloadAction<ProductsFetchArguments>): void => {
    state.productsFetchArguments = action.payload;
};
