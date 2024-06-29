import type { PayloadAction } from '@reduxjs/toolkit';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { fetchProductsAPI } from '@/helpers/ProductsStore.helper.ts';
import type { ProductsFetchArguments } from '@/interfaces/ProductsFetchArguments.ts';
import type { ProductsResponse } from '@/interfaces/ProductsResponse.interface.ts';
import type { ProductsState } from '@/interfaces/ProductsState.interface.ts';

export const fetchProducts = createAsyncThunk<ProductsResponse, ProductsFetchArguments>(
    'products/fetchProducts',
    async ({ page, limit, search, categoryId, sort }, { dispatch }): Promise<ProductsResponse> => {
        dispatch(fetchProductsStart());
        dispatch(setProductsFetchArguments({ page, limit, search, categoryId, sort }));

        try {
            const response: ProductsResponse = await fetchProductsAPI(page, limit, search, categoryId, sort);
            dispatch(fetchProductsSuccess(response));
            return response;
        } catch (error: any) {
            dispatch(fetchProductsFailure(error.toString()));
            throw error;
        }
    },
);

const initialState: ProductsState = {
    products: undefined,
    productsTotal: 0,
    status: 'idle',
    error: null,
    isMergeNewDataWithPrevious: false,
    productsFetchArguments: { page: 1, limit: 8 },
};

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        fetchProductsStart: (state) => {
            state.status = 'loading';
        },
        fetchProductsSuccess: (state, action: PayloadAction<ProductsResponse>) => {
            state.status = 'succeeded';
            state.products =
                state.isMergeNewDataWithPrevious && state.productsFetchArguments.page > 1 // need to prevent strict mode duplicates
                    ? [...(state.products || []), ...action.payload.products]
                    : action.payload.products;
            state.productsTotal = action.payload.total;
        },
        fetchProductsFailure: (state, action: PayloadAction<string>) => {
            state.status = 'failed';
            state.products = [];
            state.productsTotal = 0;
            state.error = action.payload;
        },
        setMergeNewDataWithPrevious: (state, action: PayloadAction<boolean>) => {
            state.isMergeNewDataWithPrevious = action.payload;
        },
        setProductsFetchArguments: (state, action: PayloadAction<ProductsFetchArguments>) => {
            state.productsFetchArguments = action.payload;
        },
    },
});

export const { fetchProductsStart, fetchProductsSuccess, fetchProductsFailure, setMergeNewDataWithPrevious, setProductsFetchArguments } =
    productsSlice.actions;

export default productsSlice.reducer;
