import React from 'react';

import { PageNotFoundComponent } from '@/components/page-not-found/PageNotFound.component.tsx';
import { ProductDetailsComponent } from '@/components/product-details/ProductDetails.component.tsx';
import { ProductDataProviderComponent } from '@/data-providers/ProductDataProvider.component.tsx';

interface ProductProps {
    id: number;
}

export const ProductComponent: React.FC<ProductProps> = ({ id }) => (
    <ProductDataProviderComponent id={id}>
        {({ product }) => (product ? <ProductDetailsComponent {...product} /> : <PageNotFoundComponent />)}
    </ProductDataProviderComponent>
);
