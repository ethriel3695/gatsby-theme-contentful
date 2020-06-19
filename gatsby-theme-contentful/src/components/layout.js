import React from 'react';
import '../styles/style.css';
import Header from './Header/Header';
import Footer from './Footer';

const Layout = ({ children, ...props }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header {...props} />
      <main class="flex-grow">{children}</main>
      <hr
        className="mt-12 border-top-2;
"
      />
      <Footer {...props} />
    </div>
  );
};

export default Layout;
