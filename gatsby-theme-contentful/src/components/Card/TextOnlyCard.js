import React from 'react';

function Card({ ...props }) {
  const { children } = props;
  return (
    <div className="lg:w-1/3 rounded overflow-hidden shadow-lg text-center px-4 mb-5">
      <div className="flex-col content-between">{children}</div>
    </div>
  );
}

export default Card;
