import React from 'react';
import { videoHighlights } from './siteData';

function Videos() {
  const [leadVideo, ...supportingVideos] = videoHighlights;

  return (
    <section className="page">
      <div className="content_frame section_shell page_intro">
        <div className="section_heading">
          <div className="eyebrow">Videos</div>
          <h1>Visuals, features, and rap-first moments in one place.</h1>
          <p className="lead">
            This page gives the project a proper video archive, with the biggest music
            video, the Lil B collaboration, and the supporting appearances that add
            range and credibility.
          </p>
        </div>
      </div>

      <div className="content_frame section_shell">
        <a
          className="video_feature"
          href={leadVideo.href}
          target="_blank"
          rel="noreferrer"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(7, 7, 7, 0.16), rgba(7, 7, 7, 0.92)), url(https://img.youtube.com/vi/${leadVideo.videoId}/hqdefault.jpg)`,
          }}
        >
          <span>{leadVideo.type}</span>
          <strong>{leadVideo.title}</strong>
          <p>{leadVideo.note}</p>
        </a>
      </div>

      <div className="content_frame section_shell">
        <div className="video_grid">
          {supportingVideos.map((video) => (
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
      </div>
    </section>
  );
}

export default Videos;
