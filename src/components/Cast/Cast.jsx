import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'Servises/moviesAPI';
import styles from './Cast.module.css';

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500/';

const Cast = () => {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await getMovieCredits(movieId);
        setCast(data.cast);
        console.log(data.cast);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [movieId]);

  return (
    <div className={styles.container}>
      {cast && (
        <ul className={styles.list}>
          {cast.map(actor => (
            <li key={actor.id} className={styles.item}>
              <img
                src={
                  actor.profile_path
                    ? IMAGE_BASE_URL + actor.profile_path
                    : 'https://cdn.pixabay.com/photo/2015/11/03/09/03/question-mark-1019993_1280.jpg'
                }
                alt=""
                className={styles.image}
              />
              <div className={styles.info}>
                <p className={styles.actorName}>{actor.name}</p>
                <p className={styles.character}>Character: {actor.character}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
      {cast && cast.length === 0 && <p>Nothing here yet</p>}
    </div>
  );
};

export default Cast;
