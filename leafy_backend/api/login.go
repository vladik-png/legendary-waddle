package api

import (
	"database/sql"
	"fmt"
	"leafy/__http__"
	"leafy/db_conn"

	"golang.org/x/crypto/bcrypt"
)

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

func Login(guest Guest) (CurrentUser, int) {
	fmt.Println("Trying to login: ", guest.Email, " password: ", guest.Password)
	var user CurrentUser

	var passHash string
	err := db_conn.Conn.DB.QueryRow(`
		SELECT id, first_name, last_name,
	 	username, password_hash FROM users WHERE email=$1
	 `,
		guest.Email).Scan(
		&user.UserID,
		&user.FirstName,
		&user.LastName,
		&user.Username,
		&passHash)

	if err == sql.ErrNoRows {
		return user, __http__.ErrUserNotFound
	}

	if err != nil {
		fmt.Println("DB error: ", err)
		return user, __http__.ErrInternal
	}

	err = bcrypt.CompareHashAndPassword([]byte(passHash), []byte(guest.Password))
	if err != nil {
		fmt.Println("Failed to compare hash and password")
		return user, __http__.ErrInvalidPass
	}

	return user, __http__.OK
}
