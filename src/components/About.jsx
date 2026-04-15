import React from 'react';

function About() {
  return (
    <section className="page page-about">
      <div className="page_backdrop" />
      <div className="content_frame content_stack">
        <div className="eyebrow">About</div>
        <h1>It’s pronounced “Ay-Kay.”</h1>
        <p className="lead">
          Ekke pairs reflective songwriting with polished production, creating a set
          that feels intimate up close and expansive at full volume.
        </p>
        <div className="feature_grid">
          <article className="feature_card">
            <h2>Live presence</h2>
            <p>
              Built for rooms that need atmosphere first and momentum second, with a
              set designed to scale from small venues to festival stages.
            </p>
          </article>
          <article className="feature_card">
            <h2>Creative direction</h2>
            <p>
              Distinct visual branding, moody performance imagery, and a warm gold
              palette give the project a recognizable identity.
            </p>
          </article>
          <article className="feature_card">
            <h2>Collaboration ready</h2>
            <p>
              Open to bookings, features, and music placements that fit the sound
              and story of the project.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default About;
