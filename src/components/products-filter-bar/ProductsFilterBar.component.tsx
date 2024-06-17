import React, { useState } from 'react';

import { CategoriesFilterComponent } from '../categories-filter/CategoriesFilter.component.tsx';
import { DropdownComponent } from '../dropdown/Dropdown.component.tsx';
import { SearchInputComponent } from '../search-input/SearchInput.component.tsx';

import styles from './products-filter-bar.module.css';

interface ProductsFilterBarProps {
    search?: string;
    categoryId?: number;
    sort?: string;
    setProductsSearch: (search: string) => void;
    setProductsCategory: (categoryId: number) => void;
    setProductsSort: (sort: string) => void;
}

export const ProductsFilterBarComponent: React.FC<ProductsFilterBarProps> = ({
    search,
    categoryId,
    sort,
    setProductsSearch,
    setProductsCategory,
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
            <CategoriesFilterComponent categoryId={categoryId} onCategoryChange={setProductsCategory} />
            <div className={styles.productsFilterSortWrapper}>
                <span className={styles.productsFilterSortLabel}>Sort by:</span>
                <DropdownComponent
                    options={[
                        { value: 'desc', label: 'Price: High to Low' },
                        { value: 'asc', label: 'Price: Low to High' },
                    ]}
                    onDropdownChange={handleSortChange}
                    selectedValue={sortValue}
                />
            </div>
        </div>
    );
};
