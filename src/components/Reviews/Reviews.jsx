import { Box } from 'components/Box/Box';
import { useReviews } from 'hooks/useReviews';

export const Reviews = () => {
  const reviews = useReviews();

  return (
    <Box as="ul" p={4}>
      {reviews.results
        ? reviews.results.map(({ author, content, id }) => (
            <Box as="li" p={3} key={id}>
              <h3>Author: {author}</h3>
              <p>{content}</p>
            </Box>
          ))
        : 'We don`t have review on this movie.'}
    </Box>
  );
};
