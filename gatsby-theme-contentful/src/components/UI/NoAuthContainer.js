import React from 'react';
import Layout from '../layout';
import SEO from '../seo';

export default function NoAuthContainer({
  siteTitle,
  brand,
  hero,
  newsletter,
  copyright,
  loginOption,
  isAuthApp,
  slugs,
  children,
  title,
  description,
  categories,
}) {
  return (
    <Layout
      siteTitle={siteTitle}
      brand={brand}
      hero={hero}
      newsletter={newsletter}
      copyright={copyright}
      loginOption={loginOption}
      isAuthApp={isAuthApp}
      slugs={slugs}
    >
      <SEO title={title} description={description} keywords={categories} />
      {children}
    </Layout>
  );
}
