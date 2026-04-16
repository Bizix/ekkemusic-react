import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faYoutube,
  faInstagram,
  faApple,
  faSpotify,
  faTiktok,
  faSoundcloud,
} from '@fortawesome/free-brands-svg-icons';
import Logo from '../images/Ekke_Logo.png';
import { musicLink, navItems, socialLinks } from './siteData';

const iconMap = {
  instagram: faInstagram,
  tiktok: faTiktok,
  soundcloud: faSoundcloud,
  spotify: faSpotify,
  youtube: faYoutube,
  apple: faApple,
};

function Header() {
  const [isMobileCollapsed, setIsMobileCollapsed] = useState(false);

  useEffect(() => {
    function syncCollapsedState() {
      setIsMobileCollapsed(window.innerWidth <= 720 && window.scrollY > 32);
    }

    syncCollapsedState();
    window.addEventListener('scroll', syncCollapsedState, { passive: true });
    window.addEventListener('resize', syncCollapsedState);

    return () => {
      window.removeEventListener('scroll', syncCollapsedState);
      window.removeEventListener('resize', syncCollapsedState);
    };
  }, []);

  return (
    <header className={`site-header${isMobileCollapsed ? ' site-header--collapsed' : ''}`}>
      <div className="header_container">
        <Link className="brand" to="/" aria-label="Ekke home">
          <span className="brand_mark">
            <img src={Logo} alt="Ekke logo" />
          </span>
          <div className="brand_copy">
            <span>Ekke</span>
          </div>
        </Link>

        <nav className="navbar_container" aria-label="Primary">
          <ul className="links">
            {navItems.map((item) => (
              <li className="link" key={item.label}>
                {item.disabled ? (
                  <span className="nav_disabled" aria-disabled="true">
                    {item.label}
                  </span>
                ) : (
                  <NavLink
                    to={item.to}
                    className={({ isActive }) => (isActive ? 'active' : '')}
                  >
                    {item.label}
                  </NavLink>
                )}
              </li>
            ))}
            <li className="link">
              <a href={musicLink} target="_blank" rel="noreferrer">
                Listen
              </a>
            </li>
          </ul>
        </nav>

        <div className="socialMedia" aria-label="Streaming and social links">
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
      </div>
    </header>
  );
}

export default Header;
