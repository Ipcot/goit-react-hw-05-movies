// import { Loader } from 'components/Loader';
import { SearchBox } from 'components/SearchBox';
import { useSearchMovies } from 'hooks/useSearchMovie';
import { useSearchParams, useLocation } from 'react-router-dom';
import { Box } from 'components/Box/Box';
import { NavItem } from 'pages/Home/Home.styled';

export const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const query = searchParams.get('query') ?? '';

  const searchedMovies = useSearchMovies(query);

  const onSubmit = value => {
    setSearchParams(value !== '' ? { query: value } : {});
  };

  if (!searchedMovies) {
    return null;
  }

  return (
    <Box display="flex" flexDirection="column">
      <SearchBox onSubmit={onSubmit} />

      {searchedMovies.length === 0 && query !== '' && (
        <Box as="h3" m="0 auto">
          No such movie found
        </Box>
      )}
      {searchedMovies.length > 0 && (
        <Box as="ul" m="0 auto">
          {searchedMovies.map(({ title, id }) => (
            <li key={id}>
              <NavItem to={`/movies/${id}`} state={{ from: location }}>
                {title}
              </NavItem>
            </li>
          ))}
        </Box>
      )}
    </Box>
  );
};
