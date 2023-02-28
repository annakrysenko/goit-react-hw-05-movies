import Gallery from 'components/Gallery/Gallery';
import { Searchbar } from 'components/Searchbar/Searchbar';
import React, { useEffect, useMemo } from 'react';
import { useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { getMovie } from 'Servises/moviesAPI';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  const getMoviesFromInput = query => {
    setSearchParams({ query });
  };

  const fetch = useMemo(() => {
    if (!query) {
      return;
    }
    (async () => {
      const { data } = await getMovie(query);
      setMovies(data.results);
    })();
  }, [query]);

  return (
    <>
      <Searchbar getMoviesFromInput={getMoviesFromInput} />
      <Gallery movies={movies} location={location} />
    </>
  );
};

export default Movies;
