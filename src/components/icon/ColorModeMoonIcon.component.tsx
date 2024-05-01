import React from 'react';

import type { IconProps } from '@/interfaces/IconProps.interface.tsx';

export const ColorModeMoonIconComponent: React.FC<IconProps> = ({ className, title }) => (
    <svg width="30" height="34" viewBox="0 0 30 34" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <title>{title}</title>
        <path
            d="M12.5 12.0001C12.5 16.1422 15.8579 19.5001 20 19.5001C20.7577 19.5001 21.4892 19.388 22.1787 19.179C21.2453 22.2586 18.3844 24.5 15 24.5C10.8579 24.5 7.5 21.1423 7.5 17.0002C7.5 13.6158 9.74173 10.7549 12.8213 9.82153C12.6124 10.511 12.5 11.2424 12.5 12.0001Z"
            stroke="#fff"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);
