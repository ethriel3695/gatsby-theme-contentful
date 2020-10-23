import React, { useState } from 'react';
import { Link } from 'gatsby';
import Image from 'gatsby-image';
import { FaBars } from 'react-icons/fa';
import { useSiteMetadata } from '../../hooks/siteMetadata';
import { useBrandData } from '../../hooks/brandData';
// import useIsIOS from '../../utils/useIsIOS';
import MenuMobile from '../Menu/MenuMobile';
import NavItem from '../Menu/NavItem';
import { useSlugList } from '../../hooks/slugList';
import { buildNav } from '../../utils/buildNav';

const Header = ({
  isAuthenticated = false,
  logout = false,
  loginWithRedirect = null,
  user = {},
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const { loginDesc, isAuthApp } = useSiteMetadata();

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
      BrandContainer = (
        <img src={logo} className="header-logo-size" alt={alt} />
      );
    } else {
      logo = brandLogo.childImageSharp.fluid;
      BrandContainer = (
        <Image fluid={logo} className="header-logo-size" alt={alt} />
      );
    }
  } else {
    brandLogo = false;
  }
  return (
    <div className="container pt-6 pb-6 md:pt-6">
      <div className="flex justify-between items-center">
        <Link to="/">{BrandContainer}</Link>
        {(isAuthenticated && isAuthApp) || !isAuthApp ? (
          <div>
            <div>
              <span id="hello">Hello, {user && user.name}!</span>{' '}
            </div>
            <button
              className="sm:hidden"
              onClick={() => setIsOpen(true)}
              aria-label="Open Menu"
            >
              <FaBars className="h-6 w-auto text-gray-900 fill-current -mt-1" />
            </button>

            <div className="hidden sm:block">
              {navs.map((nav, key) => (
                <NavItem
                  key={`menu_desktop_link${key}`}
                  to={nav.route}
                  activeClassName="border-primary-active"
                >
                  {nav.label}
                </NavItem>
              ))}
              {isAuthApp && (
                <NavItem
                  key={`menu_logout`}
                  activeClassName=""
                  to={'/'}
                  onClick={() => {
                    logout({ returnTo: window.location.origin });
                  }}
                >
                  Logout
                </NavItem>
              )}
            </div>
          </div>
        ) : (
          <NavItem
            key={`menu_login`}
            activeClassName=""
            to={'/'}
            onClick={() => {
              loginWithRedirect();
            }}
          >
            Login
          </NavItem>
        )}
      </div>
      <MenuMobile
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        navs={navs}
        login={loginWithRedirect}
        logout={logout}
        isAuthenticated={isAuthenticated}
        isAuthApp={isAuthApp}
      />
    </div>
  );
};

export default Header;
