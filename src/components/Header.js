import React from 'react';
import { Link } from 'react-router-dom';
import { Hamburger } from './Hamburger';
import { MainMenu } from './MainMenu';
import logo from 'assets/logos/mh-logo-inverted.png';

export function Header() {
  return (
    <div className="header">
      <div className="container header-wrapper">
        <Link to="/">
          <img className="header-logo" src={logo} alt="madhouse-heaven-logo" />
        </Link>
        <div className="header-menu">
          <MainMenu />
          <div className="header-hamburger">
            <Hamburger />
          </div>
        </div>
      </div>
    </div>
  );
}
