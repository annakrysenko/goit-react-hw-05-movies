import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Loader } from './Loader/Loader';
// import Cast from './Cast/Cast';
// import Home from '../Pages/Home/Home';
// import Layout from './Layout/Layout';
// import MovieDetails from '../Pages/MovieDetails/MovieDetails';
// import Movies from '../Pages/Movies/Movies';
// import Reviews from './Reviews/Reviews';

const Movies = lazy(() => import('../Pages/Movies/Movies'));
const MovieDetails = lazy(() => import('../Pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const Layout = lazy(() => import('./Layout/Layout'));
const Home = lazy(() => import('../Pages/Home/Home'));

export const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path="*" element={<Home />} />
      </Routes>
    </Suspense>
  );
};

/* '/' – компонент Home, домашня сторінка зі списком популярних кінофільмів.
      '/movies' – компонент Movies, сторінка пошуку кінофільмів за ключовим
      словом. 
      '/movies/:movieId' – компонент MovieDetails, сторінка з детальною
      інформацією про кінофільм. /movies/:movieId/cast – компонент Cast,
      інформація про акторський склад. Рендериться на сторінці MovieDetails.
      /movies/:movieId/reviews – компонент Reviews, інформація про огляди.
      Рендериться на сторінці MovieDetails. */
