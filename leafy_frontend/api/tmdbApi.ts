import { API_URL } from "@/api/API_CONFIG";

export async function getPopularMovies() {
  const response = await fetch(`${API_URL}/home_page/popular_movies`);
  const data = await response.json();
  return data;
}

export async function getMovieGenres() {
  const response = await fetch(`${API_URL}/movie/all_genres`);
  const data = await response.json();
  return data;
}

export async function getMoviesByGenre(selectedGenre: number) {
  const response = await fetch(`${API_URL}/movie/by_genre?genre=${selectedGenre}`);
  const data = await response.json();
  return data;
}

export async function getDetailedMovieByID(movieID: number) {
  console.log("MovieID: ", movieID);
  const response = await fetch(`${API_URL}/movie/detailed?movieID=${movieID}`);
  const data = await response.json();
  console.log("getDetailedMovieByID called")
  return data;
}

export async function getSimilarMovies(movieID: number) {
  const response = await fetch(`${API_URL}/movie/similar?movieID=${movieID}`);
  const data = await response.json();
  return data;
}

export async function getFilmographyByPerson(personID: number) {
  const response = await fetch(`${API_URL}/person/movies_list?personID=${personID}`);
  const data = await response.json();
  return data;
}

export async function getNowPlayingMovies() {
  const response = await fetch(`${API_URL}/movie/now_playing`);
  const data = await response.json();
  return data;
}