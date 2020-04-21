import React, { useState } from 'react';
import { Link } from 'gatsby';
import Image from 'gatsby-image';
import { makeStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import Button from '@material-ui/core/Button';
import Headroom from 'react-headroom';
import HeaderText from '../Text/TypographyH6';
import SimpleAppBar from './SimpleAppBar';
import HeaderButton from '../Button/HeaderButton';
import SwipeDrawer from '../Menu/SwipeDrawer';
import UserMenu from '../Menu/UserMenu';
import NavigationList from '../Menu/NavigationList';
import { useSiteMetadata } from '../../hooks/siteMetadata';
import { useBrandData } from '../../hooks/brandData';
import useIsIOS from '../../utils/useIsIOS';
import SimpleDialogDemo from '../Modal/Modal';

const isBrowser = typeof window !== 'undefined';

let deferredPrompt;
if (isBrowser) {
  window.addEventListener('beforeinstallprompt', event => {
    deferredPrompt = event;
  });
}

const useStyles = makeStyles({
  grow: {
    flexGrow: 1,
    textAlign: 'center',
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  plainLink: {
    color: '#eee',
    textDecoration: 'none',
    fontSize: '28px',
  },
  foregroundColor: {
    color: '#eee',
  },
  brandLogoClass: {
    width: '250px',
    height: '45px',
    margin: '5px',
  },
});

const Header = ({
  isAuthenticated = false,
  loginWithRedirect = false,
  logout = false,
  newsletter = undefined,
}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [left, setLeft] = useState(false);
  const open = Boolean(anchorEl);
  const { prompt } = useIsIOS();

  function handleMenu(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  function toogleDrawer() {
    deferredPrompt && handleInstallEvent();
    if (left) {
      setLeft(false);
    } else {
      setLeft(true);
    }
  }

  const handleInstallEvent = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      // Wait for the user to respond to the prompt
      deferredPrompt.userChoice.then(choiceResult => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the install prompt');
        } else {
          console.log('User dismissed the install prompt');
        }
      });
    }
  };

  const { loginDesc, title, isAuthApp, newsletterTitle } = useSiteMetadata();
  const data = useBrandData();
  let brandLogo = false;
  if (data) {
    brandLogo = data.brandLogo;
  }
  const classes = useStyles();
  const alt = `This is the logo and return to home button for the site`;
  let logo = null;
  let BrandContainer = null;

  if (brandLogo) {
    if (!brandLogo.childImageSharp && brandLogo.extension === 'svg') {
      logo = brandLogo.publicURL;
      BrandContainer = (
        <img className={classes.brandLogoClass} src={logo} alt={alt} />
      );
    } else {
      logo = brandLogo.childImageSharp.fluid;
      BrandContainer = (
        <Image className={classes.brandLogoClass} fluid={logo} alt={alt} />
      );
    }
  } else {
    brandLogo = false;
  }
  return (
    <Headroom>
      {prompt && ((isAuthenticated && isAuthApp) || !isAuthApp) && (
        <SimpleDialogDemo />
      )}
      <SimpleAppBar className={'appHeader'}>
        {(isAuthenticated && isAuthApp) || !isAuthApp ? (
          <HeaderButton
            className={classes.menuButton}
            aria-label="Menu"
            aria-owns={left ? 'menu-sidebar' : undefined}
            onClick={toogleDrawer}
          >
            <FontAwesomeIcon
              icon={faBars}
              className={classes.foregroundColor}
            />
          </HeaderButton>
        ) : null}
        <HeaderText className={classes.grow}>
          <Link to="/" className={classes.plainLink}>
            {brandLogo && BrandContainer}
            {title && !brandLogo && title}
          </Link>
        </HeaderText>
        {(isAuthenticated && isAuthApp) || !isAuthApp ? (
          <SwipeDrawer left={left} handleClose={toogleDrawer}>
            <NavigationList />
          </SwipeDrawer>
        ) : null}
        {newsletter ? (
          <React.Fragment>
            <a
              href={`${newsletter.publicURL}`}
              className={classes.plainLink}
              style={{ paddingRight: '15px' }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <HeaderText className={classes.grow}>
                {`${newsletterTitle}`}
              </HeaderText>
            </a>
          </React.Fragment>
        ) : null}

        <div>
          <React.Fragment>
            <HeaderButton
              aria-owns={open ? 'menu-appbar' : undefined}
              onClick={handleMenu}
            >
              <FontAwesomeIcon
                icon={faUserCircle}
                className={classes.foregroundColor}
              />
            </HeaderButton>
            {isAuthenticated && isAuthApp ? (
              <UserMenu
                anchorEl={anchorEl}
                open={open}
                handleClose={handleClose}
                logout={logout}
                isAuthenticated={isAuthenticated}
              />
            ) : null}
          </React.Fragment>
        </div>
      </SimpleAppBar>
    </Headroom>
  );
};

export default Header;
