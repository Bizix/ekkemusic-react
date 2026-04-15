import React from 'react';
import { Link } from 'react-router-dom';
import {
  bookingInfo,
  featuredRelease,
  heroData,
  platformLinks,
  topTracks,
  videoHighlights,
} from './siteData';

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
  const leadVideo = videoHighlights[0];

  return (
    <div className="page page-home">
      <section className="hero_section">
        <div className="content_frame hero_panel">
          <div className="hero_copy">
            <div className="eyebrow">{heroData.eyebrow}</div>
            <h1>{heroData.title}</h1>
            <p className="lead">{heroData.lead}</p>
            <p className="hero_subcopy">{heroData.location}</p>
            <div className="cta_row">{heroData.ctas.map(renderAction)}</div>
          </div>

          <aside className="hero_visual_card">
            <div className="hero_visual_media">
              <img src="/images/IMG_5039.jpg" alt="Ekke portrait" />
            </div>
            <div className="hero_visual_copy">
              <span className="kicker">Current focus</span>
              <strong>{featuredRelease.title}</strong>
              <p>{featuredRelease.description}</p>
            </div>
          </aside>
        </div>

        <div className="content_frame highlight_strip" aria-label="Artist highlights">
          {heroData.highlights.map((item) => (
            <article className="info_card compact" key={item.label}>
              <span>{item.label}</span>
              <strong>{item.value}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="content_frame section_shell feature_section">
        <div className="section_heading">
          <div className="eyebrow">{featuredRelease.eyebrow}</div>
          <h2>{featuredRelease.title}</h2>
          <p>
            The strongest artist sites make the homepage feel alive. This section does
            that job by giving visitors an immediate record, visual, and set of next
            steps instead of generic brand language.
          </p>
        </div>

        <div className="feature_split">
          <div className="feature_media">
            <img src={featuredRelease.image} alt={featuredRelease.title} />
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
        <div className="section_heading">
          <div className="eyebrow">Watch</div>
          <h2>Video moments that prove the point fast.</h2>
          <p>
            New visitors should not have to dig to find the visuals, cypher footage,
            or collaboration moments that make the project feel real.
          </p>
        </div>

        <div className="video_grid video_grid-home">
          <a
            className="video_card video_card-lead"
            href={leadVideo.href}
            target="_blank"
            rel="noreferrer"
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(7, 7, 7, 0.16), rgba(7, 7, 7, 0.88)), url(https://img.youtube.com/vi/${leadVideo.videoId}/hqdefault.jpg)`,
            }}
          >
            <span>{leadVideo.type}</span>
            <strong>{leadVideo.title}</strong>
            <p>{leadVideo.note}</p>
          </a>

          {videoHighlights.slice(1, 5).map((video) => (
            <a
              key={video.href}
              className="video_card"
              href={video.href}
              target="_blank"
              rel="noreferrer"
              style={{
                backgroundImage: `linear-gradient(180deg, rgba(7, 7, 7, 0.14), rgba(7, 7, 7, 0.9)), url(https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg)`,
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
        <div className="section_heading">
          <div className="eyebrow">Music</div>
          <h2>Top entry points into the catalog.</h2>
          <p>
            The goal here is simple: surface the records people should hear first, then
            make every major platform one tap away.
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

        <div className="pill_row" aria-label="Listening platforms">
          {platformLinks.map((platform) => (
            <a key={platform.label} className="pill_link" href={platform.href} target="_blank" rel="noreferrer">
              {platform.label}
            </a>
          ))}
        </div>
      </section>

      <section className="content_frame section_shell booking_split">
        <div className="section_heading booking_intro">
          <div className="eyebrow">Bookings + updates</div>
          <h2>Built for listeners, bookers, and collaborators.</h2>
          <p>
            Strong artist sites always give people a next step. This block turns casual
            interest into a concrete contact point instead of making visitors hunt for
            an email in the footer.
          </p>
        </div>

        <div className="booking_grid">
          <article className="info_card">
            <span>Booking</span>
            <strong>Performances, festivals, interviews, and collaborations</strong>
            <p>{bookingInfo.note}</p>
            <Link className="button button-secondary" to="/contact">
              Open contact details
            </Link>
          </article>

          <article className="info_card">
            <span>Mailing list</span>
            <strong>Get release drops and show announcements first.</strong>
            <p>
              There is no generic signup widget here yet, so the site uses a direct
              email opt-in path until a list platform is connected.
            </p>
            <a className="button button-primary" href={bookingInfo.listHref}>
              Join the list
            </a>
          </article>
        </div>
      </section>
    </div>
  );
}

export default Home;
