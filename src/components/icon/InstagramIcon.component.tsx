import React from 'react';

import type { IconProps } from '@/interfaces/IconProps.interface.tsx';

export const InstagramIconComponent: React.FC<IconProps> = ({ className, title }) => (
    <svg width="35" height="35" viewBox="0 0 35 35" fill="none" className={className}>
        <title>{title}</title>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.5 35C27.165 35 35 27.165 35 17.5C35 7.83502 27.165 0 17.5 0C7.83502 0 0 7.83502 0 17.5C0 27.165 7.83502 35 17.5 35ZM14.0047 17.5C14.0047 15.58 15.5646 14.005 17.4995 14.005C19.4194 14.005 20.9944 15.58 20.9944 17.5C20.9944 19.42 19.4194 20.995 17.4995 20.995C15.5796 20.995 14.0047 19.42 14.0047 17.5ZM27.9241 13.165C27.9991 14.62 27.9991 16.045 27.9991 17.5C27.9991 17.6821 27.9993 17.8639 27.9995 18.0456C28.0012 19.3154 28.0028 20.5752 27.9241 21.835C27.8491 23.515 27.4591 25 26.2291 26.23C25.0142 27.46 23.5143 27.85 21.8343 27.925C20.3794 28 18.9545 28 17.4995 28C16.0446 28 14.6197 28 13.1647 27.925C11.4848 27.85 9.99987 27.46 8.76992 26.23C7.53998 25.015 7.14999 23.515 7.075 21.835C7 20.38 7 18.955 7 17.5C7 16.045 7 14.62 7.075 13.165C7.14999 11.485 7.53998 10 8.76992 8.77C9.98487 7.54 11.4848 7.15 13.1647 7.075C14.6197 7 16.0446 7 17.4995 7C18.9545 7 20.3794 7 21.8343 7.075C23.5143 7.15 24.9992 7.54 26.2291 8.77C27.4591 9.985 27.8491 11.485 27.9241 13.165ZM12.1148 17.5C12.1148 20.485 14.5147 22.885 17.4995 22.885C20.4844 22.885 22.8843 20.485 22.8843 17.5C22.8843 14.515 20.4844 12.115 17.4995 12.115C14.5147 12.115 12.1148 14.515 12.1148 17.5ZM21.8493 11.89C21.8493 12.595 22.4193 13.15 23.1093 13.15L23.1243 13.135C23.2886 13.1388 23.4519 13.1088 23.6041 13.0469C23.7564 12.9849 23.8942 12.8924 24.0092 12.775C24.1266 12.66 24.2192 12.5221 24.2811 12.3699C24.343 12.2176 24.373 12.0543 24.3692 11.89C24.3692 11.185 23.8142 10.63 23.1093 10.63C22.4043 10.63 21.8493 11.185 21.8493 11.89Z"
            fill="#EF4934"
        />
    </svg>
);
