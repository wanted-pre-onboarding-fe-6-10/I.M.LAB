const BASE_URL = process.env.REACT_APP_BASE_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

export async function fetchPopularMovie(page) {
  return await fetch(
    `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=ko-KR&page=${page}`
  ).then(res => res.json());
}

export async function fetchNowPlayingMovie(page) {
  return await fetch(
    `${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=ko-KR&page=${page}`
  ).then(res => res.json());
}

export async function fetchUpcomingMovie(page) {
  return await fetch(
    `${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=ko-KR&page=${page}`
  ).then(res => res.json());
}

export async function fetchTopRatedMovie(page) {
  return await fetch(
    `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=ko-KR&page=${page}`
  ).then(res => res.json());
}

export async function fetchMovieDetail(id) {
  return await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=ko-KR`).then(res =>
    res.json()
  );
}

export async function fetchSearchMovie(query, page) {
  return await fetch(
    `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=ko-KR&query=${query}&page=${page}`
  ).then(res => res.json());
}

export async function fetchSearch(query, page) {
  return await fetch(
    `${BASE_URL}/search/multi?api_key=${API_KEY}&include_adult=false&language=ko-KR&query=${query}&page=${page}`
  ).then(res => res.json());
}
export async function fetchTranding() {
  return await fetch(
    `${BASE_URL}/trending/all/day?api_key=${API_KEY}&include_adult=false&language=ko-KR`
  ).then(res => res.json());
}
