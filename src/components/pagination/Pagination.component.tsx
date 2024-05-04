import React from 'react';

import { PaginationNextButtonIconComponent } from '@/components/icon/PaginationNextButtonIcon.component.tsx';
import { PaginationPreviousButtonIconComponent } from '@/components/icon/PaginationPreviousButtonIcon.component.tsx';

import styles from './pagination.module.css';

interface PaginationProps {
    page: number;
    limit: number;
    total: number;
    setCurrentPage: (page: number) => void;
}

export const PaginationComponent: React.FC<PaginationProps> = ({ page, limit, total, setCurrentPage }) => {
    const totalPages: number = Math.ceil(total / limit);
    const pages: number[] = Array.from({ length: totalPages }, (_, index) => index + 1);

    const setPreviousPage = (pageNumber: number) => setCurrentPage(pageNumber <= 1 ? 1 : pageNumber - 1);
    const setNextPage = (pageNumber: number) => setCurrentPage(pageNumber >= totalPages ? totalPages : pageNumber + 1);

    return (
        <nav>
            <ul className={styles.paginationList}>
                <li>
                    <button
                        className={`${styles.paginationButton} ${styles.paginationArrowButton}`}
                        onClick={() => setPreviousPage(page)}
                        disabled={page === 1}
                    >
                        <PaginationPreviousButtonIconComponent className={styles.paginationArrowIcon} title="Previous page" />
                    </button>
                </li>
                {pages.map((pageNumber) => (
                    <li key={pageNumber}>
                        <button
                            className={`${styles.paginationButton} ${pageNumber === page ? styles.paginationButtonActive : ''}`}
                            onClick={() => setCurrentPage(pageNumber)}
                        >
                            {pageNumber}
                        </button>
                    </li>
                ))}
                <li>
                    <button
                        className={`${styles.paginationButton} ${styles.paginationArrowButton}`}
                        onClick={() => setNextPage(page)}
                        disabled={page === totalPages}
                    >
                        <PaginationNextButtonIconComponent className={styles.paginationArrowIcon} title="Next page" />
                    </button>
                </li>
            </ul>
        </nav>
    );
};
