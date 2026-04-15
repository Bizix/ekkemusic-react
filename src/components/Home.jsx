import React from 'react';
import { Link } from 'react-router-dom';
import { musicLink } from './siteData';

function Home() {
  return (
    <section className="page page-home">
        <div className="page_backdrop" />
        <div className="content_frame hero-grid">
        <div className="eyebrow">New era. Same unmistakable voice.</div>
        <h1>Ekke is a rapper blending sharp writing with a wide range of sonic influences.</h1>
        <p className="lead">
          Explore the latest releases, tap into the world around the music, and
          book performances, collaborations, or creative opportunities.
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
            <strong>Rap at the center, shaped by eclectic production and genre crossover</strong>
          </article>
          <article className="stat_card">
            <span>Approach</span>
            <strong>Honest writing, strong identity, and a sound that moves between moods</strong>
          </article>
          <article className="stat_card">
            <span>Available for</span>
            <strong>Releases, live bookings, collaborations, and visual storytelling</strong>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Home;
