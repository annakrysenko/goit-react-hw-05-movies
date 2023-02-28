import { Loader } from 'components/Loader/Loader';
import React, { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
// import Navigation from 'components/Navigation/Navigation';
import styles from './Layout.module.css';

const Navigation = lazy(() => import('../Navigation/Navigation'));

const Layout = () => {
  return (
    <>
      <header className={styles.header}>
        <Suspense fallback={<Loader />}>
          <Navigation />
        </Suspense>
      </header>

      <Outlet />
    </>
  );
};

export default Layout;
