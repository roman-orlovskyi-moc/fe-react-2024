import { useEffect, useState } from 'react';

import { FooterComponent } from './components/footer/Footer.component.tsx';
import { HeaderComponent } from './components/header/Header.component.tsx';
import { MainContentComponent } from './components/main-content/MainContent.component.tsx';
import { CartContextProvider } from './context/Cart.context.tsx';
import { RouterContextProvider } from './context/Router.context.tsx';
import { parseColorScheme, setStoredColorScheme } from './helpers/App.helper.ts';
import type { ColorScheme } from './types/ColorScheme.type.ts';

import styles from './App.module.css';

function App() {
    const FULL_NAME: string = `Roman Orlovskyi`;
    const NIK_NAME: string = `roman-orlovskyi-moc`;

    const [themeMode, setThemeMode] = useState<ColorScheme>(() => parseColorScheme());
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

    useEffect(() => {
        setStoredColorScheme(themeMode);
    }, [themeMode]);

    const toggleMobileMenuOpen = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <RouterContextProvider>
            <CartContextProvider>
                <div className={`${styles.pageWrapper} ${themeMode} ${isMobileMenuOpen ? 'mobileMenuOpened' : ''}`}>
                    <HeaderComponent
                        themeMode={themeMode}
                        setThemeMode={setThemeMode}
                        isMobileMenuOpen={isMobileMenuOpen}
                        toggleMobileMenuOpen={toggleMobileMenuOpen}
                    />
                    <main className={`${styles.mainContentWrapper} ${styles.contentWrapper}`}>
                        <MainContentComponent fullName={FULL_NAME} nikName={NIK_NAME} />
                    </main>
                    <FooterComponent fullName={FULL_NAME} />
                </div>
            </CartContextProvider>
        </RouterContextProvider>
    );
}

export default App;
