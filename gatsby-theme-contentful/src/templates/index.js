import React from 'react';
import { graphql } from 'gatsby';
import Home from '../components/Home';
import HomeNoAuth from '../components/HomeNoAuth';
import { Auth0Provider } from '../react-auth0-spa';
import history from '../utils/history';

const onRedirectCallback = appState => {
  history.push(
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname,
  );
};

export default function PageTemplate({
  pageContext,
  data: {
    allMdx: { nodes: posts },
    sections: { nodes: sections },
  },
}) {
  return (
    <Auth0Provider
      domain={process.env.GATSBY_AUTH0_DOMAIN}
      client_id={process.env.GATSBY_AUTH0_CLIENT_ID}
      redirect_uri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      {pageContext.isAuthApp ? (
        <Home
          siteTitle={pageContext.siteTitle}
          siteDescription={pageContext.siteDescription}
          siteGreeting={pageContext.siteGreeting}
          copyright={pageContext.copyrightMessage}
          socialLinks={pageContext.socialLinks}
          brand={pageContext.brand}
          hero={pageContext.hero}
          loginOption={pageContext.loginOption}
          isAuthApp={pageContext.isAuthApp}
          posts={posts}
          slugs={pageContext.slugs}
        />
      ) : (
        <HomeNoAuth
          siteTitle={pageContext.siteTitle}
          siteDescription={pageContext.siteDescription}
          siteGreeting={pageContext.siteGreeting}
          copyright={pageContext.copyrightMessage}
          socialLinks={pageContext.socialLinks}
          brand={pageContext.brand}
          hero={pageContext.hero}
          loginOption={pageContext.loginOption}
          isAuthApp={pageContext.isAuthApp}
          posts={posts}
          sections={sections}
          slugs={pageContext.slugs}
        />
      )}
    </Auth0Provider>
  );
}

export const pageQuery = graphql`
  query IndexPosts {
    allMdx(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { published: {} } }
      limit: 10
    ) {
      nodes {
        id
        frontmatter {
          title
          slug
          banner {
            sharp: childImageSharp {
              fluid(maxWidth: 1686) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
          date(formatString: "MM/DD/YYYY")
          categories
        }
        excerpt
      }
    }
    sections: allContentfulSection(sort: { fields: [order], order: ASC }) {
      nodes {
        title
        slug
        item {
          title
          link
          slug
        }
        description {
          json
        }
      }
    }
  }
`;
