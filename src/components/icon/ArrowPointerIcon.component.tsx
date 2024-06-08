import React from 'react';

import type { Icon } from '@/interfaces/Icon.interface.ts';

export const ArrowPointerIconComponent: React.FC<Icon> = ({ className, title }) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className={className}>
        {title ? <title>{title}</title> : ''}
        <path d="M17 12H7M7 12L11 16M7 12L11 8" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);
