import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'gatsby';

const NavItem = ({ children, href, ...params }) => {
  const className =
    'ml-6 sm:ml-8 text-sm sm:text-base font-medium px-px border-b-2 pb-2 border-transparent text-gray-700 hover:text-gray-800 borderPrimary transition duration-150 ease-in-out no-underline';

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        {...params}
      >
        {children}
      </a>
    );
  } else {
    return (
      <Link className={className} {...params}>
        {children}
      </Link>
    );
  }
};

NavItem.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
};

NavItem.defaultProps = {
  href: null,
};

export default NavItem;
