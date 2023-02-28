import React from 'react';
import { getTrending } from 'Servises/moviesAPI';
import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styles from './Home.module.css';

const Home = () => {
  const [trendMovies, setTrendMovies] = useState([]);
  const location = useLocation();
  console.log(location);

  useEffect(() => {
    (async () => {
      const { data } = await getTrending();
      setTrendMovies(data.results);
    })();
  }, []);

  return (
    <>
      <h1 className={styles.title}>Trending movies</h1>
      <ul className={styles.list}>
        {trendMovies.map(movie => {
          return (
            movie.title && (
              <li key={movie.id} className={styles.item}>
                <NavLink
                  to={`movies/${movie.id}`}
                  state={{ back: '/' }}
                  className={styles.link}
                >
                  {movie.title ? movie.title : movie.name}
                </NavLink>
              </li>
            )
          );
        })}
      </ul>
    </>
  );
};

export default Home;
