import React from 'react';

function About() {
  return (
    <section className="page page-about">
      <div className="page_backdrop" />
      <div className="content_frame content_stack">
        <div className="eyebrow">About</div>
        <h1>It’s pronounced “Ay-Kay.”</h1>
        <p className="lead">
          Ekke is a rapper whose work pulls from multiple sonic worlds without being
          boxed into one lane, grounded by perspective, delivery, and clear artistic identity.
        </p>
        <div className="feature_grid">
          <article className="feature_card">
            <h2>Artistic range</h2>
            <p>
              The music moves across textures and influences while staying centered
              on rap, giving the project room to evolve without losing its core.
            </p>
          </article>
          <article className="feature_card">
            <h2>Creative direction</h2>
            <p>
              Every release is part of a larger world, with visuals, tone, and
              presentation designed to feel intentional instead of interchangeable.
            </p>
          </article>
          <article className="feature_card">
            <h2>Open for connection</h2>
            <p>
              Available for bookings, collaborations, and opportunities that align
              with the voice, vision, and direction of the project.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default About;
