import React, { useContext } from 'react';

import { AppContext } from '@/context/AppContext.context.tsx';
import type { AppContextProps } from '@/interfaces/AppContextProps.interface.tsx';

import { AboutComponent } from '../about/About.component.tsx';
import { ProductsComponent } from '../products/Products.component.tsx';

interface MainContentProps {
    fullName: string;
    nikName: string;
}

export const MainContentComponent: React.FC<MainContentProps> = ({ fullName, nikName }) => {
    const appContext: AppContextProps = useContext(AppContext);

    return appContext.route === '#products' ? <ProductsComponent /> : <AboutComponent fullName={fullName} nikName={nikName} />;
};
