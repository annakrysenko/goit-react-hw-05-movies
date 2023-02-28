import React from 'react';
// import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? styles.active : styles.navLink
            }
          >
            Home
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink
            to="movies"
            className={({ isActive }) =>
              isActive ? styles.active : styles.navLink
            }
          >
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

// Navigation.propTypes = {};

export default Navigation;
