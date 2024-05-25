import React, { useState } from 'react';

import { ArrowIconComponent } from '../icon/ArrowIcon.component.tsx';

import styles from './dropdown.module.css';

interface DropdownOption {
    value: string;
    label: string;
}

interface DropdownProps {
    options: DropdownOption[];
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

    const selectedOption: DropdownOption = options.find((option) => option.value === selectedValue) || options[0];
    const isFirstOptionSelected: boolean = selectedOption.value === options[0].value;

    return (
        <div className={styles.dropdown}>
            {!isDropdownOpen && (
                <div className={styles.dropdownItemContainer} onClick={handleDropdownClick}>
                    <button className={styles.dropdownOpenButton}>
                        <ArrowIconComponent className={styles.dropdownOpenButtonIcon} />
                    </button>
                    <button className={styles.dropdownItemButton}>{selectedOption.label}</button>
                </div>
            )}
            {isDropdownOpen && (
                <div className={styles.dropdownContent}>
                    <ul className={`${styles.dropdownItemContainer} ${styles.dropdownItemsList}`}>
                        {options.map((option, index) => (
                            <li key={index} className={styles.dropdownItem}>
                                {index === 0 ? (
                                    <button className={styles.dropdownOpenButton} onClick={handleDropdownClick}>
                                        <ArrowIconComponent
                                            className={`${styles.dropdownOpenButtonIcon} ${isFirstOptionSelected ? styles.dropdownOpenButtonIconActive : ''}`}
                                        />
                                    </button>
                                ) : (
                                    ''
                                )}
                                <button
                                    className={`${styles.dropdownItemButton} ${selectedOption.value === option.value ? styles.dropdownItemButtonActive : ''}`}
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
