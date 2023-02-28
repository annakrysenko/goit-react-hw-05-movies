import React from 'react';
import {
  NavLink,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';

import { useState, useEffect } from 'react';
import { getMovieDetails } from 'Servises/moviesAPI';
import styles from './MovieDetails.module.css';

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500/';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const { data } = await getMovieDetails(movieId);

      setMovie(data);
    })();
    return () => {
      setMovie(null);
    };
  }, [movieId]);

  const movieGenres = () => {
    const genres = movie.genres.map(genre => genre.name).join(', ');
    return genres;
  };

  return (
    <>
      {movie && (
        <>
          <button
            onClick={() => navigate(location.state.back)}
            type="button"
            className={styles.back}
          >
            Back
          </button>
          <div className={styles.container}>
            <img
              src={
                movie.poster_path
                  ? IMAGE_BASE_URL + movie.poster_path
                  : 'https://cdn.pixabay.com/photo/2015/11/03/09/03/question-mark-1019993_1280.jpg'
              }
              alt={movie.title}
              className={styles.image}
            />
            <div className={styles.infoContainer}>
              <h1 className={styles.title}>
                {movie.title} ({movie.release_date.slice(0, 4)})
              </h1>
              <p className={styles.rating}>Rating: {movie.vote_average}</p>
              <h2 className={styles.overviewTitle}>Overview</h2>
              <p className={styles.overviewDisc}>{movie.overview}</p>
              <h3 className={styles.genresTitle}>Genres</h3>
              <p className={styles.genresDisc}>{movieGenres()}</p>
            </div>
          </div>
          <div className={styles.additional}>
            <h3 className={styles.additionalTitle}>Additional information</h3>
            <ul className={styles.additionalList}>
              <li className={styles.additionalItem}>
                <NavLink
                  to="cast"
                  className={({ isActive }) =>
                    isActive ? styles.active : styles.link
                  }
                >
                  {' '}
                  Cast
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="reviews"
                  className={({ isActive }) =>
                    isActive ? styles.active : styles.link
                  }
                >
                  Review
                </NavLink>
              </li>
            </ul>
          </div>

          <Outlet />
        </>
      )}
    </>
  );
};

export default MovieDetails;
