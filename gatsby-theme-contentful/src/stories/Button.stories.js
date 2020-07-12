import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from '../components/Button/Button';

export default {
  title: 'Button with inherit styling from the style.css file',
  component: Button,
};

export const ExternalLinkButton = () => (
  <Button key={'link-button'} href={'https://mulejs.org'}>
    MuleJS
  </Button>
);

export const InternalRouteButton = () => (
  <Button key={`internal-route-button`} to={`/blog`}>
    Blog
  </Button>
);
