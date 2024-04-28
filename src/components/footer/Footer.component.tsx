import React from 'react';

import { FooterInfoComponent } from './FooterInfo.component.tsx';
import { FooterSocialIconsComponent } from './FooterSocialIcons.component.tsx';

import styles from './footer.module.css';

interface FooterProps {
    fullName: string;
}

export const FooterComponent: React.FC<FooterProps> = ({ fullName }) => (
    <>
        <footer className={`contentWrapper ${styles.footer}`}>
            <div className={styles.footerDivider}></div>
            <FooterSocialIconsComponent />
            <FooterInfoComponent fullName={fullName} />
        </footer>
    </>
);
