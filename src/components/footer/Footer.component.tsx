import React from 'react';

import appStyles from '@/App.module.css';

import { SocialIconComponent } from '../icon/SocialIcon.component';
import { SocialIconName } from '../icon/SocialIcon.component';

import styles from './footer.module.css';

export const FooterComponent: React.FC = () => (
    <footer className={`${appStyles.contentWrapper} ${styles.footer}`}>
        <div className={styles.footerDivider}></div>
        <div className={styles.footerSocialIcons}>
            <SocialIconComponent
                iconName={SocialIconName.FACEBOOK}
                url="https://facebook.com"
                title="Facebook"
                className={styles.footerSocialIconLink}
            />
            <SocialIconComponent
                iconName={SocialIconName.LINKEDIN}
                url="https://linkedin.com"
                title="Linkedin"
                className={styles.footerSocialIconLink}
            />
            <SocialIconComponent
                iconName={SocialIconName.INSTAGRAM}
                url="https://instagram.com"
                title="Instagram"
                className={styles.footerSocialIconLink}
            />
        </div>
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
            , by Roman Orlovskyi
        </p>
    </footer>
);
