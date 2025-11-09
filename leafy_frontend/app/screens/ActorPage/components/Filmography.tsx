import { textStyle } from "@/styles/textStyles";
import { useNavigation } from "expo-router";
import React from "react";
import { Image, Pressable, ScrollView, Text, View } from "react-native";

export default function Filmography({ movies }: { movies: any }) {
  const navigator = useNavigation();
  return (
    <View style={{ borderRadius: 6, marginTop: "5%", padding: "2%", backgroundColor: "rgba(255, 255, 255, 0.05)", width: "100%", height: 180, marginBottom: 100 }}>
      <Text style={[textStyle.yellow18]}>Filmography</Text>
      <ScrollView style={[{ width: "100%", height: "100%" }]} horizontal={true} showsHorizontalScrollIndicator={false}>
        {
          movies?.map((movie: any, index: number) => {
            return (
              <Pressable key={index} style={[{
                marginRight: 5,
                width: 100,
                height: "100%",
                backgroundColor: "rgba(255, 255, 255, 0.03)",
                borderRadius: 6,
                borderWidth: 1,
                borderColor: "rgba(255, 255, 255, 0.05)",
                padding: 4,
              }]}
                onPress={() => navigator?.push("FilmDetailScreen", { currentMovieID: movie?.id })}>
                <View>
                  <Image source={{ uri: "https://image.tmdb.org/t/p/w200" + movie?.poster_path }} style={{ width: "100%", height: "100%", borderRadius: 4 }} />
                </View>
              </Pressable>
            )
          })
        }
      </ScrollView >
    </View>
  );
}