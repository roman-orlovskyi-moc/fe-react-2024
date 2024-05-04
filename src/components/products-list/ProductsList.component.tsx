import React from 'react';

import { PaginationComponent } from '@/components/pagination/Pagination.component.tsx';
import type { ProductProps } from '@/interfaces/ProductProps.interface.tsx';

import { ProductCardComponent } from './ProductCard.component.tsx';

import styles from './products-list.module.css';

interface ProductsListProps {
    products: ProductProps[];
    productsCount: number;
    limit: number;
    currentPage: number;
    setCurrentProductPage: (page: number) => void;
}

export const ProductsListComponent: React.FC<ProductsListProps> = ({
    products,
    productsCount,
    limit,
    currentPage,
    setCurrentProductPage,
}) => (
    <div>
        <ul className={styles.productsList}>
            {products.map((productData) => (
                <li className={styles.productListItem} key={productData.id}>
                    <ProductCardComponent {...productData} />
                </li>
            ))}
        </ul>
        <PaginationComponent page={currentPage} limit={limit} total={productsCount} setCurrentPage={setCurrentProductPage} />
    </div>
);
