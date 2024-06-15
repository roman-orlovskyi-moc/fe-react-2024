import { Route, Routes } from 'react-router-dom';

import { AboutComponent } from './components/about/About.component.tsx';
import { LayoutComponent } from './components/layout/Layout.component.tsx';
import { PageNotFoundComponent } from './components/page-not-found/PageNotFound.component.tsx';
import { ProductComponent } from './components/product/Product.component.tsx';
import { ProductsComponent } from './components/products/Products.component.tsx';
import { ROUTE_NAMES } from './constants/Routes.constant.ts';
import { CartContextProvider } from './context-provider/CartContext.provider.tsx';
import { NotificationContextProvider } from './context-provider/NotificationContext.provider.tsx';
import { ThemeModeContextProvider } from './context-provider/ThemeModeContext.provider.tsx';

function App() {
    return (
        <CartContextProvider>
            <ThemeModeContextProvider>
                <NotificationContextProvider>
                    <Routes>
                        <Route path="/" element={<LayoutComponent />}>
                            <Route index element={<AboutComponent />} />
                            <Route path={ROUTE_NAMES.PRODUCTS}>
                                <Route index element={<ProductsComponent />} />
                                <Route path=":id" element={<ProductComponent />} />
                            </Route>
                            <Route path="*" element={<PageNotFoundComponent />} />
                        </Route>
                    </Routes>
                </NotificationContextProvider>
            </ThemeModeContextProvider>
        </CartContextProvider>
    );
}

export default App;
