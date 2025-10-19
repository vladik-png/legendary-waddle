package __handlers__

import (
	"encoding/json"
	"leafy/api"
	"net/http"
)

func LoginHandler(w http.ResponseWriter, r *http.Request) {
	var guest api.Guest

	if err := json.NewDecoder(r.Body).Decode(&guest); err != nil {
		return
	}

	user, err := api.Login(guest)

	if err != nil {
		return
	}

	w.Header().Set("Content-type", "application/json")
	json.NewEncoder(w).Encode(user)
}
