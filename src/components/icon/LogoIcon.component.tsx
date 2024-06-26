import React from 'react';

import type { Icon } from '@/interfaces/Icon.interface.ts';

export const LogoIconComponent: React.FC<Icon> = ({ className, title }) => (
    <svg width="46" height="46" viewBox="0 0 46 46" fill="none" className={className}>
        {title ? <title>{title}</title> : ''}
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M44.5 23C44.5 34.8741 34.8741 44.5 23 44.5C11.1259 44.5 1.5 34.8741 1.5 23C1.5 11.1259 11.1259 1.5 23 1.5C34.8741 1.5 44.5 11.1259 44.5 23ZM46 23C46 35.7025 35.7025 46 23 46C10.2975 46 0 35.7025 0 23C0 10.2975 10.2975 0 23 0C35.7025 0 46 10.2975 46 23ZM23 10L28.2237 20.1049L34 15.4176V32H12V15.4176L17.7763 20.1049L23 10ZM32.6438 28.6317V18.197L28.8265 21.2827L32.6438 28.6317ZM27.169 20.9529L23 12.8972L18.8311 20.9529L23 24.3448L27.169 20.9529ZM13.331 28.6317L17.1484 21.2827L13.331 18.197V28.6317ZM18.2032 22.1542L13.7329 30.7516H32.2671L27.7968 22.1542L23 26.0407L18.2032 22.1542Z"
            fill="#fff"
        />
    </svg>
);
