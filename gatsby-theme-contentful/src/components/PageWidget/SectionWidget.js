import React from 'react';
import { Link } from 'gatsby';
import { Button } from '@material-ui/core';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export const SectionWidget = ({ sections }) => {
  return (
    <div>
      {sections.map(section => (
        <div key={`session-${section.slug}`}>
          <h2>{section.title}</h2>
          <div style={{ textAlign: 'left', fontSize: '20px' }}>
            {documentToReactComponents(section.description.json)}
          </div>
          {section.item.map((sec, index) => (
            <Button
              key={`${sec.title}-${index}`}
              variant="contained"
              style={{ backgroundColor: '#040DAF', marginRight: '5px' }}
            >
              {sec.link ? (
                <a
                  href={sec.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'none', color: '#eee' }}
                >
                  {sec.title}
                </a>
              ) : (
                <Link
                  to={`/${sec.slug}`}
                  style={{ textDecoration: 'none', color: '#eee' }}
                >
                  {sec.title}
                </Link>
              )}
            </Button>
          ))}
        </div>
      ))}
    </div>
  );
};
