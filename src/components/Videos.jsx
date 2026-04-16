import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { pageCopy, youtubeVideos } from './siteData';

function Videos() {
  const [isHeroVideoPlaying, setIsHeroVideoPlaying] = useState(false);
  const featuredVideo = youtubeVideos.find((video) => video.featured);
  const supportingVideos = youtubeVideos.filter((video) => !video.featured);

  return (
    <section className="page">
      <div className="content_frame section_shell page_intro page_intro_shell">
        <div className="page_intro_split">
          <div className="page_intro_copy">
            <div className="eyebrow">{pageCopy.videos.intro.eyebrow}</div>
            <h1>{pageCopy.videos.intro.title}</h1>
            <p className="lead">{pageCopy.videos.intro.description}</p>
            <p className="hero_subcopy">
              Together, these visuals show Ekke looking just as convincing in a rollout, a
              conversation, or a bars-first setting.
            </p>
            <div className="cta_row hero_cta_row video_intro_actions">
              <a className="button button-primary" href={featuredVideo.href} target="_blank" rel="noreferrer">
                Watch HDKN
              </a>
              <a className="button button-secondary" href="https://www.youtube.com/@itsekke" target="_blank" rel="noreferrer">
                Open YouTube
              </a>
              <Link className="button button-secondary" to="/shows">
                See live proof
              </Link>
            </div>
          </div>

          <aside className="hero_visual_card">
            <div className="hero_visual_media">
              {isHeroVideoPlaying ? (
                <iframe
                  className="hero_visual_frame"
                  src={`https://www.youtube.com/embed/${featuredVideo.videoId}?autoplay=1&rel=0`}
                  title={`${featuredVideo.title} featured video`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <button
                  type="button"
                  className="hero_visual_preview"
                  onClick={() => setIsHeroVideoPlaying(true)}
                  aria-label={`Play ${featuredVideo.title}`}
                >
                  <img
                    src={`https://img.youtube.com/vi/${featuredVideo.videoId}/hqdefault.jpg`}
                    alt={`${featuredVideo.title} video thumbnail`}
                  />
                  <span className="hero_visual_preview_button" aria-hidden="true" />
                </button>
              )}
            </div>
            <div className="hero_visual_copy">
              <span className="kicker">{featuredVideo.type}</span>
              <strong>{featuredVideo.title}</strong>
              <p>{featuredVideo.note}</p>
            </div>
          </aside>
        </div>
      </div>

      <div className="content_frame section_shell">
        <div className="section_heading section_heading-centered section_heading-watch">
          <div className="eyebrow">{pageCopy.videos.support.eyebrow}</div>
          <h2>{pageCopy.videos.support.title}</h2>
          <p>{pageCopy.videos.support.description}</p>
        </div>

        <div className="video_grid">
          {supportingVideos.map((video) => (
            <a
              key={video.href}
              className="video_card"
              href={video.href}
              target="_blank"
              rel="noreferrer"
              style={{
                backgroundImage: `url(https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg)`,
              }}
            >
              <span>{video.type}</span>
              <strong>{video.title}</strong>
              <p>{video.note}</p>
            </a>
          ))}
        </div>

        <div className="cta_row live_archive_cta">
          <Link className="button button-secondary" to="/press">
            Open press info
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Videos;
