import React from 'react';
import { SectionWidget } from './PageWidget/SectionWidget';

export default function Landing({ pageContext, page }) {
  const { siteTitle, siteDescription, siteGreeting } = pageContext;
  let pageDetails = null;
  const data = page.section;
  pageDetails = (
    <div className="container">
      <h1 className="text-center">{siteTitle}</h1>
      <h3 className="text-center">{siteDescription}</h3>
      <p className="text-left">{siteGreeting}</p>
      <SectionWidget sections={data} />
    </div>
  );
  return <div>{pageDetails}</div>;
}
