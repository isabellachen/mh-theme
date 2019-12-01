import React from 'react';

export function FeaturedStoryCard({ content }) {
  return (
    <div className="content-featured_card">
      <img
        className="content-featured_image"
        src={content.image}
        alt={content.subtitle}
      />
      <div className="content-featured_info">
        <h2>{content.title}</h2>
        <h3>{content.subtitle}</h3>
      </div>
    </div>
  );
}
