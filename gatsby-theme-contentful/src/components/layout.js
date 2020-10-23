import React from 'react';
import '../styles/style.css';
import Header from './Header/Header';
import Footer from './Footer';
import { Loading } from './Interactive/Loading';

const Layout = ({ children, ...props }) => {
  if (props.isLoading) {
    return <Loading />;
  }
  return (
    <div className="flex flex-col min-h-screen">
      <Header {...props} />
      <main className="flex-grow">{children}</main>
      <hr
        className="mt-12 border-top-2;
"
      />
      <Footer {...props} />
    </div>
  );
};

export default Layout;
