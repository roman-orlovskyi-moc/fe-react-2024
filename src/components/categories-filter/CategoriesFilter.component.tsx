import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import appStyles from '@/App.module.css';
import { categoriesSelector } from '@/store/categories/selectors.ts';
import { setCurrentCategoryId } from '@/store/categories/slice.ts';
import { fetchCategoriesThunk } from '@/store/categories/thunks.ts';
import type { AppDispatch } from '@/store/store.ts';

import styles from './categories-filter.module.css';

interface CategoriesFilterProps {
    onCategoryChange: (categoryId: number) => void;
}

export const CategoriesFilterComponent: React.FC<CategoriesFilterProps> = ({ onCategoryChange }) => {
    const CATEGORIES_LIMIT: number = 10;

    const dispatch = useDispatch<AppDispatch>();
    const { categories, currentCategoryId } = useSelector(categoriesSelector);

    useEffect(() => {
        dispatch(fetchCategoriesThunk({ limit: CATEGORIES_LIMIT }));
    }, [dispatch]);

    const handleCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const target = event.target as HTMLInputElement;
        const parsedCategoryId = Number.parseInt(target.value, 10);

        if (!Number.isNaN(parsedCategoryId)) {
            dispatch(setCurrentCategoryId(parsedCategoryId));
            onCategoryChange(parsedCategoryId);
        }
    };

    return (
        <ul className={styles.categoryFilterWrapper}>
            {categories.map((categoryData) => (
                <li key={categoryData.id}>
                    <input
                        type="radio"
                        id={`category_selector_${categoryData.id}`}
                        name="category_selector"
                        value={categoryData.id}
                        checked={currentCategoryId === categoryData.id}
                        onChange={handleCategoryChange}
                        className={styles.categoryFilterRadio}
                        aria-hidden={true}
                    />
                    <label
                        htmlFor={`category_selector_${categoryData.id}`}
                        className={`${appStyles.button} ${styles.categoryFilterButton}`}
                    >
                        {categoryData.name}
                    </label>
                </li>
            ))}
        </ul>
    );
};
