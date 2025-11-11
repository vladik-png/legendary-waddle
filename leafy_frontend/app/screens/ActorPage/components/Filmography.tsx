import { textStyle } from "@/styles/textStyles";
import { useNavigation } from "expo-router";
import React from "react";
import { Image, Pressable, ScrollView, Text, View } from "react-native";

export default function Filmography({ moviesByYears }: { moviesByYears: any }) {
  const navigator = useNavigation();
  return (
    <ScrollView horizontal={false} style={{ borderRadius: 6, marginTop: "5%", padding: "2%", backgroundColor: "rgba(255, 255, 255, 0.05)", width: "100%" }}>
      <View style={{ flexDirection: "column" }}>
        <Text style={[textStyle.yellow18]}>Filmography</Text>
        {
          moviesByYears?.map((movies: any, index: number) => {
            return (
              <View key={index} style={{ borderWidth: 0.5, backgroundColor: "rgba(255, 255, 255, 0.05)", borderColor: "rgba(255, 255, 255, 0.2)" }}>
                <Text style={[textStyle.yellow18]}>{movies?.year}</Text>
                <ScrollView style={[{ width: "100%", height: 160 }]} horizontal={true} showsHorizontalScrollIndicator={false}>
                  {
                    movies?.movies?.map((movie: any, index: number) => (
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
                        <Image source={{ uri: "https://image.tmdb.org/t/p/w200" + movie?.poster_path }} style={{ width: "100%", height: 160, borderRadius: 4 }} />
                      </Pressable>
                    ))
                  }
                </ScrollView>
              </View>
            )
          })
        }
      </View >
    </ScrollView >
  );
}