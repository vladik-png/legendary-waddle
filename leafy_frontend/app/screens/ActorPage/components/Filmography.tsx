import React from "react";
import { Pressable, ScrollView } from "react-native";
import { filmography } from "./styles";

export default function Filmography({ movies }: { movies: any }) {
  const moviesMap: Record<string, Element[]> = {};
  movies?.map((movie: any, index: number) => {
    return (
      <Pressable key={index}>

      </Pressable>
    )
  })

  return (
    <ScrollView style={[filmography.mainScrollView]}>
      {

      }
    </ScrollView>
  )
}