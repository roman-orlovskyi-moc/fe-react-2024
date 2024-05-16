import React from 'react';

import type { IconProps } from '@/interfaces/IconProps.interface.tsx';

export const SearchIconComponent: React.FC<IconProps> = ({ className, title }) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
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
