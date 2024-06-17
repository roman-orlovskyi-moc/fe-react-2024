import type React from 'react';
import { useEffect, useMemo, useState } from 'react';

import { fetchProduct } from '../helpers/ProductDataProvider.helper.ts';
import type { Product } from '../interfaces/Product.interface.ts';

interface ProductData {
    product: Product | null | undefined;
    isLoading: boolean;
}

interface ProductDataProviderProps {
    id: number;
    children: (productData: ProductData) => React.ReactNode;
}

export const ProductDataProviderComponent: React.FC<ProductDataProviderProps> = ({ id, children }) => {
    const [productData, setProductData] = useState<ProductData>({ product: undefined, isLoading: true });

    useEffect(() => {
        setProductData((previousProductData: ProductData) => ({ ...previousProductData, isLoading: true }));

        fetchProduct(id)
            .then((product: Product) => {
                setProductData({ product, isLoading: false } as ProductData);
            })
            .catch(() => {
                setProductData({ product: null, isLoading: false } as ProductData);
            });
    }, [id]);

    const memoizedProductData = useMemo(() => productData, [productData]);

    return children(memoizedProductData);
};
