package __handlers__

import (
	"encoding/json"
	"fmt"
	"leafy/api"
	"net/http"
)

type GenreRequest struct {
	Genre int `json:"genre"`
}

func PopularFilmsHandler(w http.ResponseWriter, r *http.Request) {
	data := api.GetHomePageFilmList()

	if data == nil {
		return
	}

	w.Header().Set("Content-type", "application/json")
	json.NewEncoder(w).Encode(data)
}

func FilmByGenreHandler(w http.ResponseWriter, r *http.Request) {
	genreID := r.URL.Query().Get("genre")
	if genreID == "" {
		fmt.Println("Failed to get genre id ")
		return
	}

	data := api.GetHomePageFilmsByGenre(genreID)

	if data == nil {
		fmt.Println("data == nil in FilmByGenreHandler")
		return
	}

	w.Header().Set("Content-type", "application/json")
	json.NewEncoder(w).Encode(data)
}

func FilmGenresHandler(w http.ResponseWriter, r *http.Request) {
	data := api.GetFilmGenres()

	if data == nil {
		http.Error(w, "Failed to fetch genres", http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-type", "application/json")
	json.NewEncoder(w).Encode(data)
}

func FilmDetailsHandler(w http.ResponseWriter, r *http.Request) {
	flimID := r.URL.Query().Get("filmID")
	data, err := api.GetFilmDetails(filmID)

	if err != nil {
		http.Error(w, "Failed to fetch details", http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-type", "application/json")
	json.NewEncoder(w).Encode(data)
}
