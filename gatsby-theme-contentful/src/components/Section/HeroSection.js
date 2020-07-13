import React from 'react';
import Image from 'gatsby-image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export const HeroSection = ({ section }) => {
  return (
    <div key={'section'}>
      <div className="max-w-full">
        {section.image && <Image fluid={section.image.fluid} />}
      </div>
      <div className="container">
        <h2 className="text-center py-8" key={`${section.title}`}>
          {section.title}
        </h2>
        {section.description && (
          <div className="text-lg text-gray-800 text-center mb-2">
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
    </div>
  );
};