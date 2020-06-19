import { Link } from 'gatsby';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import React from 'react';
import Overlay from './Overlay';
import NavItem from './NavItem';

const menuItem = {
  closed: {
    opacity: 0,
    transition: {
      delay: 0,
      duration: 0,
    },
    x: -20,
  },
  open: key => ({
    opacity: 1,
    transition: {
      delay: 0.25 + key * 0.1,
      type: 'tween',
    },
    x: 0,
  }),
};

const MenuMobile = ({
  navs,
  isOpen,
  setIsOpen,
  login,
  logout,
  isAuthenticated,
  isAuthApp,
}) => {
  return (
    <Overlay isOpen={isOpen} setIsOpen={setIsOpen}>
      {(isAuthenticated && isAuthApp) || !isAuthApp ? (
        <div className="container flex flex-col justify-center">
          <ul className="text-center">
            {navs.map((nav, key) => (
              <motion.li
                className="my-3"
                animate={isOpen ? 'open' : 'closed'}
                custom={key}
                key={`menu_mobile_link${key}`}
                variants={menuItem}
              >
                <NavItem
                  key={`menu_desktop_link${key}`}
                  to={nav.route}
                  onClick={() => setIsOpen(false)}
                  className="font-semibold text-4xl text-gray-300 no-underline"
                  activeClassName="textPrimary"
                >
                  {nav.label}
                </NavItem>
              </motion.li>
            ))}
            {isAuthApp && (
              <motion.li>
                <NavItem
                  key={`menu_logout`}
                  className="font-semibold text-4xl text-gray-300 no-underline"
                  activeClassName=""
                  to={'/'}
                  onClick={() => {
                    logout();
                  }}
                >
                  Logout
                </NavItem>
              </motion.li>
            )}
          </ul>
        </div>
      ) : (
        <motion.li>
          <NavItem
            key={`menu_logout`}
            className="font-semibold text-4xl text-gray-300 no-underline"
            activeClassName=""
            to={'/'}
            onClick={() => {
              login();
            }}
          >
            Login
          </NavItem>
        </motion.li>
      )}
    </Overlay>
  );
};

MenuMobile.propTypes = {
  navs: PropTypes.arrayOf(
    PropTypes.shape({
      route: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};

export default MenuMobile;
