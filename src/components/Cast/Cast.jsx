import { Box } from 'components/Box/Box';
import { useFetchCast } from 'hooks/useFetchCast';

export const Cast = () => {
  const castInfo = useFetchCast();
  const IMG_PATH = 'https://image.tmdb.org/t/p/w185';

  if (!castInfo) {
    return;
  }

  const { cast } = castInfo;

  return (
    <div>
      <Box as="ul" p={5}>
        {cast && cast.length === 0 && <h3> No informaion about cast</h3>}
        {cast &&
          cast.map(({ name, id, profile_path, character }) => (
            <li key={id}>
              <img
                src={profile_path && `${IMG_PATH}${profile_path}`}
                alt={name}
                width="200"
              />
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
