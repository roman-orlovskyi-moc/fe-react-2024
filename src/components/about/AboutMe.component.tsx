import React from 'react';

import image from '@/assets/img/aboutme.png';

import styles from './about-me.module.css';

interface AboutMeProps {
    fullName: string;
    nikName: string;
}

export const AboutMeComponent: React.FC<AboutMeProps> = ({ fullName, nikName }) => (
    <div className={styles.aboutMe}>
        <h1 className={styles.aboutMeHeadline}>About me</h1>
        <div className={styles.aboutMeTextContainer}>
            <p className={styles.aboutMeParagraph}>
                Hi! My name is {fullName} and I&apos;m a Junior Frontend Developer. I am already familiar with main Web Technologies like
                React, HTML, CSS, JavaScript and Git version control system.
            </p>
            <p className={styles.aboutMeParagraph}>
                This page was developed during the course{' '}
                <a
                    className={styles.aboutMeLink}
                    href="https://www.mastersacademy.education/frontend-for-beginners-it"
                    target="_blank"
                    rel="noreferrer"
                >
                    &apos;Intro to React&apos;
                </a>{' '}
                from Masters Academy in 2024.
            </p>
            <p className={styles.aboutMeParagraph}>
                This is a social project from MOCG company where I got an opportunity to work with Frontend mentors and to create my own
                small project for the portfolio.
            </p>
            <p className={styles.aboutMeParagraph}>
                You can check out my{' '}
                <a className={styles.aboutMeLink} href={`https://github.com/${nikName}`} target="_blank" rel="noreferrer">
                    GitHub
                </a>
                .
            </p>
        </div>
        <img className={styles.aboutMeImage} src={image} alt="About me" />
    </div>
);
