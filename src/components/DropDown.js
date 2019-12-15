/* eslint-disable no-unused-expressions */
import React, { Fragment, useState } from 'react';

/**
 * Menus only go two levels deep e.g. destinations > europe > iceland
 */

function SubDropDown({ item }) {
  const [onHoverListItem, updateOnHoverListItem] = useState(false);

  const renderMenu = items => {
    return (
      <Fragment>
        {items.map((item, i) => {
          return <li className="dropdown-item">{item.name}</li>;
        })}
      </Fragment>
    );
  };

  return (
    <Fragment>
      <li
        onMouseEnter={() => updateOnHoverListItem(true)}
        onMouseLeave={() => updateOnHoverListItem(false)}
        className={`dropdown-item ${item.menu ? 'is-parent' : ''}`}
      >
        {item.name}
        <ul
          className={`dropdown dropdown-sub_menu ${
            onHoverListItem ? 'is-shown' : ''
          }`}
        >
          {item.menu ? renderMenu(item.menu) : null}
        </ul>
      </li>
    </Fragment>
  );
}

export function DropDown({ navItems, onHoverNav }) {
  const renderMenu = items => {
    return (
      <Fragment>
        {items.map((item, i) => {
          return (
            <Fragment>
              {item.menu ? (
                <Fragment>
                  {item.menu ? <SubDropDown item={item} /> : null}
                </Fragment>
              ) : (
                <li>{item.name}</li>
              )}
            </Fragment>
          );
        })}
      </Fragment>
    );
  };

  return (
    <ul className={`dropdown ${onHoverNav ? 'is-shown' : ''}`}>
      {renderMenu(navItems)}
    </ul>
  );
}
