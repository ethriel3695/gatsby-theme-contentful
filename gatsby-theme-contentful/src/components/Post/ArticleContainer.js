import React from 'react';
import Section from '../Section/Section';

const ArticleContainer = ({ page }) => {
  console.log(page);
  return (
    <div className="bg-gray-0">
      {page.sections.map((section, index) => {
        return <Section key={`section-${index}`} section={section} />;
      })}
    </div>
  );
};

export default ArticleContainer;
