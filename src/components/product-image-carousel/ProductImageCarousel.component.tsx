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
        <div className={styles.imageCarousel}>
            <button className={styles.imageCarouselPreviousButton} onClick={showPreviousImage}>
                <PreviousButtonIconComponent />
            </button>
            <img className={styles.imageCarouselMainImage} src={images[currentImageIndex]} alt={alt} />
            <button className={styles.imageCarouselNextButton} onClick={showNextImage}>
                <NextButtonIconComponent />
            </button>
            <div className={styles.imageCarouselThumbnails}>
                {images.map((image, index) => (
                    <img
                        className={`${styles.imageCarouselThumbnailImage} ${currentImageIndex === index ? styles.imageCarouselThumbnailActiveImage : ''}`}
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
