import { lazy } from 'react';

import { Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle/GlobalStyle';
// import { Home } from '../pages/Home';
// import { Movies } from '../pages/Movies';
// import { MovieDetails } from '../pages/MovieDetails';
import { Cast } from './Cast';
import { Reviews } from './Reviews';
// import { NotFound } from 'pages/NotFound/NotFound';
import { Layout } from './Layout';

const Home = lazy(() =>
  import('../pages/Home').then(module => ({ ...module, default: module.Home }))
);

const Movies = lazy(() =>
  import('../pages/Movies').then(module => ({
    ...module,
    default: module.Movies,
  }))
);

const MovieDetails = lazy(() =>
  import('../pages/MovieDetails').then(module => ({
    ...module,
    default: module.MovieDetails,
  }))
);

const NotFound = lazy(() =>
  import('../pages/NotFound').then(module => ({
    ...module,
    default: module.NotFound,
  }))
);

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <GlobalStyle />
    </>
  );
};
