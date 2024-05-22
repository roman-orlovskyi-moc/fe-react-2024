import React from 'react';

import { calculateTotalPages, getPagination } from '@/helpers/paginationHelper.ts';

import { ArrowIconComponent } from '../icon/ArrowIcon.component.tsx';

import styles from './pagination.module.css';

interface PaginationProps {
    page: number;
    limit: number;
    total: number;
    setCurrentPage: (page: number) => void;
}

export const PaginationComponent: React.FC<PaginationProps> = ({ page, limit, total, setCurrentPage }) => {
    const totalPages = calculateTotalPages(total, limit);

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
                        <ArrowIconComponent className={styles.paginationArrowIcon} title="Previous page" />
                    </button>
                </li>
                {getPagination(page, totalPages).map((pageNumber, index) => (
                    <li key={index}>
                        {pageNumber === -1 ? (
                            <span>...</span>
                        ) : (
                            <button
                                className={`${styles.paginationButton} ${pageNumber === page ? styles.paginationButtonActive : ''}`}
                                onClick={() => setCurrentPage(pageNumber)}
                            >
                                {pageNumber}
                            </button>
                        )}
                    </li>
                ))}
                <li>
                    <button
                        className={`${styles.paginationButton} ${styles.paginationArrowButton}`}
                        onClick={() => setNextPage(page)}
                        disabled={page === totalPages}
                    >
                        <ArrowIconComponent
                            className={`${styles.paginationArrowIcon} ${styles.paginationNextButtonIcon}`}
                            title="Next page"
                        />
                    </button>
                </li>
            </ul>
        </nav>
    );
};
