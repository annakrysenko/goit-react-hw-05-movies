import { Loader } from 'components/Loader/Loader';
import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReview } from 'Servises/moviesAPI';
import styles from './Reviews.module.css';

const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();
  const [isLoader, setIsLoader] = useState(false);

  useEffect(() => {
    (async () => {
      setIsLoader(true);
      try {
        const { data } = await getMovieReview(movieId);
        setReviews(data.results);
        // console.log(data.results);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoader(false);
      }
    })();
  }, [movieId]);

  return (
    <div className={styles.container}>
      {isLoader && <Loader />}
      {(!reviews || reviews.length === 0) && (
        <p className={styles.err}>There aren't any reviews for this movie</p>
      )}
      {reviews && (
        <ul className={styles.list}>
          {reviews.map(review => (
            <li key={review.id} className={styles.item}>
              <h2 className={styles.author}>Author: {review.author}</h2>
              <p className={styles.content}>{review.content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Reviews;
