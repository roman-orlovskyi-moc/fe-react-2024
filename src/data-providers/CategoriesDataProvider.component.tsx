import type React from 'react';

import type { Category } from '@/interfaces/CategoryProps.interface.tsx';

import categoriesJSONData from '../assets/data/categories.json';

interface CategoriesDataProps {
    categories: Category[];
    categoriesCount: number;
}

interface CategoriesDataProviderProps {
    page?: number;
    limit?: number;
    children: (categoriesData: CategoriesDataProps) => React.ReactNode;
}

export const CategoriesDataProviderComponent: React.FC<CategoriesDataProviderProps> = ({ page, limit, children }) => {
    const currentPage: number = page || 1;
    const itemsLimit: number = limit || 10;
    const start: number = (currentPage - 1) * itemsLimit;
    const end: number = start + itemsLimit;

    const categoriesData = {
        categoriesCount: categoriesJSONData.length,
        categories: categoriesJSONData.slice(start, end) as Category[],
    };

    return children(categoriesData);
};
