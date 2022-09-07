const BASE_URL = `${process.env.REACT_APP_BASE_URL}`;
const API_KEY = 'a92c477879b1b8dd0cd8d88a9ec7f20a';

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

export async function fetchMovieCredits(id) {
  return await fetch(`${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}&language=ko-KR`).then(
    res => res.json()
  );
}

export async function fetchImage() {
  return await fetch(`https://image.tmdb.org/t/p/w500/bApc0wbQ8O1DHt3AdLAM5hECmXX.jpg`).then(res =>
    res.json()
  );
}

export async function fetchReview(id) {
  return await fetch(`${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}&language=ko-KR`).then(
    res => res.json()
  );
}
