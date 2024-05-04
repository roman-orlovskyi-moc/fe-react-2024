import { useState } from 'react';

import { AppContextProvider } from '@/context/AppContext.context.tsx';

import { AboutComponent } from './components/about/About.component.tsx';
import { FooterComponent } from './components/footer/Footer.component.tsx';
import { HeaderComponent } from './components/header/Header.component.tsx';
import { ProductsDataProviderComponent } from './components/products-list/ProductsDataProvider.component.tsx';
import { ProductsListComponent } from './components/products-list/ProductsList.component.tsx';

import './App.css';

function App() {
    const FULL_NAME: string = `Roman Orlovskyi`;
    const NIK_NAME: string = `roman-orlovskyi-moc`;
    const PRODUCTS_LIMIT: number = 8;

    const [shouldShowAboutPage, setShouldShowAboutPage] = useState<boolean>(true);
    const [currentProductPage, setCurrentProductPage] = useState<number>(1);

    const toggleShowAboutPage = (isShowAboutPage: boolean) => {
        setShouldShowAboutPage(isShowAboutPage);
    };

    return (
        <AppContextProvider>
            <HeaderComponent shouldShowAboutPage={shouldShowAboutPage} toggleShowAboutPageState={toggleShowAboutPage} />
            <main className="mainContentWrapper contentWrapper">
                {shouldShowAboutPage ? (
                    <AboutComponent fullName={FULL_NAME} nikName={NIK_NAME} />
                ) : (
                    <ProductsDataProviderComponent page={currentProductPage} limit={PRODUCTS_LIMIT}>
                        {({ products, productsCount }) => (
                            <ProductsListComponent
                                products={products}
                                productsCount={productsCount}
                                limit={PRODUCTS_LIMIT}
                                currentPage={currentProductPage}
                                setCurrentProductPage={setCurrentProductPage}
                            />
                        )}
                    </ProductsDataProviderComponent>
                )}
            </main>
            <FooterComponent fullName={FULL_NAME} />
        </AppContextProvider>
    );
}

export default App;
