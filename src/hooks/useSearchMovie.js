import { useEffect, useState } from 'react';
import { searchMovie } from 'services/getMovies';

export const useSearchMovies = query => {
  const [searchedMovies, setSearchedMovies] = useState([]);

  useEffect(() => {
    if (query === '') {
      return;
    }

    searchMovie(query).then(setSearchedMovies);
  }, [query]);

  return searchedMovies;
};
