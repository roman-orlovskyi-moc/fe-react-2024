import React, { useContext } from 'react';

import { AppContext } from '@/context/AppContext.context.tsx';
import { ProductDataProviderComponent } from '@/data-providers/ProductDataProvider.component.tsx';
import type { AppContextProps } from '@/interfaces/AppContextProps.interface.tsx';

interface ProductProps {
    id: number;
}

export const ProductComponent: React.FC<ProductProps> = ({ id }) => {
    const appContext: AppContextProps = useContext(AppContext);

    const returnToProducts = () => {
        appContext.setRoutePath('#products');
    };

    return (
        <ProductDataProviderComponent id={id}>
            {({ product }) => (
                <>
                    <button onClick={returnToProducts}>Back</button>
                    {product ? (
                        <div className="product">
                            <h2>{product.title}</h2>
                            <img src={product.images[0]} alt={product.title} />
                            <p>{product.description}</p>
                            <p>Price: ${product.price}</p>
                        </div>
                    ) : (
                        <p>Product not found</p>
                    )}
                </>
            )}
        </ProductDataProviderComponent>
    );
};
