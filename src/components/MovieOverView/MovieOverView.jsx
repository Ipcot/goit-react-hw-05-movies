import { useFetchMovie } from 'hooks/useFetchMovie';
import { Box } from 'components/Box/Box';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
// import { Movies } from 'pages/Movies';

export const MovieOverView = () => {
  const movie = useFetchMovie();
  const IMG_PATH = 'https://image.tmdb.org/t/p/w300';

  const location = useLocation();
  const navigate = useNavigate();

  return (
    <>
      {movie && (
        <div>
          <button
            type="button"
            onClick={() => navigate(location?.state?.from ?? '/')}
          >
            Go Back
          </button>
          <Box display="flex" px={5} py={3} borderBottom="1px solid">
            <div>
              <img width="200" src={`${IMG_PATH}${movie.poster_path}`} alt="" />
            </div>
            <Box px={5} py={2}>
              <Box px={5} py={2} as="h3">
                {movie.title}
              </Box>
              <Box px={5} py={5} as="p">
                User Score: {Math.round(movie.vote_average * 10)} %
              </Box>
              <Box px={5} py={2} as="h4">
                Overview
              </Box>
              <Box px={5} py={2} as="p">
                {movie.overview}
              </Box>
              <Box px={5} py={4} as="h4">
                Genres
              </Box>
              <Box px={5} py={2} as="p">
                {movie.genres && movie.genres.map(item => item.name + ' ')}
              </Box>
            </Box>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            borderBottom="1px solid"
            p={4}
          >
            <h3>Additinal information</h3>
            <Link to="cast">Cast</Link>
            <Link to="reviews">Review</Link>
          </Box>
          <Outlet />
        </div>
      )}
    </>
  );
};
