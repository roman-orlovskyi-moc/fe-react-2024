import React from 'react';

import type { Icon } from '@/interfaces/Icon.interface.ts';

export const CloseIconComponent: React.FC<Icon> = ({ className, title }) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className={className}>
        {title ? <title>{title}</title> : ''}
        <path
            d="M21 21L12 12M12 12L3 3M12 12L21.0001 3M12 12L3 21.0001"
            stroke="#CCCCCC"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);
