import { getFilmsByGenre, getPopularFilms, getSimilarFilms } from "@/api/tmdbApi";
import { filmCardStyle } from "@/components/styles/filmCardStyle";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Image, Pressable, Text, View } from "react-native";
import { heightPercentageToDP } from "react-native-responsive-screen";
import { Float } from "react-native/Libraries/Types/CodegenTypes";

interface Genre {
  id: number;
  name: string;
}

interface Film {
  id: number;
  title: string;
  vote_average: Float;
  poster_path: string;
  directors: string[];
  release_date: string;
}

interface FilmCardListParams {
  selectedGenre: number | any;
  movieID: number | any;
}

export default function FilmCardList({ selectedGenre, movieID/*for recommendations*/ }: FilmCardListParams) {
  const navigation = useNavigation();
  const [prevGenre, setPrevGenre] = useState<number>(0);
  const [movies, setMovies] = useState<Film[]>([]);

  useEffect(() => {
    async function loadmovies() {
      const current = selectedGenre;
      console.warn("prevGenre: ", prevGenre, "\n");
      console.warn("current: ", selectedGenre, "\n");

      if (movieID) {
        const data = await getSimilarFilms(movieID);

        setMovies(data);
        return;
      } else {
        if (current != prevGenre) {
          console.log("getmoviesByGenre");

          setPrevGenre(current);

          const data = await getFilmsByGenre(current);
          if (!data) return;

          setMovies(data);
          return;
        }

        if (current === 0) {
          const data = await getPopularFilms();
          if (!data) return;

          setMovies(data);
        }
      }

      console.log("same genre pressed — no reload");
    }
    loadmovies()
  }, [selectedGenre, movieID]);

  return (
    <View style={{ position: "relative", backgroundColor: "transparent", marginTop: "2%", marginBottom: heightPercentageToDP("7.3%") }}>
      {
        (movies || [])?.map((movie, index) => (
          <Pressable key={index} style={[filmCardStyle.backgroundStyle]} onPress={() => {
            const id = movie.id;
            console.log("FilmID pre: ", id);
            navigation?.push("FilmDetailScreen", { currentFilmID: id });
          }}>
            <Image
              source={{ uri: "https://image.tmdb.org/t/p/w500" + movie.poster_path }}
              style={filmCardStyle.filmPosterStyle}
              pointerEvents="none"
            />
            <View style={{ flexDirection: "column", height: "100%", marginLeft: "6%", justifyContent: "space-evenly" }}>
              <View style={{ flexDirection: "column", height: "70%" }}>
                <Text style={filmCardStyle.filmTitleStyle} pointerEvents="none">{movie.title + ` (${movie?.release_date.slice(0, 4)})`}</Text>
                <Text style={filmCardStyle.filmDirectorStyle} pointerEvents="none">{movie?.directors?.at(0)}</Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Image style={{ height: 30, width: 30 }} />
              </View>
              <Text style={filmCardStyle.IMDbTextStyle} pointerEvents="none">{`IMDb: ${movie.vote_average.toFixed(1)}`}</Text>
            </View>
          </Pressable>
        ))
      }
    </View>
  );
}