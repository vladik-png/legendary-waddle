import { API_URL } from "@/api/API_CONFIG";

export async function getPopularFilms() {
  const response = await fetch(`${API_URL}/home_page/popular_films`);
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
