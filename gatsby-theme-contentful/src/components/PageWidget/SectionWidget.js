import React from 'react';
import { Link } from 'gatsby';
import { Button } from '@material-ui/core';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export const SectionWidget = ({ sections }) => {
  return (
    <div>
      {sections.map((section, index) => (
        <div key={`session-${index}`}>
          <h2>{section.title}</h2>
          <div
            style={{
              fontSize: '17px',
              fontFamily: 'Roboto, Helvetica Arial sans-serif',
              fontWeight: 400,
              lineHeight: 1.75,
              letterSpacing: '0.00938em',
            }}
          >
            {documentToReactComponents(
              section.description.json,
              // , {
              // renderNode: {
              //   [BLOCKS.EMBEDDED_ASSET]: (node, children) => (
              //     <img
              //       src={`${node.data.target.fields.file['en-US'].url}?w=300`}
              //       src={node.data.target.fields.title['en-US']}
              //     />
              //   ),
              // },
              // }
            )}
          </div>
          {section.item &&
            section.item.map((sec, index) => (
              <Button
                key={`${sec.title}-${index}`}
                variant="contained"
                style={{
                  backgroundColor: '#040DAF',
                  marginRight: '5px',
                  marginBottom: '5px',
                }}
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
