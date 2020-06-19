import React, { useEffect } from 'react';
import Layout from '../layout';
import SEO from '../seo';
import { useAuth0 } from '../../react-auth0-spa';

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
  const { loading, isAuthenticated, loginWithRedirect, logout } = useAuth0();
  useEffect(() => {
    if (loading || isAuthenticated) {
      return;
    }
    const fn = async () => {
      try {
        await loginWithRedirect({});
      } catch (e) {
        console.log(e);
      }
    };
    fn();
  }, [loading, isAuthenticated, loginWithRedirect]);

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
    >
      <SEO title={title} description={description} keywords={categories} />
      {children}
    </Layout>
  );
}
