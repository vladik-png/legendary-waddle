package api

import "fmt"

type EmailVeriff struct {
	Email string `json:"email"`
}

func EmailVerification(email string) error {
	fmt.Println("Trying to veriff email address")
	return nil
}
