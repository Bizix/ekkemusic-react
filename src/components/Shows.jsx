import React from 'react';
import { Link } from 'react-router-dom';
import { bookingInfo, liveClips, pageCopy, pastShows } from './siteData';

const showMap = Object.fromEntries(pastShows.map((show) => [show.id, show]));

function Shows() {
  const landscapeClips = liveClips.filter((clip) => clip.orientation === 'landscape');
  const portraitClips = liveClips.filter((clip) => clip.orientation === 'portrait');
  const hasShowcaseClipLayout = landscapeClips.length === 3 && portraitClips.length === 1;
  const topRowClips = hasShowcaseClipLayout
    ? [landscapeClips[2], landscapeClips[1]]
    : [];
  const bottomRowClips = hasShowcaseClipLayout
    ? [portraitClips[0], landscapeClips[0]]
    : [...landscapeClips, ...portraitClips];

  const renderClip = (clip) => {
    const show = showMap[clip.showId];

    return (
      <article className={`live_clip_card live_clip_card-${clip.orientation}`} key={clip.id}>
        <video
          className={`clip_video clip_video-${clip.orientation}`}
          controls
          preload="metadata"
        >
          <source src={clip.path} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="clip_copy">
          <span>{clip.performanceDate}</span>
          <strong>{clip.title}</strong>
          <p>{show.title}</p>
          <p>{clip.note}</p>
        </div>
      </article>
    );
  };

  return (
    <section className="page">
      <div className="content_frame section_shell page_intro">
        <div className="section_heading">
          <div className="eyebrow">{pageCopy.shows.intro.eyebrow}</div>
          <h1>{pageCopy.shows.intro.title}</h1>
          <p className="lead">{pageCopy.shows.intro.description}</p>
        </div>
      </div>

      <div className="content_frame section_shell">
        <div className="section_heading">
          <div className="eyebrow">{pageCopy.shows.archive.eyebrow}</div>
          <h2>{pageCopy.shows.archive.title}</h2>
          <p>{pageCopy.shows.archive.description}</p>
        </div>

        <div className="show_grid">
          {pastShows.map((show) => (
            <article className="info_card show_card" key={show.id}>
              <span>{show.date}</span>
              <strong>{show.title}</strong>
              <p>{show.venue}</p>
              <p>{show.city}</p>
              <p>{show.note}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="content_frame section_shell">
        <div className="section_heading">
          <div className="eyebrow">{pageCopy.shows.clips.eyebrow}</div>
          <h2>{pageCopy.shows.clips.title}</h2>
          <p>{pageCopy.shows.clips.description}</p>
        </div>

        {hasShowcaseClipLayout ? (
          <div className="live_clip_showcase">
            <div className="live_clip_grid live_clip_grid-shows">{topRowClips.map(renderClip)}</div>
            <div className="live_clip_grid live_clip_grid-shows_bottom">
              {bottomRowClips.map(renderClip)}
            </div>
          </div>
        ) : (
          <div className="live_clip_grid live_clip_grid-shows">
            {bottomRowClips.map(renderClip)}
          </div>
        )}
      </div>

      <div className="content_frame section_shell booking_split">
        <article className="info_card">
          <span>Booking contact</span>
          <strong>{bookingInfo.email}</strong>
          <p>{bookingInfo.note}</p>
          <div className="cta_row">
            <a className="button button-primary" href={`mailto:${bookingInfo.email}`}>
              Email bookings
            </a>
            <Link className="button button-secondary" to="/press">
              Open press info
            </Link>
          </div>
        </article>

        <article className="info_card">
          <span>What this page is for</span>
          <strong>Proof now, details later.</strong>
          <p>
            The archive is already in place, so once the real show dates and venue names
            are confirmed this page can move from placeholder state to a proper history
            without redesigning the layout.
          </p>
        </article>
      </div>
    </section>
  );
}

export default Shows;
