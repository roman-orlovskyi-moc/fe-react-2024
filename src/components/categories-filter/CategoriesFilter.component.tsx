import React, { useEffect, useState } from 'react';

import appStyles from '@/App.module.css';
import { CategoriesDataProviderComponent } from '@/data-providers/CategoriesDataProvider.component.tsx';

import styles from './categories-filter.module.css';

interface CategoriesFilterProps {
    categoryId?: number;
    onCategoryChange: (categoryId: number) => void;
}

export const CategoriesFilterComponent: React.FC<CategoriesFilterProps> = ({ categoryId, onCategoryChange }) => {
    const [category, setCategory] = useState<number | undefined>(categoryId);

    useEffect(() => {
        setCategory(categoryId);
    }, [categoryId]);

    const handleCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const target = event.target as HTMLInputElement;
        const parsedCategoryId = Number.parseInt(target.value, 10);

        if (!Number.isNaN(parsedCategoryId)) {
            setCategory(parsedCategoryId);
            onCategoryChange(parsedCategoryId);
        }
    };

    return (
        <CategoriesDataProviderComponent limit={8}>
            {({ categories }) => (
                <ul className={styles.categoryFilterWrapper}>
                    {categories.map((categoryData) => (
                        <li key={categoryData.id}>
                            <input
                                type="radio"
                                id={`category_selector_${categoryData.id}`}
                                name="category_selector"
                                value={categoryData.id}
                                checked={category === categoryData.id}
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
            )}
        </CategoriesDataProviderComponent>
    );
};
