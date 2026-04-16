import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  bookingInfo,
  imageAssignments,
  liveClips,
  pageCopy,
  pastShows,
  upcomingShows,
} from './siteData';

const showMap = Object.fromEntries(pastShows.map((show) => [show.id, show]));
const imageMap = Object.fromEntries(imageAssignments.map((image) => [image.id, image]));

function Shows() {
  const [showArchiveView, setShowArchiveView] = useState('upcoming');
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
          <p>{show.title}</p>
          <p>{clip.note}</p>
        </div>
      </article>
    );
  };

  const visibleShows = showArchiveView === 'previous' ? pastShows : upcomingShows;

  const renderShow = (show) => (
    <article className="info_card show_card" key={show.id}>
      <span>{show.date}</span>
      <strong>{show.title}</strong>
      <p>{show.venue}</p>
      <p>{show.city}</p>
      <p>{show.note}</p>
    </article>
  );

  return (
    <section className="page">
      <div className="content_frame section_shell page_intro page_intro_shell">
        <div className="page_intro_split">
          <div className="page_intro_copy">
            <div className="eyebrow">{pageCopy.shows.intro.eyebrow}</div>
            <h1>{pageCopy.shows.intro.title}</h1>
            <p className="lead">{pageCopy.shows.intro.description}</p>
            <p className="hero_subcopy">
              Use the archive for context, the clips for energy, and the booking links when the
              opportunity is real.
            </p>
            <div className="cta_row hero_cta_row shows_intro_actions">
              <a className="button button-primary" href={`mailto:${bookingInfo.email}`}>
                Email bookings
              </a>
              <Link className="button button-secondary" to="/press">
                Open press info
              </Link>
              <Link className="button button-secondary" to="/contact">
                Contact directly
              </Link>
            </div>
          </div>

          <aside className="hero_visual_card">
            <div className="hero_visual_media">
              <img src={imageMap.livePrimary.src} alt={imageMap.livePrimary.alt} />
            </div>
            <div className="hero_visual_copy">
              <span className="kicker">Stage proof</span>
              <strong>{liveClips.length} live clips ready to open the page up fast</strong>
              <p>{pastShows.length} archive entries are already in place and ready for confirmed dates.</p>
            </div>
          </aside>
        </div>
      </div>

      <div className="content_frame section_shell">
        <div className="section_heading section_heading-centered">
          <div className="eyebrow">Schedule</div>
        </div>

        <div className="show_archive_toggle" role="tablist" aria-label="Show archive views">
          <button
            type="button"
            role="tab"
            aria-selected={showArchiveView === 'previous'}
            className={`show_archive_toggle_button${showArchiveView === 'previous' ? ' is-active' : ''}`}
            onClick={() => setShowArchiveView('previous')}
          >
            Previous Shows
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={showArchiveView === 'upcoming'}
            className={`show_archive_toggle_button${showArchiveView === 'upcoming' ? ' is-active' : ''}`}
            onClick={() => setShowArchiveView('upcoming')}
          >
            Upcoming
          </button>
        </div>

        {visibleShows.length > 0 ? (
          <div className="show_grid">
            {visibleShows.map(renderShow)}
          </div>
        ) : (
          <article className="info_card show_archive_empty">
            <span>TBA</span>
            <strong>Upcoming shows are still to be announced. Check back soon.</strong>
            <p>New dates will appear here as soon as they are confirmed.</p>
          </article>
        )}
      </div>

      <div className="content_frame section_shell">
        <div className="section_heading section_heading-centered section_heading-live">
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

      <div className="content_frame section_shell booking_section">
        <div className="section_heading section_heading-centered section_heading-booking">
          <div className="eyebrow">Bookings</div>
          <h2>Use the live proof, then reach out with the real details</h2>
          <p>{bookingInfo.summary}</p>
        </div>

        <div className="booking_split">
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
            <span>What to include</span>
            <strong>Make the first message specific and easy to act on.</strong>
            <ul className="bullet_list">
              <li>Event type, venue, festival, or platform</li>
              <li>City and proposed date or date range</li>
              <li>Budget range, timeline, and important context</li>
              <li>Any supporting links or notes that help frame the ask</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Shows;
