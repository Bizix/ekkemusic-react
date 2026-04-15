import React from 'react';
import { bookingInfo, pageCopy, socialLinks } from './siteData';

function Contact() {
  return (
    <section className="page">
      <div className="content_frame section_shell page_intro">
        <div className="section_heading">
          <div className="eyebrow">{pageCopy.contact.intro.eyebrow}</div>
          <h1>{pageCopy.contact.intro.title}</h1>
          <p className="lead">{pageCopy.contact.intro.description}</p>
        </div>
      </div>

      <div className="content_frame section_shell booking_split">
        <article className="info_card">
          <span>Email</span>
          <strong>{bookingInfo.email}</strong>
          <p>{bookingInfo.note}</p>
          <div className="cta_row">
            <a className="button button-primary" href={`mailto:${bookingInfo.email}`}>
              Send an email
            </a>
          </div>
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

      <div className="content_frame section_shell">
        <div className="section_heading">
          <div className="eyebrow">Elsewhere</div>
          <h2>Follow the project where it already moves.</h2>
        </div>

        <div className="pill_row">
          {socialLinks.map((link) => (
            <a
              key={link.id}
              className="pill_link"
              href={link.href}
              target="_blank"
              rel="noreferrer"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;
