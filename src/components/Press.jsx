import React from 'react';
import { Link } from 'react-router-dom';
import { bios, bookingInfo, imageAssignments, pageCopy, pressFacts, pressLinks } from './siteData';

const imageMap = Object.fromEntries(imageAssignments.map((image) => [image.id, image]));

function Press() {
  return (
    <section className="page">
      <div className="content_frame section_shell page_intro page_intro_shell">
        <div className="page_intro_split">
          <div className="page_intro_copy">
            <div className="eyebrow">{pageCopy.press.intro.eyebrow}</div>
            <h1>{pageCopy.press.intro.title}</h1>
            <p className="lead">{pageCopy.press.intro.description}</p>
            <p className="hero_subcopy">
              Built for writers, curators, and bookers who need the project quickly and without
              filler.
            </p>
            <div className="cta_row hero_cta_row press_intro_actions">
              <a className="button button-primary" href={`mailto:${bookingInfo.email}`}>
                Email for press
              </a>
              <a className="button button-secondary" href={pressLinks[0].href} target="_blank" rel="noreferrer">
                Watch HDKN
              </a>
              <Link className="button button-secondary" to="/contact">
                View contact
              </Link>
            </div>
          </div>

          <aside className="hero_visual_card">
            <div className="hero_visual_media">
              <img src={imageMap.liveCloseup.src} alt={imageMap.liveCloseup.alt} />
            </div>
            <div className="hero_visual_copy">
              <span className="kicker">Fast read</span>
              <strong>The core story, the essentials, and the contact point in one place</strong>
              <p>{bios.short}</p>
            </div>
          </aside>
        </div>
      </div>

      <div className="content_frame section_shell">
        <div className="section_heading section_heading-centered section_heading-wide">
          <div className="eyebrow">Visuals</div>
          <h2>The strongest stills to lead with</h2>
          <p>Use these when the image needs to carry as much weight as the copy.</p>
        </div>

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
        <div className="section_heading section_heading-centered">
          <div className="eyebrow">{pageCopy.press.facts.eyebrow}</div>
          <h2>{pageCopy.press.facts.title}</h2>
          <p>Use these for lineup blurbs, media summaries, and fast background on the project.</p>
        </div>

        <div className="card_grid card_grid-tight">
          {pressFacts.map((fact) => (
            <article className="info_card compact" key={fact}>
              <strong>{fact}</strong>
            </article>
          ))}
        </div>
      </div>

      <div className="content_frame section_shell booking_section">
        <div className="section_heading section_heading-centered section_heading-wide">
          <div className="eyebrow">Bios</div>
          <h2>Two bio lengths, same point of view</h2>
          <p>Use the short version for blurbs and lineups, or the fuller read when the page needs more context and detail.</p>
        </div>

        <div className="booking_split">
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
      </div>

      <div className="content_frame section_shell">
        <div className="section_heading section_heading-centered section_heading-wide">
          <div className="eyebrow">Quick access</div>
          <h2>The fastest way to hear it, watch it, and reach out</h2>
          <p>Use these links when someone needs the project in a few clean moves.</p>
        </div>

        <div className="pill_row home_platform_row">
          {pressLinks.map((link) => (
            <a key={link.label} className="pill_link" href={link.href} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          ))}
        </div>

        <div className="cta_row live_archive_cta press_quick_actions">
          <a className="button button-primary" href={`mailto:${bookingInfo.email}`}>
            Email for press
          </a>
          <Link className="button button-secondary" to="/contact">
            View contact details
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Press;
