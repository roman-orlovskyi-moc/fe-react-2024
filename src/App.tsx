import { AboutMeComponent } from './components/about/AboutMe.component.tsx';
import { FooterComponent } from './components/footer/Footer.component.tsx';
import { HeaderComponent } from './components/header/Header.component.tsx';

import './App.css';

function App() {
    const FULL_NAME: string = `Roman Orlovskyi`;
    const NIK_NAME: string = `roman-orlovskyi-moc`;

    return (
        <>
            <HeaderComponent />
            <main className="mainContentWrapper contentWrapper">
                <AboutMeComponent fullName={FULL_NAME} nikName={NIK_NAME} />
            </main>
            <FooterComponent fullName={FULL_NAME} />
        </>
    );
}

export default App;
