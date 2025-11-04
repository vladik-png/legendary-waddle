package api

import (
	"encoding/json"
	"errors"
	"fmt"
	"io"
	"net/http"
)

func GetFilmDetails(filmID int) (Film, error) {
	url := fmt.Sprintf("%s/movie/%d?api_key=%s&append_to_response=credits,videos,images,watch/providers", TMDB_API_URL, filmID, TMDB_API_KEY)

	resp, err := http.Get(url)

	if err != nil {
		fmt.Println("Request details error ", err)
		return Film{}, errors.New("Request error in GetFilmDetails")
	}

	defer resp.Body.Close()

	body, err := io.ReadAll(resp.Body)
	if err != nil {
		fmt.Println("Read details error ", err)
		return Film{}, errors.New("Read error in GetFilmDetails")
	}

	var data Film

	if err := json.Unmarshal(body, &data); err != nil {
		fmt.Println("JSON details error ", err)
		//fmt.Println("BODY details ", string(body))
		return Film{}, errors.New("JSON unmarshal error in GetFilmDetails")
	}

	return data, nil
}

func GetHomePageFilmList() []HomePageFilmItem {
	url := fmt.Sprintf("%s/movie/popular?api_key=%s", TMDB_API_URL, TMDB_API_KEY)

	resp, err := http.Get(url)

	if err != nil {
		fmt.Println("Request error ", err)
		return []HomePageFilmItem{}
	}

	defer resp.Body.Close()

	body, err := io.ReadAll(resp.Body)
	if err != nil {
		fmt.Println("Read error ", err)
		return []HomePageFilmItem{}
	}

	var data HomePageTMDbResponse

	if err := json.Unmarshal(body, &data); err != nil {
		fmt.Println("JSON error ", err)
		//fmt.Println("BODY ", string(body))
		return nil
	}

	var films HomePageTMDbResults

	for _, f := range data.Results {
		credits, err := GetFilmDetails(f.Id)
		if err != nil {
			fmt.Println("Failed to get credits for movie:", f.Id)
			continue
		}
		var directors []string
		for _, crew := range credits.Credits.Crew {
			if crew.Job == "Director" {
				directors = append(directors, crew.Name)
			}
		}
		films.Results = append(films.Results, HomePageFilmItem{
			Id:          f.Id,
			Title:       f.Title,
			IMDbRating:  f.IMDbRating,
			Poster:      f.Poster,
			Directors:   directors,
			ReleaseDate: f.ReleaseDate,
		})
	}

	return films.Results
}

func GetHomePageFilmsByGenre(genreID string) []HomePageFilmItem {
	url := fmt.Sprintf("%s/discover/movie?api_key=%s&with_genres=%s", TMDB_API_URL, TMDB_API_KEY, genreID)

	resp, err := http.Get(url)

	if err != nil {
		fmt.Println("Request by genre error ", err)
		return nil
	}

	defer resp.Body.Close()

	body, err := io.ReadAll(resp.Body)
	if err != nil {
		fmt.Println("Read by genre error ", err)
		return nil
	}

	var data HomePageTMDbResponse

	if err := json.Unmarshal(body, &data); err != nil {
		fmt.Println("JSON by genre error ", err)
		//fmt.Println("BODY by genre ", string(body))
		return nil
	}

	var films HomePageTMDbResults

	for _, f := range data.Results {
		credits, err := GetFilmDetails(f.Id)
		if err != nil {
			fmt.Println("Failed to get credits for movie:", f.Id)
			continue
		}
		var directors []string
		for _, crew := range credits.Credits.Crew {
			if crew.Job == "Director" {
				directors = append(directors, crew.Name)
			}
		}
		films.Results = append(films.Results, HomePageFilmItem{
			Id:          f.Id,
			Title:       f.Title,
			IMDbRating:  f.IMDbRating,
			Poster:      f.Poster,
			Directors:   directors,
			ReleaseDate: f.ReleaseDate,
		})
	}

	return films.Results
}

func GetFilmGenres() []MovieGenre {
	url := fmt.Sprintf("%s/genre/movie/list?api_key=%s&language=en", TMDB_API_URL, TMDB_API_KEY)

	resp, err := http.Get(url)

	if err != nil {
		fmt.Println("Request genres error ", err)
		return nil
	}

	defer resp.Body.Close()

	body, err := io.ReadAll(resp.Body)
	if err != nil {
		fmt.Println("Read genres error ", err)
		return nil
	}

	var data MovieGenreResponse

	if err := json.Unmarshal(body, &data); err != nil {
		fmt.Println("JSON error genres ", err)
		fmt.Println("BODY genres ", string(body))
		return nil
	}

	return data.Genres
}

func GetSimilarMovies(movieID int) []HomePageFilmItem {
	url := fmt.Sprintf("%s/movie/%d/similar?api_key=%s", TMDB_API_URL, movieID, TMDB_API_KEY)

	resp, err := http.Get(url)

	if err != nil {
		fmt.Println("Request similar movies error ", err)
		return nil
	}

	defer resp.Body.Close()

	body, err := io.ReadAll(resp.Body)
	if err != nil {
		fmt.Println("Read similar movies error ", err)
		return nil
	}

	var data HomePageTMDbResponse

	if err := json.Unmarshal(body, &data); err != nil {
		fmt.Println("JSON similar movies error ", err)
		return nil
	}

	var films HomePageTMDbResults

	for _, f := range data.Results {
		credits, err := GetFilmDetails(f.Id)

		if err != nil {
			fmt.Println("Failed to get credits for movie:", f.Id)
			continue
		}

		var directors []string
		for _, crew := range credits.Credits.Crew {
			if crew.Job == "Director" {
				directors = append(directors, crew.Name)
			}
		}

		films.Results = append(films.Results, HomePageFilmItem{
			Id:          f.Id,
			Title:       f.Title,
			IMDbRating:  f.IMDbRating,
			Poster:      f.Poster,
			Directors:   directors,
			ReleaseDate: f.ReleaseDate,
		})
	}

	return films.Results
}
