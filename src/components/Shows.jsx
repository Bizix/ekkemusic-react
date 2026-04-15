import React from 'react';
import { Link } from 'react-router-dom';
import { bookingInfo, showStatus } from './siteData';

function Shows() {
  return (
    <section className="page">
      <div className="content_frame section_shell page_intro">
        <div className="section_heading">
          <div className="eyebrow">{showStatus.eyebrow}</div>
          <h1>{showStatus.title}</h1>
          <p className="lead">{showStatus.description}</p>
        </div>
      </div>

      <div className="content_frame section_shell booking_split">
        <article className="info_card">
          <span>Current status</span>
          <strong>No public calendar is posted yet.</strong>
          <p>
            Instead of leaving the shows page empty, this version keeps the space active
            and useful while dates are being lined up.
          </p>
          <ul className="bullet_list">
            {showStatus.bullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="info_card">
          <span>Booking contact</span>
          <strong>{bookingInfo.email}</strong>
          <p>{bookingInfo.note}</p>
          <div className="cta_row">
            <a className="button button-primary" href={`mailto:${bookingInfo.email}`}>
              Email bookings
            </a>
            <Link className="button button-secondary" to="/press">
              Open press info
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Shows;
