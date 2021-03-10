import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';

export const SectionLayout = ({
  section,
  children,
  className = '',
  isContainer = false,
}) => {
  const { title, description, subHeader, caption } = section;
  return (
    <div
      className={
        isContainer ? `container ${className} mt-10` : ` ${className} mt-10`
      }
    >
      <h3>{title}</h3>
      <hr className="mb-5 border-top-2 border-solid border-gray-500" />
      {description && (
        <div className="text-lg text-gray-800 mb-2 text-left">
          {documentToReactComponents(description.json, {
            renderNode: {
              [BLOCKS.EMBEDDED_ASSET]: (node, children) => (
                <img
                  src={`${node.data.target.fields.file['en-US'].url}`}
                  style={{ width: '100%' }}
                  key={node.data.target.fields.title['en-US']}
                />
              ),
            },
          })}
        </div>
      )}
      {subHeader && <p className="text-sm opacity-75">{subHeader.subHeader}</p>}
      {caption && <div>{caption}</div>}
      {children}
    </div>
  );
};
