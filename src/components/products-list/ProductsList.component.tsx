import { ProductCardComponent } from './ProductCard.component.tsx';
import { ProductsDataProviderComponent } from './ProductsDataProvider.component.tsx';

import styles from './products-list.module.css';

export const ProductsListComponent = () => (
    <ProductsDataProviderComponent page={1} limit={8}>
        {(productsData) => (
            <ul className={styles.productsList}>
                {productsData.products.map((productData) => (
                    <li className={styles.productListItem} key={productData.id}>
                        <ProductCardComponent {...productData} />
                    </li>
                ))}
            </ul>
        )}
    </ProductsDataProviderComponent>
);
