import React, { Fragment } from 'react';
import { FeaturedStoryCard } from './FeaturedStoryCard';
import jereshPillars from 'assets/featured-images/jeresh-pillars.jpg';
import kenyaElephant from 'assets/featured-images/kenya-elephant.jpg';
import lisbonTram from 'assets/featured-images/lisbon-tram.jpg';

export function ParallaxContent() {
  const featuredContent = [
    {
      title: "Lisbon's Iconic Tram 24",
      subtitle: "Experience the heart of lisbon on it's popular vintage tram",
      image: lisbonTram
    },
    {
      title: 'The Soul of Kenya',
      subtitle:
        'Elephants still rule the Masai Mara, despite an ever changing world',
      image: kenyaElephant
    },
    {
      title: "Jeresh's Forgotten Wonders",
      subtitle:
        'Roman pillars still stand, telling the story of a glorious past',
      image: jereshPillars
    }
  ];

  const renderFeaturedCards = featuredContent => {
    return (
      <Fragment>
        {featuredContent.map(content => {
          return <FeaturedStoryCard content={content} />;
        })}
      </Fragment>
    );
  };

  return (
    <div className="parallax-group parallax-group_main">
      <div className="content container">
        <h1>FEATURED</h1>
        <div className="content-featured">
          {renderFeaturedCards(featuredContent)}
        </div>
        <h1>STORIES</h1>
      </div>
    </div>
  );
}
