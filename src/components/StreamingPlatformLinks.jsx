import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faApple,
  faItunesNote,
  faSoundcloud,
  faSpotify,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { platformLinks } from './siteData';

const platformIconMap = {
  Spotify: faSpotify,
  'Apple Music': faApple,
  SoundCloud: faSoundcloud,
  YouTube: faYoutube,
  Songwhip: faItunesNote,
};

function StreamingPlatformLinks({ ariaLabel, className = 'pill_row' }) {
  return (
    <div className={className} aria-label={ariaLabel}>
      {platformLinks.map((platform) => (
        <a
          key={platform.label}
          className="pill_link"
          href={platform.href}
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            className="pill_link_icon"
            icon={platformIconMap[platform.label]}
            aria-hidden="true"
          />
          <span>{platform.label}</span>
        </a>
      ))}
    </div>
  );
}

export default StreamingPlatformLinks;
