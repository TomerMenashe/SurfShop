import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
  return (
    <div>
      <Header />  {/* Header is always displayed */}
      <div style={{ minHeight: '80vh' }}> {/* Main content will take up most of the page height */}
        <Outlet /> {/* Renders the matched child route's component */}
      </div>
      <Footer />  {/* Footer is always displayed */}
    </div>
  );
};

export default Layout;
