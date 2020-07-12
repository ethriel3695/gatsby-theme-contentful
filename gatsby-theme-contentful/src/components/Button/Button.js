import PropTypes from 'prop-types';
import React from 'react';
import Link from 'gatsby-link';

const sizes = {
  default: ``,
  lg: `py-6 px-6`,
  xl: `py-6 px-6 text-xl`,
};

const Button = ({ children, href, to, className = '', size, ...params }) => {
  const classNames =
    'inline-block px-5 py-2 m-1 font-medium leading-snug border border-transparent text-base rounded-md focus:outline-none focus:shadow-outline transition duration-150 ease-in-out bg-primary no-underline text-white';

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${sizes[size] ||
          sizes.default} ${classNames} ${className}}`}
      >
        {children}
      </a>
    );
  } else if (to) {
    return (
      <Link to={to} className={`${classNames} ${className}}`} {...params}>
        {children}
      </Link>
    );
  } else {
    return (
      <button className={`${classNames} ${className}}`} {...params}>
        {children}
      </button>
    );
  }
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
};

Button.defaultProps = {
  href: null,
};

export default Button;
