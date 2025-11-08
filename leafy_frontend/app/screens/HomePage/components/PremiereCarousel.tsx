import { getNowPlayingMovies } from "@/api/tmdbApi";
import { MONTH } from "@/app/utils/month";
import { nowPlayingMoviesId } from "@/app/utils/nowPlaying";
import { textStyle } from "@/components/styles/textStyles";
import { useNavigation } from "expo-router";
import React, { useEffect, useState } from "react";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { nowPlaying } from "./styles";

export default function PremiereCarousel() {
  const navigator = useNavigation();
  const [movies, setMovies] = useState<any>();

  useEffect(() => {
    async function loadMovies() {
      const data = await getNowPlayingMovies();
      if (data) {
        setMovies(data)
        nowPlayingMoviesId.length = 0;
      }
    }
    loadMovies();
  }, []);

  const maximum = movies?.dates?.maximum?.slice(5, 10);

  return (
    <ScrollView style={[nowPlaying.scrollView]} horizontal={true} showsHorizontalScrollIndicator={false}>
      {
        movies?.results?.map((movie: any, index: number) => {
          nowPlayingMoviesId.push(movie?.id);
          return (
            <Pressable key={index} style={[nowPlaying.item]}
              onPress={() => navigator?.push("FilmDetailScreen", { currentMovieID: movie?.id, inCinemas: true, maximum })}>
              <View>
                <Image source={{ uri: "https://image.tmdb.org/t/p/w500" + movie?.poster_path }} style={{ width: "100%", height: "100%", borderRadius: 4 }} />
                <View style={{ position: "absolute", top: "3%", width: "100%", backgroundColor: "rgba(50, 158, 79, 0.9)", borderWidth: 0.5, borderColor: "rgba(255, 255, 255, 0.4)" }}>
                  <Text style={[textStyle.white10, { textTransform: "uppercase", textAlign: "center", alignSelf: "center" }]}>{`till ${(maximum.slice(3, 5) + ' ' + MONTH[maximum.slice(0, 2)])}`}</Text>
                </View>
              </View>
            </Pressable>
          )
        })
      }
    </ScrollView >
  )
}

