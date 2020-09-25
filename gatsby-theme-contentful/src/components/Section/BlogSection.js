import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import CardImage from '../Media/CardImage';
import { BLOCKS } from '@contentful/rich-text-types';

export const BlogSection = ({
  section,
  children,
  className,
  isContainer = false,
}) => {
  const { title, articleSectionText, file } = section;
  return (
    <div className={isContainer ? `container ${className}` : ` ${className}`}>
      <h3>{title}</h3>
      {articleSectionText && (
        <div className="text-lg text-gray-800 mb-2">
          {documentToReactComponents(articleSectionText.json, {
            renderNode: {
              [BLOCKS.EMBEDDED_ASSET]: (node, children) => (
                <img
                  src={`${node.data.target.fields.file['en-US'].url}?w=300`}
                  src={node.data.target.fields.title['en-US']}
                />
              ),
            },
          })}
        </div>
      )}
      {file.fluid && (
        <CardImage
          className="cursor-default hover:opacity-100 max-w-full"
          fluid={file.fluid}
        />
      )}
      {children}
    </div>
  );
};
