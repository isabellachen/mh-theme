import React, { useState } from 'react';

export function Hamburger() {
  const [isActive, updateIsActive] = useState(false);

  return (
    <div
      id="hamburger"
      className={`hamburger hamburger--slider js-hamburger ${
        isActive ? 'is-active' : ''
      }`}
      onClick={() => updateIsActive(!isActive)}
    >
      <span className="hamburger-box">
        <span className="hamburger-inner" />
      </span>
    </div>
  );
}
