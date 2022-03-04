import * as React from 'react';
import { Helmet } from 'react-helmet';

import Navbar from 'components/Navbar';
import Footer from 'components/Footer';

function Layout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <>
      <Helmet>
        <meta name="author" content="Luka Cerrutti" />
        <title>...</title>
        <meta name="description" content="..." />
        <meta name="keywords" content="..." />
        <meta name="theme-color" content="#000" />
      </Helmet>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
