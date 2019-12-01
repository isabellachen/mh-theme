import React, { useState } from 'react';

export function Hamburger() {
  const [isActive, updateIsActive] = useState(false);

  return (
    <div
      id="hamburger"
      class={`hamburger hamburger--slider js-hamburger ${
        isActive ? 'is-active' : ''
      }`}
      onClick={() => updateIsActive(!isActive)}
    >
      <span class="hamburger-box">
        <span class="hamburger-inner" />
      </span>
    </div>
  );
}
