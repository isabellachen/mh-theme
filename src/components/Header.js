import React from 'react';
import { Hamburger } from './Hamburger';
import logo from 'assets/logos/mh-logo-inverted.png';

export function Header() {
  return (
    <div className="header">
      <div className="container header-wrapper">
        <img className="header-logo" src={logo} alt="logo" />
        <div className="header-hamburger">
          <Hamburger />
        </div>
      </div>
    </div>
  );
}