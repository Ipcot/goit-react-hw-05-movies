import { useFetchMovie } from 'hooks/useFetchMovie';
import { Box } from 'components/Box/Box';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';

export const MovieDetails = () => {
  const movieInfo = useFetchMovie();
  const IMG_PATH = 'https://image.tmdb.org/t/p/w300';

  const location = useLocation();
  const navigate = useNavigate();

  if (!movieInfo) {
    return null;
  }

  const { poster_path, vote_average, overview, genres, title } = movieInfo;

  return (
    <>
      {
        <div>
          <button
            type="button"
            onClick={() => navigate(location?.state?.from ?? '/')}
          >
            Go Back
          </button>
          <Box display="flex" px={5} py={3} borderBottom="1px solid">
            <div>
              <img
                width="200"
                src={poster_path && `${IMG_PATH}${poster_path}`}
                alt=""
              />
            </div>
            <Box px={5} py={2}>
              <Box px={5} py={2} as="h3">
                {title}
              </Box>
              <Box px={5} py={5} as="p">
                User Score: {Math.round(vote_average * 10)} %
              </Box>
              <Box px={5} py={2} as="h4">
                Overview
              </Box>
              <Box px={5} py={2} as="h5">
                {overview ? overview : <p> No overview information</p>}
              </Box>
              <Box px={5} py={4} as="h4">
                Genres:
              </Box>
              <Box px={5} py={2} as="h5">
                {genres && genres.length === 0 && <p>No info about Genres</p>}
                {genres && genres.map(item => item.name + ' ')}
              </Box>
            </Box>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            borderBottom="1px solid"
            p={4}
          >
            <h3>Additional information</h3>
            <Link to="cast" state={location.state}>
              Cast
            </Link>
            <Link to="reviews" state={location.state}>
              Review
            </Link>
          </Box>
          <Outlet />
        </div>
      }
    </>
  );
};
