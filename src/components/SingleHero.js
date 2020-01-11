import React, { useState, useEffect } from 'react';
import { featuredContent } from '../mocks/card-content';
import { regularContent } from '../mocks/card-content';

export function SingleHero({ location }) {
  const path = location.pathname.split('/')[1];
  const content = regularContent.filter(content => content.slug === path)[0];

  return (
    <div className="parallax-group parallax-group_hero">
      <div className="parallax-layer parallax-layer_back">
        <img
          className="parallax-img"
          src={content && content.image}
          alt={content && content.excerpt}
        />
      </div>
      <div className="parallax-layer parallax-layer_base">
        <div className="hero hero-content container">
          <div style={{ visibility: 'hidden' }}>hello</div>
          <div className="hero-info">
            <h1 className="hero-title">{content && content.title}</h1>
            <h2 className="hero-desc">{content && content.excerpt}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
