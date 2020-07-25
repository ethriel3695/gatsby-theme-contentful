import PropTypes from 'prop-types';
import React from 'react';

export const ExternalLink = ({ children, href, className = '', ...params }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${className}}`}
    >
      {children}
    </a>
  );
};

ExternalLink.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
};

ExternalLink.defaultProps = {
  href: null,
};
