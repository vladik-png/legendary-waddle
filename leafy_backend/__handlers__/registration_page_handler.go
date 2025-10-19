package __handlers__

import (
	"encoding/json"
	"fmt"
	"leafy/api"
	"net/http"
)

func RegistrationHandler(w http.ResponseWriter, r *http.Request) {
	var newUser api.NewUser
	if err := json.NewDecoder(r.Body).Decode(&newUser); err != nil {
		return
	}

	currUser, err := api.Registration(newUser)

	if err != nil {
		return
	}

	fmt.Println("New user: " + currUser.FirstName + "successfuly registered")

	w.Header().Set("Content-type", "application/json")
	json.NewEncoder(w).Encode(currUser)
}
