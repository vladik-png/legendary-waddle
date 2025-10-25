package __handlers__

import (
	"encoding/json"
	"fmt"
	"leafy/__http__"
	"leafy/api"
	"net/http"
)

func LoginHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Println("LoginHandled call")
	var guest api.Guest

	if err := json.NewDecoder(r.Body).Decode(&guest); err != nil {
		__http__.SendError(w, __http__.ErrBadRequest)
		return
	}

	user, httpErr := api.Login(guest)

	if httpErr != __http__.OK {
		__http__.SendError(w, httpErr)
		return
	}

	data := map[string]interface{}{
		"user": user,
	}

	__http__.SendSuccess(w, data)
}
