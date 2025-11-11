package api

import (
	"encoding/json"
	"fmt"
	"io"
	"leafy/log"
	"net/http"
)

func getPersonMovieCredits(personID int) ActorMoviesCredits {
	url := fmt.Sprintf("%s/person/%d/movie_credits?api_key=%s", TMDB_API_URL, personID, TMDB_API_KEY)

	resp, err := http.Get(url)
	if err != nil {
		log.Failed("GetActorFilmography")
		return ActorMoviesCredits{}
	}

	defer resp.Body.Close()

	var data struct {
		Cast []FilmographyMovie `json:"cast"`
	}

	body, err := io.ReadAll(resp.Body)
	if err != nil {
		log.Failed("GetActorFilmography")
		return ActorMoviesCredits{}
	}

	if err := json.Unmarshal(body, &data); err != nil {
		log.Failed("GetActorFilmography")
		return ActorMoviesCredits{}
	}

	years := make(map[string][]FilmographyMovie)

	for _, f := range data.Cast {
		year := "Unknown"

		if len(f.ReleaseDate) >= 4 {
			year = f.ReleaseDate[:4]
			years[f.ReleaseDate[:4]] = append(years[year], f)
		}
	}

	var movies ActorMoviesCredits
	for key, value := range years {
		movies.Results = append(movies.Results, FilmographyItems{
			Year:   key,
			Movies: value,
		})
	}

	return movies
}

func getPersonDetails(personID int) PeopleDetails {
	url := fmt.Sprintf("%s/person/%d?api_key=%s", TMDB_API_URL, personID, TMDB_API_KEY)

	resp, err := http.Get(url)
	if err != nil {
		log.Failed("GetActorFilmography")
		return PeopleDetails{}
	}

	defer resp.Body.Close()

	var data PeopleDetails

	body, err := io.ReadAll(resp.Body)
	if err != nil {
		log.Failed("GetActorFilmography")
		return PeopleDetails{}
	}

	if err := json.Unmarshal(body, &data); err != nil {
		log.Failed("GetActorFilmography")
		return PeopleDetails{}
	}

	return data
}

func getPersonImages(personID int) PersonImages {
	url := fmt.Sprintf("%s/person/%d/images?api_key=%s", TMDB_API_URL, personID, TMDB_API_KEY)

	resp, err := http.Get(url)
	if err != nil {
		log.Failed("GetActorFilmography")
		return PersonImages{}
	}

	defer resp.Body.Close()

	var data PersonImages

	body, err := io.ReadAll(resp.Body)
	if err != nil {
		log.Failed("GetActorFilmography")
		return PersonImages{}
	}

	if err := json.Unmarshal(body, &data); err != nil {
		log.Failed("GetActorFilmography")
		return PersonImages{}
	}

	return data
}

func getPersonCombinedCredits(personID int) []string {
	url := fmt.Sprintf("%s/person/%d/combined_credits?api_key=%s", TMDB_API_URL, personID, TMDB_API_KEY)

	resp, err := http.Get(url)
	if err != nil {
		log.Failed("GetActorFilmography")
		return nil
	}

	defer resp.Body.Close()

	body, err := io.ReadAll(resp.Body)
	if err != nil {
		log.Failed("GetActorFilmography")
		return nil
	}

	var data Credits

	if err := json.Unmarshal(body, &data); err != nil {
		log.Failed("GetActorFilmography")
		return nil
	}

	var backdrop []string

	for _, cast := range data.Cast {
		backdrop = append(backdrop, cast.BackdropPath)
	}
	for _, crew := range data.Crew {
		backdrop = append(backdrop, crew.BackdropPath)
	}

	return backdrop
}

func GetActorFilmography(personID int) ActorDetails {
	var actor ActorDetails

	actor.Filmography = getPersonMovieCredits(personID).Results
	actor.Details = getPersonDetails(personID)
	actor.Images = getPersonImages(personID)
	actor.Backdrop = getPersonCombinedCredits(personID)

	fmt.Println("Actor filmography: ", actor.Filmography)

	return actor
}
