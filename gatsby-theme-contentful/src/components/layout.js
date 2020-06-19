import React from 'react';
// import './layout.css';
import '../styles/style.css';
import Header from './Header/Header';
import Footer from './Footer';

const Layout = ({ children, ...props }) => {
  return (
    <>
      <Header {...props} />
      {children}
      <hr className="mt-5 border-gray-800" />
      <Footer {...props} />
    </>
  );
};

export default Layout;
