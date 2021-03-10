import React from 'react';
import Image from 'gatsby-image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export const HeroSection = ({ section }) => {
  return (
    <>
      {section.file && (
        <div
          className=""
          style={{
            lineHeight: 0,
            margin: '0 auto',
            width: '100%',
            maxWidth: 2000,
          }}
        >
          <div
            className="flex justify-center w-full absolute"
            style={{
              boxSizing: 'inherit',
              width: '100vw',
              maxWidth: 2000,
              minHeight: 600,
              zIndex: 1,
              lineHeight: 0,
              quotes: 'auto',
            }}
          >
            <div
              className="cursor-default flex flex-col justify-center text-center"
              style={{
                boxSizing: 'inherit',
                height: '10vh',
                maxWidth: '700px',
                minHeight: '600px',
                width: 'calc(100vw - 90px)',
                lineHeight: 0,
                quotes: 'auto',
              }}
            >
              <h1
                className="md:mx-0 md:mt-0 md:mb-4 font-bold text-4xl mx-0 mt-0 mb-2 hero-text"
                style={{
                  boxSizing: 'inherit',
                  lineHeight: 1.33333,
                  quotes: 'auto',
                }}
              >
                {section.file.title}
              </h1>
              <p
                className="md:text-3xl md:mx-0 md:my-8 text-xl m-0 hero-text"
                style={{
                  boxSizing: 'inherit',
                  lineHeight: 1.4,
                  fontFamily: 'inherit',
                  quotes: 'auto',
                  textShadow: '2px 2px #4e4e4e',
                }}
              >
                {section.file.description}
              </p>
            </div>
          </div>

          <picture>
            <Image
              className="object-cover"
              style={{
                width: '100%',
                height: '10vh',
                minHeight: 600,
                maxWidth: 2000,
              }}
              fluid={section.file.fluid}
            />
          </picture>
        </div>
      )}
      <div className="container">
        {section.title && (
          <h2 className="py-8" key={`${section.title}`}>
            {section.title}
          </h2>
        )}
        {section.description && (
          <div className="text-lg text-gray-800 mb-2">
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
        )}
      </div>
    </>
  );
};
