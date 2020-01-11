import React from 'react';

export function FeaturedStoryCard({ content }) {
  return (
    <div className="content_home-featured_card">
      <img
        className="content_home-featured_image"
        src={content.image}
        alt={content.subtitle}
      />
      <div className="content_home-featured_info">
        <h2>{content.title}</h2>
        <h3>{content.subtitle}</h3>
      </div>
    </div>
  );
}
