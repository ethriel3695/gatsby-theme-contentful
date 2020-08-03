import React from 'react';
import CardImage from '../Media/CardImage';

function ProductCard({ section }) {
  const { title, description, price, files } = section;
  return (
    <div className="col-span-12 lg:col-span-1 p-3 md:p-6 mx-3 rounded overflow-hidden shadow-lg text-center">
      <div className="flex-col content-between">
        {files.map((file, index) => {
          return (
            <div key={`image-container-${index}`}>
              {file && <CardImage fluid={file.fluid} />}
            </div>
          );
        })}
        <div className="font-bold text-xl mb-5" key={`${title}`}>
          {title}
        </div>
        <p
          className="my-4 text-base text-gray-700 whitespace-pre-line"
          key={`${description.description}`}
        >
          {description.description}
        </p>
        <p className="text-gray-700 text-base" key={`${price}`}>
          {' '}
          {(price && `$${price}`) || 'Contact Us For Pricing Details'}
        </p>
      </div>
    </div>
  );
}

export default ProductCard;
