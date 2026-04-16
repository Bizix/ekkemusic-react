import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faYoutube,
  faInstagram,
  faApple,
  faSpotify,
  faTiktok,
  faSoundcloud,
} from '@fortawesome/free-brands-svg-icons';
import { bookingInfo, imageAssignments, pageCopy, socialLinks } from './siteData';

const imageMap = Object.fromEntries(imageAssignments.map((image) => [image.id, image]));
const iconMap = {
  instagram: faInstagram,
  tiktok: faTiktok,
  soundcloud: faSoundcloud,
  spotify: faSpotify,
  youtube: faYoutube,
  apple: faApple,
};

function Contact() {
  return (
    <section className="page">
      <div className="content_frame section_shell page_intro page_intro_shell">
        <div className="page_intro_split">
          <div className="page_intro_copy">
            <div className="eyebrow">{pageCopy.contact.intro.eyebrow}</div>
            <h1>{pageCopy.contact.intro.title}</h1>
            <p className="lead">{pageCopy.contact.intro.description}</p>
            <p className="hero_subcopy">{bookingInfo.summary}</p>
            <div className="cta_row hero_cta_row contact_intro_actions">
              <a className="button button-primary" href={`mailto:${bookingInfo.email}`}>
                Send an email
              </a>
              <a className="button button-secondary" href={bookingInfo.listHref}>
                Join the list
              </a>
              <Link className="button button-secondary" to="/press">
                Open press info
              </Link>
            </div>
          </div>

          <aside className="hero_visual_card">
            <div className="hero_visual_media">
              <img src={imageMap.liveSecondary.src} alt={imageMap.liveSecondary.alt} />
            </div>
            <div className="hero_visual_copy">
              <span className="kicker">Direct line</span>
              <strong>{bookingInfo.email}</strong>
              <p>{bookingInfo.note}</p>
            </div>
          </aside>
        </div>
      </div>

      <div className="content_frame section_shell booking_section">
        <div className="section_heading section_heading-centered section_heading-booking">
          <div className="eyebrow">Before you send it</div>
          <h2>Make the ask specific so the reply can move quickly</h2>
          <p>Serious opportunities get the fastest responses when the basics are already in the message.</p>
        </div>

        <div className="booking_split">
          <article className="info_card">
            <span>Best for</span>
            <strong>Bookings, features, press, and serious collaborations</strong>
            <p>
              Use this page when the opportunity is real and there is enough detail to move the
              conversation forward quickly.
            </p>
            <ul className="bullet_list">
              <li>Live shows, festivals, and venue bookings</li>
              <li>Features, collaborations, and creative partnerships</li>
              <li>Interviews, press asks, and media requests</li>
            </ul>
          </article>

          <article className="info_card">
            <span>Include</span>
            <strong>Make the reply faster and more useful.</strong>
            <ul className="bullet_list">
              <li>Event or project type</li>
              <li>City, venue, or platform</li>
              <li>Target date or release window</li>
              <li>Budget range and any important context</li>
            </ul>
          </article>
        </div>
      </div>

      <div className="content_frame section_shell">
        <div className="section_heading section_heading-centered section_heading-wide">
          <div className="eyebrow">Elsewhere</div>
          <h2>Follow the project where it already moves</h2>
          <p>Use the platform links below to stay close to releases, visuals, and live updates without leaving the same visual rhythm as the rest of the site.</p>
        </div>

        <div className="pill_row home_platform_row">
          {socialLinks.map((link) => (
            <a
              key={link.id}
              className="pill_link"
              href={link.href}
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                className="pill_link_icon"
                icon={iconMap[link.icon]}
                aria-hidden="true"
              />
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;
