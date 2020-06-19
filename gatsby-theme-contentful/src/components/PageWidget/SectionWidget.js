import React from 'react';
import { Link } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Button from '../Button/Button';

export const SectionWidget = ({ sections }) => {
  return (
    <div>
      {sections.map((section, index) => (
        <div key={`session-${index}`}>
          <div className="text-left text-3xl font-semibold py-4">
            {section.title}
          </div>
          <div
            className="text-lg text-gray-800 text-left"
            style={{
              fontFamily: 'Roboto, Helvetica Arial sans-serif',
              fontWeight: 400,
              lineHeight: 1.75,
              letterSpacing: '0.00938em',
            }}
          >
            {documentToReactComponents(
              section.description.json
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
              <Button key={`${sec.title}-${index}`}>
                {sec.link ? (
                  <a
                    className={'text-white no-underline'}
                    href={sec.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {sec.title}
                  </a>
                ) : (
                  <Link
                    className={'text-white no-underline'}
                    to={`/${sec.slug}`}
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
