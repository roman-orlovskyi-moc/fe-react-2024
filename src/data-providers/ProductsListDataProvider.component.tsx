import type React from 'react';

import type { ProductProps } from '@/interfaces/ProductProps.interface.tsx';

import productsJSONData from '../assets/data/products.json';

interface ProductsDataProps {
    products: ProductProps[];
    productsCount: number;
}

interface ProductsDataProviderFilterProps {
    title?: string;
    categoryId?: number;
}

type SortDirection = 'asc' | 'desc';

interface ProductsDataProviderSortProps {
    price?: SortDirection;
    creationAt?: SortDirection;
}

interface ProductsDataProviderProps {
    page: number;
    limit: number;
    filter?: ProductsDataProviderFilterProps;
    sort?: ProductsDataProviderSortProps;
    children: (productsData: ProductsDataProps) => React.ReactNode;
}

export const ProductsListDataProviderComponent: React.FC<ProductsDataProviderProps> = ({ page, limit, filter, sort, children }) => {
    let filteredProducts = productsJSONData;

    if (filter?.title) {
        const filterTitle = filter.title.toLowerCase();

        filteredProducts = filteredProducts.filter((product) => product.title.toLowerCase().includes(filterTitle));
    }

    if (filter?.categoryId) {
        filteredProducts = filteredProducts.filter((product) => product.category.id === filter.categoryId);
    }

    if (sort?.price) {
        filteredProducts = filteredProducts.sort((firstProduct, secondProduct) =>
            sort.price === 'asc' ? firstProduct.price - secondProduct.price : secondProduct.price - firstProduct.price,
        );
    }

    if (sort?.creationAt) {
        filteredProducts = filteredProducts.sort((firstProduct, secondProduct) => {
            const firstDate = new Date(firstProduct.creationAt).getTime();
            const secondDate = new Date(secondProduct.creationAt).getTime();

            return sort.creationAt === 'asc' ? firstDate - secondDate : secondDate - firstDate;
        });
    }

    const start = (page - 1) * limit;
    const end = start + limit;

    const productsData = {
        productsCount: filteredProducts.length,
        products: filteredProducts.slice(start, end) as ProductProps[],
    };

    return children(productsData);
};
