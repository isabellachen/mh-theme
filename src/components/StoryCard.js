import React from 'react';

export function StoryCard({ content }) {
  return (
    <div className="content-standard_card">
      <img
        className="content-standard_image"
        src={content.image}
        alt={content.excerpt}
      />
      <div className="content-standard_info">
        <h2>{content.title}</h2>
        <h3>{content.excerpt}</h3>
      </div>
    </div>
  );
}
