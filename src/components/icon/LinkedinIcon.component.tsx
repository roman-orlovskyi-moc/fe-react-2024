import React from 'react';

import type { IconProps } from '@/interfaces/IconProps.interface.tsx';

export const LinkedinIconComponent: React.FC<IconProps> = ({ className, title }) => (
    <svg width="35" height="35" viewBox="0 0 35 35" fill="none" className={className}>
        <title>{title}</title>
        <path
            d="M17.5 0C7.83649 0 0 7.83649 0 17.5C0 27.1635 7.83649 35 17.5 35C27.1635 35 35 27.1635 35 17.5C35 7.83649 27.1635 0 17.5 0ZM12.4147 26.4551H8.15266V13.6326H12.4147V26.4551ZM10.2838 11.8817H10.256C8.82584 11.8817 7.90085 10.8972 7.90085 9.66671C7.90085 8.40847 8.85414 7.45117 10.3121 7.45117C11.7701 7.45117 12.6673 8.40847 12.6951 9.66671C12.6951 10.8972 11.7701 11.8817 10.2838 11.8817ZM27.7827 26.4551H23.5212V19.5954C23.5212 17.8714 22.9041 16.6957 21.362 16.6957C20.1847 16.6957 19.4835 17.4888 19.1753 18.2544C19.0627 18.5283 19.0351 18.9112 19.0351 19.2944V26.4551H14.7734C14.7734 26.4551 14.8292 14.8356 14.7734 13.6326H19.0351V15.4482C19.6015 14.5744 20.6149 13.3317 22.8761 13.3317C25.6802 13.3317 27.7827 15.1643 27.7827 19.1027V26.4551Z"
            fill="#EF4934"
        />
    </svg>
);
