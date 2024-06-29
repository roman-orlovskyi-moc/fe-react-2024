import { createAsyncThunk } from '@reduxjs/toolkit';

import { fetchProductsAPI } from '@/helpers/ProductsStore.helper.ts';
import type { ProductsFetchArguments } from '@/interfaces/ProductsFetchArguments.ts';
import type { ProductsResponse } from '@/interfaces/ProductsResponse.interface.ts';

import { setProductsFetchArguments, setProductsLoadingFailure, setProductsLoadingSuccess, setProductsStartLoading } from './slice.ts';

export const fetchProductsThunk = createAsyncThunk<ProductsResponse, ProductsFetchArguments>(
    'products/fetchProducts',
    async ({ page, limit, search, categoryId, sort }, { dispatch }): Promise<ProductsResponse> => {
        dispatch(setProductsStartLoading());
        dispatch(setProductsFetchArguments({ page, limit, search, categoryId, sort }));

        try {
            const response: ProductsResponse = await fetchProductsAPI(page, limit, search, categoryId, sort);
            dispatch(setProductsLoadingSuccess(response));
            return response;
        } catch (error: any) {
            dispatch(setProductsLoadingFailure(error.toString()));
            throw error;
        }
    },
);
