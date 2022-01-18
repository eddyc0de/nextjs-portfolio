import { Fragment } from 'react';
import Navigation from '../navigation/Navigation';
import Footer from '../footer/Footer';

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Navigation />
      {children}
      <Footer />
    </Fragment>
  );
};

export default Layout;
