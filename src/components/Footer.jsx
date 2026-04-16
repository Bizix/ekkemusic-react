import React from 'react';
import { Link } from 'react-router-dom';
import { footerLinks, newsletterConfig } from './siteData';

function Footer() {
  return (
    <footer id="footer_container">
      <div className="footer">
        <div className="footer_prompt">
          <span>Ekke</span>
        </div>

        <nav className="footer_nav" aria-label="Footer">
          {footerLinks.map((item) => (
            item.disabled ? (
              <span key={item.label} className="footer_nav_disabled" aria-disabled="true">
                {item.label}
              </span>
            ) : (
              <Link key={item.to} to={item.to}>
                {item.label}
              </Link>
            )
          ))}
        </nav>

        <div className="footer_actions">
          <span
            className={`footer_list_link${!newsletterConfig.actionUrl ? ' footer_list_link-disabled' : ''}`}
            aria-disabled={!newsletterConfig.actionUrl}
          >
            Get updates
          </span>
        </div>

        <div className="footer_mobile_meta">
          <p>&copy; {new Date().getFullYear()} HTOP2</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
