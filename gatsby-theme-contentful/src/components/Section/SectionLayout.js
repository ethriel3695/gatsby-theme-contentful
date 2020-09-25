import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export const SectionLayout = ({
  section,
  children,
  className,
  isContainer = false,
}) => {
  const { title, description, subHeader, caption } = section;
  console.log(section);
  return (
    <div className={isContainer ? `container ${className}` : ` ${className}`}>
      <h3>{title}</h3>
      {description && (
        <div className="text-lg text-gray-800 mb-2">
          {documentToReactComponents(
            description.json
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
      {subHeader && <p className="text-sm opacity-75">{subHeader.subHeader}</p>}
      {caption && <div>{caption}</div>}
      {children}
    </div>
  );
};
