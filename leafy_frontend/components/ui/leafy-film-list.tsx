import { getMoviesByGenre, getPopularMovies, getSimilarMovies } from "@/api/tmdbApi";
import { movieCardStyle } from "@/components/styles/movieCardStyle";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Image, Pressable, Text, View } from "react-native";
import { heightPercentageToDP } from "react-native-responsive-screen";
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
  release_date: string;
  providers: any;
}

interface MovieCardListParams {
  selectedGenre: number | any;
  movieID: number | any;
}

export default function MovieCardList({ selectedGenre, movieID/*for recommendations*/ }: MovieCardListParams) {
  const navigation = useNavigation();
  const [prevGenre, setPrevGenre] = useState<number>(0);
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    async function loadmovies() {
      const current = selectedGenre;
      console.warn("prevGenre: ", prevGenre, "\n");
      console.warn("current: ", selectedGenre, "\n");

      if (movieID) {
        const data = await getSimilarMovies(movieID);

        setMovies(data);
        return;
      } else {
        if (current != prevGenre) {
          console.log("getmoviesByGenre");

          setPrevGenre(current);

          const data = await getMoviesByGenre(current);
          if (!data) return;

          setMovies(data);
          return;
        }

        if (current === 0) {
          const data = await getPopularMovies();
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
          <Pressable key={index} style={[movieCardStyle?.backgroundStyle]} onPress={() => {
            const id = movie.id;
            console.log("MovieID pre: ", id);
            navigation?.push("FilmDetailScreen", { currentMovieID: id });
          }}>
            <Image
              source={{ uri: "https://image.tmdb.org/t/p/w500" + movie.poster_path }}
              style={movieCardStyle.moviePosterStyle}
              pointerEvents="none"
            />
            <View style={{ flexDirection: "column", height: "100%", marginLeft: "6%", justifyContent: "space-evenly" }}>
              <View style={{ flexDirection: "column", height: "30%" }}>
                <View style={{ flexDirection: "row", justifyContent: "flex-start" }}>
                  <Text style={movieCardStyle.movieTitleStyle}
                    pointerEvents="none"
                    numberOfLines={1}
                    ellipsizeMode="tile">{movie?.title}</Text>
                  <Text style={movieCardStyle.movieYearStyle} pointerEvents="none">{`(${movie?.release_date.slice(0, 4)})`}</Text>
                </View>
                <Text style={movieCardStyle.movieDirectorStyle} pointerEvents="none">{movie?.directors?.at(0)}</Text>
              </View>
              <View style={{ flexDirection: "row", gap: "2%", height: 20 }}>
                {
                  movie?.providers?.["US"]?.flatrate?.slice(0, (Math.min(8, movie?.providers?.["US"]?.flatrate?.length)))?.map((flat: any, index: number) => (
                    <Image key={index} source={{ uri: "https://image.tmdb.org/t/p/w500" + movie?.providers?.["US"]?.flatrate?.[index]?.logo_path }} style={{ height: 20, width: 20 }} />
                  ))
                }
              </View>
              <Text style={movieCardStyle.IMDbTextStyle} pointerEvents="none">{`IMDb: ${movie.vote_average.toFixed(1)}`}</Text>
            </View>
          </Pressable>
        )
        )
      }
    </View>
  );
}