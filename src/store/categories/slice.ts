import { createSlice } from '@reduxjs/toolkit';

import type { CategoriesState } from '@/interfaces/CategoriesState.interface.ts';

import {
    handleSetCategoriesLoadingFailure,
    handleSetCategoriesLoadingSuccess,
    handleSetCategoriesStartLoading,
    handleSetCurrentCategoryId,
} from './helpers.ts';

const initialState: CategoriesState = {
    categories: [],
    currentCategoryId: null,
    status: 'idle',
    error: null,
};

export const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        setCategoriesStartLoading: handleSetCategoriesStartLoading,
        setCategoriesLoadingSuccess: handleSetCategoriesLoadingSuccess,
        setCategoriesLoadingFailure: handleSetCategoriesLoadingFailure,
        setCurrentCategoryId: handleSetCurrentCategoryId,
    },
});

export const { setCategoriesStartLoading, setCategoriesLoadingSuccess, setCategoriesLoadingFailure, setCurrentCategoryId } =
    categoriesSlice.actions;

export default categoriesSlice.reducer;
