import React, { Fragment } from 'react';
import { navigate, graphql } from 'gatsby';
import WidgetHandler from '../components/WidgetHandler';
import { Auth0Provider } from '../react-auth0-spa';
import AuthContainer from '../components/UI/AuthContainer';
import NoAuthContainer from '../components/UI/NoAuthContainer';

const isBrowser = typeof window !== `undefined`;

const onRedirectCallback = appState => {
  navigate(
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  );
};

export default function PageTemplate({
  pageContext,
  data: { allContentfulPage: page },
}) {
  const pageData = page.nodes[0];
  const { isAuthApp } = pageContext;
  return (
    <Fragment>
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
            title={pageData.title}
            description={pageContext.siteDescription}
          >
            <WidgetHandler pageContext={pageContext} page={pageData} />
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
          title={pageData.title}
          description={pageContext.siteDescription}
        >
          <WidgetHandler pageContext={pageContext} page={pageData} />
        </NoAuthContainer>
      )}
    </Fragment>
  );
}

export const query = graphql`
  query ThemeDefaultPageQuery($pageId: String) {
    allContentfulPage(filter: { id: { eq: $pageId } }) {
      nodes {
        id
        title
        slug
        pageType
        sections {
          ... on ContentfulSection {
            title
            description {
              json
            }
            subHeader {
              subHeader
            }
          }
          ... on ContentfulHero {
            title
            description {
              json
            }
            subHeader {
              subHeader
            }
            file {
              description
              fluid(maxWidth: 1904, quality: 100) {
                ...GatsbyContentfulFluid_noBase64
              }
            }
          }
          ... on ContentfulGallery {
            title
            description {
              json
            }
            subHeader {
              subHeader
            }
            caption
            media {
              title
              caption
              file {
                title
                description
                fluid(maxWidth: 400, quality: 100) {
                  ...GatsbyContentfulFluid_noBase64
                }
              }
            }
          }
          ... on ContentfulProducts {
            title
            description {
              json
            }
            subHeader {
              subHeader
            }
            product {
              title
              description {
                description
              }
              price
              files {
                title
                description
                fluid(maxWidth: 400, quality: 100) {
                  ...GatsbyContentfulFluid_noBase64
                }
              }
            }
          }
          ... on ContentfulMultipleCallToAction {
            title
            description {
              json
            }
            subHeader {
              subHeader
            }
            callToAction {
              title
              text {
                text
              }
              buttonText
              externalLink
              slug
            }
          }
        }
      }
    }
  }
`;
