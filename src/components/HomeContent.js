import React, { Fragment } from 'react';
import { FeaturedStoryCard } from './FeaturedStoryCard';
import { StoryCard } from './StoryCard';
import { featuredContent } from '../mocks/card-content';
import { regularContent } from '../mocks/card-content';

export function HomeContent() {
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
        <div className="content_home container">
          <h1>FEATURED</h1>
          <div className="content_home-row">
            {renderFeaturedCards(featuredContent)}
          </div>
          <h1>STORIES</h1>
          <div className="content_home-row">
            {renderStoryCards(regularContent)}
          </div>
        </div>
      </div>
    </div>
  );
}
