import React from 'react';

// import { ButtonLanding } from '../components/WidgetTypes/ButtonLanding';
import HeroLanding from './WidgetTypes/HeroLanding';
import Landing from './Landing';
import { usePageTypes } from '../hooks/pageTypes';

export default function WidgetHandler({ pageContext }) {
  const pages = usePageTypes();
  return (
    <div>
      {pages.map((page, index) => {
        // return <div>Hi</div>;
        switch (page.pageType) {
          case 'Landing':
            return <Landing key={index} pageContext={pageContext} />;
          case 'HeroLanding':
            return <HeroLanding key={index} pageType={page.pageType} />;
          default:
            return <div>You have no content coming in!</div>;
        }
      })}
    </div>
  );
}
