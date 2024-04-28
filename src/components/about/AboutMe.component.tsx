import React from 'react';

import { AboutMeImageComponent } from './AboutMeImage.component.tsx';
import { AboutMeTextComponent } from './AboutMeText.component.tsx';

import styles from './about-me.module.css';

interface AboutMeProps {
    fullName: string;
    nikName: string;
}

export const AboutMeComponent: React.FC<AboutMeProps> = ({ fullName, nikName }) => (
    <div className={styles.aboutMe}>
        <div className={styles.aboutMeColumn}>
            <AboutMeTextComponent fullName={fullName} nikName={nikName} />
        </div>
        <div className={styles.aboutMeColumn}>
            <div className={styles.aboutMeImgContainer}>
                <AboutMeImageComponent />
            </div>
        </div>
    </div>
);
