import { useState } from 'react';

import { AppContextProvider } from '@/context/AppContext.context.tsx';

import { AboutComponent } from './components/about/About.component.tsx';
import { FooterComponent } from './components/footer/Footer.component.tsx';
import { HeaderComponent } from './components/header/Header.component.tsx';
import { ProductsComponent } from './components/products/Products.component.tsx';

import styles from './App.module.css';

function App() {
    const FULL_NAME: string = `Roman Orlovskyi`;
    const NIK_NAME: string = `roman-orlovskyi-moc`;

    const [shouldShowAboutPage, setShouldShowAboutPage] = useState<boolean>(true);

    const toggleShowAboutPage = (isShowAboutPage: boolean) => {
        setShouldShowAboutPage(isShowAboutPage);
    };

    return (
        <AppContextProvider>
            <div className={styles.pageWrapper}>
                <HeaderComponent shouldShowAboutPage={shouldShowAboutPage} toggleShowAboutPageState={toggleShowAboutPage} />
                <main className={`${styles.mainContentWrapper} ${styles.contentWrapper}`}>
                    {shouldShowAboutPage ? <AboutComponent fullName={FULL_NAME} nikName={NIK_NAME} /> : <ProductsComponent />}
                </main>
                <FooterComponent fullName={FULL_NAME} />
            </div>
        </AppContextProvider>
    );
}

export default App;
