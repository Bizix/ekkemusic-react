import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faTwitter,
  faYoutube,
  faInstagram,
  faApple,
  faSpotify,
  faTiktok,
  faSoundcloud,
} from '@fortawesome/free-brands-svg-icons';
import {} from '@fortawesome/free-solid-svg-icons';

import Logo from '../images/Ekke_Logo.png';

function Header() {
  return (
    <div>
      <header id='header'>
        <div className='header_container'>
          <div className='socialMedia'>
            {/* <a
                href='https://www.facebook.com/itsekke'
                target='_blank'
                id='facebook'
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </a> */}
            {/* <a
                href='https://twitter.com/itsekke'
                target='_blank'
                id='twitter'
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a> */}
            <a
              href='https://www.instagram.com/itsekke/'
              target='_blank'
              id='instagram'
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href='https://www.tiktok.com/@itsekke?lang=en'
              target='_blank'
              id='tiktok'
            >
              <FontAwesomeIcon icon={faTiktok} />
            </a>
            <a
              href='https://soundcloud.com/itsekke'
              target='_blank'
              id='soundcloud'
            >
              <FontAwesomeIcon icon={faSoundcloud} />
            </a>
            <a
              href='https://open.spotify.com/artist/5PLFMpk4XHu8rdpKu4dIta'
              target='_blank'
              id='spotify'
            >
              <FontAwesomeIcon icon={faSpotify} />
            </a>
            <a
              href='https://www.youtube.com/channel/UC1LupZh5xH3EATWUtHr07RA'
              target='_blank'
              id='youtube'
            >
              <FontAwesomeIcon icon={faYoutube} />
            </a>

            <a
              href='https://music.apple.com/ca/artist/ekke/1223175655?app=music&ign-mpt=uo%3D4'
              target='_blank'
              id='apple'
            >
              <FontAwesomeIcon icon={faApple} />
            </a>
          </div>
          <div className='logo'>
            <img src={Logo} alt='Ekke logo' />
          </div>
          <nav className='navbar_container'>
            <ul className='links'>
              <li className='link'>
                <Link to='/'>Home</Link>
              </li>
              <li className='link'>
                <a
                  href='https://songwhip.com/artist/ekke?fbclid=IwAR2e3HppUviP0UTOST9uu17WN530BrsC7pzWhqbJ1mZ7lP-edjtQZxpPIuQ'
                  target='_blank'
                >
                  Music
                </a>
              </li>
              <li className='link'>
                <Link to='/about'>About</Link>
              </li>
              <li className='link'>
                <Link to='/contact'>Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Header;
