package __handlers__

import (
	"encoding/json"
	"leafy/api"
	"net/http"
)

func EmailVerificationHandler(w http.ResponseWriter, r *http.Request) {
	var email string
	if err := json.NewDecoder(r.Body).Decode(&email); err != nil {
		return
	}

	err := api.EmailVerification(email)

	if err != nil {
		return
	}

	w.Header().Set("Content-type", "application/json")
	json.NewEncoder(w).Encode(err)
}
