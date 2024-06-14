import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { ProductsListDataProviderComponent } from '@/data-providers/ProductsListDataProvider.component.tsx';
import { parseRouteFilters } from '@/helpers/Products.helper.ts';
import type { ProductsFilter } from '@/interfaces/ProductsFilter.interface.ts';

import { LoaderComponent } from '../loader/Loader.component.tsx';
import { PaginationComponent } from '../pagination/Pagination.component.tsx';
import { ProductsFilterBarComponent } from '../products-filter-bar/ProductsFilterBar.component.tsx';
import { ProductsListComponent } from '../products-list/ProductsList.component.tsx';

export const ProductsComponent: React.FC = () => {
    const PRODUCTS_LIMIT: number = 8;

    const [searchParameters, setSearchParameters] = useSearchParams();

    const [productsFilter, setProductsFilter] = useState<ProductsFilter>(() => parseRouteFilters(searchParameters));

    useEffect(() => {
        setProductsFilter(parseRouteFilters(searchParameters));
    }, [searchParameters]);

    const setCurrentPageWithRoute = (page: number) => {
        setSearchParameters((previousSearchParameters) => {
            previousSearchParameters.set('page', page.toString());

            return previousSearchParameters;
        });
    };

    const setSearchWithRoute = (search: string) => {
        setSearchParameters((previousSearchParameters) => {
            previousSearchParameters.set('page', '1');
            previousSearchParameters.set('search', search);

            return previousSearchParameters;
        });
    };

    const setCategoryWithRoute = (categoryId: number) => {
        setSearchParameters((previousSearchParameters) => {
            previousSearchParameters.set('page', '1');
            previousSearchParameters.set('category', categoryId.toString());

            return previousSearchParameters;
        });
    };

    const setSortWithRoute = (sort: string) => {
        setSearchParameters((previousSearchParameters) => {
            previousSearchParameters.set('page', '1');
            previousSearchParameters.set('sort', sort);

            return previousSearchParameters;
        });
    };

    return (
        <ProductsListDataProviderComponent
            page={productsFilter.page}
            limit={PRODUCTS_LIMIT}
            search={productsFilter.search}
            categoryId={productsFilter.categoryId}
            sort={productsFilter.sort}
        >
            {({ products, productsCount, isLoading }) => (
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
                    <ProductsListComponent products={products} />
                    {productsCount > 0 ? (
                        <PaginationComponent
                            page={productsFilter.page}
                            limit={PRODUCTS_LIMIT}
                            total={productsCount}
                            setCurrentPage={setCurrentPageWithRoute}
                        />
                    ) : null}
                </>
            )}
        </ProductsListDataProviderComponent>
    );
};
