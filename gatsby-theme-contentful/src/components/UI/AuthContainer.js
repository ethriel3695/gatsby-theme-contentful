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
}) {
  const { loading, isAuthenticated, loginWithRedirect, logout } = useAuth0();
  useEffect(() => {
    if (loading || isAuthenticated) {
      return;
    }
    // const fn = async () => {
    //   await loginWithRedirect({});
    // };
    // fn();
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
      loginWithRedirect={loginWithRedirect}
      logout={logout}
    >
      <SEO title="Home" />
      {children}
    </Layout>
  );
}
