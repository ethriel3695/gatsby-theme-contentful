import { Link } from 'gatsby';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import React from 'react';
import Overlay from './Overlay';

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

const MenuMobile = ({ navs, isOpen, setIsOpen }) => {
  return (
    <Overlay isOpen={isOpen} setIsOpen={setIsOpen}>
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
              <Link
                className="font-semibold text-4xl text-gray-300 no-underline"
                activeClassName="text-teal-400"
                to={nav.route}
                onClick={() => setIsOpen(false)}
              >
                {nav.label}
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
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
