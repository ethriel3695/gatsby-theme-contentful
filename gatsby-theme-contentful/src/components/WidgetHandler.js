import React from 'react';

import HeroLanding from './WidgetTypes/HeroLanding';
import NormalLanding from './WidgetTypes/NormalLanding';
import ArticleSummary from './WidgetTypes/ArticleSummary';
import Landing from './Landing';
import ArticleContainer from './Post/ArticleContainer';

export default function WidgetHandler({ pageContext, page }) {
  let PageComponent = null;
  switch (page.pageType) {
    case 'Landing':
      PageComponent = <Landing pageContext={pageContext} page={page} />;
      break;
    case 'HeroLanding':
      PageComponent = <HeroLanding page={page} />;
      break;
    case 'NormalLanding':
      PageComponent = <NormalLanding page={page} />;
      break;
    case 'ArticleSummary':
      PageComponent = <ArticleSummary />;
      break;
    case 'Article':
      PageComponent = <ArticleContainer page={page} />;
      break;
    default:
      PageComponent = <div>You have no content coming in!</div>;
  }
  return <div>{PageComponent}</div>;
}
