import React from 'react';

import type { Icon } from '@/interfaces/Icon.interface.tsx';

export const LightColorModeIconComponent: React.FC<Icon> = ({ className, title }) => (
    <svg width="30" height="34" viewBox="0 0 30 34" fill="none" className={className}>
        {title ? <title>{title}</title> : ''}
        <g clipPath="url(#clip0_2078_2371)">
            <path
                d="M15.0001 10.3333V8.66663M15.0001 23.6666V25.3333M10.3453 12.3451L9.16675 11.1666M19.7734 21.7733L20.952 22.9518M8.33341 17H6.66675M21.6667 17H23.3334M19.7738 12.3451L20.9524 11.1666M10.3457 21.7733L9.16716 22.9518M15.0001 21.1666C12.6989 21.1666 10.8334 19.3011 10.8334 17C10.8334 14.6988 12.6989 12.8333 15.0001 12.8333C17.3013 12.8333 19.1667 14.6988 19.1667 17C19.1667 19.3011 17.3013 21.1666 15.0001 21.1666Z"
                stroke="#fff"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </g>
        <defs>
            <clipPath id="clip0_2078_2371">
                <rect width="20" height="20" fill="white" transform="translate(5 7)" />
            </clipPath>
        </defs>
    </svg>
);
