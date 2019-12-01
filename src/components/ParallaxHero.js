import React from 'react';
import montenegro from 'assets/carousel/montenegro.png';

export function ParallaxHero() {
  return (
    <div className="parallax-group parallax-group_hero">
      <div className="parallax-layer parallax-layer_back">
        <img className="parallax-img" src={montenegro} alt="montenegro" />
      </div>
      <div className="parallax-layer parallax-layer_base">
        <div className="hero">
          <h1 className="hero-title">Montenegro</h1>
          <h2 className="hero-desc">
            Hike the stunning wilderness of Montenegro, a pristine country
            scarcely touched by man
          </h2>
        </div>
      </div>
    </div>
  );
}
