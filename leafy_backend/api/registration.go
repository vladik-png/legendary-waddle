package api

import (
	"errors"
	"fmt"
	"leafy/db_conn"

	"golang.org/x/crypto/bcrypt"
)

type NewUser struct {
	FirstName string `json:"firstName"`
	LastName  string `json:"lastName"`
	Email     string `json:"email"`
	Username  string `json:"username"`
	Password  string `json:"password"`
}

func Registration(newUser NewUser) (CurrentUser, error) {
	fmt.Println("Trying to register new user: password: " + newUser.Password)

	hashedPsssword, err := bcrypt.GenerateFromPassword([]byte(newUser.Password), bcrypt.DefaultCost)
	if err != nil {
		return CurrentUser{}, errors.New("Cannot insert new user into DB")
	}

	_, err = db_conn.Conn.DB.Exec("INSERT INTO users(username, email, password_hash) VALUES($1, $2, $3)",
		newUser.FirstName, newUser.LastName, newUser.Email, newUser.Username, string(hashedPsssword))

	if err != nil {
		return CurrentUser{}, errors.New("Cannot insert new user into DB")
	}

	fmt.Println("New user successfuly registered")

	return CurrentUser{1, newUser.FirstName, newUser.LastName, newUser.Username}, nil
}
