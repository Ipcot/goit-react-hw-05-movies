import { useFetchMovie } from 'hooks/useFetchMovie';
// import { Movies } from 'pages/Movies';

export const MovieOverView = () => {
  const movie = useFetchMovie();
  console.log(movie);
  return (
    <div>
      {movie && (
        <div>
          <button type="button">Go Back</button>
          <div>
            <img src="" alt="" />
            <div>
              <h3>{movie.title}</h3>
              <h4>Overview</h4>
              <p>{movie.overview}</p>
              <h4>Genres</h4>
              <p>{movie.genres > 0 && movie.genres.map(item => item.name)}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
