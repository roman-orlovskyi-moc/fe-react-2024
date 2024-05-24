import React from 'react';

import type { Icon } from '@/interfaces/Icon.interface.ts';

import { FacebookIconComponent } from '../icon/FacebookIcon.component.tsx';
import { InstagramIconComponent } from '../icon/InstagramIcon.component.tsx';
import { LinkedinIconComponent } from '../icon/LinkedinIcon.component.tsx';

export enum SocialIconName {
    FACEBOOK = 'facebook',
    INSTAGRAM = 'instagram',
    LINKEDIN = 'linkedin',
}

const SocialIcon: Record<SocialIconName, React.FC<Icon>> = {
    [SocialIconName.FACEBOOK]: FacebookIconComponent,
    [SocialIconName.INSTAGRAM]: InstagramIconComponent,
    [SocialIconName.LINKEDIN]: LinkedinIconComponent,
};

function renderIcon(iconName: SocialIconName, title?: string) {
    const ICON = SocialIcon[iconName];
    const ICON_TITLE = title || `${iconName} logo`;

    return <ICON title={ICON_TITLE} />;
}

interface SocialIconProps {
    iconName: SocialIconName;
    url: string;
    title?: string;
    className?: string;
}

export const SocialIconComponent: React.FC<SocialIconProps> = ({ iconName, url, title, className }) => (
    <a className={className} href={url} target="_blank" rel="noreferrer">
        {renderIcon(iconName, title)}
    </a>
);
