package HANDLERS

type Guest struct {
	Username string `json:"username"`
	Password string `json:"password"`
}

type CurrentUser struct {
	UID      uint   `json:"user_id"`
	Username string `json:"username"`
}

func Authenticate(guest Guest) CurrentUser {

}
