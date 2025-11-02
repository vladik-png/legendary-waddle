import { getFilmGenres } from "@/api/tmdbApi";
import { genreStyle, genresInfo } from "@/components/styles/genreStyle";
import React, { useEffect, useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";


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
    <View style={genreStyle.genreCellView}>
      <ScrollView horizontal={true}
        style={{ width: "100%", margin: 0, borderRadius: 22, height: 44, paddingTop: 8, backgroundColor: "rgba(255, 255, 255, 0.03)" }}
        contentContainerStyle={{ paddingHorizontal: 10 }}
        showsHorizontalScrollIndicator={false}
      >
        {
          genreItems.map((genre, index) => {
            const name = genre.name;
            return (
              <Pressable key={genre?.id || index} style={[genreStyle.genreCell, { backgroundColor: genresInfo[genre.name].color, borderColor: genresInfo[genre.name]?.borderColor }]} onPress={() => { console.log(`Genre: ${genre.id}\n`); setSelectedGenre(genre?.id); }}>
                <Text style={[genreStyle.genreCellText]}>{name}</Text>
              </Pressable>
            )
          })
        }
      </ScrollView>
    </View>
  )
}