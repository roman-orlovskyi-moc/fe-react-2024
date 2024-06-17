import type React from 'react';
import { useEffect, useMemo, useState } from 'react';

import { fetchCategories } from '../helpers/CategoriesDataProvider.helper.ts';
import type { Category } from '../interfaces/Category.interface.ts';

interface CategoriesData {
    categories: Category[];
}

interface CategoriesDataProviderProps {
    limit: number;
    children: (categoriesData: CategoriesData) => React.ReactNode;
}

export const CategoriesDataProviderComponent: React.FC<CategoriesDataProviderProps> = ({ limit, children }) => {
    const [categoriesData, setCategoriesData] = useState<CategoriesData>({ categories: [] });

    useEffect(() => {
        fetchCategories(limit).then((categories: Category[]) => {
            setCategoriesData({ categories });
        });
    }, [limit]);

    const memoizedCategoriesData = useMemo(() => categoriesData, [categoriesData]);

    return children(memoizedCategoriesData);
};
