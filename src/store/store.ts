import { configureStore } from '@reduxjs/toolkit';

import productReducer from './product/slice.ts';
import productsReducer from './products/slice.ts';

export const store = configureStore({
    reducer: {
        product: productReducer,
        products: productsReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
