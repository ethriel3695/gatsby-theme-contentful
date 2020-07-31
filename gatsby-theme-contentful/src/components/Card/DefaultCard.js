import React from 'react';
import CardImage from '../Media/CardImage';

const DefaultCard = ({ title, caption, file }) => {
  return (
    <a
      key={`gallery-${title}`}
      href={file.description}
      alt={file.title}
      target="_blank"
      rel="noopener noreferrer"
      className="col-span-12 lg:col-span-1 p-3 md:p-6 mx-3 shadow-lg rounded-md overflow-hidden no-underline"
    >
      {file && <CardImage fluid={file.fluid} />}
      {caption && <div className="text-black mt-3 text-center">{caption}</div>}
    </a>
  );
};

export default DefaultCard;
