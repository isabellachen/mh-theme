import React, { Fragment } from 'react';
import { FeaturedStoryCard } from './FeaturedStoryCard';
import { StoryCard } from './StoryCard';
import { featuredContent } from '../mocks/card-content';
import { regularContent } from '../mocks/card-content';

export function ParallaxContent() {
  const renderFeaturedCards = featuredContent => {
    return (
      <Fragment>
        {featuredContent.map((content, i) => {
          return <FeaturedStoryCard key={i} content={content} />;
        })}
      </Fragment>
    );
  };

  const renderStoryCards = cardContent => {
    return (
      <Fragment>
        {regularContent.map((content, i) => {
          return <StoryCard key={i} content={content} />;
        })}
      </Fragment>
    );
  };

  return (
    <div className="parallax-group parallax-group_main">
      <div className="content">
        <div className="content-inner container">
          <h1>FEATURED</h1>
          <div className="content-row">
            {renderFeaturedCards(featuredContent)}
          </div>
          <h1>STORIES</h1>
          <div className="content-row">{renderStoryCards(regularContent)}</div>
        </div>
      </div>
    </div>
  );
}
