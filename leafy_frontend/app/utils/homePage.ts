let currentGenre: number = 0;

export function getCurrentGenre() {
  return currentGenre;
}

export function setCurrentGenre(genreID: number) {
  currentGenre = genreID;
}