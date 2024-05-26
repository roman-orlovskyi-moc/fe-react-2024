import type React from 'react';
import { useMemo } from 'react';

import type { Product } from '@/interfaces/Product.interface.ts';

import productsJSONData from '../assets/data/products.json';

interface ProductData {
    product: Product | null;
}

interface ProductDataProviderProps {
    id: number;
    children: (productData: ProductData) => React.ReactNode;
}

export const ProductDataProviderComponent: React.FC<ProductDataProviderProps> = ({ id, children }) => {
    const product = useMemo(() => productsJSONData.find((iterableProduct: Product) => iterableProduct.id === id) as Product, [id]);

    return children({ product });
};
