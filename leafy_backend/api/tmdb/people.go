package api

import (
	"encoding/json"
	"fmt"
	"io"
	"leafy/log"
	"net/http"
)

func getPersonMovieCredits(personID int) MovieCredits {
	url := fmt.Sprintf("%s/person/%d/movie_credits?api_key=%s", TMDB_API_URL, personID, TMDB_API_KEY)

	resp, err := http.Get(url)
	if err != nil {
		log.Failed("GetActorFilmography")
		return MovieCredits{}
	}

	defer resp.Body.Close()

	var data MovieCredits

	body, err := io.ReadAll(resp.Body)
	if err != nil {
		log.Failed("GetActorFilmography")
		return MovieCredits{}
	}

	if err := json.Unmarshal(body, &data); err != nil {
		log.Failed("GetActorFilmography")
		return MovieCredits{}
	}

	return data
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

	actor.Filmography = getPersonMovieCredits(personID)
	actor.Details = getPersonDetails(personID)
	actor.Images = getPersonImages(personID)
	actor.Backdrop = getPersonCombinedCredits(personID)

	fmt.Println("Actor backdrop: ", actor.Backdrop)

	return actor
}
