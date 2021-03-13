import React from 'react';
import '../styles/global.css';
import Header from './Header/Header';
import Footer from './Footer';
import { Loading } from './Interactive/Loading';

const Layout = ({ children, ...props }) => {
  if (props.isLoading) {
    return <Loading />;
  }
  return (
    <div className="min-h-screen">
      <Header {...props} />
      <main className="flex-grow">{children}</main>
      <hr className="mt-12 border-top-2 border-solid border-gray-500" />
      <Footer {...props} />
    </div>
  );
};

export default Layout;
