import React, { Fragment } from 'react';
import { postImages } from '../mocks/post-content';

function PostTip() {
  return (
    <div className="post-tip">
      <h2>Tip: Ipsum omnis vertaris sic</h2>
      <p>
        Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
        suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis
        autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
        nihil molestiae consequatur.
      </p>
    </div>
  );
}

function ImageTriplet({ country }) {
  return (
    <div className="post-triplet">
      <div className="post-triplet_single">
        <img
          className="post-image"
          src={postImages[country][2]}
          alt={country}
        />
      </div>
      <div className="post-triplet_single">
        <img
          className="post-image"
          src={postImages[country][3]}
          alt={country}
        />
      </div>
      <div className="post-triplet_single">
        <img
          className="post-image"
          src={postImages[country][4]}
          alt={country}
        />
      </div>
    </div>
  );
}

export function Post({ country, continent }) {
  return (
    <div className="post-container">
      <div className="post-header">
        <span className="post-date mr-2">23 May 2020</span>
        <span className="post-views mr-2 ml-2">64000 Views</span>
        <span className="post-location ml-2">
          {continent} > {country}
        </span>
      </div>
      <div className="post-content">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <img
          className="post-image"
          src={postImages[country][0]}
          alt={country}
        />
        <h2>Finibus Bonorum et Malorum</h2>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </p>
        <PostTip />
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </p>
        <img
          className="post-image"
          src={postImages[country][1]}
          alt={country}
        />
        <ImageTriplet country={country} />
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <img
          className="post-image"
          src={postImages[country][1]}
          alt={country}
        />
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </p>
      </div>
      <div>author box</div>
      <div>comments</div>
    </div>
  );
}
