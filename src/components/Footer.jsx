import React from 'react';

function Footer() {
  return (
    <footer id="footer_container">
      <div className="footer">
        <div className="footer_prompt">
          <span>Booking and inquiries</span>
          <p>Reach out directly for performances, collaborations, and opportunities.</p>
        </div>
        <a className="footer_email" href="mailto:ekke.music.gh@gmail.com">
          ekke.music.gh@gmail.com
        </a>
        <div className="copyright">
          <p>&copy; {new Date().getFullYear()} Sean Sernasie</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
