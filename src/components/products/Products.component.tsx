import { useContext, useState } from 'react';

import { AppContext } from '@/context/AppContext.context.tsx';
import { ProductsListDataProviderComponent } from '@/data-providers/ProductsListDataProvider.component.tsx';
import {
    parseRouteParametersCategories,
    parseRouteParametersPage,
    parseRouteParametersSearch,
    parseRouteParametersSort,
} from '@/helpers/productsHelper.ts';
import type { RouteParameters } from '@/types/RouteProps.type.tsx';

import { PaginationComponent } from '../pagination/Pagination.component.tsx';
import { ProductsFilterBarComponent } from '../products-filter-bar/ProductsFilterBar.component.tsx';
import { ProductsListComponent } from '../products-list/ProductsList.component.tsx';

export const ProductsComponent = () => {
    const PRODUCTS_LIMIT: number = 8;

    const { route, setRoutePathParameters } = useContext(AppContext);

    const [productsFilter, setProductsFilter] = useState(() => {
        const routeParameters: RouteParameters = route.parameters || {};
        const page: number = parseRouteParametersPage(routeParameters.page);
        const search: string = parseRouteParametersSearch(routeParameters.search);
        const categoryIds: number[] = parseRouteParametersCategories(routeParameters.categories);
        const sort: string = parseRouteParametersSort(routeParameters.sort);

        return { page, search, categoryIds, sort };
    });

    const setCurrentPageWithRoute = (page: number) => {
        setProductsFilter({ ...productsFilter, page });
        setRoutePathParameters({ page: page.toString() });
    };

    const setSearchWithRoute = (search: string) => {
        setProductsFilter({ ...productsFilter, page: 1, search });
        setRoutePathParameters({ page: '1', search });
    };

    const setCategoriesWithRoute = (categoryIds: number[]) => {
        setProductsFilter({ ...productsFilter, page: 1, categoryIds });
        setRoutePathParameters({ page: '1', categories: categoryIds.join(',') });
    };

    const setSortWithRoute = (sort: string) => {
        setProductsFilter({ ...productsFilter, page: 1, sort });
        setRoutePathParameters({ page: '1', sort });
    };

    return (
        <ProductsListDataProviderComponent
            page={productsFilter.page}
            limit={PRODUCTS_LIMIT}
            search={productsFilter.search}
            categoryIds={productsFilter.categoryIds}
            sort={productsFilter.sort}
        >
            {({ products, productsCount }) => (
                <>
                    <ProductsFilterBarComponent
                        search={productsFilter.search}
                        categoryIds={productsFilter.categoryIds}
                        sort={productsFilter.sort}
                        setProductsSearch={setSearchWithRoute}
                        setProductsCategories={setCategoriesWithRoute}
                        setProductsSort={setSortWithRoute}
                    />
                    <ProductsListComponent products={products} />
                    <PaginationComponent
                        page={productsFilter.page}
                        limit={PRODUCTS_LIMIT}
                        total={productsCount}
                        setCurrentPage={setCurrentPageWithRoute}
                    />
                </>
            )}
        </ProductsListDataProviderComponent>
    );
};
