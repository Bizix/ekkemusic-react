import React from 'react';
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
import { musicLink, socialLinks } from './siteData';

const iconMap = {
  instagram: faInstagram,
  tiktok: faTiktok,
  soundcloud: faSoundcloud,
  spotify: faSpotify,
  youtube: faYoutube,
  apple: faApple,
};

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

function Header() {
  return (
    <header className="site-header">
      <div className="header_container">
        <Link className="brand" to="/" aria-label="Ekke home">
          <img src={Logo} alt="Ekke logo" />
          <div className="brand_copy">
            <span>Ekke</span>
            <p>Alt-pop artist and songwriter</p>
          </div>
        </Link>

        <nav className="navbar_container" aria-label="Primary">
          <ul className="links">
            {navItems.map((item) => (
              <li className="link" key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) => (isActive ? 'active' : '')}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
            <li className="link">
              <a href={musicLink} target="_blank" rel="noreferrer">
                Music
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
