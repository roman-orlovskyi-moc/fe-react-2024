import React, { useState } from 'react';

import { CategoriesDataProviderComponent } from '@/data-providers/CategoriesDataProvider.component.tsx';
import { transformCheckedCategories, transformCheckedCategoryIds } from '@/helpers/productsFilterBarHelper.ts';
import type { CheckedCategoriesProps } from '@/types/CheckedCategoriesProps.type.tsx';

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
    const [searchTitle, setSearchTitle] = useState<string>(search || '');
    const [checkedCategories, setCheckedCategories] = useState<CheckedCategoriesProps>(() => transformCheckedCategories(categoryIds || []));
    const [sortValue, setSortValue] = useState<string>(sort || '');

    const handleSearchSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        setProductsSearch(searchTitle);
    };

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const target = event.target as HTMLInputElement;

        setSearchTitle(target.value);
    };

    const handleCategoryCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
        const target = event.target as HTMLInputElement;
        const updatedCheckedCategories = { ...checkedCategories, [target.value]: target.checked };

        setCheckedCategories(updatedCheckedCategories);
        setProductsCategories(transformCheckedCategoryIds(updatedCheckedCategories));
    };

    const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const target = event.target as HTMLSelectElement;

        setSortValue(target.value);
        setProductsSort(target.value);
    };

    return (
        <div>
            <form onSubmit={handleSearchSubmit}>
                <input type="text" placeholder="Search" value={searchTitle} onChange={handleSearchChange} />
                <button type="submit">Search</button>
            </form>
            <div>
                <CategoriesDataProviderComponent>
                    {({ categories }) => (
                        <>
                            {categories.map((categoryData) => (
                                <label key={categoryData.id}>
                                    <input
                                        type="checkbox"
                                        name={`category_${categoryData.id}`}
                                        value={categoryData.id}
                                        checked={checkedCategories[`${categoryData.id}`] || false}
                                        onChange={handleCategoryCheck}
                                    />
                                    {categoryData.name}
                                </label>
                            ))}
                        </>
                    )}
                </CategoriesDataProviderComponent>
            </div>
            <div>
                Sort by:
                <select value={sortValue} onChange={handleSortChange}>
                    <option value="price:desc">Price: High to Low</option>
                    <option value="price:asc">Price: Low to High</option>
                    <option value="creationAt:asc">Newest</option>
                    <option value="creationAt:desc">Oldest</option>
                </select>
            </div>
        </div>
    );
};
