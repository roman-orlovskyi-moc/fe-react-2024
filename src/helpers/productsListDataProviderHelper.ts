import type { ProductProps } from '../interfaces/ProductProps.interface.tsx';

export const filterProductsByTitle = (products: ProductProps[], title: string) => {
    const filterTitle = title.toLowerCase();

    return products.filter((product) => product.title.toLowerCase().includes(filterTitle));
};

export const filterProductsByCategory = (products: ProductProps[], categoryIds: number[]) =>
    products.filter((product) => categoryIds.includes(product.category.id));

export const sortProducts = (products: ProductProps[], sort: string) => {
    const [sortField, sortDirection] = sort.split(':');

    switch (sortField) {
        case 'price': {
            return sortProductsByPrice(products, sortDirection);
        }
        case 'creationAt': {
            return sortProductsByCreationDate(products, sortDirection);
        }
        default: {
            return products;
        }
    }
};

export const sortProductsByPrice = (products: ProductProps[], sortDirection: string) =>
    products.sort((firstProduct, secondProduct) =>
        sortDirection === 'desc' ? secondProduct.price - firstProduct.price : firstProduct.price - secondProduct.price,
    );

export const sortProductsByCreationDate = (products: ProductProps[], sortDirection: string) =>
    products.sort((firstProduct, secondProduct) => {
        const firstDate = new Date(firstProduct.creationAt).getTime();
        const secondDate = new Date(secondProduct.creationAt).getTime();

        return sortDirection === 'desc' ? secondDate - firstDate : firstDate - secondDate;
    });

export const sliceProducts = (products: ProductProps[], page: number, limit: number) => {
    const start: number = (page - 1) * limit;
    const end: number = start + limit;

    return products.slice(start, end);
};
