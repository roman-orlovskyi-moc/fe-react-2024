import { configureStore } from '@reduxjs/toolkit';

import categoriesReducer from './categories/slice.ts';
import productReducer from './product/slice.ts';
import productsReducer from './products/slice.ts';
import themeReducer from './theme/slice.ts';

export const store = configureStore({
    reducer: {
        categories: categoriesReducer,
        product: productReducer,
        products: productsReducer,
        theme: themeReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
