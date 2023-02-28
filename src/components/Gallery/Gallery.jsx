import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './Gallery.module.css';

const Gallery = ({ movies, location }) => {
  const backState = location.pathname + location.search;

  return (
    <div>
      <ul className={styles.list}>
        {movies.map(movie => (
          <li key={movie.id} className={styles.item}>
            <NavLink
              to={`${movie.id}`}
              state={{ back: `${backState}` }}
              className={styles.link}
            >
              {movie.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

Gallery.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default Gallery;
