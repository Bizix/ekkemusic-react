import React from 'react';
import { bios, bookingInfo, imageAssignments, pageCopy, pressFacts, pressLinks } from './siteData';

const imageMap = Object.fromEntries(imageAssignments.map((image) => [image.id, image]));

function Press() {
  return (
    <section className="page">
      <div className="content_frame section_shell page_intro">
        <div className="section_heading">
          <div className="eyebrow">{pageCopy.press.intro.eyebrow}</div>
          <h1>{pageCopy.press.intro.title}</h1>
          <p className="lead">{pageCopy.press.intro.description}</p>
        </div>
      </div>

      <div className="content_frame section_shell">
        <div className="press_visual_split">
          <div className="feature_media">
            <img src={imageMap.daylight.src} alt={imageMap.daylight.alt} />
          </div>
          <div className="feature_media">
            <img src={imageMap.livePrimary.src} alt={imageMap.livePrimary.alt} />
          </div>
        </div>
      </div>

      <div className="content_frame section_shell">
        <div className="section_heading">
          <div className="eyebrow">{pageCopy.press.facts.eyebrow}</div>
          <h2>{pageCopy.press.facts.title}</h2>
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
            Email for bookings
          </a>
        </article>
      </div>
    </section>
  );
}

export default Press;
