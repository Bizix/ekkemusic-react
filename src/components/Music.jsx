import React from 'react';
import { featuredRelease, platformLinks, topTracks } from './siteData';

function Music() {
  return (
    <section className="page">
      <div className="content_frame section_shell page_intro">
        <div className="section_heading">
          <div className="eyebrow">Music</div>
          <h1>Start with the records that open the world up fastest.</h1>
          <p className="lead">
            This page gives streaming-first visitors a cleaner path through the catalog:
            one featured release, a few strong entry points, and direct links to every
            major platform already in rotation.
          </p>
        </div>
      </div>

      <div className="content_frame section_shell feature_section">
        <div className="feature_split">
          <div className="feature_media">
            <img src={featuredRelease.image} alt={featuredRelease.title} />
          </div>

          <div className="feature_body">
            <div className="eyebrow">{featuredRelease.eyebrow}</div>
            <h2>{featuredRelease.title}</h2>
            <p className="lead feature_lead">{featuredRelease.description}</p>
            <ul className="bullet_list">
              {featuredRelease.stats.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="cta_row">
              {featuredRelease.actions.map((action) => (
                <a
                  key={action.label}
                  className="button button-primary"
                  href={action.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {action.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="content_frame section_shell">
        <div className="section_heading">
          <div className="eyebrow">Top tracks</div>
          <h2>Lead with the songs people should hear first.</h2>
          <p>
            The best artist sites don’t just link out to streaming platforms. They help
            visitors understand which records are the clearest way in.
          </p>
        </div>

        <div className="card_grid">
          {topTracks.map((track) => (
            <a
              key={track.title}
              className="info_card track_card"
              href={track.href}
              target="_blank"
              rel="noreferrer"
            >
              <div className="media_thumb">
                <img src={track.image} alt={track.title} />
              </div>
              <span>{track.tag}</span>
              <strong>{track.title}</strong>
              <p>{track.note}</p>
            </a>
          ))}
        </div>
      </div>

      <div className="content_frame section_shell">
        <div className="section_heading">
          <div className="eyebrow">Platforms</div>
          <h2>Listen wherever you already are.</h2>
        </div>

        <div className="pill_row" aria-label="Streaming platforms">
          {platformLinks.map((platform) => (
            <a key={platform.label} className="pill_link" href={platform.href} target="_blank" rel="noreferrer">
              {platform.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Music;
