import React from 'react';
import { getTrending } from 'Servises/moviesAPI';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Home.module.css';
import { Loader } from 'components/Loader/Loader';

const Home = () => {
  const [trendMovies, setTrendMovies] = useState([]);
  const [isLoader, setIsLoader] = useState(false);

  // const location = useLocation();
  // console.log(location);

  useEffect(() => {
    (async () => {
      setIsLoader(true);
      try {
        const { data } = await getTrending();
        setTrendMovies(data.results);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoader(false);
      }
    })();
  }, []);

  return (
    <>
      <h1 className={styles.title}>Trending movies</h1>
      {isLoader && <Loader />}
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
