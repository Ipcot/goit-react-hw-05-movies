import { Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle/GlobalStyle';
import { Home } from '../pages/Home';
import { Movies } from '../pages/Movies';
import { MovieDetails } from 'pages/MovieDetails';
import { MovieOverView } from './MovieOverView';

import { Layout } from './Layout';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieOverView />} />

          <Route path="movies/:movieId/details" element={<MovieDetails />} />
        </Route>
      </Routes>
      <GlobalStyle />
    </>
  );
};
