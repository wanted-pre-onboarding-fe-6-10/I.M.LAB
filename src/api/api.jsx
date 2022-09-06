const BASE_URL = `${process.env.BASE_URL}`;
const API_KEY = `${process.env.API_KEY}`;

export async function fetchPopularMovie(page) {
  return fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=ko-KR&page=${page}`).then(
    res => res.json()
  );
}

export async function fetchNowPlayingMovie(page) {
  return fetch(`${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=ko-KR&page=${page}`).then(
    res => res.json()
  );
}

export async function fetchUpcomingMovie(page) {
  return fetch(`${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=ko-KR&page=${page}`).then(
    res => res.json()
  );
}

export async function fetchTopRatedMovie(page) {
  return fetch(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=ko-KR&page=${page}`).then(
    res => res.json()
  );
}

export async function fetchMovieDetail(id) {
  return fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=ko-KR`).then(res => res.json());
}

export async function fetchSearchMovie(query, page) {
  return fetch(
    `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=ko-KR&query=${query}&page=${page}`
  ).then(res => res.json());
}
