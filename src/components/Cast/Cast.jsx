// import { useFetchMovie } from 'hooks/useFetchMovie';
import { Box } from 'components/Box/Box';
import { useFetchCast } from 'hooks/useFetchCast';
// import { useParams } from 'react-router-dom';
// import { getCast } from 'services/getMovies';

export const Cast = () => {
  const castInfo = useFetchCast();
  const IMG_PATH = 'https://image.tmdb.org/t/p/w185';

  return (
    <div>
      <Box as="ul" p={5}>
        {castInfo.cast &&
          castInfo.cast.map(({ name, id, profile_path, character }) => (
            <li key={id}>
              <img src={`${IMG_PATH}${profile_path}`} alt={name} width="200" />
              <Box as="p" p={3}>
                {name}
              </Box>
              <Box as="p" p={3}>
                Character: {character}
              </Box>
            </li>
          ))}
      </Box>
    </div>
  );
};
