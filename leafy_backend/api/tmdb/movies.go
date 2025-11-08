package api

import (
	"encoding/json"
	"errors"
	"fmt"
	"io"
	"leafy/log"
	"net/http"
)

func GetMovieDetails(movieID int) (Movie, error) {
	url := fmt.Sprintf("%s/movie/%d?api_key=%s&append_to_response=credits,videos,images", TMDB_API_URL, movieID, TMDB_API_KEY)

	resp, err := http.Get(url)

	if err != nil {
		fmt.Println("Request details error ", err)
		return Movie{}, errors.New("request error in GetMovieDetails")
	}

	defer resp.Body.Close()

	body, err := io.ReadAll(resp.Body)
	if err != nil {
		fmt.Println("Read details error ", err)
		return Movie{}, errors.New("read error in GetMovieDetails")
	}

	var data Movie

	if err := json.Unmarshal(body, &data); err != nil {
		fmt.Println("JSON details error ", err)
		return Movie{}, errors.New("JSON unmarshal error in GetmovieDetails")
	}

	providers, err := GetMovieProviders(movieID)
	if err != nil {
		fmt.Println("Read details error ", err)
		return Movie{}, errors.New("read error in GetMovieDetails")
	}

	data.WatchProviders = providers.Results
	return data, nil
}

func GetMovieProviders(movieID int) (Providers, error) {
	url := fmt.Sprintf("%s/movie/%d/watch/providers?api_key=%s", TMDB_API_URL, movieID, TMDB_API_KEY)

	resp, err := http.Get(url)

	if err != nil {
		fmt.Println("Request providers error ", err)
		return Providers{}, errors.New("request error in GetMovieProviders")
	}

	defer resp.Body.Close()

	body, err := io.ReadAll(resp.Body)
	if err != nil {
		fmt.Println("Read providers error ", err)
		return Providers{}, errors.New("read error in GetMovieProviders")
	}

	var data Providers

	if err := json.Unmarshal(body, &data); err != nil {
		fmt.Println("JSON providers error ", err)
		return Providers{}, errors.New("JSON unmarshal error in GetMovieProviders")
	}

	return data, nil
}

func GetHomePageMovieList() []HomePageMovieItem {
	var movies []HomePageMovieItem

	for i := 1; i < 3; i++ {
		url := fmt.Sprintf("%s/movie/popular?api_key=%s&page=%d", TMDB_API_URL, TMDB_API_KEY, i)

		resp, err := http.Get(url)

		if err != nil {
			fmt.Println("Request error ", err)
			return []HomePageMovieItem{}
		}

		defer resp.Body.Close()

		body, err := io.ReadAll(resp.Body)
		if err != nil {
			fmt.Println("Read error ", err)
			return []HomePageMovieItem{}
		}

		var data HomePageTMDbResponse

		if err := json.Unmarshal(body, &data); err != nil {
			fmt.Println("JSON error ", err)
			return nil
		}

		for _, f := range data.Results {
			credits, err := GetMovieDetails(f.Id)
			if err != nil {
				fmt.Println("Failed to get credits for movie:", f.Id)
				continue
			}
			providers, err := GetMovieProviders(f.Id)
			if err != nil {
				fmt.Println("Failed to get providers for movie:", f.Id)
				continue
			}
			var directors []string
			for _, crew := range credits.Credits.Crew {
				if crew.Job == "Director" {
					directors = append(directors, crew.Name)
				}
			}

			movies = append(movies, HomePageMovieItem{
				Id:             f.Id,
				Title:          f.Title,
				IMDbRating:     f.IMDbRating,
				Poster:         f.Poster,
				Directors:      directors,
				ReleaseDate:    f.ReleaseDate,
				WatchProviders: providers.Results,
				IMDbID:         credits.Imdb_id,
			})
		}
	}

	return movies
}

func GetHomePageMoviesByGenre(genreID string) []HomePageMovieItem {
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
		return nil
	}

	var movies HomePageTMDbResults

	for _, f := range data.Results {
		credits, err := GetMovieDetails(f.Id)
		if err != nil {
			fmt.Println("Failed to get credits for movie:", f.Id)
			continue
		}
		providers, err := GetMovieProviders(f.Id)
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
		movies.Results = append(movies.Results, HomePageMovieItem{
			Id:             f.Id,
			Title:          f.Title,
			IMDbRating:     f.IMDbRating,
			Poster:         f.Poster,
			Directors:      directors,
			ReleaseDate:    f.ReleaseDate,
			WatchProviders: providers.Results,
			IMDbID:         credits.Imdb_id,
		})
	}

	return movies.Results
}

func GetSimilarMovies(movieID int) []HomePageMovieItem {
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

	var movies HomePageTMDbResults

	for _, f := range data.Results {
		credits, err := GetMovieDetails(f.Id)

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

		movies.Results = append(movies.Results, HomePageMovieItem{
			Id:          f.Id,
			Title:       f.Title,
			IMDbRating:  f.IMDbRating,
			Poster:      f.Poster,
			Directors:   directors,
			ReleaseDate: f.ReleaseDate,
			IMDbID:      credits.Imdb_id,
		})
	}

	return movies.Results
}

func GetNowPlayingMovies() NowPlayingMoviesResponse {
	url := fmt.Sprintf("%s/movie/now_playing?api_key=%s", TMDB_API_URL, TMDB_API_KEY)
	resp, err := http.Get(url)
	if err != nil {
		log.Failed("GetNowPlayingMovies")
		return NowPlayingMoviesResponse{}
	}

	body, err := io.ReadAll(resp.Body)
	if err != nil {
		log.Failed("GetNowPlayingMovies")
		return NowPlayingMoviesResponse{}
	}

	var data NowPlayingMoviesResponse

	if err := json.Unmarshal(body, &data); err != nil {
		log.Failed("GetNowPlayingMovies")
		return NowPlayingMoviesResponse{}
	}

	return data
}
