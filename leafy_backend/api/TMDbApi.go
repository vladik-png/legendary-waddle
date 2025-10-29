package api

import (
	"encoding/json"
	"fmt"
	"io"
	"net/http"
)

type HomePageFilmItem struct {
	Title      string  `json:"title"`
	IMDbRating float64 `json:"vote_average"`
	Poster     string  `json:"poster_path"`
}
type HomePageTMDbResponse struct {
	Results []HomePageFilmItem `json:"results"`
}

type MovieGenre struct {
	Id   int    `json:"id"`
	Name string `json:"name"`
}
type MovieGenreResponse struct {
	Genres []MovieGenre `json:"genres"`
}

func GetHomePageFilmList() []HomePageFilmItem {
	url := fmt.Sprintf(TMDB_API_URL+"movie/popular?api_key=%s", TMDB_API_KEY)

	resp, err := http.Get(url)

	if err != nil {
		fmt.Println("Request error: ", err)
		return []HomePageFilmItem{}
	}

	defer resp.Body.Close()

	body, err := io.ReadAll(resp.Body)
	if err != nil {
		fmt.Println("Read error: ", err)
		return []HomePageFilmItem{}
	}

	var data HomePageTMDbResponse

	if err := json.Unmarshal(body, &data); err != nil {
		fmt.Println("JSON error: ", err)
		fmt.Println("BODY: ", string(body))
		return nil
	}

	return data.Results
}

func GetHomePageFilmsByGenre(genreID string) []HomePageFilmItem {
	url := fmt.Sprintf("%sdiscover/movie?api_key=%s&with_genres=%s", TMDB_API_URL, TMDB_API_KEY, genreID)

	resp, err := http.Get(url)

	if err != nil {
		fmt.Println("Request by genre error: ", err)
		return nil
	}

	defer resp.Body.Close()

	body, err := io.ReadAll(resp.Body)
	if err != nil {
		fmt.Println("Read by genre error: ", err)
		return nil
	}

	var data HomePageTMDbResponse

	if err := json.Unmarshal(body, &data); err != nil {
		fmt.Println("JSON by genre error: ", err)
		fmt.Println("BODY by genre: ", string(body))
		return nil
	}

	return data.Results
}

func GetFilmGenres() []MovieGenre {
	url := fmt.Sprintf("%sgenre/movie/list?api_key=%s&language=en", TMDB_API_URL, TMDB_API_KEY)

	resp, err := http.Get(url)

	if err != nil {
		fmt.Println("Request genres error: ", err)
		return nil
	}

	defer resp.Body.Close()

	body, err := io.ReadAll(resp.Body)
	if err != nil {
		fmt.Println("Read genres error: ", err)
		return nil
	}

	var data MovieGenreResponse

	if err := json.Unmarshal(body, &data); err != nil {
		fmt.Println("JSON error genres: ", err)
		fmt.Println("BODY genres: ", string(body))
		return nil
	}

	fmt.Println("BODY genres: ", string(body))
	fmt.Println("Genres: ", data.Genres)

	return data.Genres
}
