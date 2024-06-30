import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { productSelector } from '@/store/product/selectors.ts';
import { fetchProductThunk } from '@/store/product/thunks.ts';
import type { AppDispatch } from '@/store/store.ts';

import { LoaderComponent } from '../loader/Loader.component.tsx';
import { PageNotFoundComponent } from '../page-not-found/PageNotFound.component.tsx';
import { ProductDetailsComponent } from '../product-details/ProductDetails.component.tsx';

export const ProductComponent: React.FC = () => {
    const { id } = useParams();
    const productId: number | null = id ? Number.parseInt(id, 10) : null;

    const dispatch = useDispatch<AppDispatch>();
    const { product, status } = useSelector(productSelector);

    useEffect(() => {
        productId && !Number.isNaN(productId) && dispatch(fetchProductThunk({ id: productId }));
    }, [dispatch, productId]);

    if (!productId || Number.isNaN(productId)) {
        return <PageNotFoundComponent />;
    } else if (status === 'loading') {
        return <LoaderComponent />;
    } else if (product) {
        return <ProductDetailsComponent {...product} />;
    } else if (product === undefined) {
        return null;
    } else {
        return <PageNotFoundComponent />;
    }
};
