import React from 'react';
import { Header } from './Header';
import montenegro from 'assets/carousel/montenegro.png';
import santoAntao from 'assets/carousel/santo-antao.png';
import 'styles/app.scss';

function App() {
  return (
    <div className="main">
      <div className="parallax">
        <Header />
        <div className="parallax-group parallax-group_hero">
          <div className="parallax-layer parallax-layer_back">
            <img className="parallax-img" src={santoAntao} alt="montenegro" />
          </div>
          <div className="parallax-layer parallax-layer_base">
            <h1>Montenegro</h1>
          </div>
        </div>
        <div className="parallax-group parallax-group_main">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
