import React from 'react';

import type { Icon } from '@/interfaces/Icon.interface.ts';

export const ColorModeDividerIconComponent: React.FC<Icon> = ({ className, title }) => (
    <svg width="20" height="34" viewBox="0 0 20 34" fill="none" className={className}>
        {title ? <title>{title}</title> : ''}
        <path d="M10 7V27" stroke="#656565" />
    </svg>
);
