import React from 'react';
import { useParams } from 'react-router-dom';

import { ProductDataProviderComponent } from '@/data-providers/ProductDataProvider.component.tsx';

import { LoaderComponent } from '../loader/Loader.component.tsx';
import { PageNotFoundComponent } from '../page-not-found/PageNotFound.component.tsx';
import { ProductDetailsComponent } from '../product-details/ProductDetails.component.tsx';

export const ProductComponent: React.FC = () => {
    const { id } = useParams();
    const productId: number | null = id ? Number.parseInt(id, 10) : null;

    return productId && !Number.isNaN(productId) ? (
        <ProductDataProviderComponent id={productId}>
            {({ product, isLoading }) => {
                if (isLoading) {
                    return <LoaderComponent />;
                } else if (product === undefined) {
                    return null;
                } else if (product) {
                    return <ProductDetailsComponent {...product} />;
                } else {
                    return <PageNotFoundComponent />;
                }
            }}
        </ProductDataProviderComponent>
    ) : (
        <PageNotFoundComponent />
    );
};
