import type React from 'react';

import type { ProductProps } from '@/interfaces/ProductProps.interface.tsx';

import productsJSONData from '../assets/data/products.json';

interface ProductData {
    product: ProductProps | null;
}

interface ProductDataProviderProps {
    id: number;
    children: (productData: ProductData) => React.ReactNode;
}

export const ProductDataProviderComponent: React.FC<ProductDataProviderProps> = ({ id, children }) => {
    const product = productsJSONData.find((iterableProduct: ProductProps) => iterableProduct.id === id) as ProductProps;

    return children({ product });
};
