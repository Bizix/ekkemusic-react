import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faSpotify,
  faYoutube,
  faApple,
  faTiktok,
  faSoundcloud,
} from '@fortawesome/free-brands-svg-icons';
import { socialLinks } from './siteData';

const iconMap = {
  instagram: faInstagram,
  tiktok: faTiktok,
  soundcloud: faSoundcloud,
  spotify: faSpotify,
  youtube: faYoutube,
  apple: faApple,
};

function Footer() {
  return (
    <footer id="footer_container">
      <div className="footer">
        <div className="footer_copy">
          <strong>Ekke</strong>
          <p>Alt-pop artist and songwriter</p>
        </div>
        <a className="footer_email" href="mailto:ekke.music.gh@gmail.com">
          ekke.music.gh@gmail.com
        </a>
        <div className="socialMedia social_footer" aria-label="Footer social links">
          {socialLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              aria-label={link.label}
            >
              <FontAwesomeIcon icon={iconMap[link.icon]} />
            </a>
          ))}
        </div>
        <div className="copyright">
          <p>&copy; {new Date().getFullYear()} Sean Sernasie</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
