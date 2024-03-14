import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const API_KEY = '70889288bed820c103dd2607e35b8e54';

const URL_TRENDING_LIST = 'https://api.themoviedb.org/3/trending/movie/day'; // [ /trending/get-trending ] - lista najpopularniejszych filmów dzisiaj w celu utworzenia kolekcji na stronie głównej.
const URL_SEARCH_MOVIE = 'https://api.themoviedb.org/3/search/movie'; // [ /search/search-movies ] - wyszukiwanie filmu po słowie kluczu na stronie filmów.
const URL_MOVIE_INFO = 'https://api.themoviedb.org/3/movie/'; // [ /movies/get-movie-details ] - zapytanie o pełną informację o filmie dla strony filmu.
// ('https://api.themoviedb.org/3/movie/{movie_id}/credits'); // [ /movies/get-movie-credits ] - zapytanie o informację o zespole aktorskim dla strony filmu.
// ('https://api.themoviedb.org/3/movie/{movie_id}/reviews'); // [ /movies/get-movie-reviews ] - zapytanie o recenzje dla strony filmu.

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

export async function fetchTrendingList(page) {
  const url = `${URL_TRENDING_LIST}?api_key=${API_KEY}&page=${page}`;
  try {
    const response = await axios.get(`${url}`);
    const movies = response.data.results;
    const totalPage = response.data.total_pages;
    return { movies, totalPage };
  } catch (error) {
    console.log(error.message);
    Notify.warning(`Movie is already in contacts`);
    return;
  }
}

export async function fetchMovieSearch(query) {
  const url = `${URL_SEARCH_MOVIE}?api_key=${API_KEY}&query=${query}&language=en-US`;
  try {
    const response = await axios.get(`${url}`);
    const movies = response.data.results;
    return { movies };
  } catch (error) {
    console.log(error.message);
  }
}

export async function fetchMovieInfo(movie_id) {
  const url = `${URL_MOVIE_INFO}${movie_id}?api_key=${API_KEY}&language=en-US`;
  try {
    const response = await axios.get(`${url}`);
    const movie = response.data;
    return { movie };
  } catch (error) {
    console.log(error.message);
  }
}
