import { getMoviesByGenre, getPopularMovies } from "@/api/omdbApi";
import { filmCardStyle } from "@/components/styles/filmCardStyle";
import LeafyText from "@/components/ui/leafy-text";
import React, { useEffect, useState } from "react";
import { Image, View } from "react-native";

interface Genre {
  id: number;
  name: string;
}

interface Movie {
  id: number;
  title: string;
  poster_path: string;
}

export default function FilmCardList(selectedGenre: any) {
  const [movies, setMovies] = useState<Movie[]>([]);

  console.log("Genre rec: ", selectedGenre || "empty")

  useEffect(() => {
    async function loadMovies() {
      let data;
      if (selectedGenre["selectedGenre"]) {
        console.log("getMoviesByGenre");
        data = await getMoviesByGenre(selectedGenre["selectedGenre"]);
      } else {
        data = await getPopularMovies();
      }
      if (!data) {
        console.log("data is null")
        return;
      }

      setMovies(data);
    }
    loadMovies();
  }, [selectedGenre]);

  return (
    <View style={{ position: "relative", backgroundColor: "transparent" }}>
      {movies.map((movie, index) => (
        <View key={index} style={[filmCardStyle.backgroundStyle, { marginBottom: 9 }]}>
          <LeafyText text={movie.title} style={filmCardStyle.filmTitleStyle} />
          <LeafyText text={`IMDb: ${movie.vote_average.toFixed(1)}`} style={filmCardStyle.IMDbTextStyle} />
          <Image
            source={{ uri: movie.poster_path ? ("https://image.tmdb.org/t/p/w500" + movie.poster_path) : "https://via.placeholder.com/300" }}
            style={filmCardStyle.filmPosterStyle}
          />
        </View>
      ))}
    </View>
  );
}