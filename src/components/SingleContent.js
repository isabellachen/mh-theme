import React from 'react';
import { Post } from './Post';
import { Sidebar } from './Sidebar';
import { regularContent } from '../mocks/card-content';

export function SingleContent({ location }) {
  const path = location.pathname.split('/')[1];
  const content = regularContent.filter(content => content.slug === path)[0];

  return (
    <div className="parallax-group parallax-group_main">
      <div className="content">
        <div className="d-flex container">
          {/* <Post
            country={content && content.country}
            continent={content && content.continent}
          /> */}
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
