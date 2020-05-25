import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'gatsby';
import classNames from 'classnames';

const MobileNavItem = ({ children, href, classes, ...params }) => {
  const className = 'font-semibold text-4xl text-gray-300 no-underline';

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
      <Link className={classNames(className, classes)} {...params}>
        {children}
      </Link>
    );
  }
};

MobileNavItem.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
};

MobileNavItem.defaultProps = {
  href: null,
};

export default MobileNavItem;
