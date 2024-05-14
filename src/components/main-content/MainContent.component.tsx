import React, { useContext } from 'react';

import { AppContext } from '@/context/AppContext.context.tsx';

import { AboutComponent } from '../about/About.component.tsx';
import { PageNotFoundComponent } from '../page-not-found/PageNotFound.component.tsx';
import { ProductComponent } from '../product/Product.component.tsx';
import { ProductsComponent } from '../products/Products.component.tsx';

interface MainContentProps {
    fullName: string;
    nikName: string;
}

export const MainContentComponent: React.FC<MainContentProps> = ({ fullName, nikName }) => {
    const { route } = useContext(AppContext);

    const productPageRegExp: RegExp = /^\/product\/\d+$/;

    if (route.path === '/about') {
        return <AboutComponent fullName={fullName} nikName={nikName} />;
    } else if (route.path === '/products') {
        return <ProductsComponent />;
    } else if (productPageRegExp.test(route.path)) {
        const productId: number = Number(route.path.split('/').pop());

        return <ProductComponent id={productId} />;
    } else {
        return <PageNotFoundComponent />;
    }
};
