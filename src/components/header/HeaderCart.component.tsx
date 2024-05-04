import { useContext } from 'react';

import { AppContext } from '@/context/AppContext.context.tsx';
import type { AppContextProps } from '@/interfaces/AppContextProps.interface.tsx';

import { CartIconCounterComponent } from '../cart-icon-counter/CartIconCounter.component.tsx';

import styles from './header-cart.module.css';

export const HeaderCartComponent = () => {
    const appContext: AppContextProps = useContext(AppContext);
    const cartItemsCount: number = appContext.cart.items.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <a href="/cart" className={styles.headerCart}>
            <CartIconCounterComponent counter={cartItemsCount} wrapperClassName={styles.headerCartCounter} />
        </a>
    );
};
