import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { isMobileView } from '@/helpers/DeviceView.helper.ts';
import {
    parseRouteFilters,
    setCategorySearchParameter,
    setCurrentPageSearchParameter,
    setSearchQuerySearchParameter,
    setSortOrderSearchParameter,
} from '@/helpers/Products.helper.ts';
import type { ProductsFilter } from '@/interfaces/ProductsFilter.interface.ts';
import { setCurrentCategoryId } from '@/store/categories/slice.ts';
import { productsSelector } from '@/store/products/selector.ts';
import { setIsInfiniteScroll } from '@/store/products/slice.ts';
import { fetchProductsThunk } from '@/store/products/thunks.ts';
import type { AppDispatch } from '@/store/store.ts';

import { LoaderComponent } from '../loader/Loader.component.tsx';
import { PaginationComponent } from '../pagination/Pagination.component.tsx';
import { ProductsFilterBarComponent } from '../products-filter-bar/ProductsFilterBar.component.tsx';
import { ProductsListComponent } from '../products-list/ProductsList.component.tsx';

import 'react-toastify/dist/ReactToastify.css';

export const ProductsComponent: React.FC = () => {
    const PRODUCTS_LIMIT: number = 8;

    const [searchParameters, setSearchParameters] = useSearchParams();
    const [productsFilter, setProductsFilter] = useState<ProductsFilter>(() => parseRouteFilters(searchParameters));

    const dispatch = useDispatch<AppDispatch>();
    const { products, productsTotal, status, isInfiniteScroll } = useSelector(productsSelector);

    useEffect(() => {
        dispatch(setIsInfiniteScroll(isMobileView()));

        const handleResize = () => dispatch(setIsInfiniteScroll(isMobileView()));

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, [dispatch]);

    useEffect(() => {
        dispatch(
            fetchProductsThunk({
                page: productsFilter.page,
                limit: PRODUCTS_LIMIT,
                search: productsFilter.search,
                categoryId: productsFilter.categoryId,
                sort: productsFilter.sort,
            }),
        );
        dispatch(setCurrentCategoryId(productsFilter.categoryId || 0));
    }, [dispatch, productsFilter]);

    useEffect(() => {
        setProductsFilter(parseRouteFilters(searchParameters));
    }, [searchParameters]);

    const setCurrentPageWithRoute = (page: number) => {
        setSearchParameters((previousSearchParameters: URLSearchParams) => setCurrentPageSearchParameter(previousSearchParameters, page));
    };

    const setSearchWithRoute = (search: string) => {
        setSearchParameters((previousSearchParameters: URLSearchParams) => setSearchQuerySearchParameter(previousSearchParameters, search));
    };

    const setCategoryWithRoute = (categoryId: number) => {
        setSearchParameters((previousSearchParameters: URLSearchParams) =>
            setCategorySearchParameter(previousSearchParameters, categoryId),
        );
    };

    const setSortWithRoute = (sort: string) => {
        setSearchParameters((previousSearchParameters: URLSearchParams) => setSortOrderSearchParameter(previousSearchParameters, sort));
    };

    const loadNextPageProductsData = useCallback(() => {
        setProductsFilter((previousProductsFilter: ProductsFilter) => ({
            ...previousProductsFilter,
            page: (previousProductsFilter.page || 1) + 1,
        }));
    }, []);

    return (
        <>
            <ProductsFilterBarComponent
                search={productsFilter.search}
                sort={productsFilter.sort}
                setProductsSearch={setSearchWithRoute}
                setProductsCategory={setCategoryWithRoute}
                setProductsSort={setSortWithRoute}
            />
            {status === 'loading' ? <LoaderComponent /> : null}
            {products ? (
                <ProductsListComponent
                    products={products}
                    productsTotalCount={productsTotal}
                    isInfiniteScroll={isInfiniteScroll}
                    loadNextPageProductsData={loadNextPageProductsData}
                />
            ) : null}
            {productsTotal > 0 && !isInfiniteScroll ? (
                <PaginationComponent
                    page={productsFilter.page}
                    limit={PRODUCTS_LIMIT}
                    total={productsTotal}
                    setCurrentPage={setCurrentPageWithRoute}
                />
            ) : null}
            <ToastContainer position="bottom-right" />
        </>
    );
};
