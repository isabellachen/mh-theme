import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Header } from './Header';
import { HomeHero } from './HomeHero';
import { HomeContent } from './HomeContent';
import { SingleComponent } from './SingleComponent';
import 'styles/app.scss';

//You'll need to put both the hero and content into a router outlet
//to switch between home/archives and single pages.

function HomeComponent() {
  return (
    <div>
      <HomeHero />
      <HomeContent />
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="parallax">
        <Header />
        <Route exact={true} path="/" component={HomeComponent} />
        <Route exact={true} path="/:page" render={SingleComponent} />
      </div>
    </Router>
  );
}

export default App;
