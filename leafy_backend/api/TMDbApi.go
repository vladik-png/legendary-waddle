package api

import (
	"encoding/json"
	"errors"
	"fmt"
	"io"
	"net/http"
)

type HomePageFilmItem struct {
	Id         int      `json:"id"`
	Title      string   `json:"title"`
	IMDbRating float64  `json:"vote_average"`
	Poster     string   `json:"poster_path"`
	Directors  []string `json:"directors"`
}
type HomePageTMDbResults struct {
	Results []HomePageFilmItem `json:"results"`
}

type HomePageTMDbResponse struct {
	Results []struct {
		Id         int     `json:"id"`
		Title      string  `json:"title"`
		IMDbRating float64 `json:"vote_average"`
		Poster     string  `json:"poster_path"`
		Credits    struct {
			Crew []struct {
				Name string `json:"name"`
				Job  string `json:"job"`
			} `json:"crew"`
		} `json:"credits"`
	} `json:"results"`
}

type MovieGenre struct {
	Id   int    `json:"id"`
	Name string `json:"name"`
}
type MovieGenreResponse struct {
	Genres []MovieGenre `json:"genres"`
}

type Cast struct {
	Adult                bool    `json:"adult"`
	Gender               int     `json:"gender"`
	Id                   int     `json:"id"`
	Known_for_department string  `json:"known_for_department"`
	Name                 string  `json:"name"`
	Original_name        string  `json:"original_name"`
	Popularity           float32 `json:"popularity"`
	Profile_path         string  `json:"profile_path"`
	Cast_id              int     `json:"cast_id"`
	Character            string  `json:"character"`
	Credit_id            string  `json:"credit_id"`
	Order                int     `json:"order"`
}

type Crew struct {
	Adult                bool    `json:"adult"`
	Gender               int     `json:"gender"`
	Id                   int     `json:"id"`
	Known_for_department string  `json:"known_for_department"`
	Name                 string  `json:"name"`
	Original_name        string  `json:"original_name"`
	Popularity           float32 `json:"popularity"`
	Profile_path         string  `json:"profile_path"`
	Credit_id            string  `json:"credit_id"`
	Department           string  `json:"department"`
	Job                  string  `json:"job"`
}

type ProductionCompany struct {
	Id             int    `json:"id"`
	Logo_path      string `json:"logo_path"`
	Name           string `json:"name"`
	Origin_country string `json:"origin_country"`
}

type Genre struct {
	Id   int    `json:"id"`
	Name string `json:"name"`
}

type Images struct {
	Backdrops []struct {
		AspectRatio float32 `json:"aspect_ratio"`
		Height      int     `json:"height"`
		Iso_639_1   string  `json:"iso_639_1"`
		FilePath    string  `json:"file_path"`
		VoteAverage float32 `json:"vote_average"`
		VoteCount   int     `json:"vote_count"`
		Width       int     `json:"width"`
	} `json:"backdrops"`
	Id    int `json:"id"`
	Logos []struct {
		AspectRatio float32 `json:"aspect_ratio"`
		Height      int     `json:"height"`
		Iso_639_1   string  `json:"iso_639_1"`
		FilePath    string  `json:"file_path"`
		VoteAverage float32 `json:"vote_average"`
		VoteCount   int     `json:"vote_count"`
		Width       int     `json:"width"`
	} `json:"logos"`
	Posters []struct {
		AspectRatio float32 `json:"aspect_ratio"`
		Height      int     `json:"height"`
		Iso_639_1   string  `json:"iso_639_1"`
		FilePath    string  `json:"file_path"`
		VoteAverage float32 `json:"vote_average"`
		VoteCount   int     `json:"vote_count"`
		Width       int     `json:"width"`
	} `json:"posters"`
}

type ProductionCountry struct {
	Iso_3166_1 string `json:"iso_3166_1"`
	Name       string `json:"name"`
}

type SpokenLanguage struct {
	EnglishName string `json:"english_name"`
	Iso_639_1   string `json:"iso_639_1"`
	Name        string `json:"name"`
}

type BelongsToCollection struct {
	Id            int    `json:"id"`
	Name          string `json:"name"`
	Poster_path   string `json:"poster_path"`
	Backdrop_path string `json:"backdrop_path"`
}

type Film struct {
	Adult                 bool                `json:"adult"`
	Backdrop_path         string              `json:"backdrop_path"`
	Belongs_to_collection BelongsToCollection `json:"belongs_to_collection"`
	Budget                int                 `json:"budget"`
	Genres                []Genre             `json:"genres"`
	Homepage              string              `json:"homepage"`
	Id                    int                 `json:"id"`
	Imdb_id               string              `json:"imdb_id"`
	Original_language     string              `json:"original_language"`
	Original_title        string              `json:"original_title"`
	Overview              string              `json:"overview"`
	Popularity            float32             `json:"popularity"`
	Poster_path           string              `json:"poster_path"`
	Production_companies  []ProductionCompany `json:"production_companies"`
	Production_countries  []ProductionCountry `json:"production_countries"`
	Release_date          string              `json:"release_date"`
	Revenue               int                 `json:"revenue"`
	Runtime               int                 `json:"runtime"`
	Spoken_languages      []SpokenLanguage    `json:"spoken_languages"`
	Status                string              `json:"status"`
	Tagline               string              `json:"tagline"`
	Title                 string              `json:"title"`
	Video                 bool                `json:"video"`
	Vote_average          float32             `json:"vote_average"`
	Vote_count            int                 `json:"vote_count"`
	Credits               struct {
		Cast []Cast `json:"cast"`
		Crew []Crew `json:"crew"`
	} `json:"credits"`
	Videos struct {
		Results []struct {
			Name string `json:"name"`
			Key  string `json:"key"`
			Type string `json:"type"`
			Site string `json:"site"`
		} `json:"results"`
	} `json:"videos"`
	Images Images `json:"images"`
}

func GetFilmDetails(filmID int) (Film, error) {
	url := fmt.Sprintf("%s/movie/%d?api_key=%s&append_to_response=credits,videos,images", TMDB_API_URL, filmID, TMDB_API_KEY)

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
			Id:         f.Id,
			Title:      f.Title,
			IMDbRating: f.IMDbRating,
			Poster:     f.Poster,
			Directors:  directors,
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
			Id:         f.Id,
			Title:      f.Title,
			IMDbRating: f.IMDbRating,
			Poster:     f.Poster,
			Directors:  directors,
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
