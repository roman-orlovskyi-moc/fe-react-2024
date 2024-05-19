import React from 'react';

import type { Icon } from '@/interfaces/Icon.interface.tsx';

export const ArrowIconComponent: React.FC<Icon> = ({ className, title }) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className={className}>
        {title ? <title>{title}</title> : ''}
        <path d="M15 19L8 12L15 5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);
