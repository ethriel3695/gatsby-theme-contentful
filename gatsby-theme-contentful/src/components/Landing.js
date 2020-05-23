import React from 'react';
import Image from 'gatsby-image';
import { SectionWidget } from './PageWidget/SectionWidget';

export default function Landing({ pageContext, page }) {
  const { siteTitle, siteDescription, siteGreeting } = pageContext;
  let pageDetails = null;
  const data = page.section;
  const hero = data[0].image ? (
    <div className="max-w-full">
      <Image fluid={data[0].image.fluid} />
    </div>
  ) : (
    ''
  );
  pageDetails = (
    <div className="container">
      <h1 className="text-center">{siteTitle}</h1>
      <h3 className="text-center">{siteDescription}</h3>
      <p className="text-left">{siteGreeting}</p>
      <SectionWidget sections={data} />
    </div>
  );
  return (
    <div>
      {hero}
      {pageDetails}
    </div>
  );
}
