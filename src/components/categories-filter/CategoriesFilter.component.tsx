import React, { useState } from 'react';

import appStyles from '@/App.module.css';
import { CategoriesDataProviderComponent } from '@/data-providers/CategoriesDataProvider.component.tsx';
import { transformCheckedCategories, transformCheckedCategoryIds } from '@/helpers/categoriesFilterHelper.ts';
import type { CheckedCategoriesProps } from '@/types/CheckedCategoriesProps.type.tsx';

import styles from './categories-filter.module.css';

interface CategoriesFilterProps {
    categoryIds?: number[];
    onCategoriesChange: (categoryIds: number[]) => void;
}

export const CategoriesFilterComponent: React.FC<CategoriesFilterProps> = ({ categoryIds, onCategoriesChange }) => {
    const [checkedCategories, setCheckedCategories] = useState<CheckedCategoriesProps>(() => transformCheckedCategories(categoryIds || []));

    const handleCategoryCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
        const target = event.target as HTMLInputElement;
        const updatedCheckedCategories = { ...checkedCategories, [target.value]: target.checked };

        setCheckedCategories(updatedCheckedCategories);
        onCategoriesChange(transformCheckedCategoryIds(updatedCheckedCategories));
    };

    return (
        <div className={styles.categoryFilterWrapper}>
            <CategoriesDataProviderComponent>
                {({ categories }) => (
                    <>
                        {categories.map((categoryData) => (
                            <div key={categoryData.id}>
                                <input
                                    type="checkbox"
                                    id={`category_checkbox_${categoryData.id}`}
                                    name={`category_${categoryData.id}`}
                                    value={categoryData.id}
                                    checked={checkedCategories[`${categoryData.id}`] || false}
                                    onChange={handleCategoryCheck}
                                    className={styles.categoryFilterCheckbox}
                                    aria-hidden={true}
                                />
                                <label
                                    htmlFor={`category_checkbox_${categoryData.id}`}
                                    className={`${appStyles.button} ${styles.categoryFilterButton}`}
                                >
                                    {categoryData.name}
                                </label>
                            </div>
                        ))}
                    </>
                )}
            </CategoriesDataProviderComponent>
        </div>
    );
};
