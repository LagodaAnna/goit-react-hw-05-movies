import axios from 'axios';
const API_KEY = 'eb27e8cbb5d4491c458165c6bd3dc0ba';
axios.defaults.baseURL = 'https://api.themoviedb.org';

export const getTrending = async () => {
  const results = await axios.get(`/3/trending/all/day?api_key=${API_KEY}`);
  return results.data.results;
};

export const getMovieById = async id => {
  const movie = await axios.get(
    `/3/movie/${id}?api_key=${API_KEY}&language=en-US`
  );
  return movie.data;
};

export const getCast = async id => {
  const cast = await axios.get(
    `/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  );

  return cast.data.cast;
};

export const getReviews = async id => {
  const reviews = await axios.get(
    `/3/movie/${id}/reviews?api_key=${API_KEY}&language=en-US`
  );

  return reviews.data.results;
};

export const getMoviesByName = async name => {
  const movies = await axios.get(
    `/3/search/movie?api_key=${API_KEY}&query=${name}&language=en-US`
  );
  return movies.data.results;
};
