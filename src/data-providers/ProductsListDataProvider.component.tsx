import type React from 'react';
import { useEffect, useMemo, useState } from 'react';

import { fetchProducts } from '../helpers/ProductsListDataProvider.helper.ts';
import type { Product } from '../interfaces/Product.interface.ts';
import type { ProductsResponse } from '../interfaces/ProductsResponse.interface.ts';

interface ProductsData {
    products: Product[] | undefined;
    productsTotalCount: number;
    isLoading: boolean;
}

interface ProductsDataProviderProps {
    page: number;
    limit: number;
    search?: string;
    categoryId?: number;
    sort?: string;
    isMergeNewDataWithPrevious?: boolean;
    children: (productsData: ProductsData) => React.ReactNode;
}

export const ProductsListDataProviderComponent: React.FC<ProductsDataProviderProps> = ({
    page,
    limit,
    search,
    categoryId,
    sort,
    isMergeNewDataWithPrevious,
    children,
}) => {
    const [productsData, setProductsData] = useState<ProductsData>({ products: undefined, productsTotalCount: 0, isLoading: true });

    useEffect(() => {
        setProductsData((previousProductsData) => ({ ...previousProductsData, isLoading: true }));

        fetchProducts(page, limit, search, categoryId, sort)
            .then((products: ProductsResponse) => {
                if (isMergeNewDataWithPrevious) {
                    setProductsData((previousProductsData: ProductsData) => ({
                        products: [...(previousProductsData.products || []), ...products.products] as Product[],
                        productsTotalCount: products.total,
                        isLoading: false,
                    }));
                } else {
                    setProductsData({
                        productsTotalCount: products.total,
                        products: products.products as Product[],
                        isLoading: false,
                    });
                }
            })
            .catch(() => {
                setProductsData((previousProductsData) => ({ ...previousProductsData, isLoading: false }));
            });
    }, [page, limit, search, categoryId, sort, isMergeNewDataWithPrevious]);

    const memoizedProductsData = useMemo(() => productsData, [productsData]);

    return children(memoizedProductsData);
};
