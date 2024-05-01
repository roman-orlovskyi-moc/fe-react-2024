import React from 'react';

import type { IconProps } from '@/interfaces/IconProps.interface.tsx';

export const ColorModeSunIconComponent: React.FC<IconProps> = ({ className, title }) => (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" className={className}>
        <title>{title}</title>
        <path
            d="M11 3V1M11 19V21M5.41421 5.41421L4 4M16.728 16.728L18.1422 18.1422M3 11H1M19 11H21M16.7285 5.41421L18.1427 4M5.4147 16.728L4.00049 18.1422M11 16C8.23858 16 6 13.7614 6 11C6 8.23858 8.23858 6 11 6C13.7614 6 16 8.23858 16 11C16 13.7614 13.7614 16 11 16Z"
            stroke="#fff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);
