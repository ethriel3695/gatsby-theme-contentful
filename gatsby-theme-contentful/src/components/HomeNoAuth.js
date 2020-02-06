import React from 'react';
import Img from 'gatsby-image';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Layout from './layout';
import SEO from './seo';
import { SectionWidget } from './PageWidget/SectionWidget';
import { useContentful } from '../hooks/contentful';

export default function HomeNoAuth({
  siteTitle,
  siteDescription,
  siteGreeting,
  copyright,
  brand,
  hero,
  loginOption,
  isAuthApp,
  slugs,
}) {
  let pageDetails = null;
  const requiresAuth = false;
  const data = useContentful();
  if (hero) {
    pageDetails = (
      <Grid container>
        <Grid item xs={12} key={`heroContainer`}>
          <Img
            fluid={hero.childImageSharp.fluid}
            style={{
              height: '70vh',
              textAlign: 'center',
            }}
          />
        </Grid>
        <Grid item xs={12} key={`textContainer`}>
          <Typography variant="h5" align="center" color="inherit" paragraph>
            {siteDescription}
          </Typography>
          <Typography
            style={{ textAlign: 'center', padding: 10 }}
            variant="body2"
            align="center"
            color="inherit"
            paragraph
          >
            {siteGreeting}
          </Typography>
        </Grid>
      </Grid>
    );
  } else {
    pageDetails = (
      <div style={{ padding: 20 }}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="inherit"
          gutterBottom
          style={{ padding: 20 }}
        >
          {siteTitle}
        </Typography>
        <Typography variant="h5" align="center" color="inherit" paragraph>
          {siteDescription}
        </Typography>
        <Typography variant="subtitle1" align="left" color="inherit" paragraph>
          {siteGreeting}
        </Typography>
        <SectionWidget sections={data} />
      </div>
    );
  }
  return (
    <Layout
      siteTitle={siteTitle}
      brand={brand}
      hero={hero}
      copyright={copyright}
      loginOption={loginOption}
      isAuthApp={isAuthApp}
      slugs={slugs}
      isAuthenticated={false}
      loginWithRedirect={false}
      logout={false}
      requiresAuth={requiresAuth}
    >
      <SEO title="HomeNoAuth" />
      {pageDetails}
    </Layout>
  );
}
