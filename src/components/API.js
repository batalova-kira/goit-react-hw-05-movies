import axios from 'axios';

const authorization =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZGRiMzc1OTU2OTc0MzQxMDAxMWYwODQ2NDE2MjM1ZiIsInN1YiI6IjY1MzZjN2Y2N2ZjYWIzMDBlYWIzNWM0NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QifJaFBfyRNeHIxkyBSq7u6hLriMTe30UhxSyJcvOFE';
const API_KEY = '4aa6e84c0a98af38e0326eca8b6e68f6';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.headers.common['Authorization'] = authorization;
axios.defaults.headers.common['Accept'] = 'application/json';
axios.defaults.params = {
  language: 'en-US',
};

export async function TrendingMovies() {
  const responce = await axios.get(`/trending/all/day?api_key=${API_KEY}`);
  return responce.data.results;
}

export const getMovieById = async movieId => {
  const responce = await axios.get(`movie/${movieId}?api_key=${API_KEY}`);
  return responce.data;
};

export const getMovieCast = async movieId => {
  const responce = await axios.get(
    `movie/${movieId}/credits?api_key=${API_KEY}`
  );
  return responce.data.cast;
};

export const getMovieReviews = async movieId => {
  const responce = await axios.get(
    `movie/${movieId}/reviews?api_key=${API_KEY}`
  );
  return responce.data;
};

export const getMovieSearch = async query => {
  const responce = await axios.get(
    `search/movie?query
=${query}&include_adult=false&api_key=${API_KEY}`
  );
  return responce.data.results;
};
