import type React from 'react';
import { useMemo } from 'react';

import type { Product } from '@/interfaces/Product.interface.tsx';

import productsJSONData from '../assets/data/products.json';
import { filterProductsByCategory, filterProductsByTitle, sliceProducts, sortProducts } from '../helpers/productsListDataProviderHelper.ts';

interface ProductsData {
    products: Product[];
    productsCount: number;
}

interface ProductsDataProviderProps {
    page: number;
    limit: number;
    search?: string;
    categoryIds?: number[];
    sort?: string;
    children: (productsData: ProductsData) => React.ReactNode;
}

export const ProductsListDataProviderComponent: React.FC<ProductsDataProviderProps> = ({
    page,
    limit,
    search,
    categoryIds,
    sort,
    children,
}) => {
    const filteredProducts = useMemo(() => {
        let products = productsJSONData;

        if (search) {
            products = filterProductsByTitle(products, search);
        }

        if (categoryIds && categoryIds.length > 0) {
            products = filterProductsByCategory(products, categoryIds);
        }

        if (sort) {
            products = sortProducts(products, sort);
        }

        return products;
    }, [search, categoryIds, sort]);

    const productsData = {
        productsCount: filteredProducts.length,
        products: sliceProducts(filteredProducts, page, limit) as Product[],
    };

    return children(productsData);
};
