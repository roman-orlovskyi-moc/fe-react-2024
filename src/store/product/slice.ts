import type { PayloadAction } from '@reduxjs/toolkit';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { fetchProductAPI } from '@/helpers/ProductStore.helper.ts';
import type { Product } from '@/interfaces/Product.interface.ts';
import type { ProductFetchArguments } from '@/interfaces/ProductFetchArguments.ts';
import type { ProductState } from '@/interfaces/ProductState.interface.ts';

const initialState: ProductState = {
    product: undefined,
    status: 'idle',
    error: null,
};

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        fetchProductStart: (state) => {
            state.status = 'loading';
        },
        fetchProductSuccess: (state, action: PayloadAction<Product>) => {
            state.status = 'succeeded';
            state.product = action.payload;
        },
        fetchProductFailure: (state, action: PayloadAction<string>) => {
            state.status = 'failed';
            state.product = null;
            state.error = action.payload;
        },
    },
});

const { fetchProductStart, fetchProductSuccess, fetchProductFailure } = productSlice.actions;

export const fetchProduct = createAsyncThunk<Product, ProductFetchArguments>(
    'product/fetchProduct',
    async ({ id }, { dispatch }): Promise<Product> => {
        dispatch(fetchProductStart());

        try {
            const response: Product = await fetchProductAPI(id);
            dispatch(fetchProductSuccess(response));
            return response;
        } catch (error: any) {
            dispatch(fetchProductFailure(error.toString()));
            throw error;
        }
    },
);

export default productSlice.reducer;
