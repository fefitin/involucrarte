import React from 'react';

export default function HomeVideo({ src }) {
  return (
    <div className="home-video">
      <div className="container">
        <video src={src} controls playsInline></video>
      </div>
    </div>
  );
}
