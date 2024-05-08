import type React from 'react';
import { useEffect, useState } from 'react';

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

export const ProductsDataProviderComponent: React.FC<ProductsDataProviderProps> = ({ page, limit, children }) => {
    const [productsData, setProductsData] = useState<ProductsDataProps>({ productsCount: 0, products: [] });

    useEffect(() => {
        const start = (page - 1) * limit;
        const end = start + limit;

        setProductsData({ productsCount: productsJSONData.length, products: productsJSONData.slice(start, end) });
    }, [page, limit]);

    return children(productsData);
};
