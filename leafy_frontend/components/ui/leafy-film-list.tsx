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
  directors: string[];
}


export default function FilmCardList({ selectedGenre, navigation }: any) {
  const [prevGenre, setPrevGenre] = useState<number>(0);
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    async function loadMovies() {
      const current = selectedGenre;
      console.warn("prevGenre: ", prevGenre, "\n");
      console.warn("current: ", selectedGenre, "\n");

      if (current !== prevGenre) {
        console.log("getMoviesByGenre");

        setPrevGenre(current);

        const data = await getFilmsByGenre(current);
        if (!data) return;

        setMovies(data);
        return;
      }

      const data = await getPopularFilms();
      if (!data) return;

      setMovies(data);

      console.log("same genre pressed — no reload");
    }
    loadMovies()
  }, [selectedGenre]);

  return (
    <View style={{ position: "relative", backgroundColor: "transparent", marginTop: "5%" }}>
      {movies?.map((movie, index) => (
        <Pressable key={index} style={[filmCardStyle.backgroundStyle, { marginBottom: 9 }]} onPress={() => {
          const id = movie.id;
          console.log("FilmID pre: ", id);
          navigation.navigate("FilmDetailScreen", { currentFilmID: id, navigation });
        }}>
          <LeafyText text={movie.title} style={filmCardStyle.filmTitleStyle} />
          <LeafyText text={movie?.directors?.at(0)} style={filmCardStyle.filmDirectorStyle} />
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