import type React from 'react';
import { useEffect, useMemo, useState } from 'react';

import { fetchProducts } from '@/helpers/ProductsListDataProvider.helper.ts';
import type { Product } from '@/interfaces/Product.interface.ts';
import type { ProductsResponse } from '@/interfaces/ProductsResponse.interface.ts';

interface ProductsData {
    products: Product[];
    productsCount: number;
    isLoading: boolean;
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
    const [productsData, setProductsData] = useState<ProductsData>({ products: [], productsCount: 0, isLoading: true });

    useEffect(() => {
        setProductsData((previousProductsData) => ({ ...previousProductsData, isLoading: true }));

        fetchProducts(page, limit, search, categoryIds, sort).then((products: ProductsResponse) => {
            setProductsData({
                productsCount: products.total,
                products: products.products as Product[],
                isLoading: false,
            });
        });
    }, [page, limit, search, categoryIds, sort]);

    const memoizedProductsData = useMemo(() => productsData, [productsData]);

    return children(memoizedProductsData);
};
