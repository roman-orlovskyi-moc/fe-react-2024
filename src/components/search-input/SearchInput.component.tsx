import React, { useState } from 'react';

import { SearchIconComponent } from '../icon/SearchIcon.component.tsx';

import styles from './search-input.module.css';

interface SearchInputProps {
    search?: string;
    onSearchSubmit: (search: string) => void;
}

export const SearchInputComponent: React.FC<SearchInputProps> = ({ search, onSearchSubmit }) => {
    const [searchTitle, setSearchTitle] = useState<string>(search || '');

    const handleSearchSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        onSearchSubmit(searchTitle);
    };

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const target = event.target as HTMLInputElement;

        setSearchTitle(target.value);
    };

    return (
        <form className={styles.searchForm} onSubmit={handleSearchSubmit}>
            <input
                className={styles.searchFormInput}
                type="text"
                placeholder="Search..."
                value={searchTitle}
                onChange={handleSearchChange}
            />
            <button className={styles.searchFormButton} type="submit">
                <SearchIconComponent className={styles.searchFormIcon} title="Search" />
            </button>
        </form>
    );
};
