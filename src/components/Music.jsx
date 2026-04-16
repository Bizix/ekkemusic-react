import React from 'react';
import StreamingPlatformLinks from './StreamingPlatformLinks';
import { featuredRelease, imageAssignments, pageCopy, topTracks } from './siteData';

const imageMap = Object.fromEntries(imageAssignments.map((image) => [image.id, image]));

function Music() {
  return (
    <section className="page">
      <div className="content_frame section_shell page_intro">
        <div className="section_heading">
          <div className="eyebrow">{pageCopy.music.intro.eyebrow}</div>
          <h1>{pageCopy.music.intro.title}</h1>
          <p className="lead">{pageCopy.music.intro.description}</p>
        </div>
      </div>

      <div className="content_frame section_shell feature_section">
        <div className="feature_split">
          <div className="feature_media">
            <img src={imageMap[featuredRelease.imageId].src} alt={imageMap[featuredRelease.imageId].alt} />
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
        <div className="section_heading">
          <div className="eyebrow">{pageCopy.music.platforms.eyebrow}</div>
          <h2>{pageCopy.music.platforms.title}</h2>
        </div>

        <StreamingPlatformLinks ariaLabel="Streaming platforms" className="pill_row" />
      </div>
    </section>
  );
}

export default Music;
