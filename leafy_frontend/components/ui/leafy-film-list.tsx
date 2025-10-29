import { getFilmsByGenre, getPopularFilms } from "@/api/omdbApi";
import { filmCardStyle } from "@/components/styles/filmCardStyle";
import LeafyText from "@/components/ui/leafy-text";
import React, { useEffect, useState } from "react";
import { Image, Pressable, View } from "react-native";
import { Float } from "react-native/Libraries/Types/CodegenTypes";

interface Genre {
  id: number;
  name: string;
}

interface Movie {
  id: number;
  title: string;
  vote_average: Float;
  poster_path: string;
}

let prevGenreID: number = 0;

export default function FilmCardList({ selectedGenre, navigation }: any) {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    async function loadMovies() {
      let data;
      if (selectedGenre["selectedGenre"] && selectedGenre["selectedGenre"] != prevGenreID) {
        console.log("getMoviesByGenre");
        data = await getFilmsByGenre(prevGenreID = selectedGenre["selectedGenre"]);
      } else {
        data = await getPopularFilms();
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
        <Pressable key={index} style={[filmCardStyle.backgroundStyle, { marginBottom: 9 }]} onPress={() => {
          const id = movie.id;
          console.log("FilmID pre: ", id);
          navigation.navigate("FilmDetailScreen", { currentFilmID: id });
        }}>
          <LeafyText text={movie.title} style={filmCardStyle.filmTitleStyle} />
          <LeafyText text={`IMDb: ${movie.vote_average.toFixed(1)}`} style={filmCardStyle.IMDbTextStyle} />
          <Image
            source={{ uri: "https://image.tmdb.org/t/p/w500" + movie.poster_path }}
            style={filmCardStyle.filmPosterStyle}
          />
        </Pressable>
      ))}
    </View>
  );
}