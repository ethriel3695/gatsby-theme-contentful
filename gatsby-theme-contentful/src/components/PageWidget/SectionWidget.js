import React from 'react';
import { Link } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export const SectionWidget = ({ sections }) => {
  return (
    <div>
      {sections.map((section, index) => (
        <div key={`session-${index}`}>
          <div className="text-center text-4xl p-4">{section.title}</div>
          <div
            className="text-lg text-gray-800 text-center"
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
              <div
                key={`${sec.title}-${index}`}
                className="mb-2 mr-2 bg-blue-700"
              >
                {sec.link ? (
                  <a
                    className={'text-white hover:text-teal-700 no-underline'}
                    href={sec.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {sec.title}
                  </a>
                ) : (
                  <Link
                    className={'text-white hover:text-teal-700 no-underline'}
                    to={`/${sec.slug}`}
                  >
                    {sec.title}
                  </Link>
                )}
              </div>
            ))}
        </div>
      ))}
    </div>
  );
};
