import { Route, Routes } from 'react-router-dom';

import { AboutComponent } from './components/about/About.component.tsx';
import { LayoutComponent } from './components/layout/Layout.component.tsx';
import { PageNotFoundComponent } from './components/page-not-found/PageNotFound.component.tsx';
import { ProductComponent } from './components/product/Product.component.tsx';
import { ProductsComponent } from './components/products/Products.component.tsx';
import { ROUTE_NAMES, ROUTES } from './constants/Routes.constant.ts';
import { CartContextProvider } from './context/Cart.context.tsx';

function App() {
    return (
        <CartContextProvider>
            <Routes>
                <Route path={ROUTES.ROOT} element={<LayoutComponent />}>
                    <Route index element={<AboutComponent />} />
                    <Route path={ROUTE_NAMES.PRODUCTS} element={<ProductsComponent />} />
                    <Route path={ROUTE_NAMES.PRODUCTID} element={<ProductComponent />} />
                    <Route path="*" element={<PageNotFoundComponent />} />
                </Route>
            </Routes>
        </CartContextProvider>
    );
}

export default App;
