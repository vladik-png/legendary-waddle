package api

import (
	"encoding/json"
	"fmt"
	"io"
	"net/http"
)

func GetMovieGenres() []MovieGenre {
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
		return nil
	}

	return data.Genres
}
