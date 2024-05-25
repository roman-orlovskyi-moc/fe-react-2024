import React from 'react';

import type { Icon } from '@/interfaces/Icon.interface.ts';

export const SearchIconComponent: React.FC<Icon> = ({ className, title }) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className={className}>
        {title ? <title>{title}</title> : ''}
        <path
            d="M15 15L21 21M10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10C17 13.866 13.866 17 10 17Z"
            stroke="#fff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);
