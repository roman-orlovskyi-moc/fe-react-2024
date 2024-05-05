import React from 'react';

import type { IconProps } from '@/interfaces/IconProps.interface.tsx';

export const PaginationPreviousButtonIconComponent: React.FC<IconProps> = ({ className, title }) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className={className}>
        <title>{title}</title>
        <path d="M15 19L8 12L15 5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);
