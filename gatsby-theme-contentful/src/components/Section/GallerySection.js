import React from 'react';
import DefaultCard from '../Card/DefaultCard';

export const GallerySection = ({ section }) => {
  const { media } = section;
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3">
      {media &&
        media.map(({ title, caption, file }, index) => {
          return (
            <DefaultCard
              key={`default-card-${index}`}
              file={file}
              title={title}
              caption={caption}
            />
          );
        })}
    </div>
  );
};
