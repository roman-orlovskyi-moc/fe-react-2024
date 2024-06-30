import { createAsyncThunk } from '@reduxjs/toolkit';

import { fetchProductAPI } from '@/helpers/ProductStore.helper.ts';
import type { Product } from '@/interfaces/Product.interface.ts';
import type { ProductFetchArguments } from '@/interfaces/ProductFetchArguments.ts';
import { setProductLoadingFailure, setProductLoadingSuccess, setProductStartLoading } from '@/store/product/slice.ts';

export const fetchProductThunk = createAsyncThunk<Product, ProductFetchArguments>(
    'product/fetchProduct',
    async ({ id }, { dispatch }): Promise<Product> => {
        dispatch(setProductStartLoading());

        try {
            const response: Product = await fetchProductAPI(id);
            dispatch(setProductLoadingSuccess(response));
            return response;
        } catch (error: any) {
            dispatch(setProductLoadingFailure(error.toString()));
            throw error;
        }
    },
);
