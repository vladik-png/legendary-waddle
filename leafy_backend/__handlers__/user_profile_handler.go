package __handlers__

import (
	"encoding/json"
	"leafy/api"
	"net/http"
	"strconv"
)

func UserProfileHandler(w http.ResponseWriter, r *http.Request) {
	userID, _ := strconv.Atoi(r.URL.Query().Get("userID"))

	data := api.GetUserProfileData(userID)

	w.Header().Set("Content-type", "application/json")
	json.NewEncoder(w).Encode(data)
}
