import React from 'react';
import { Link } from 'react-router-dom';
import { bookingInfo, footerLinks } from './siteData';

function Footer() {
  return (
    <footer id="footer_container">
      <div className="footer">
        <div className="footer_prompt">
          <span>Ekke</span>
        </div>

        <nav className="footer_nav" aria-label="Footer">
          {footerLinks.map((item) => (
            <Link key={item.to} to={item.to}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="footer_actions">
          <a className="footer_email" href={`mailto:${bookingInfo.email}`}>
            {bookingInfo.email}
          </a>
          <a className="footer_list_link" href={bookingInfo.listHref}>
            Join the list
          </a>
        </div>
      </div>

      <div className="copyright">
        <p>&copy; {new Date().getFullYear()} Ekke Music</p>
      </div>
    </footer>
  );
}

export default Footer;
