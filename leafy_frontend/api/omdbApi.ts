const API_KEY = "4a65754c";
const MOVIE_ADDRESS = `http://www.omdbapi.com/?apikey=${API_KEY}`;
const POSTER_ADDRESS = `http://img.omdbapi.com/?apikey=${API_KEY}`;


export async function getMoviewByTitle(title: string) {
  const response = await fetch(`${MOVIE_ADDRESS}&s=${title}`)
  const data = await response.json();
  return data.Search;
}

export async function getMovieDetails(IMDbId: string) {
  const response = await fetch(`${MOVIE_ADDRESS}&i=${IMDbId}`)
  const data = await response.json();
  return data;
}

