import React from 'react';

function Footer() {
  return (
    <div>
      <footer id='footer_container'>
        <div class='footer'>
          <div class='socialMedia social_footer'>
            <a
              href='https://www.facebook.com/itsekke'
              target='_blank'
              id='facebook'
            >
              <i class='fab fa-facebook-f'></i>
            </a>
            <a href='https://twitter.com/itsekke' target='_blank' id='twitter'>
              <i class='fab fa-twitter'></i>
            </a>
            <a
              href='https://www.youtube.com/channel/UC1LupZh5xH3EATWUtHr07RA'
              target='_blank'
              id='youtube'
            >
              <i class='fab fa-youtube'></i>
            </a>
            <a
              href='https://www.instagram.com/itsekke/'
              target='_blank'
              id='instagram'
            >
              <i class='fab fa-instagram'></i>
            </a>
            <a
              href='https://music.apple.com/ca/artist/ekke/1223175655?app=music&ign-mpt=uo%3D4'
              target='_blank'
              id='apple'
            >
              <i class='fab fa-apple'></i>
            </a>
            <a
              href='https://open.spotify.com/artist/5PLFMpk4XHu8rdpKu4dIta'
              target='_blank'
              id='spotify'
            >
              <i class='fab fa-spotify'></i>
            </a>
          </div>
          <div class='contact_me'>
            <p>
              <span />
              Contact:
              <span /> ekke.music.gh@gmail.com
            </p>
          </div>
          <div class='copyright'>
            <p>&copy; Created by Sean Sernasie</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
