import React from 'react';
import SEO from '../components/seo';

const NotFoundPage = () => (
  <div>
    <SEO title="404: Not found" description="This route does not exist!" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn't exist... the sadness.</p>
  </div>
);

export default NotFoundPage;
