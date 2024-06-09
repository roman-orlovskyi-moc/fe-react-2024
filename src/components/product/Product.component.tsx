import React from 'react';
import { useParams } from 'react-router-dom';

import { ProductDataProviderComponent } from '@/data-providers/ProductDataProvider.component.tsx';

import { PageNotFoundComponent } from '../page-not-found/PageNotFound.component.tsx';
import { ProductDetailsComponent } from '../product-details/ProductDetails.component.tsx';

export const ProductComponent: React.FC = () => {
    const { id } = useParams();
    const productId: number | null = id ? Number.parseInt(id, 10) : null;

    return productId && !Number.isNaN(productId) ? (
        <ProductDataProviderComponent id={productId}>
            {({ product }) => (product ? <ProductDetailsComponent {...product} /> : <PageNotFoundComponent />)}
        </ProductDataProviderComponent>
    ) : (
        <PageNotFoundComponent />
    );
};
