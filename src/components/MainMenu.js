import React, { useState } from 'react';
import { DropDown } from './DropDown';

export function MainMenu() {
  const [onHoverNav, updateOnHoverNav] = useState(false);

  const navItems = [
    {
      name: 'europe',
      menu: [{ name: 'andorra' }, { name: 'azores' }]
    },
    {
      name: 'asia',
      menu: [{ name: 'cambodia' }, { name: 'thailand' }, { name: 'singapore' }]
    },
    {
      name: 'africa',
      menu: [{ name: 'kenya' }, { name: 'namibia' }]
    }
  ];

  return (
    <nav
      className={`main_menu`}
      onMouseEnter={() => updateOnHoverNav(true)}
      onMouseLeave={() => updateOnHoverNav(false)}
    >
      <div className="main_menu-title">
        <h1>Destinations</h1>
      </div>
      <DropDown navItems={navItems} onHoverNav={onHoverNav} />
    </nav>
  );
}
