import React from 'react';

export default function Video({ src }) {
  return (
    <div className="video">
      <div className="container">
        <video src={src} controls></video>
      </div>
    </div>
  );
}
