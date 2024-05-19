import type React from 'react';

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
    let filteredProducts = productsJSONData;

    if (search) {
        filteredProducts = filterProductsByTitle(filteredProducts, search);
    }

    if (categoryIds && categoryIds.length > 0) {
        filteredProducts = filterProductsByCategory(filteredProducts, categoryIds);
    }

    if (sort) {
        filteredProducts = sortProducts(filteredProducts, sort);
    }

    const productsData = {
        productsCount: filteredProducts.length,
        products: sliceProducts(filteredProducts, page, limit) as Product[],
    };

    return children(productsData);
};
