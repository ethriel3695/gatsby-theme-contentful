import React from 'react';
import { graphql } from 'gatsby';
import { Auth0Provider } from '../react-auth0-spa';
import history from '../utils/history';
import AuthContainer from '../components/UI/AuthContainer';
import NoAuthContainer from '../components/UI/NoAuthContainer';
import PostContainer from '../components/Post/PostContainer';

const isBrowser = typeof window !== `undefined`;

const onRedirectCallback = appState => {
  history.push(
    appState && appState.targetUrl
      ? appState.targetUrl
      : isBrowser
      ? window.location.pathname
      : '/',
  );
};

export default function Post({ pageContext, data: { mdx: post } }) {
  const { isAuthApp } = pageContext;
  return (
    <div>
      {isAuthApp ? (
        <Auth0Provider
          domain={process.env.GATSBY_AUTH0_DOMAIN}
          client_id={process.env.GATSBY_AUTH0_CLIENT_ID}
          redirect_uri={isBrowser ? window.location.origin : '/'}
          onRedirectCallback={onRedirectCallback}
        >
          <AuthContainer
            siteTitle={pageContext.siteTitle}
            brand={pageContext.brand}
            copyright={pageContext.copyrightMessage}
            loginOption={pageContext.loginOption}
            isAuthApp={pageContext.isAuthApp}
            slugs={pageContext.slugs}
          >
            <PostContainer data={post.body} frontmatter={post.frontmatter} />
          </AuthContainer>
        </Auth0Provider>
      ) : (
        <NoAuthContainer
          siteTitle={pageContext.siteTitle}
          brand={pageContext.brand}
          newsletter={pageContext.newsletter}
          copyright={pageContext.copyrightMessage}
          loginOption={pageContext.loginOption}
          isAuthApp={pageContext.isAuthApp}
          slugs={pageContext.slugs}
        >
          <PostContainer data={post.body} frontmatter={post.frontmatter} />
        </NoAuthContainer>
      )}
    </div>
  );
}

export const pageQuery = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "MMMM Do, YYYY")
        banner {
          sharp: childImageSharp {
            fluid(maxWidth: 1686) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
        showBanner
      }
      body
    }
  }
`;
