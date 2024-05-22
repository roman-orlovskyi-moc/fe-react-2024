import React from 'react';

import type { Product } from '@/interfaces/Product.interface.tsx';

import { ProductCardComponent } from '../product-card/ProductCard.component.tsx';

import styles from './products-list.module.css';

interface ProductsListProps {
    products: Product[];
}

export const ProductsListComponent: React.FC<ProductsListProps> = ({ products }) => (
    <>
        {products.length > 0 ? (
            <ul className={styles.productsList}>
                {products.map((productData) => (
                    <li className={styles.productListItem} key={productData.id}>
                        <ProductCardComponent {...productData} />
                    </li>
                ))}
            </ul>
        ) : (
            <p className={styles.productsListEmpty}>No products found</p>
        )}
    </>
);
