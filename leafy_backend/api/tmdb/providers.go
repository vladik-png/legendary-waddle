package api

import (
	"encoding/json"
	"fmt"
	"io"
	"net/http"
)

func GetStreamingServices(movieID int) []Provider {
	url := fmt.Sprintf("%s/movie/%d/watch/providers?api_key=%s", TMDB_API_URL, movieID, TMDB_API_KEY)

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

	var data Providers

	if err := json.Unmarshal(body, &data); err != nil {
		fmt.Println("JSON similar movies error ", err)
		return nil
	}

	return data.Results
}
