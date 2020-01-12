import React, { useState } from 'react';
import montenegro from 'assets/carousel/montenegro.png';
import iceland from 'assets/carousel/iceland.png';
import jordan from 'assets/carousel/jordan.png';
import kenya from 'assets/carousel/kenya.png';
import capeVerde from 'assets/carousel/cape-verde.png';

export function HomeHero() {
  const heroItems = [
    {
      name: 'Montenegro',
      src: montenegro,
      description:
        'Hike the stunning wilderness of Montenegro, a pristine country scarcely touched by man. Here, you will realise you have found heaven on Earth.'
    },
    {
      name: 'Iceland',
      src: iceland,
      description:
        'Explore the rugged beauty of this magnificent island, filled with towering cliffs and thundering waterfalls. This northernmost of countries has beauty like no other.'
    },
    {
      name: 'Kenya',
      src: kenya,
      description:
        'Adventure through the great plains of the Serengeti and discover the animals of Ngorongoro. Discover our place in the world among the grandests of creatures.'
    },
    {
      name: 'Cape Verde',
      src: capeVerde,
      description:
        'Hike the stunning volcanoes of Cape Verde, explore lush forests, tranquil plantations and fiery deserts. A paradise adrift in the great Atlantic Ocean.'
    },
    {
      name: 'Jordan',
      src: jordan,
      description:
        'Discover the ancient wonders of Jordan, from the nomadic bedouin tribes in Wadi Rum to the Nabatean civilisation of Petra, a true wonder of the world.'
    }
  ];
  const [chosenItem, updateChosenItem] = useState(heroItems[0]);

  return (
    <div className="parallax-group parallax-group_hero">
      <div className="parallax-layer parallax-layer_back">
        <img className="parallax-img" src={chosenItem.src} alt="montenegro" />
      </div>
      <div className="parallax-layer parallax-layer_base">
        <div className="hero hero-content container">
          <div style={{ visibility: 'hidden' }}>hello</div>
          <div className="hero-info">
            <h1 className="hero-title">{chosenItem.name}</h1>
            <h2 className="hero-desc">{chosenItem.description}</h2>
          </div>
          <div className="hero-select_wrapper">
            {heroItems &&
              heroItems.map((item, i) => {
                return (
                  <span
                    className="hero-select"
                    onClick={() => updateChosenItem(heroItems[i])}
                    key={item.name}
                  >
                    <span
                      className={`hero-button ${
                        chosenItem.name === item.name ? 'is-chosen' : ''
                      }`}
                    ></span>
                  </span>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}
