import type React from 'react';
import { useEffect, useState } from 'react';

import type { ProductProps } from '@/interfaces/ProductProps.interface.tsx';

import productsJSONData from '../assets/data/products.json';

interface ProductDataProps {
    product: ProductProps | null;
}

interface ProductDataProviderProps {
    id: number;
    children: (productData: ProductDataProps) => React.ReactNode;
}

export const ProductDataProviderComponent: React.FC<ProductDataProviderProps> = ({ id, children }) => {
    const [productData, setProductData] = useState<ProductDataProps>({ product: null });

    useEffect(() => {
        const product = productsJSONData.find((iterableProduct: ProductProps) => iterableProduct.id === id) as ProductProps;

        setProductData({ product });
    }, [id]);

    return children(productData);
};
