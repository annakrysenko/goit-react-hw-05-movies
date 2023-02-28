import Gallery from 'components/Gallery/Gallery';
import { Loader } from 'components/Loader/Loader';
import { Searchbar } from 'components/Searchbar/Searchbar';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { getMovie } from 'Servises/moviesAPI';

// const Searchbar = lazy(() => import('../../components/Searchbar/Searchbar'));
// const Gallery = lazy(() => import('../../components/Gallery/Gallery'));

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const [isLoader, setIsLoader] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  const getMoviesFromInput = query => {
    setSearchParams({ query });
  };

  useEffect(() => {
    if (!query) {
      return;
    }
    (async () => {
      setIsLoader(true);
      try {
        const { data } = await getMovie(query);
        setMovies(data.results);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoader(false);
      }
    })();
  }, [query]);

  return (
    <>
      {/* <Suspense fallback={<Loader />}> */}
      <Searchbar getMoviesFromInput={getMoviesFromInput} />
      {/* </Suspense> */}
      {isLoader && <Loader />}
      <Gallery movies={movies} location={location} />
    </>
  );
};

export default Movies;
