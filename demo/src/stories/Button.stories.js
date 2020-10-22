import React from 'react';
import Button from 'gatsby-theme-contentful/src/components/Button/Button';

export default {
  title: 'Button with inherit styling from the Theme',
  component: Button,
};

export const ExternalLinkButton = () => (
  <Button key={'link-button'} href={'https://mulejs.org'}>
    MuleJS
  </Button>
);
