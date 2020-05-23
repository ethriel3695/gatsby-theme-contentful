import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'gatsby';
import classNames from 'classnames';

const NavItem = ({ children, href, classes, activeClasses, ...params }) => {
  const className =
    'ml-6 sm:ml-8 text-sm sm:text-base font-medium px-px border-b-2 pb-2 border-transparent text-gray-700 hover:text-gray-800 hover:border-blue-700 transition duration-150 ease-in-out no-underline';

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classNames(className, classes)}
      >
        {children}
      </a>
    );
  } else {
    return (
      <Link
        className={classNames(className, classes)}
        activeClassName="border-blue-700 text-gray-900 hover:border-blue-700"
        {...params}
      >
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
