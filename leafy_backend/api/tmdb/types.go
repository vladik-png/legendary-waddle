package api

type WatchProvider struct {
	LogoPath        string `json:"logo_path"`
	ProviderID      int    `json:"provider_id"`
	ProviderName    string `json:"provider_name"`
	DisplayPriority int    `json:"display_priority"`
}

type CountryWatchInfo struct {
	Link     string          `json:"link"`
	Flatrate []WatchProvider `json:"flatrate"`
	Rent     []WatchProvider `json:"rent"`
	Buy      []WatchProvider `json:"buy"`
}

type Providers struct {
	ID      int                         `json:"id"`
	Results map[string]CountryWatchInfo `json:"results"`
}

type HomePageMovieItem struct {
	Id             int                         `json:"id"`
	Title          string                      `json:"title"`
	IMDbRating     float64                     `json:"vote_average"`
	Poster         string                      `json:"poster_path"`
	Directors      []string                    `json:"directors"`
	ReleaseDate    string                      `json:"release_date"`
	WatchProviders map[string]CountryWatchInfo `json:"providers"`
}
type HomePageTMDbResults struct {
	Results []HomePageMovieItem `json:"results"`
}

type HomePageTMDbResponse struct {
	Results []struct {
		Id          int     `json:"id"`
		Title       string  `json:"title"`
		IMDbRating  float64 `json:"vote_average"`
		Poster      string  `json:"poster_path"`
		ReleaseDate string  `json:"release_date"`
		Credits     struct {
			Crew []struct {
				Name string `json:"name"`
				Job  string `json:"job"`
			} `json:"crew"`
		} `json:"credits"`
		WatchProviders map[string]CountryWatchInfo `json:"providers"`
	} `json:"results"`
}

type MovieGenre struct {
	Id   int    `json:"id"`
	Name string `json:"name"`
}
type MovieGenreResponse struct {
	Genres []MovieGenre `json:"genres"`
}

type Cast struct {
	Adult                bool    `json:"adult"`
	Gender               int     `json:"gender"`
	Id                   int     `json:"id"`
	Known_for_department string  `json:"known_for_department"`
	Name                 string  `json:"name"`
	Original_name        string  `json:"original_name"`
	Popularity           float32 `json:"popularity"`
	Profile_path         string  `json:"profile_path"`
	Cast_id              int     `json:"cast_id"`
	Character            string  `json:"character"`
	Credit_id            string  `json:"credit_id"`
	Order                int     `json:"order"`
}

type Crew struct {
	Adult                bool    `json:"adult"`
	Gender               int     `json:"gender"`
	Id                   int     `json:"id"`
	Known_for_department string  `json:"known_for_department"`
	Name                 string  `json:"name"`
	Original_name        string  `json:"original_name"`
	Popularity           float32 `json:"popularity"`
	Profile_path         string  `json:"profile_path"`
	Credit_id            string  `json:"credit_id"`
	Department           string  `json:"department"`
	Job                  string  `json:"job"`
}

type ProductionCompany struct {
	Id             int    `json:"id"`
	Logo_path      string `json:"logo_path"`
	Name           string `json:"name"`
	Origin_country string `json:"origin_country"`
}

type Genre struct {
	Id   int    `json:"id"`
	Name string `json:"name"`
}

type Images struct {
	Backdrops []struct {
		AspectRatio float32 `json:"aspect_ratio"`
		Height      int     `json:"height"`
		Iso_639_1   string  `json:"iso_639_1"`
		FilePath    string  `json:"file_path"`
		VoteAverage float32 `json:"vote_average"`
		VoteCount   int     `json:"vote_count"`
		Width       int     `json:"width"`
	} `json:"backdrops"`
	Id    int `json:"id"`
	Logos []struct {
		AspectRatio float32 `json:"aspect_ratio"`
		Height      int     `json:"height"`
		Iso_639_1   string  `json:"iso_639_1"`
		FilePath    string  `json:"file_path"`
		VoteAverage float32 `json:"vote_average"`
		VoteCount   int     `json:"vote_count"`
		Width       int     `json:"width"`
	} `json:"logos"`
	Posters []struct {
		AspectRatio float32 `json:"aspect_ratio"`
		Height      int     `json:"height"`
		Iso_639_1   string  `json:"iso_639_1"`
		FilePath    string  `json:"file_path"`
		VoteAverage float32 `json:"vote_average"`
		VoteCount   int     `json:"vote_count"`
		Width       int     `json:"width"`
	} `json:"posters"`
}

type ProductionCountry struct {
	Iso_3166_1 string `json:"iso_3166_1"`
	Name       string `json:"name"`
}

type SpokenLanguage struct {
	EnglishName string `json:"english_name"`
	Iso_639_1   string `json:"iso_639_1"`
	Name        string `json:"name"`
}

type BelongsToCollection struct {
	Id            int    `json:"id"`
	Name          string `json:"name"`
	Poster_path   string `json:"poster_path"`
	Backdrop_path string `json:"backdrop_path"`
}

type Movie struct {
	Adult                 bool                `json:"adult"`
	Backdrop_path         string              `json:"backdrop_path"`
	Belongs_to_collection BelongsToCollection `json:"belongs_to_collection"`
	Budget                int                 `json:"budget"`
	Genres                []Genre             `json:"genres"`
	Homepage              string              `json:"homepage"`
	Id                    int                 `json:"id"`
	Imdb_id               string              `json:"imdb_id"`
	Original_language     string              `json:"original_language"`
	Original_title        string              `json:"original_title"`
	Overview              string              `json:"overview"`
	Popularity            float32             `json:"popularity"`
	Poster_path           string              `json:"poster_path"`
	Production_companies  []ProductionCompany `json:"production_companies"`
	Production_countries  []ProductionCountry `json:"production_countries"`
	Release_date          string              `json:"release_date"`
	Revenue               int                 `json:"revenue"`
	Runtime               int                 `json:"runtime"`
	Spoken_languages      []SpokenLanguage    `json:"spoken_languages"`
	Status                string              `json:"status"`
	Tagline               string              `json:"tagline"`
	Title                 string              `json:"title"`
	Video                 bool                `json:"video"`
	Vote_average          float32             `json:"vote_average"`
	Vote_count            int                 `json:"vote_count"`
	Credits               struct {
		Cast []Cast `json:"cast"`
		Crew []Crew `json:"crew"`
	} `json:"credits"`
	Videos struct {
		Results []struct {
			Name string `json:"name"`
			Key  string `json:"key"`
			Type string `json:"type"`
			Site string `json:"site"`
		} `json:"results"`
	} `json:"videos"`
	Images         Images                      `json:"images"`
	WatchProviders map[string]CountryWatchInfo `json:"providers"`
}

type SimilarMovies struct {
	Page         int     `json:"page"`
	Results      []Movie `json:"results"`
	TotalPages   int     `json:"total_pages"`
	TotalResults int     `json:"total_results"`
}
