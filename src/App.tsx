import { useState } from 'react';

import { AppContextProvider } from '@/context/AppContext.context.tsx';

import { AboutComponent } from './components/about/About.component.tsx';
import { FooterComponent } from './components/footer/Footer.component.tsx';
import { HeaderComponent } from './components/header/Header.component.tsx';
import { ProductsComponent } from './components/products/Products.component.tsx';

import './App.css';

function App() {
    const FULL_NAME: string = `Roman Orlovskyi`;
    const NIK_NAME: string = `roman-orlovskyi-moc`;

    const [shouldShowAboutPage, setShouldShowAboutPage] = useState<boolean>(true);

    const toggleShowAboutPage = (isShowAboutPage: boolean) => {
        setShouldShowAboutPage(isShowAboutPage);
    };

    return (
        <AppContextProvider>
            <HeaderComponent shouldShowAboutPage={shouldShowAboutPage} toggleShowAboutPageState={toggleShowAboutPage} />
            <main className="mainContentWrapper contentWrapper">
                {shouldShowAboutPage ? <AboutComponent fullName={FULL_NAME} nikName={NIK_NAME} /> : <ProductsComponent />}
            </main>
            <FooterComponent fullName={FULL_NAME} />
        </AppContextProvider>
    );
}

export default App;
