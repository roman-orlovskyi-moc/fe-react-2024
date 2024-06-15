import React, { useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { ProductsListDataProviderComponent } from '@/data-providers/ProductsListDataProvider.component.tsx';
import { isMobileView } from '@/helpers/DeviceView.helper.ts';
import {
    parseRouteFilters,
    setCategorySearchParameter,
    setCurrentPageSearchParameter,
    setSearchQuerySearchParameter,
    setSortOrderSearchParameter,
} from '@/helpers/Products.helper.ts';
import type { ProductsFilter } from '@/interfaces/ProductsFilter.interface.ts';

import { LoaderComponent } from '../loader/Loader.component.tsx';
import { PaginationComponent } from '../pagination/Pagination.component.tsx';
import { ProductsFilterBarComponent } from '../products-filter-bar/ProductsFilterBar.component.tsx';
import { ProductsListComponent } from '../products-list/ProductsList.component.tsx';

export const ProductsComponent: React.FC = () => {
    const PRODUCTS_LIMIT: number = 8;

    const [searchParameters, setSearchParameters] = useSearchParams();
    const [productsFilter, setProductsFilter] = useState<ProductsFilter>(() => parseRouteFilters(searchParameters));
    const [isInfiniteScroll, setIsInfiniteScroll] = useState<boolean>(isMobileView());

    useEffect(() => {
        const handleResize = () => setIsInfiniteScroll(isMobileView());

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

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
        <ProductsListDataProviderComponent
            page={productsFilter.page}
            limit={PRODUCTS_LIMIT}
            search={productsFilter.search}
            categoryId={productsFilter.categoryId}
            sort={productsFilter.sort}
            isMergeNewDataWithPrevious={isInfiniteScroll && productsFilter.page > 1}
        >
            {({ products, productsTotalCount, isLoading }) => (
                <>
                    <ProductsFilterBarComponent
                        search={productsFilter.search}
                        categoryId={productsFilter.categoryId}
                        sort={productsFilter.sort}
                        setProductsSearch={setSearchWithRoute}
                        setProductsCategory={setCategoryWithRoute}
                        setProductsSort={setSortWithRoute}
                    />
                    {isLoading ? <LoaderComponent /> : null}
                    <ProductsListComponent
                        products={products}
                        productsTotalCount={productsTotalCount}
                        isInfiniteScroll={isInfiniteScroll}
                        loadNextPageProductsData={loadNextPageProductsData}
                    />
                    {productsTotalCount > 0 && !isInfiniteScroll ? (
                        <PaginationComponent
                            page={productsFilter.page}
                            limit={PRODUCTS_LIMIT}
                            total={productsTotalCount}
                            setCurrentPage={setCurrentPageWithRoute}
                        />
                    ) : null}
                </>
            )}
        </ProductsListDataProviderComponent>
    );
};
