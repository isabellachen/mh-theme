import React, { Fragment } from 'react';
import { withRouter } from 'react-router';
import { SingleHero } from './SingleHero';
import { SingleContent } from './SingleContent';

function Single(props) {
  return (
    <div>
      <SingleHero {...props} />
      <SingleContent {...props} />
    </div>
  );
}

export const SingleComponent = withRouter(Single);
