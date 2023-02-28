import React from 'react';
// import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';
import Navigation from 'components/Navigation/Navigation';
import styles from './Layout.module.css';

const Layout = () => {
  return (
    <>
      <header className={styles.header}>
        <Navigation />
      </header>

      <Outlet />
    </>
  );
};

// Layout.propTypes = {};

export default Layout;
