import React from 'react';
import { Link } from 'react-router-dom';

export function StoryCard({ content }) {
  return (
    <Link to={content.slug} className="content_home-standard_card">
      <img
        className="content_home-standard_image"
        src={content.image}
        alt={content.excerpt}
      />
      <div className="content_home-standard_info">
        <h2>{content.title}</h2>
        <h3>{content.excerpt}</h3>
      </div>
    </Link>
  );
}
