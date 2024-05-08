import React, { useContext } from 'react';

import { AppContext } from '@/context/AppContext.context.tsx';
import type { AppContextProps } from '@/interfaces/AppContextProps.interface.tsx';
import type { ProductProps } from '@/interfaces/ProductProps.interface.tsx';

export const ProductDetailsComponent: React.FC<ProductProps> = (product) => {
    const appContext: AppContextProps = useContext(AppContext);

    const returnToProducts = () => {
        appContext.setRoutePath('#products');
    };

    return (
        <>
            <button onClick={returnToProducts}>Back</button>
            <div className="product">
                <h2>{product.title}</h2>
                <img src={product.images[0]} alt={product.title} />
                <p>{product.description}</p>
                <p>Price: ${product.price}</p>
            </div>
        </>
    );
};
