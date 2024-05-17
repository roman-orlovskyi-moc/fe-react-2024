import React from 'react';

import { ProductDataProviderComponent } from '@/data-providers/ProductDataProvider.component.tsx';

import { PageNotFoundComponent } from '../page-not-found/PageNotFound.component.tsx';
import { ProductDetailsComponent } from '../product-details/ProductDetails.component.tsx';

interface ProductProps {
    id: number;
}

export const ProductComponent: React.FC<ProductProps> = ({ id }) => (
    <ProductDataProviderComponent id={id}>
        {({ product }) => (product ? <ProductDetailsComponent {...product} /> : <PageNotFoundComponent />)}
    </ProductDataProviderComponent>
);
