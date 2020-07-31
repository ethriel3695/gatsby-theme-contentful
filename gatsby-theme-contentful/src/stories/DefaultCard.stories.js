import React from 'react';
import DefaultCard from '../components/Card/DefaultCard';
import placeholder from '../../assets/img/faces/marc.png';

const file = {
  title: 'Fluff Ball House Call',
  description: 'https://fluffballhousecall.com',
  fluid: {
    aspectRatio: 0.562187139006546,
    src: `${placeholder}?w=400&q=100`,
    srcSet: `${placeholder}?w=400&h=250&q=100`,
    sizes: '(max-width: 400px) 100vw, 400px',
  },
};

export default {
  title: 'A Card with an Image and an optional caption',
  component: DefaultCard,
};

export const DefaultCardComponent = () => (
  <DefaultCard
    key={'default-card'}
    file={file}
    title={'Screenshot of website for Fluff Ball House Call'}
    caption={
      'Page with Hero, Title, Description, Call To Action, Products and Media Gallery'
    }
  />
);
