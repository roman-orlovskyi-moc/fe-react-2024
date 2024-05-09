import { useContext, useState } from 'react';

import { AppContext } from '@/context/AppContext.context.tsx';
import { ProductsListDataProviderComponent } from '@/data-providers/ProductsListDataProvider.component.tsx';
import type { AppContextProps } from '@/interfaces/AppContextProps.interface.tsx';

import { PaginationComponent } from '../pagination/Pagination.component.tsx';
import { ProductsListComponent } from '../products-list/ProductsList.component.tsx';

export const ProductsComponent = () => {
    const PRODUCTS_LIMIT: number = 8;

    const appContext: AppContextProps = useContext(AppContext);

    const [currentPage, setCurrentPage] = useState<number>(() => {
        const routeParametersPage: number | null =
            appContext.route.parameters && appContext.route.parameters.page ? Number.parseInt(appContext.route.parameters.page, 10) : null;

        return routeParametersPage && !Number.isNaN(routeParametersPage) ? routeParametersPage : 1;
    });

    const setCurrentPageWithRoute = (page: number) => {
        setCurrentPage(page);
        appContext.setRoutePathParameters({ page: page.toString() });
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
