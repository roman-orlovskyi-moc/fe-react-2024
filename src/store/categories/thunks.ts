import { createAsyncThunk } from '@reduxjs/toolkit';

import { fetchCategoriesAPI } from '@/helpers/CategoriesStore.helper.ts';
import type { CategoriesFetchArguments } from '@/interfaces/CategoriesFetchArguments.ts';
import type { Category } from '@/interfaces/Category.interface.ts';

import { setCategoriesLoadingFailure, setCategoriesLoadingSuccess, setCategoriesStartLoading } from './slice.ts';

export const fetchCategoriesThunk = createAsyncThunk<Category[], CategoriesFetchArguments>(
    'categories/fetchCategories',
    async ({ limit }, { dispatch }): Promise<Category[]> => {
        dispatch(setCategoriesStartLoading());

        try {
            const response: Category[] = await fetchCategoriesAPI(limit);
            dispatch(setCategoriesLoadingSuccess(response));
            return response;
        } catch (error: any) {
            dispatch(setCategoriesLoadingFailure(error.toString()));
            throw error;
        }
    },
);
