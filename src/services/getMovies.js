import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const API_KEY = '8d0bfb748265e58296653e8d81ebf420';

// const searchParams = new URLSearchParams({
//   api_key: API_KEY,
//     q: query,
//     image_type: 'photo',
//     orientation: 'horizontal',
//     safesearch: true,
//     page: page,
//     per_page: 12,
// });

export const getMovies = async () => {
  try {
    const response = await axios
      .get(`trending/all/day?api_key=${API_KEY}`)
      .then(response => response.data.results);
    // response is array
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const fetchMovieById = async id => {
  try {
    const response = await axios
      .get(`movie/${id}?api_key=${API_KEY}`)
      .then(response => response.data);

    return response;
  } catch (error) {
    console.error(error);
  }
};

export const getCast = async id => {
  const response = await axios
    .get(`movie/${id}/credits?api_key=${API_KEY}`)
    .then(response => response.data);
  return response;
};

export const getReviews = async id => {
  const response = await axios
    .get(`movie/${id}/reviews?api_key=${API_KEY}`)
    .then(response => response.data);
  return response;
};
