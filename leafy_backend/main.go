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
	routes := map[string]http.HandlerFunc{
		"/register_new_user":  __handlers__.RegistrationHandler,
		"/login":              __handlers__.LoginHandler,
		"/email_verification": __handlers__.EmailVerificationHandler,

		"/movie/home_page/popular_movies": __handlers__.PopularMoviesHandler,
		"/movie/home_page/genres":         __handlers__.MovieGenresHandler,
		"/movie/home_page/by_genre":       __handlers__.MovieByGenreHandler,
		"/movie/home_page/now_playing":    __handlers__.NowPlayingMoviesHandler,

		"/movie/details":  __handlers__.MovieDetailsHandler,
		"/movie/similar":  __handlers__.SimilarMoviesHandler,
		"/movie/services": __handlers__.MovieStreamingServices,

		"/person/movies": __handlers__.ActorMoviesListHandler,

		"/user/profile": __handlers__.UserProfileHandler,
	}

	for path, handler := range routes {
		http.Handle(path, corsMiddleware(handler))
	}
}

func main() {
	db_conn.Conn.ConnectToDB()
	attach_api_handlers()

	fmt.Println("-=-=-=-=- Server START -=-=-=-=-=-")
	http.ListenAndServe(":8080", nil)
}
