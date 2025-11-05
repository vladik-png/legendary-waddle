package __handlers__

import (
	"encoding/json"
	"fmt"
	api "leafy/api/tmdb"
	"net/http"
	"strconv"
)

type GenreRequest struct {
	Genre int `json:"genre"`
}

func PopularMoviesHandler(w http.ResponseWriter, r *http.Request) {
	data := api.GetHomePageMovieList()

	if data == nil {
		return
	}

	w.Header().Set("Content-type", "application/json")
	json.NewEncoder(w).Encode(data)
}

func MovieByGenreHandler(w http.ResponseWriter, r *http.Request) {
	genreID := r.URL.Query().Get("genre")
	if genreID == "" {
		fmt.Println("Failed to get genre id ")
		return
	}

	data := api.GetHomePageMoviesByGenre(genreID)

	w.Header().Set("Content-type", "application/json")
	json.NewEncoder(w).Encode(data)
}

func MovieGenresHandler(w http.ResponseWriter, r *http.Request) {
	data := api.GetMovieGenres()

	if data == nil {
		http.Error(w, "Failed to fetch genres", http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-type", "application/json")
	json.NewEncoder(w).Encode(data)
}

func MovieDetailsHandler(w http.ResponseWriter, r *http.Request) {
	movieID, _ := strconv.Atoi(r.URL.Query().Get("movieID"))
	data, err := api.GetMovieDetails(movieID)

	if err != nil {
		http.Error(w, "Failed to fetch details", http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-type", "application/json")
	json.NewEncoder(w).Encode(data)
}

func SimilarMoviesHandler(w http.ResponseWriter, r *http.Request) {
	movieID, _ := strconv.Atoi(r.URL.Query().Get("movieID"))
	data := api.GetSimilarMovies(movieID)

	w.Header().Set("Content-type", "application/json")
	json.NewEncoder(w).Encode(data)
}

func MovieStreamingServices(w http.ResponseWriter, r *http.Request) {
	movieID, _ := strconv.Atoi(r.URL.Query().Get("movieID"))
	data := api.GetStreamingServices(movieID)

	fmt.Println("Data: ", data)

	w.Header().Set("Content-type", "application/json")
	json.NewEncoder(w).Encode(data)
}

func ActorMoviesListHandler(w http.ResponseWriter, r *http.Request) {
	personID, _ := strconv.Atoi(r.URL.Query().Get("personID"))
	data := api.GetActorFilmography(personID)

	fmt.Println("Data: ", data)

	w.Header().Set("Content-type", "application/json")
	json.NewEncoder(w).Encode(data.Results)
}
