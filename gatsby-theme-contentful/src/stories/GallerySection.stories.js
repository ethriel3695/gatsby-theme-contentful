import React from 'react';
import { GallerySection } from '../components/Section/GallerySection';
import placeholder from '../../assets/img/faces/marc.png';

const section = {
  title: 'Project Examples Built Using MuleJS',
  caption: {
    caption:
      'Each site took less than 3 hours from project start to a deploy on Netlify including content creation!',
  },
  subHeader:
    'NOTE: The blank squares in the screenshot are placeholder sections for images because all the images are lazy loaded for performance optimizations as an industry standard.',
  media: [
    {
      title: 'Screenshot of website for Fluff Ball House Call',
      caption:
        'Page with Hero, Title, Description, Call To Action, Products and Media Gallery',
      file: {
        title: 'Fluff Ball House Call',
        description: 'https://fluffballhousecall.com',
        fluid: {
          aspectRatio: 0.562187139006546,
          src: `${placeholder}?w=400&q=100`,
          srcSet: `${placeholder}?w=400&h=250&q=100`,
          sizes: '(max-width: 400px) 100vw, 400px',
        },
      },
    },
  ],
};

export default {
  title: 'A Gallery Section with Image Cards with optional caption',
  component: GallerySection,
};

export const GallerySectionComponent = () => (
  <GallerySection key={'default-gallery-section'} section={section} />
);

const sectionWithImageOnly = {
  title: 'Project Examples Built Using MuleJS',
  caption: {
    caption:
      'Each site took less than 3 hours from project start to a deploy on Netlify including content creation!',
  },
  subHeader:
    'NOTE: The blank squares in the screenshot are placeholder sections for images because all the images are lazy loaded for performance optimizations as an industry standard.',
  media: [
    {
      file: {
        title: 'Fluff Ball House Call',
        description: 'https://fluffballhousecall.com',
        fluid: {
          aspectRatio: 0.562187139006546,
          src: `${placeholder}?w=400&q=100`,
          srcSet: `${placeholder}?w=400&h=250&q=100`,
          sizes: '(max-width: 400px) 100vw, 400px',
        },
      },
    },
  ],
};

export const GallerySectionImagesOnly = () => (
  <GallerySection
    key={'default-gallery-section'}
    section={sectionWithImageOnly}
  />
);
