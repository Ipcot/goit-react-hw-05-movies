import { Box } from 'components/Box/Box';
import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { getMovies } from 'services/getMovies';
import { NavItem } from './Home.styled';

export const Home = () => {
  const [moviesInTrend, setMoviesInTrend] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getMovies().then(setMoviesInTrend);
  }, []);

  return (
    <Box as="main" p={5}>
      <Box as="h3">
        Trending Today
        <Box as="ul" p={5}>
          {moviesInTrend.map(({ id, title }) => (
            <li key={id}>
              <NavItem to={`/movies/${id}`} state={{ from: location.pathname }}>
                {title}
              </NavItem>
            </li>
          ))}
        </Box>
      </Box>
      <Outlet />
    </Box>
  );
};
