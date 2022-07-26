import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieById } from '../services/getMovies';

export const useFetchMovie = () => {
  const [movieInfo, setMovieInfo] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieById(movieId).then(setMovieInfo);
  }, [movieId]);

  return movieInfo;
};
