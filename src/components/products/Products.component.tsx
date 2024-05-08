import { useState } from 'react';

import { ProductsListDataProviderComponent } from '@/data-providers/ProductsListDataProvider.component.tsx';

import { PaginationComponent } from '../pagination/Pagination.component.tsx';
import { ProductsListComponent } from '../products-list/ProductsList.component.tsx';

export const ProductsComponent = () => {
    const PRODUCTS_LIMIT: number = 8;
    const [currentPage, setCurrentPage] = useState<number>(1);

    return (
        <ProductsListDataProviderComponent page={currentPage} limit={PRODUCTS_LIMIT}>
            {({ products, productsCount }) => (
                <>
                    <ProductsListComponent products={products} />
                    <PaginationComponent page={currentPage} limit={PRODUCTS_LIMIT} total={productsCount} setCurrentPage={setCurrentPage} />
                </>
            )}
        </ProductsListDataProviderComponent>
    );
};
