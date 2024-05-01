import React from 'react';

import type { IconProps } from '@/interfaces/IconProps.interface.tsx';

export const ColorModeSunIconComponent: React.FC<IconProps> = ({ className, title }) => (
    <svg width="30" height="34" viewBox="0 0 30 34" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <title>{title}</title>
        <path
            d="M14.9998 10.3334V8.66675M14.9998 23.6667V25.3334M10.345 12.3453L9.1665 11.1667M19.7732 21.7734L20.9517 22.952M8.33317 17.0001H6.6665M21.6665 17.0001H23.3332M19.7736 12.3453L20.9521 11.1667M10.3454 21.7734L9.16691 22.952M14.9998 21.1667C12.6987 21.1667 10.8332 19.3013 10.8332 17.0001C10.8332 14.6989 12.6987 12.8334 14.9998 12.8334C17.301 12.8334 19.1665 14.6989 19.1665 17.0001C19.1665 19.3013 17.301 21.1667 14.9998 21.1667Z"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);
