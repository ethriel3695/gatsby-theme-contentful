import React, { Fragment } from 'react';
import WidgetHandler from '../components/WidgetHandler';
import { Auth0Provider } from '../react-auth0-spa';
import history from '../utils/history';
import AuthContainer from '../components/UI/AuthContainer';
import NoAuthContainer from '../components/UI/NoAuthContainer';

const isBrowser = typeof window !== `undefined`;

const onRedirectCallback = appState => {
  history.push(
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname,
  );
};

const PageTemplate = ({ pageContext }) => {
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
            slugs={pageContext.slugs}
          >
            <WidgetHandler pageContext={pageContext} />;
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
          <WidgetHandler pageContext={pageContext} />;
        </NoAuthContainer>
      )}
    </Fragment>
  );
};
export default PageTemplate;
