import React, { useState } from 'react';

import { CategoriesFilterComponent } from '../categories-filter/CategoriesFilter.component.tsx';
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
    const [sortValue, setSortValue] = useState<string>(sort || '');

    const handleSortChange = (value: string) => {
        setSortValue(value);
        setProductsSort(value);
    };

    return (
        <div className={styles.productsFilterBar}>
            <SearchInputComponent search={search} onSearchSubmit={setProductsSearch} />
            <CategoriesFilterComponent categoryIds={categoryIds} onCategoriesChange={setProductsCategories} />
            <div className={styles.productsFilterSortWrapper}>
                <span className={styles.productsFilterSortLabel}>Sort by:</span>
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
