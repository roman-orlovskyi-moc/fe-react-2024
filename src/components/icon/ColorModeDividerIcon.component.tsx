import React from 'react';

import type { IconProps } from '@/interfaces/IconProps.interface.tsx';

export const ColorModeDividerIconComponent: React.FC<IconProps> = ({ className, title }) => (
    <svg width="20" height="34" viewBox="0 0 20 34" fill="none" className={className}>
        {title ? <title>{title}</title> : ''}
        <path d="M10 7V27" stroke="#656565" />
    </svg>
);
