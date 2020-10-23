import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Layout from '../layout';
import SEO from '../seo';
import { Error } from '../Interactive/Error';

export default function AuthContainer({
  siteTitle,
  brand,
  copyright,
  loginOption,
  isAuthApp,
  slugs,
  children,
  title,
  description,
  categories = [],
}) {
  const {
    isLoading,
    error,
    isAuthenticated,
    loginWithRedirect,
    logout,
  } = useAuth0();

  return (
    <Layout
      siteTitle={siteTitle}
      brand={brand}
      copyright={copyright}
      loginOption={loginOption}
      isAuthApp={isAuthApp}
      slugs={slugs}
      isAuthenticated={isAuthenticated}
      logout={logout}
      loginWithRedirect={loginWithRedirect}
      isLoading={isLoading}
    >
      <SEO title={title} description={description} keywords={categories} />
      {error && <Error message={error.message} />}
      {children}
    </Layout>
  );
}
