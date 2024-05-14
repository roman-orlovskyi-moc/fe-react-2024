import { useContext, useEffect, useState } from 'react';

import { AppContext } from '@/context/AppContext.context.tsx';
import { ProductsListDataProviderComponent } from '@/data-providers/ProductsListDataProvider.component.tsx';

import { PaginationComponent } from '../pagination/Pagination.component.tsx';
import { ProductsListComponent } from '../products-list/ProductsList.component.tsx';

export const ProductsComponent = () => {
    const PRODUCTS_LIMIT: number = 8;

    const { route, setRoutePathParameters } = useContext(AppContext);

    const [currentPage, setCurrentPage] = useState<number>(() => {
        const routeParametersPage: number | null =
            route.parameters && route.parameters.page ? Number.parseInt(route.parameters.page, 10) : null;

        return routeParametersPage && !Number.isNaN(routeParametersPage) ? routeParametersPage : 1;
    });

    useEffect(() => {
        if (route.parameters && !route.parameters.page && currentPage > 1) {
            setCurrentPage(1);
        }
    }, [route.parameters]);

    const setCurrentPageWithRoute = (page: number) => {
        setCurrentPage(page);
        setRoutePathParameters({ page: page.toString() });
    };

    return (
        <ProductsListDataProviderComponent page={currentPage} limit={PRODUCTS_LIMIT}>
            {({ products, productsCount }) => (
                <>
                    <ProductsListComponent products={products} />
                    <PaginationComponent
                        page={currentPage}
                        limit={PRODUCTS_LIMIT}
                        total={productsCount}
                        setCurrentPage={setCurrentPageWithRoute}
                    />
                </>
            )}
        </ProductsListDataProviderComponent>
    );
};
