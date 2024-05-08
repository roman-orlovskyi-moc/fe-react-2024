import React, { useContext } from 'react';

import { AppContext } from '@/context/AppContext.context.tsx';
import type { AppContextProps } from '@/interfaces/AppContextProps.interface.tsx';

import { AboutComponent } from '../about/About.component.tsx';
import { PageNotFoundComponent } from '../page-not-found/PageNotFound.component.tsx';
import { ProductsComponent } from '../products/Products.component.tsx';

interface MainContentProps {
    fullName: string;
    nikName: string;
}

export const MainContentComponent: React.FC<MainContentProps> = ({ fullName, nikName }) => {
    const appContext: AppContextProps = useContext(AppContext);

    if (appContext.route === '#products') {
        return <ProductsComponent />;
    } else if (appContext.route === '#about') {
        return <AboutComponent fullName={fullName} nikName={nikName} />;
    } else {
        return <PageNotFoundComponent />;
    }
};
