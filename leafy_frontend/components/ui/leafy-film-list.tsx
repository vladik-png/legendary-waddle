import { getFilmsByGenre, getPopularFilms } from "@/api/tmdbApi";
import { filmCardStyle } from "@/components/styles/filmCardStyle";
import React, { useEffect, useState } from "react";
import { Image, Pressable, Text, View } from "react-native";
import { heightPercentageToDP } from "react-native-responsive-screen";
import { Float } from "react-native/Libraries/Types/CodegenTypes";

interface Genre {
  id: number;
  name: string;
}

interface Film {
  id: number;
  title: string;
  vote_average: Float;
  poster_path: string;
  directors: string[];
  release_date: string;
}


export default function FilmCardList({ selectedGenre, navigation }: any) {
  const [prevGenre, setPrevGenre] = useState<number>(0);
  const [films, setFilms] = useState<Film[]>([]);

  useEffect(() => {
    async function loadFilms() {
      const current = selectedGenre;
      console.warn("prevGenre: ", prevGenre, "\n");
      console.warn("current: ", selectedGenre, "\n");

      if (current != prevGenre) {
        console.log("getfilmsByGenre");

        setPrevGenre(current);

        const data = await getFilmsByGenre(current);
        if (!data) return;

        setFilms(data);
        return;
      }

      const data = await getPopularFilms();
      if (!data) return;

      setFilms(data);

      console.log("same genre pressed — no reload");
    }
    loadFilms()
  }, [selectedGenre]);

  return (
    <View style={{ position: "relative", backgroundColor: "transparent", marginTop: "2%", marginBottom: heightPercentageToDP("7.3%") }}>
      {films?.map((film, index) => (
        <Pressable key={index} style={[filmCardStyle.backgroundStyle]} onPress={() => {
          const id = film.id;
          console.log("FilmID pre: ", id);
          navigation.navigate("FilmDetailScreen", { currentFilmID: id, navigation });
        }}>
          <Image
            source={{ uri: "https://image.tmdb.org/t/p/w500" + film.poster_path }}
            style={filmCardStyle.filmPosterStyle}
            pointerEvents="none"
          />
          <View style={{ flexDirection: "column", height: "100%", marginLeft: "6%", justifyContent: "space-evenly" }}>
            <View style={{ flexDirection: "column", height: "70%" }}>
              <Text style={filmCardStyle.filmTitleStyle} pointerEvents="none">{film.title + ` (${film?.release_date.slice(0, 4)})`}</Text>
              <Text style={filmCardStyle.filmDirectorStyle} pointerEvents="none">{film?.directors?.at(0)}</Text>
            </View>
            <Text style={filmCardStyle.IMDbTextStyle} pointerEvents="none">{`IMDb: ${film.vote_average.toFixed(1)}`}</Text>
          </View>
        </Pressable>
      ))}
    </View>
  );
}