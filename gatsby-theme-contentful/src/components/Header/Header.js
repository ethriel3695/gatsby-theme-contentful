import React, { useState } from 'react';
import { Link } from 'gatsby';
import Image from 'gatsby-image';
import { FaBars } from 'react-icons/fa';
import Headroom from 'react-headroom';
// import HeaderText from '../Text/TypographyH6';
// import SimpleAppBar from './SimpleAppBar';
// import HeaderButton from '../Button/HeaderButton';
// import SwipeDrawer from '../Menu/SwipeDrawer';
// import UserMenu from '../Menu/UserMenu';
// import NavigationList from '../Menu/NavigationList';
import { useSiteMetadata } from '../../hooks/siteMetadata';
import { useBrandData } from '../../hooks/brandData';
import useIsIOS from '../../utils/useIsIOS';
// import Transition from './Transition.js';
import MenuMobile from '../Menu/MenuMobile';
import NavItem from '../Menu/NavItem';
// import SimpleDialogDemo from '../Modal/Modal';
import { useSlugList } from '../../hooks/slugList';
import { buildNav } from '../../utils/buildNav';

const isBrowser = typeof window !== 'undefined';

const Header = ({
  isAuthenticated = false,
  logout = false,
  newsletter = undefined,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const {
    loginDesc,
    title,
    isAuthApp,
    newsletterTitle,
    hasNotifications,
  } = useSiteMetadata();

  let deferredPrompt;
  if (isBrowser) {
    window.addEventListener('beforeinstallprompt', event => {
      deferredPrompt = event;
    });
  }

  const { prompt } = useIsIOS();

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

  // handleInstallEvent();

  // if (isBrowser && hasNotifications && 'Notification' in window) {
  //   Notification.requestPermission(function(status) {
  //     console.log('Notification permission status:', status);
  //   });
  // }

  const data = useBrandData();
  const navList = useSlugList();
  let navs = [];
  if (navList) {
    navs = buildNav(navList);
  }
  let brandLogo = false;
  if (data) {
    brandLogo = data.brandLogo;
  }
  const alt = `This is the logo and return to home button for the site`;
  let logo = null;
  let BrandContainer = null;

  if (brandLogo) {
    if (!brandLogo.childImageSharp && brandLogo.extension === 'svg') {
      logo = brandLogo.publicURL;
      BrandContainer = <img src={logo} className="headerLogoSize" alt={alt} />;
    } else {
      logo = brandLogo.childImageSharp.fluid;
      BrandContainer = (
        <Image fluid={logo} className="headerLogoSize" alt={alt} />
      );
    }
  } else {
    brandLogo = false;
  }
  return (
    <div className="container pt-6 pb-6 md:pt-6">
      <div className="flex justify-between items-center">
        <Link to="/">{BrandContainer}</Link>

        <button
          className="sm:hidden"
          onClick={() => setIsOpen(true)}
          aria-label="Open Menu"
        >
          <FaBars className="h-6 w-auto text-gray-900 fill-current -mt-1" />
        </button>

        <div className="hidden sm:block">
          {navs.map((nav, key) => (
            <NavItem key={`menu_desktop_link${key}`} to={nav.route}>
              {nav.label}
            </NavItem>
          ))}
        </div>
      </div>
      <MenuMobile isOpen={isOpen} setIsOpen={setIsOpen} navs={navs} />
    </div>
  );
};

export default Header;
