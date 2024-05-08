import React from 'react';

import type { ProductProps } from '@/interfaces/ProductProps.interface.tsx';

import { ProductCardComponent } from '../product-card/ProductCard.component.tsx';

import styles from './products-list.module.css';

interface ProductsListProps {
    products: ProductProps[];
}

export const ProductsListComponent: React.FC<ProductsListProps> = ({ products }) => (
    <ul className={styles.productsList}>
        {products.map((productData) => (
            <li className={styles.productListItem} key={productData.id}>
                <ProductCardComponent {...productData} />
            </li>
        ))}
    </ul>
);
