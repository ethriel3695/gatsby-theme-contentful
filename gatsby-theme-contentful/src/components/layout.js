import React from 'react';
import { css, Global } from '@emotion/core';
import { Layout as StyledLayout, Main } from 'theme-ui';
import './layout.css';
import Header from './Header/Header';
import Footer from './Footer';

const isBrowser = typeof window !== 'undefined';
let deferredPrompt;
if (isBrowser) {
  window.addEventListener('beforeinstallprompt', event => {
    event.preventDefault();
    deferredPrompt = event;
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then(choiceResult => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the install prompt');
      } else {
        console.log('User dismissed the install prompt');
      }
    });
  });
}

const Layout = ({ children, ...props }) => {
  return (
    <StyledLayout>
      <Global
        styles={css`
          body {
            margin: 0;
          }
        `}
      />
      <Header {...props} />
      <Main style={{ marginBottom: '30px' }}>{children}</Main>
      <Footer {...props} />
    </StyledLayout>
  );
};

export default Layout;
