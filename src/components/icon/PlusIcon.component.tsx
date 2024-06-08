import React from 'react';

import type { Icon } from '@/interfaces/Icon.interface.ts';

export const PlusIconComponent: React.FC<Icon> = ({ className, title }) => (
    <svg width="21" height="20" viewBox="0 0 21 20" fill="none" className={className}>
        {title ? <title>{title}</title> : ''}
        <path
            d="M5.5 10H10.5M10.5 10H15.5M10.5 10V15M10.5 10V5"
            stroke="#656565"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);
