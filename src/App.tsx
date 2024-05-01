import React, { useState } from 'react';

import { AboutMeComponent } from './components/about/AboutMe.component.tsx';
import { FooterComponent } from './components/footer/Footer.component.tsx';
import { HeaderComponent } from './components/header/Header.component.tsx';
import { ProductsListComponent } from './components/products-list/ProductsList.component.tsx';

import './App.css';

function App() {
    const FULL_NAME: string = `Roman Orlovskyi`;
    const NIK_NAME: string = `roman-orlovskyi-moc`;

    const [shouldShowAboutPage, setShouldShowAboutPage] = useState(true);

    const toggleShowAboutPage = (isShowAboutPage: boolean) => {
        setShouldShowAboutPage(isShowAboutPage);
    };

    return (
        <>
            <HeaderComponent shouldShowAboutPage={shouldShowAboutPage} toggleShowAboutPageState={toggleShowAboutPage} />
            <main className="mainContentWrapper contentWrapper">
                {shouldShowAboutPage && <AboutMeComponent fullName={FULL_NAME} nikName={NIK_NAME} />}
                {!shouldShowAboutPage && <ProductsListComponent />}
            </main>
            <FooterComponent fullName={FULL_NAME} />
        </>
    );
}

export default App;
