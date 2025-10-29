const API_KEY = "4a65754c";
const MOVIE_ADDRESS = `http://www.omdbapi.com/?apikey=${API_KEY}`;
const POSTER_ADDRESS = `http://img.omdbapi.com/?apikey=${API_KEY}`;
import { API_URL } from "@/api/API_CONFIG";

export async function getFilmwByTitle(title: string) {
  const response = await fetch(`${MOVIE_ADDRESS}&s=${title}`)
  const data = await response.json();
  return data.Search;
}

export async function getPopularFilms() {
  const response = await fetch(`${API_URL}/home_page/popular_films`);
  const data = await response.json();
  return data;
}

export async function getFilmDetails(IMDbId: string) {
  const response = await fetch(`${MOVIE_ADDRESS}&i=${IMDbId}`)
  const data = await response.json();
  return data;
}

export async function getFilmGenres() {
  const response = await fetch(`${API_URL}/film/all_genres`);
  const data = await response.json();
  return data;
}

export async function getFilmsByGenre(selectedGenre: number) {
  const response = await fetch(`${API_URL}/film/by_genre?genre=${selectedGenre}`);
  const data = await response.json();
  return data;
}

export async function getDetailedFilmByID(filmID: number) {
  console.log("FilmID: ", filmID);
  const response = await fetch(`${API_URL}/film/detailed?filmID=${filmID}`);
  const data = await response.json();
  console.log("Details: ", data);
  return data;
}
