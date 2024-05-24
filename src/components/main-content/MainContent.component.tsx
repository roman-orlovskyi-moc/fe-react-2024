import React, { useContext } from 'react';

import { ROUTES } from '@/constants/Routes.constant.ts';
import { RouterContext } from '@/context/Router.context.tsx';

import { AboutComponent } from '../about/About.component.tsx';
import { PageNotFoundComponent } from '../page-not-found/PageNotFound.component.tsx';
import { ProductComponent } from '../product/Product.component.tsx';
import { ProductsComponent } from '../products/Products.component.tsx';

interface MainContentProps {
    fullName: string;
    nikName: string;
}

export const MainContentComponent: React.FC<MainContentProps> = ({ fullName, nikName }) => {
    const { route } = useContext(RouterContext);

    const productPageRegExp: RegExp = new RegExp(`${ROUTES.PRODUCT}(\\d+)`);

    if (route.path === ROUTES.ABOUT) {
        return <AboutComponent fullName={fullName} nikName={nikName} />;
    } else if (route.path === ROUTES.PRODUCTS) {
        return <ProductsComponent />;
    } else if (productPageRegExp.test(route.path)) {
        // @ts-ignore
        const productId: number = Number(route.path.match(productPageRegExp)[1]);
        return <ProductComponent id={productId} />;
    } else {
        return <PageNotFoundComponent />;
    }
};
