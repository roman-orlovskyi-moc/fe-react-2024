import { useState } from 'react';

import { AboutComponent } from './components/about/About.component.tsx';
import { FooterComponent } from './components/footer/Footer.component.tsx';
import { HeaderComponent } from './components/header/Header.component.tsx';
import { ProductsComponent } from './components/products/Products.component.tsx';
import { AppContextProvider } from './context/AppContext.context.tsx';

import styles from './App.module.css';

function App() {
    const FULL_NAME: string = `Roman Orlovskyi`;
    const NIK_NAME: string = `roman-orlovskyi-moc`;

    const [shouldShowAboutPage, setShouldShowAboutPage] = useState<boolean>(true);

    const toggleShowAboutPage = (isShowAboutPage: boolean) => {
        setShouldShowAboutPage(isShowAboutPage);
    };

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

    const toggleMobileMenuOpen = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <AppContextProvider>
            <div className={`${styles.pageWrapper} ${isMobileMenuOpen ? 'mobileMenuOpened' : ''}`}>
                <HeaderComponent
                    shouldShowAboutPage={shouldShowAboutPage}
                    toggleShowAboutPageState={toggleShowAboutPage}
                    toggleMobileMenuOpen={toggleMobileMenuOpen}
                />
                <main className={`${styles.mainContentWrapper} ${styles.contentWrapper}`}>
                    {shouldShowAboutPage ? <AboutComponent fullName={FULL_NAME} nikName={NIK_NAME} /> : <ProductsComponent />}
                </main>
                <FooterComponent fullName={FULL_NAME} />
            </div>
        </AppContextProvider>
    );
}

export default App;
