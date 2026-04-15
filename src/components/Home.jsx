import React from 'react';
import { Link } from 'react-router-dom';
import { musicLink } from './siteData';

function Home() {
  return (
    <section className="page page-home">
      <div className="page_backdrop" />
      <div className="content_frame hero-grid">
        <div className="eyebrow">New era. Same unmistakable voice.</div>
        <h1>Ekke builds cinematic alt-pop with sharp hooks and late-night energy.</h1>
        <p className="lead">
          Stream the latest releases, follow upcoming drops, and book performances
          for festival, club, and intimate live settings.
        </p>
        <div className="cta_row">
          <a className="button button-primary" href={musicLink} target="_blank" rel="noreferrer">
            Listen now
          </a>
          <Link className="button button-secondary" to="/contact">
            Book Ekke
          </Link>
        </div>
        <div className="stats_grid" aria-label="Artist highlights">
          <article className="stat_card">
            <span>Sound</span>
            <strong>Alt-pop, electronic, indie edge</strong>
          </article>
          <article className="stat_card">
            <span>For fans of</span>
            <strong>Big choruses, sleek production, vivid visuals</strong>
          </article>
          <article className="stat_card">
            <span>Best used for</span>
            <strong>Streaming, sync discovery, and live bookings</strong>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Home;
