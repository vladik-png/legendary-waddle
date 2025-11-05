import { getNowPlayingMovies } from "@/api/tmdbApi";
import { useNavigation } from "expo-router";
import React, { useEffect, useState } from "react";
import { Image, Pressable, ScrollView } from "react-native";
import { premiereMovies } from "./styles";


export default function PremiereCarousel() {
  const navigator = useNavigation();
  const [movies, setMovies] = useState<any>(null);

  useEffect(() => {
    async function loadMovies() {
      const data = await getNowPlayingMovies();
      if (data) setMovies(data);
    }
    loadMovies();
  });

  return (
    <ScrollView style={[premiereMovies.scrollView]} horizontal={true} showsHorizontalScrollIndicator={false}>
      {
        movies?.map((movie: any, index: number) => {
          return (
            <Pressable key={index} style={[premiereMovies.item]}
              onPress={() => navigator?.push("FilmDetailScreen", { currentMovieID: movie?.id })}>
              <Image source={{ uri: "https://image.tmdb.org/t/p/w500" + movie?.poster_path }} style={{ width: "100%", height: "100%", borderRadius: 4 }} />
            </Pressable>
          )
        })
      }
    </ScrollView >
  )
}