package main

import (
	"fmt"
	"leafy/__handlers__"
	db_conn "leafy/db_conn"
	"net/http"

	"golang.org/x/crypto/bcrypt"
)

func corsMiddleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {

		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Header().Set("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
		w.Header().Set("Access-Control-Allow-Headers", "Content-Type")

		if r.Method == "OPTIONS" {
			w.WriteHeader(http.StatusNoContent)
			return
		}

		next.ServeHTTP(w, r)
	})
}

func attach_api_handlers() {
	/*------------Registration handlers--------------------------*/
	http.Handle("/register_new_user", corsMiddleware(http.HandlerFunc(__handlers__.RegistrationHandler)))

	/*------------Login handlers--------------------------*/
	http.Handle("/login", corsMiddleware(http.HandlerFunc(__handlers__.LoginHandler)))

	/*------------Email verification handlers--------------------------*/
	http.Handle("/email_verification", corsMiddleware(http.HandlerFunc(__handlers__.EmailVerificationHandler)))
}

func main() {
	db_conn.Conn.ConnectToDB()
	attach_api_handlers()

	hash := "$2a$10$ps3gmtnIOrIHwf7MyPLwCeiZDzv/Z04WjYw/ppO7ebjw2.X4lLXaO"
	password := "nnnnn" // заміни, якщо треба

	err := bcrypt.CompareHashAndPassword([]byte(password), []byte(hash))
	if err != nil {
		fmt.Println("❌ Wrong password:", err)
	} else {
		fmt.Println("✅ Password correct!")
	}

	fmt.Println("Hello world")
	http.ListenAndServe(":8080", nil)
}
