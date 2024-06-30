import type { PayloadAction } from '@reduxjs/toolkit';

import type { CategoriesState } from '@/interfaces/CategoriesState.interface.ts';
import type { Category } from '@/interfaces/Category.interface.ts';

export const handleSetCategoriesStartLoading = (state: CategoriesState): void => {
    state.status = 'loading';
};

export const handleSetCategoriesLoadingSuccess = (state: CategoriesState, action: PayloadAction<Category[]>): void => {
    state.status = 'succeeded';
    state.categories = action.payload;
};

export const handleSetCategoriesLoadingFailure = (state: CategoriesState, action: PayloadAction<string>): void => {
    state.status = 'failed';
    state.error = action.payload;
};

export const handleSetCurrentCategoryId = (state: CategoriesState, action: PayloadAction<number>): void => {
    state.currentCategoryId = action.payload;
};
