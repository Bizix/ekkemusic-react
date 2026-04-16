import React from 'react';
import { Link } from 'react-router-dom';
import StreamingPlatformLinks from './StreamingPlatformLinks';
import { featuredRelease, imageAssignments, musicLink, pageCopy, topTracks } from './siteData';

const imageMap = Object.fromEntries(imageAssignments.map((image) => [image.id, image]));

function Music() {
  return (
    <section className="page">
      <div className="content_frame section_shell page_intro page_intro_shell">
        <div className="page_intro_split">
          <div className="page_intro_copy">
            <div className="eyebrow">{pageCopy.music.intro.eyebrow}</div>
            <h1>{pageCopy.music.intro.title}</h1>
            <p className="lead">{pageCopy.music.intro.description}</p>
            <p className="hero_subcopy">
              Start with the featured release, move through the top four records, then stay in
              the catalog through the platform links below.
            </p>
            <div className="cta_row hero_cta_row music_intro_actions">
              <a className="button button-primary" href={musicLink} target="_blank" rel="noreferrer">
                Play the catalog
              </a>
              <a
                className="button button-secondary"
                href={featuredRelease.actions[1].href}
                target="_blank"
                rel="noreferrer"
              >
                Watch HDKN
              </a>
              <Link className="button button-secondary" to="/videos">
                Open videos
              </Link>
            </div>
          </div>

          <aside className="hero_visual_card">
            <div className="hero_visual_media">
              <img src={imageMap.heroSupport.src} alt={imageMap.heroSupport.alt} />
            </div>
            <div className="hero_visual_copy">
              <span className="kicker">In rotation</span>
              <strong>{featuredRelease.title}</strong>
              <p>{featuredRelease.description}</p>
            </div>
          </aside>
        </div>
      </div>

      <div className="content_frame section_shell feature_section">
        <div className="section_heading section_heading-centered">
          <div className="eyebrow">{featuredRelease.eyebrow}</div>
          <h2>{featuredRelease.title}</h2>
          <p>
            Start here for the record that sets the pressure, the collaboration lane, and the
            visual tone fastest.
          </p>
        </div>

        <div className="feature_split feature_split-featured">
          <div className="feature_media">
            <img src={imageMap[featuredRelease.imageId].src} alt={imageMap[featuredRelease.imageId].alt} />
          </div>

          <div className="feature_body">
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
        <div className="section_heading section_heading-centered section_heading-music">
          <div className="eyebrow">{pageCopy.music.tracks.eyebrow}</div>
          <h2>{pageCopy.music.tracks.title}</h2>
          <p>{pageCopy.music.tracks.description}</p>
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
                <img src={imageMap[track.imageId].src} alt={imageMap[track.imageId].alt} />
              </div>
              <span>{track.tag}</span>
              <strong>{track.title}</strong>
              <p>{track.note}</p>
            </a>
          ))}
        </div>
      </div>

      <div className="content_frame section_shell platforms_section">
        <div className="section_heading section_heading-centered">
          <div className="eyebrow">{pageCopy.music.platforms.eyebrow}</div>
          <h2>{pageCopy.music.platforms.title}</h2>
          <p>Stay in the catalog without changing your listening habits. Every major platform stays one tap away.</p>
        </div>

        <StreamingPlatformLinks ariaLabel="Streaming platforms" className="pill_row home_platform_row" />
      </div>
    </section>
  );
}

export default Music;
