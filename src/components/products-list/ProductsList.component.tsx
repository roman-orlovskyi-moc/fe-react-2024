import { useState } from 'react';

import { PaginationComponent } from '@/components/common/Pagination.component.tsx';

import { ProductCardComponent } from './ProductCard.component.tsx';
import { ProductsDataProviderComponent } from './ProductsDataProvider.component.tsx';

import styles from './products-list.module.css';

export const ProductsListComponent = () => {
    const PRODUCTS_LIMIT = 8;
    const [currentPage, setCurrentPage] = useState<number>(1);

    return (
        <ProductsDataProviderComponent page={currentPage} limit={PRODUCTS_LIMIT}>
            {(productsData) => (
                <div>
                    <ul className={styles.productsList}>
                        {productsData.products.map((productData) => (
                            <li key={productData.id}>
                                <ProductCardComponent {...productData} />
                            </li>
                        ))}
                    </ul>
                    <PaginationComponent
                        page={currentPage}
                        limit={PRODUCTS_LIMIT}
                        total={productsData.productsCount}
                        setCurrentPage={setCurrentPage}
                    />
                </div>
            )}
        </ProductsDataProviderComponent>
    );
};
