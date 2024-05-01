import React from 'react';

import type { IconProps } from '@/interfaces/IconProps.interface.tsx';

export const ColorModeDividerIconComponent: React.FC<IconProps> = ({ className, title }) => (
    <svg width="2" height="20" viewBox="0 0 2 20" fill="none" className={className}>
        <title>{title}</title>
        <path d="M1 0V20" stroke="#656565" />
    </svg>
);
