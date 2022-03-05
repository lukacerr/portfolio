import * as React from 'react';
import { Helmet } from 'react-helmet';

import Navbar from 'components/Navbar';
import Footer from 'components/Footer';

interface Props {
  children: React.ReactNode
}

function Layout({ children }: Props): JSX.Element {
  return (
    <>
      <Helmet>
        <meta name="author" content="Luka Cerrutti" />
        <title>Luka Cerrutti</title>
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <meta name="theme-color" content="#ffb7c5" />
      </Helmet>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

export default Layout as React.FC<Props>;
