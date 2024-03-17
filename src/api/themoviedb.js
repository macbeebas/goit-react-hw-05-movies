import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const API_KEY = '70889288bed820c103dd2607e35b8e54';

const URL_TRENDING_LIST = 'https://api.themoviedb.org/3/trending/movie/day'; // [ /trending/get-trending ] - lista najpopularniejszych filmów dzisiaj w celu utworzenia kolekcji na stronie głównej.
const URL_MOVIE_SEARCH = 'https://api.themoviedb.org/3/search/movie'; // [ /search/search-movies ] - wyszukiwanie filmu po słowie kluczu na stronie filmów.
const URL_MOVIE_INFO = 'https://api.themoviedb.org/3/movie/'; // [ /movies/get-movie-details ] - zapytanie o pełną informację o filmie dla strony filmu.

// const PARAMS_API = {
//   image_type: 'photo',
//   orientation: 'horizontal',
//   safesearch: true,
//   per_page: 12,
// };

// const BASE_URL_WEEK = 'https://api.themoviedb.org/3/trending/movie/week';
// const BASE_URL_DAY = 'https://api.themoviedb.org/3/trending/movie/day';
// const URL_BY_ID = 'https://api.themoviedb.org/3/movie/';
// const URL_BY_NAME = 'https://api.themoviedb.org/3/search/movie';

export const getTrendingList = async () => {
  const url = `${URL_TRENDING_LIST}?api_key=${API_KEY}`;
  try {
    const response = await axios.get(`${url}`);
    const trendingList = response.data.results;
    return trendingList;
  } catch (error) {
    Notify.warning(`Error downloading trending movie list`);
    return;
  }
};

export async function getMovieSearch(query) {
  const url = `${URL_MOVIE_SEARCH}?api_key=${API_KEY}&query=${query}`;
  try {
    const response = await axios.get(`${url}`);
    const movies = response.data.results;
    return { movies };
  } catch (error) {
    console.log(error.message);
    Notify.warning(`the movie/s "${query}" you are looking for is/are missing`);
    return;
  }
}

export async function getMovieInfo(movie_id) {
  const url = `${URL_MOVIE_INFO}${movie_id}?api_key=${API_KEY}&language=en-US`;
  try {
    const response = await axios.get(`${url}`);
    const movie = response.data;
    return { movie };
  } catch (error) {
    console.log(error.message);
    Notify.warning(
      `Something went wrong, I can't get the movie with ID no:${movie_id}`
    );
    return;
  }
}
