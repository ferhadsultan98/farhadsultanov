// Layout.jsx
import React from 'react';
import './Layout.scss';
import Header from './Header/Header';
import Footer from './Footer/Footer';

const Layout = ({ children }) => {
  return (
    <div className="layoutWrapper">
      <Header />
      <main className="mainContent">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
