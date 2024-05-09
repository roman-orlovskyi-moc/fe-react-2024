import type React from 'react';

import type { ProductProps } from '@/interfaces/ProductProps.interface.tsx';

import productsJSONData from '../assets/data/products.json';

interface ProductsDataProps {
    products: ProductProps[];
    productsCount: number;
}

interface ProductsDataProviderProps {
    page: number;
    limit: number;
    children: (productsData: ProductsDataProps) => React.ReactNode;
}

export const ProductsListDataProviderComponent: React.FC<ProductsDataProviderProps> = ({ page, limit, children }) => {
    const start = (page - 1) * limit;
    const end = start + limit;

    const productsData = {
        productsCount: productsJSONData.length,
        products: productsJSONData.slice(start, end) as ProductProps[],
    };

    return children(productsData);
};
