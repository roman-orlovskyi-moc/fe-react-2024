export const ROUTE_NAMES = {
    ROOT: 'fe-react-2024',
    PRODUCTS: 'products',
    PRODUCT: 'product',
    PRODUCTID: `product/:id`,
    CART: 'cart',
};

export const ROUTES = {
    ROOT: `/${ROUTE_NAMES.ROOT}/`,
    PRODUCTS: `/${ROUTE_NAMES.ROOT}/${ROUTE_NAMES.PRODUCTS}`,
    PRODUCT: `/${ROUTE_NAMES.ROOT}/${ROUTE_NAMES.PRODUCT}`,
    CART: `/${ROUTE_NAMES.ROOT}/${ROUTE_NAMES.CART}`,
};
