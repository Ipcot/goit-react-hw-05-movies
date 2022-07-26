import { useEffect, useState } from 'react';
import { getCast } from 'services/getMovies';
import { useParams } from 'react-router-dom';

export const useFetchCast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getCast(movieId).then(setCast);
  }, [movieId]);

  return cast;
};
