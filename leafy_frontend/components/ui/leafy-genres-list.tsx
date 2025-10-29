import { getFilmGenres } from "@/api/omdbApi";
import { genreStyle } from "@/components/styles/genreStyle";
import React, { useEffect, useState } from "react";
import { Image, Pressable, ScrollView, Text, View } from "react-native";

let genresInfo = {
  "Action": {
    icon: require("@/assets/images/genresIcons/actionGenre.png"),
    color: "#FF3B30",
  },
  "Adventure": {
    icon: require("@/assets/images/genresIcons/adventureGenre.png"),
    color: "#FF9500"
  },
  "Animation": {
    icon: require("@/assets/images/genresIcons/animationGenre.png"),
    color: "#5AC8FA",
  },
  "Comedy": {
    icon: require("@/assets/images/genresIcons/comedyGenre.png"),
    color: "#FFD60A",
  },
  "Crime": {
    icon: require("@/assets/images/genresIcons/crimeGenre.png"),
    color: "#8E8E93",
  },
  "Documentary": {
    icon: null,
    color: "#34C759",
  },
  "Drama": {
    icon: null,
    color: "#5856D6",
  },
  "Family": {
    icon: null,
    color: "#30D158",
  },
  "Fantasy": {
    icon: require("@/assets/images/genresIcons/fantasyGenre.png"),
    color: "#AF52DE",
  },
  "History": {
    icon: require("@/assets/images/genresIcons/historyGenre.png"),
    color: "#C7C7CC",
  },
  "Horror": {
    icon: require("@/assets/images/genresIcons/horrorGenre.png"),
    color: "#FF2D55",
  },
  "Music": {
    icon: null,
    color: "#FF9F0A",
  },
  "Mystery": {
    icon: null,
    color: "#5856D6",
  },
  "Romance": {
    icon: null,
    color: "#FF6B81",
  },
  "Science Fiction": {
    icon: null,
    color: "#0A84FF",
  },
  "TV Movie": {
    icon: null,
    color: "#CFCFCF",
  },
  "Thriller": {
    icon: null,
    color: "#FF9F0A",
  },
  "War": {
    icon: null,
    color: "#8E8E93",
  },
  "Western": {
    icon: null,
    color: "#D2691E",
  }
};


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