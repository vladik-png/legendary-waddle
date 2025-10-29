package main

import (
	"fmt"
	"leafy/__handlers__"
	db_conn "leafy/db_conn"
	"net/http"
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

	/*-----------------------------------------------------------------*/
	/*------------TMDb handlers--------------------------*/
	http.Handle("/home_page/popular_movies", corsMiddleware(http.HandlerFunc(__handlers__.PopularFilmsHandler)))
	http.Handle("/movies/all_genres", corsMiddleware(http.HandlerFunc(__handlers__.FilmGenresHandler)))
	http.Handle("/movies/by_genre", corsMiddleware(http.HandlerFunc(__handlers__.FilmByGenreHandler)))
}

func main() {
	db_conn.Conn.ConnectToDB()
	attach_api_handlers()

	fmt.Println("-=-=-=-=- Server START -=-=-=-=-=-")
	http.ListenAndServe(":8080", nil)
}
