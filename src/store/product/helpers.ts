import type { PayloadAction } from '@reduxjs/toolkit';

import type { Product } from '@/interfaces/Product.interface.ts';
import type { ProductState } from '@/interfaces/ProductState.interface.ts';

export const handleSetProductStartLoading = (state: ProductState): void => {
    state.status = 'loading';
};

export const handleSetProductLoadingSuccess = (state: ProductState, action: PayloadAction<Product>): void => {
    state.status = 'succeeded';
    state.product = action.payload;
};

export const handleSetProductLoadingFailure = (state: ProductState, action: PayloadAction<string>): void => {
    state.status = 'failed';
    state.product = null;
    state.error = action.payload;
};
