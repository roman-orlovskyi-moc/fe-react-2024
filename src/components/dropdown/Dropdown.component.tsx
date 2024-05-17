import React, { useState } from 'react';

import { ArrowIconComponent } from '../icon/ArrowIcon.component.tsx';

import styles from './dropdown.module.css';

interface DropdownOptionProps {
    value: string;
    label: string;
}

interface DropdownProps {
    options: DropdownOptionProps[];
    onDropdownChange: (value: string) => void;
    selectedValue?: string;
}

export const DropdownComponent: React.FC<DropdownProps> = ({ options, onDropdownChange, selectedValue }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

    const handleDropdownClick = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleOptionClick = (value: string) => {
        onDropdownChange(value);
        setIsDropdownOpen(false);
    };

    const selectedOption: DropdownOptionProps = options.find((option) => option.value === selectedValue) || options[0];

    return (
        <div className={styles.dropdown}>
            {!isDropdownOpen && (
                <div className={styles.dropdownItemContainer} onClick={handleDropdownClick}>
                    <div className={styles.dropdownItem}>
                        {selectedOption.label}
                        <button className={styles.dropdownOpenButton}>
                            <ArrowIconComponent className={styles.dropdownOpenButtonIcon} />
                        </button>
                    </div>
                </div>
            )}
            {isDropdownOpen && (
                <div className={styles.dropdownContent}>
                    <button className={styles.dropdownOpenButton} onClick={handleDropdownClick}>
                        <ArrowIconComponent className={styles.dropdownOpenButtonIcon} />
                    </button>
                    <ul className={`${styles.dropdownItemContainer} ${styles.dropdownItemsList}`}>
                        {options.map((option, index) => (
                            <li key={index}>
                                <button
                                    className={`${styles.dropdownItem} ${styles.dropdownItemButton} ${selectedOption.value === option.value ? styles.dropdownItemButtonActive : ''}`}
                                    onClick={() => handleOptionClick(option.value)}
                                >
                                    {option.label}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};