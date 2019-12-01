import React from 'react';
import { Header } from './Header';
import { ParallaxHero } from './ParallaxHero';
import { ParallaxContent } from './ParallaxContent';
import 'styles/app.scss';

//You'll need to put both the hero and content into a router outlet
//to switch between home/archives and single pages.

function App() {
  return (
    <div className="main parallax">
      <Header />
      <ParallaxHero />
      <ParallaxContent />
    </div>
  );
}

export default App;
