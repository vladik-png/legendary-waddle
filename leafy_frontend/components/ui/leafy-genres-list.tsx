import { getFilmGenres } from "@/api/omdbApi";
import { genresInfo, genreStyle } from "@/components/styles/genreStyle";
import React, { useEffect, useState } from "react";
import { Image, Pressable, ScrollView, Text, View } from "react-native";


export default function GenresList({ setSelectedGenre }: { setSelectedGenre: (icon: number) => void }) {
  let [genreItems, setGenres] = useState<any[]>([]);

  useEffect(() => {
    async function loadMovies() {
      const data = await getFilmGenres();
      if (!data) return;

      setGenres(data);
    }
    loadMovies();
  }, []);

  return (
    <ScrollView horizontal={true}
      style={genreStyle.genreListContainer}
      contentContainerStyle={{ paddingHorizontal: 10 }}
      showsHorizontalScrollIndicator={false}
    >
      {
        genreItems.map((genre, index) => {
          const name = genre.name;
          return (
            <Pressable key={genre?.id || index} style={{ alignItems: "center" }} onPress={() => { console.log(`Genre: ${genre.id}\n`); setSelectedGenre(genre?.id); }}>
              <View style={[{ backgroundColor: genresInfo[name].color }, genreStyle.genreListItem]}>
                <Image source={genresInfo[name]?.icon} style={{ alignSelf: "center", top: 2 }} />
              </View>
              <Text style={[genreStyle.genreListItemText]}>{name}</Text>
            </Pressable>
          )
        })
      }
    </ScrollView>
  )
}