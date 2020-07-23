import React from 'react';

export default function YouTubeVideo({ id, vertical }) {
  return (
    <div className={`youtube-video ${vertical ? 'vertical' : ''}`}>
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}
