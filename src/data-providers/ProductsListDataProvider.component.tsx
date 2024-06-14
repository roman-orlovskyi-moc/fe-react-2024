import type React from 'react';
import { useEffect, useMemo, useState } from 'react';

import { fetchProducts } from '../helpers/ProductsListDataProvider.helper.ts';
import type { Product } from '../interfaces/Product.interface.ts';
import type { ProductsResponse } from '../interfaces/ProductsResponse.interface.ts';

interface ProductsData {
    products: Product[];
    productsCount: number;
    isLoading: boolean;
}

interface ProductsDataProviderProps {
    page: number;
    limit: number;
    search?: string;
    categoryId?: number;
    sort?: string;
    children: (productsData: ProductsData) => React.ReactNode;
}

export const ProductsListDataProviderComponent: React.FC<ProductsDataProviderProps> = ({
    page,
    limit,
    search,
    categoryId,
    sort,
    children,
}) => {
    const [productsData, setProductsData] = useState<ProductsData>({ products: [], productsCount: 0, isLoading: true });

    useEffect(() => {
        setProductsData((previousProductsData) => ({ ...previousProductsData, isLoading: true }));

        fetchProducts(page, limit, search, categoryId, sort).then((products: ProductsResponse) => {
            setProductsData({
                productsCount: products.total,
                products: products.products as Product[],
                isLoading: false,
            });
        });
    }, [page, limit, search, categoryId, sort]);

    const memoizedProductsData = useMemo(() => productsData, [productsData]);

    return children(memoizedProductsData);
};
