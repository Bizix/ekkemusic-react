import React from 'react';
import { bios, bookingInfo, pressFacts, pressLinks } from './siteData';

function Press() {
  return (
    <section className="page">
      <div className="content_frame section_shell page_intro">
        <div className="section_heading">
          <div className="eyebrow">Press</div>
          <h1>Press-ready context for curators, bookers, and collaborators.</h1>
          <p className="lead">
            This page gives the site an EPK-style center of gravity even before a full
            downloadable press kit is added.
          </p>
        </div>
      </div>

      <div className="content_frame section_shell">
        <div className="section_heading">
          <div className="eyebrow">Quick facts</div>
          <h2>The essentials someone can scan in under a minute.</h2>
        </div>

        <div className="card_grid card_grid-tight">
          {pressFacts.map((fact) => (
            <article className="info_card compact" key={fact}>
              <span>Press note</span>
              <strong>{fact}</strong>
            </article>
          ))}
        </div>
      </div>

      <div className="content_frame section_shell booking_split">
        <article className="info_card">
          <span>Short bio</span>
          <strong>For event pages, blurbs, and lineup copy</strong>
          <p>{bios.short}</p>
        </article>

        <article className="info_card">
          <span>Medium bio</span>
          <strong>For press decks, media outreach, and context-heavy pages</strong>
          <p>{bios.medium}</p>
        </article>
      </div>

      <div className="content_frame section_shell booking_split">
        <article className="info_card">
          <span>Key links</span>
          <strong>Use these to hear and see the project quickly.</strong>
          <div className="stacked_links">
            {pressLinks.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            ))}
          </div>
        </article>

        <article className="info_card">
          <span>Contact</span>
          <strong>{bookingInfo.email}</strong>
          <p>{bookingInfo.note}</p>
          <a className="button button-primary" href={`mailto:${bookingInfo.email}`}>
            Reach out directly
          </a>
        </article>
      </div>
    </section>
  );
}

export default Press;
