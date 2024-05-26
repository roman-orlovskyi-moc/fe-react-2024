import React from 'react';

import type { Icon } from '@/interfaces/Icon.interface.ts';

export const MobileMenuIconComponent: React.FC<Icon> = ({ className, title }) => (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" className={className}>
        {title ? <title>{title}</title> : ''}
        <path d="M3.75 18.75H26.25M3.75 11.25H26.25" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);
