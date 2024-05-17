import React, { useState } from 'react';

import appStyles from '@/App.module.css';
import { CategoriesDataProviderComponent } from '@/data-providers/CategoriesDataProvider.component.tsx';
import { transformCheckedCategories, transformCheckedCategoryIds } from '@/helpers/productsFilterBarHelper.ts';
import type { CheckedCategoriesProps } from '@/types/CheckedCategoriesProps.type.tsx';

import { DropdownComponent } from '../dropdown/Dropdown.component.tsx';
import { SearchInputComponent } from '../search-input/SearchInput.component.tsx';

import styles from './products-filter-bar.module.css';

interface ProductsFilterBarProps {
    search?: string;
    categoryIds?: number[];
    sort?: string;
    setProductsSearch: (search: string) => void;
    setProductsCategories: (categoryIds: number[]) => void;
    setProductsSort: (sort: string) => void;
}

export const ProductsFilterBarComponent: React.FC<ProductsFilterBarProps> = ({
    search,
    categoryIds,
    sort,
    setProductsSearch,
    setProductsCategories,
    setProductsSort,
}) => {
    const [checkedCategories, setCheckedCategories] = useState<CheckedCategoriesProps>(() => transformCheckedCategories(categoryIds || []));
    const [sortValue, setSortValue] = useState<string>(sort || '');

    const handleCategoryCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
        const target = event.target as HTMLInputElement;
        const updatedCheckedCategories = { ...checkedCategories, [target.value]: target.checked };

        setCheckedCategories(updatedCheckedCategories);
        setProductsCategories(transformCheckedCategoryIds(updatedCheckedCategories));
    };

    const handleSortChange = (value: string) => {
        setSortValue(value);
        setProductsSort(value);
    };

    return (
        <div className={styles.productsFilterBar}>
            <SearchInputComponent search={search} onSearchSubmit={setProductsSearch} />
            <div className={styles.productsFilterCategoryWrapper}>
                <CategoriesDataProviderComponent>
                    {({ categories }) => (
                        <>
                            {categories.map((categoryData) => (
                                <>
                                    <input
                                        type="checkbox"
                                        id={`category_checkbox_${categoryData.id}`}
                                        name={`category_${categoryData.id}`}
                                        value={categoryData.id}
                                        checked={checkedCategories[`${categoryData.id}`] || false}
                                        onChange={handleCategoryCheck}
                                        className={styles.productsFilterCategoryCheckbox}
                                        aria-hidden={true}
                                    />
                                    <label
                                        key={categoryData.id}
                                        htmlFor={`category_checkbox_${categoryData.id}`}
                                        className={`${appStyles.button} ${styles.productsFilterCategoryButton}`}
                                    >
                                        {categoryData.name}
                                    </label>
                                </>
                            ))}
                        </>
                    )}
                </CategoriesDataProviderComponent>
            </div>
            <div className={styles.productsFilterSortWrapper}>
                Sort by:
                <DropdownComponent
                    options={[
                        { value: 'price:desc', label: 'Price: High to Low' },
                        { value: 'price:asc', label: 'Price: Low to High' },
                        { value: 'creationAt:asc', label: 'Newest' },
                        { value: 'creationAt:desc', label: 'Oldest' },
                    ]}
                    onDropdownChange={handleSortChange}
                    selectedValue={sortValue}
                />
            </div>
        </div>
    );
};
