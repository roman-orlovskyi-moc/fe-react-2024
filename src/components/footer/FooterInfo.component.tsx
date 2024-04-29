import React from 'react';

import styles from './footer-info.module.css';

interface FooterInfoProps {
    fullName: string;
}

export const FooterInfoComponent: React.FC<FooterInfoProps> = ({ fullName }) => (
    <p>
        Made with 💗 on course{' '}
        <a
            className={styles.footerLink}
            href="https://www.mastersacademy.education/frontend-for-beginners-it"
            target="_blank"
            rel="noreferrer"
        >
            &apos;Intro to React&apos; from Masters Academy in 2024
        </a>
        , by {fullName}
    </p>
);
