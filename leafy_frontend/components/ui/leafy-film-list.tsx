import { getMovieDetails, getMoviewByTitle } from "@/api/omdbApi";
import { filmCardStyle } from "@/components/styles/filmCardStyle";
import LeafyText from "@/components/ui/leafy-text";
import React, { useEffect, useState } from "react";
import { Image, View } from "react-native";

export default function FilmCardList({ navigation }: any) {
  let [movies, setMovies] = useState<any[]>([]);

  useEffect(() => {
    async function loadMovies() {
      const data = await getMoviewByTitle('Batman');
      if (!data) return;

      const detailedMovies = await Promise.all(
        data.map(
          async (m: any) => {
            const details = await getMovieDetails(m.imdbID);
            return {
              ...m,
              imdbRating: details.imdbRating,
              Director: details.Director,
            };
          }
        )
      );

      setMovies(detailedMovies);
    }
    loadMovies();
  }, []);

  return (
    <View style={{ paddingBottom: "10%", position: "relative" }}>
      {movies.map((movie, index) => (
        <View key={movie.imdbID || index} style={[filmCardStyle.backgroundStyle, { marginBottom: 9 }]}>
          <LeafyText text={movie.Title} style={filmCardStyle.filmTitleStyle} />
          <LeafyText text={movie.Director} style={filmCardStyle.filmDirectorStyle} />
          <LeafyText text={`IMDb: ${movie.imdbRating}`} style={filmCardStyle.IMDbTextStyle} />
          <Image
            source={{ uri: movie.Poster }}
            style={filmCardStyle.filmPosterStyle}
          />
        </View>
      ))}
    </View>
  );
}