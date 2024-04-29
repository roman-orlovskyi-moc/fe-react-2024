import { SocialIconComponent } from '../icon/SocialIcon.component';
import { SocialIconName } from '../icon/SocialIcon.component';

import styles from './footer-social-icons.module.css';

export const FooterSocialIconsComponent = () => (
    <div className={styles.footerSocialIcons}>
        <SocialIconComponent
            iconName={SocialIconName.FACEBOOK}
            url="https://facebook.com"
            title="Facebook logo"
            className={styles.footerSocialIconLink}
        />
        <SocialIconComponent
            iconName={SocialIconName.LINKEDIN}
            url="https://linkedin.com"
            title="Linkedin logo"
            className={styles.footerSocialIconLink}
        />
        <SocialIconComponent
            iconName={SocialIconName.INSTAGRAM}
            url="https://instagram.com"
            title="Instagram logo"
            className={styles.footerSocialIconLink}
        />
    </div>
);
