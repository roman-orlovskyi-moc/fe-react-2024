import { useState } from 'react';

import { FooterComponent } from './components/footer/Footer.component.tsx';
import { HeaderComponent } from './components/header/Header.component.tsx';
import { MainContentComponent } from './components/main-content/MainContent.component.tsx';
import { AppContextProvider } from './context/AppContext.context.tsx';

import styles from './App.module.css';

function App() {
    const FULL_NAME: string = `Roman Orlovskyi`;
    const NIK_NAME: string = `roman-orlovskyi-moc`;

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

    const toggleMobileMenuOpen = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <AppContextProvider>
            <div className={`${styles.pageWrapper} ${isMobileMenuOpen ? 'mobileMenuOpened' : ''}`}>
                <HeaderComponent toggleMobileMenuOpen={toggleMobileMenuOpen} />
                <main className={`${styles.mainContentWrapper} ${styles.contentWrapper}`}>
                    <MainContentComponent fullName={FULL_NAME} nikName={NIK_NAME} />
                </main>
                <FooterComponent fullName={FULL_NAME} />
            </div>
        </AppContextProvider>
    );
}

export default App;
