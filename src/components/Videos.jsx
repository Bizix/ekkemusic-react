import React from 'react';
import { pageCopy, youtubeVideos } from './siteData';

function Videos() {
  const featuredVideo = youtubeVideos.find((video) => video.featured);
  const supportingVideos = youtubeVideos.filter((video) => !video.featured);

  return (
    <section className="page">
      <div className="content_frame section_shell page_intro">
        <div className="section_heading">
          <div className="eyebrow">{pageCopy.videos.intro.eyebrow}</div>
          <h1>{pageCopy.videos.intro.title}</h1>
          <p className="lead">{pageCopy.videos.intro.description}</p>
        </div>
      </div>

      <div className="content_frame section_shell">
        <div className="video_embed_shell">
          <div className="youtube_embed">
            <iframe
              className="youtube_frame"
              src={`https://www.youtube.com/embed/${featuredVideo.videoId}`}
              title={featuredVideo.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <div className="info_card featured_video_card">
            <span>{featuredVideo.type}</span>
            <strong>{featuredVideo.title}</strong>
            <p>{featuredVideo.note}</p>
            <p className="featured_video_related">Related: {featuredVideo.related}</p>
            <a className="button button-secondary" href={featuredVideo.href} target="_blank" rel="noreferrer">
              Open on YouTube
            </a>
          </div>
        </div>
      </div>

      <div className="content_frame section_shell">
        <div className="section_heading">
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
