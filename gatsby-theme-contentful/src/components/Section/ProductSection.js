import React from 'react';
import ProductCard from '../Card/ProductCard';

export const ProductSection = ({ section }) => {
  const { product } = section;
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3">
      {product &&
        product.map((prod, index) => {
          return <ProductCard key={`default-card-${index}`} section={prod} />;
        })}
    </div>
  );
};
