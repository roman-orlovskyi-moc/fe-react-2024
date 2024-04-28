import React from 'react';

import FacebookIconSVG from '@/assets/icons/socials/facebook.svg?react';
import InstagramIconSVG from '@/assets/icons/socials/instagram.svg?react';
import LinkedinIconSVG from '@/assets/icons/socials/linkedin.svg?react';

export enum SocialIconName {
    FACEBOOK = 'facebook',
    INSTAGRAM = 'instagram',
    LINKEDIN = 'linkedin',
}

const SocialIcon: Record<SocialIconName, React.FC<{ title?: string }>> = {
    [SocialIconName.FACEBOOK]: FacebookIconSVG,
    [SocialIconName.INSTAGRAM]: InstagramIconSVG,
    [SocialIconName.LINKEDIN]: LinkedinIconSVG,
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
}

export const SocialIconComponent: React.FC<SocialIconProps> = ({ iconName, url, title }) => (
    <a href={url} target="_blank" rel="noreferrer">
        {renderIcon(iconName, title)}
    </a>
);
