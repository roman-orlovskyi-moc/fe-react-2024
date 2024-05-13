import React, { useState } from 'react';

import { NextButtonIconComponent } from '../icon/NextButtonIcon.component.tsx';
import { PreviousButtonIconComponent } from '../icon/PreviousButtonIcon.component.tsx';

import styles from './product-image-carousel.module.css';

interface ImageCarouselProps {
    images: string[];
    alt: string;
}

export const ProductImageCarouselComponent: React.FC<ImageCarouselProps> = ({ images, alt }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

    const showPreviousImage = () => {
        setCurrentImageIndex((previousIndex) => (previousIndex > 0 ? previousIndex - 1 : images.length - 1));
    };

    const showNextImage = () => {
        setCurrentImageIndex((previousIndex) => (previousIndex < images.length - 1 ? previousIndex + 1 : 0));
    };

    return (
        <div className={styles.productImageCarousel}>
            <button
                className={`${styles.productImageCarouselMoveButton} ${styles.productImageCarouselPreviousButton}`}
                onClick={showPreviousImage}
            >
                <PreviousButtonIconComponent className={styles.productImageCarouselMoveButtonIcon} />
            </button>
            <img className={styles.productImageCarouselMainImage} src={images[currentImageIndex]} alt={alt} />
            <button className={`${styles.productImageCarouselMoveButton} ${styles.productImageCarouselNextButton}`} onClick={showNextImage}>
                <NextButtonIconComponent className={styles.productImageCarouselMoveButtonIcon} />
            </button>
            <div className={styles.productImageCarouselThumbnails}>
                {images.map((image, index) => (
                    <img
                        className={styles.productImageCarouselThumbnailImage}
                        key={index}
                        src={image}
                        alt={`${alt} thumbnail`}
                        onClick={() => setCurrentImageIndex(index)}
                    />
                ))}
            </div>
        </div>
    );
};
