const API_KEY = "4a65754c";
const MOVIE_ADDRESS = `http://www.omdbapi.com/?apikey=${API_KEY}`;
const POSTER_ADDRESS = `http://img.omdbapi.com/?apikey=${API_KEY}`;

export async function getMoviewByTitle(title: string) {
  const response = await fetch(`${MOVIE_ADDRESS}&s=${title}`)
  const data = await response.json();
  return data.Search;
}

export async function getPopularMovies() {
  const response = await fetch(`http://3.77.77.51:8080/home_page/popular_movies`);
  const data = await response.json();
  return data;
}

export async function getMovieDetails(IMDbId: string) {
  const response = await fetch(`${MOVIE_ADDRESS}&i=${IMDbId}`)
  const data = await response.json();
  return data;
}

export async function getMovieGenres() {
  const response = await fetch(`http://3.77.77.51:8080/movies/all_genres`);
  const data = await response.json();
  return data;
}

export async function getMoviesByGenre(selectedGenre: number) {
  const response = await fetch(`http://3.77.77.51:8080/movies/by_genre?genre=${selectedGenre}`);
  const data = await response.json();
  return data;
}