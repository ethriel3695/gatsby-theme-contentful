import React from 'react';
import Image from 'gatsby-image';

const CardImage = ({ className, fluid, ...params }) => {
  const classNames =
    'opacity-100 hover:opacity-75 cursor-pointer max-w-sm rounded-md';
  return (
    <div>
      {fluid && (
        <Image
          className={`${classNames} ${className && className}`}
          fluid={fluid}
          {...params}
        />
      )}
    </div>
  );
};

export default CardImage;
