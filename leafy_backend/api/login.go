package api

import "fmt"

type Guest struct {
	Email    string `json:"email"`
	Password string `json:"password"`
}

type CurrentUser struct {
	UserID    uint   `json:"userID"`
	FirstName string `json:"firstName"`
	LastName  string `json:"lastName"`
	Username  string `json:"username"`
}

func Login(guest Guest) (CurrentUser, error) {
	fmt.Println("Trying to login")
	return CurrentUser{}, nil
}
