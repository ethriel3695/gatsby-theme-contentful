import React from 'react';

function Card({ ...props }) {
  const { children } = props;
  return (
    <div
      key={`galleryContainer-${index}`}
      className="col-span-12 lg:col-span-1"
    >
      {gal.description ? (
        <div
          key={`gallery-${index}`}
          className="p-3 md:p-6 shadow-lg rounded-md overflow-hidden"
        >
          {gal.fluid && (
            <Image
              className="opacity-100 hover:opacity-75 cursor-pointer"
              fluid={gal.fluid}
            />
          )}
          <h5>{gal.title}</h5>
          <div className="h-full lg:h-40">{gal.description}</div>
        </div>
      ) : (
        <div
          key={`gallery-${index}`}
          className="p-3 md:p-6 shadow-lg rounded-md overflow-hidden"
        >
          {gal.fluid && (
            <Image
              className="opacity-100 hover:opacity-75 cursor-pointer"
              fluid={gal.fluid}
            />
          )}
        </div>
      )}
    </div>
  );
}

export default Card;
