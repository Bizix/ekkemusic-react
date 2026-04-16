import React from 'react';
import { Link } from 'react-router-dom';
import NewsletterForm from './NewsletterForm';
import {
  bookingInfo,
  featuredRelease,
  heroData,
  imageAssignments,
  liveClips,
  pageCopy,
  platformLinks,
  topTracks,
  youtubeVideos,
} from './siteData';

const imageMap = Object.fromEntries(imageAssignments.map((image) => [image.id, image]));

function renderAction(action) {
  const className =
    action.type === 'primary' ? 'button button-primary' : 'button button-secondary';

  if (action.external) {
    return (
      <a
        key={action.label}
        className={className}
        href={action.href}
        target="_blank"
        rel="noreferrer"
      >
        {action.label}
      </a>
    );
  }

  return (
    <Link key={action.label} className={className} to={action.href}>
      {action.label}
    </Link>
  );
}

function Home() {
  const featuredYoutube = youtubeVideos.find((video) => video.featured);
  const supportingYoutube = youtubeVideos.filter((video) => !video.featured).slice(0, 3);
  const homepageClips = liveClips.slice(0, 2);

  return (
    <div className="page page-home">
      <section className="hero_section">
        <div className="content_frame hero_panel">
          <div className="hero_copy">
            <div className="eyebrow">{heroData.eyebrow}</div>
            <h1>{heroData.title}</h1>
            <p className="lead">{heroData.lead}</p>
            <p className="hero_subcopy">{heroData.location}</p>
            <div className="cta_row hero_cta_row">{heroData.ctas.map(renderAction)}</div>
          </div>

          <aside className="hero_visual_card">
            <div className="hero_visual_media">
              <img src={imageMap.hero.src} alt={imageMap.hero.alt} />
            </div>
            <div className="hero_visual_copy">
              <span className="kicker">In focus</span>
              <strong>{featuredRelease.title}</strong>
              <p>{featuredRelease.description}</p>
            </div>
          </aside>
        </div>

      </section>

      <section className="content_frame section_shell feature_section">
        <div className="section_heading">
          <div className="eyebrow">{featuredRelease.eyebrow}</div>
          <h2>{featuredRelease.title}</h2>
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
      </section>

      <section className="content_frame section_shell">
        <div className="section_heading section_heading-centered section_heading-watch">
          <div className="eyebrow">{pageCopy.home.watch.eyebrow}</div>
          <h2>{pageCopy.home.watch.title}</h2>
          <p>{pageCopy.home.watch.description}</p>
        </div>

        <div className="video_grid video_grid-home">
          <a
            className="video_card video_card-lead"
            href={featuredYoutube.href}
            target="_blank"
            rel="noreferrer"
            style={{
              backgroundImage: `url(https://img.youtube.com/vi/${featuredYoutube.videoId}/hqdefault.jpg)`,
            }}
          >
            <span>{featuredYoutube.type}</span>
            <strong>{featuredYoutube.title}</strong>
            <p>{featuredYoutube.note}</p>
          </a>

          {supportingYoutube.map((video) => (
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
      </section>

      <section className="content_frame section_shell">
        <div className="section_heading section_heading-centered section_heading-live">
          <div className="eyebrow">{pageCopy.home.live.eyebrow}</div>
          <h2>{pageCopy.home.live.title}</h2>
          <p>{pageCopy.home.live.description}</p>
        </div>

        <div className="live_clip_grid live_clip_grid-home">
          {homepageClips.map((clip) => (
            <article className="live_clip_card" key={clip.id}>
              <video
                className="clip_video"
                controls
                preload="metadata"
                onLoadedMetadata={(event) => {
                  if (clip.startAt) {
                    event.currentTarget.currentTime = clip.startAt;
                  }
                }}
              >
                <source src={clip.path} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="clip_copy">
                <span>{clip.performanceDate}</span>
                <strong>{clip.title}</strong>
                <p>{clip.note}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="cta_row live_archive_cta">
          <Link className="button button-secondary" to="/shows">
            {pageCopy.home.live.ctaLabel}
          </Link>
        </div>
      </section>

      <section className="content_frame section_shell">
        <div className="section_heading section_heading-centered section_heading-music">
          <div className="eyebrow">{pageCopy.home.music.eyebrow}</div>
          <h2>{pageCopy.home.music.title}</h2>
          <p>{pageCopy.home.music.description}</p>
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

        <div className="pill_row home_platform_row" aria-label="Listening platforms">
          {platformLinks.map((platform) => (
            <a
              key={platform.label}
              className="pill_link"
              href={platform.href}
              target="_blank"
              rel="noreferrer"
            >
              {platform.label}
            </a>
          ))}
        </div>
      </section>

      <section className="content_frame section_shell booking_section" id="newsletter">
        <div className="section_heading section_heading-centered section_heading-booking booking_intro">
          <div className="eyebrow">{pageCopy.home.booking.eyebrow}</div>
          <h2>{pageCopy.home.booking.title}</h2>
          <p>{pageCopy.home.booking.description}</p>
        </div>

        <div className="booking_grid">
          <NewsletterForm />

          <article className="info_card booking_card">
            <div className="eyebrow">Booking</div>
            <h3>Performances, festivals, interviews, and collaborations</h3>
            <p>{bookingInfo.summary}</p>
            <Link className="button button-secondary" to="/contact">
              Open contact details
            </Link>
          </article>
        </div>
      </section>
    </div>
  );
}

export default Home;
