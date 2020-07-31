import React from 'react';
import CardImage from '../components/Media/CardImage';
import placeholder from '../../assets/img/faces/marc.png';

const fluid = {
  aspectRatio: 0.562187139006546,
  src: `${placeholder}?w=400&q=100`,
  srcSet: `${placeholder}?w=400&h=250&q=100`,
  sizes: '(max-width: 400px) 100vw, 400px',
};

export default {
  title: 'An image in card format',
  component: CardImage,
};

export const DefaultCardImage = () => (
  <CardImage key={'card-image'} fluid={fluid} />
);
