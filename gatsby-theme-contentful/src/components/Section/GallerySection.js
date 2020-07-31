import React from 'react';
import DefaultCard from '../Card/DefaultCard';

export const GallerySection = ({ section }) => {
  const { title, caption, subHeader, media } = section;
  return (
    <div className="container">
      <h3>{title}</h3>
      {caption.caption && <div>{caption.caption}</div>}
      <br />
      {subHeader && <p className="text-sm opacity-75">{subHeader}</p>}
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
    </div>
  );
};
