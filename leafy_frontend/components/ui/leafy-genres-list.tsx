import { genreStyle } from "@/components/styles/genreStyle";
import React from "react";
import { ScrollView, Text, View } from "react-native";

const genreItems = [
  {
    backgroundColor: "#7B6C6D",
    text: "History",
    icon: "",
  },
  {
    backgroundColor: "#26DE81",
    text: "Fantasy",
    icon: "",
  },
  {
    backgroundColor: "#A65EEA",
    text: "Horror",
    icon: "",
  },
]

export default function GenresList({ navigation }: any) {

  return (
    <ScrollView horizontal={true}
      style={genreStyle.genreListContainer}
      contentContainerStyle={{ paddingHorizontal: 10 }}
      showsHorizontalScrollIndicator={false}
    >
      {
        genreItems.map((genre, index) => (
          <View key={index} style={{ alignItems: "center" }}>
            <View style={[genreStyle.genreListItem, { backgroundColor: genre.backgroundColor }]}>
            </View>
            <Text style={[genreStyle.genreListItemText]}>{genre.text}</Text>
          </View>
        ))
      }
    </ScrollView>
  )
}