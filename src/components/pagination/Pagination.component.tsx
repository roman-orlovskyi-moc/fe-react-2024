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
    const currentPage = page > totalPages ? 0 : page;

    const setPreviousPage = (pageNumber: number) => setCurrentPage(pageNumber <= 1 ? 1 : pageNumber - 1);
    const setNextPage = (pageNumber: number) => setCurrentPage(pageNumber >= totalPages ? totalPages : pageNumber + 1);

    return (
        <nav>
            <ul className={styles.paginationList}>
                <li>
                    <button
                        className={`${styles.paginationButton} ${styles.paginationArrowButton}`}
                        onClick={() => setPreviousPage(currentPage)}
                        disabled={currentPage === 1}
                    >
                        <ArrowIconComponent className={styles.paginationArrowIcon} title="Previous page" />
                    </button>
                </li>
                {getPagination(currentPage, totalPages).map((pageNumber, index) => (
                    <li key={index}>
                        {pageNumber === -1 ? (
                            <span className={`${styles.paginationButton} ${styles.paginationEmptyButton}`}>...</span>
                        ) : (
                            <button
                                className={`${styles.paginationButton} ${pageNumber === currentPage ? styles.paginationButtonActive : ''}`}
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
                        onClick={() => setNextPage(currentPage)}
                        disabled={currentPage === totalPages}
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
