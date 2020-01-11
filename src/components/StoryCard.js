import React from 'react';
import { Link } from 'react-router-dom';

export function StoryCard({ content }) {
  return (
    <Link to={content.slug} className="content-standard_card">
      <img
        className="content-standard_image"
        src={content.image}
        alt={content.excerpt}
      />
      <div className="content-standard_info">
        <h2>{content.title}</h2>
        <h3>{content.excerpt}</h3>
      </div>
    </Link>
  );
}
