import React from 'react';

import HeroLanding from './WidgetTypes/HeroLanding';
import NormalLanding from './WidgetTypes/NormalLanding';
// import Landing from './Landing';

export default function WidgetHandler({ pageContext, page }) {
  let PageComponent = null;
  switch (page.pageType) {
    // case 'Landing':
    //   PageComponent = <Landing pageContext={pageContext} page={page} />;
    //   break;
    case 'HeroLanding':
      PageComponent = <HeroLanding page={page} />;
      break;
    case 'NormalLanding':
      PageComponent = <NormalLanding page={page} />;
      break;
    default:
      PageComponent = <div>You have no content coming in!</div>;
  }
  return <div>{PageComponent}</div>;
}
