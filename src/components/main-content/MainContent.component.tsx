import React, { useContext } from 'react';

import { AppContext } from '@/context/AppContext.context.tsx';
import type { AppContextProps } from '@/interfaces/AppContextProps.interface.tsx';

import { AboutComponent } from '../about/About.component.tsx';
import { PageNotFoundComponent } from '../page-not-found/PageNotFound.component.tsx';
import { ProductComponent } from '../product/Product.component.tsx';
import { ProductsComponent } from '../products/Products.component.tsx';

interface MainContentProps {
    fullName: string;
    nikName: string;
}

export const MainContentComponent: React.FC<MainContentProps> = ({ fullName, nikName }) => {
    const appContext: AppContextProps = useContext(AppContext);

    const productPageRegExp: RegExp = /^\/product\/\d+$/;

    if (appContext.route.path === '/about') {
        return <AboutComponent fullName={fullName} nikName={nikName} />;
    } else if (appContext.route.path === '/products') {
        return <ProductsComponent />;
    } else if (productPageRegExp.test(appContext.route.path)) {
        const productId: number = Number(appContext.route.path.split('/').pop());

        return <ProductComponent id={productId} />;
    } else {
        return <PageNotFoundComponent />;
    }
};
