import { getDetailedFilmByID } from "@/api/omdbApi";
import { filmDetailScreenStyle } from "@/components/styles/filmDetailScreenStyle";
import { genresInfo } from "@/components/styles/genreStyle";
import LeafyReturnArrowButton from "@/components/ui/leafy-retur-arrow-btn";
import LeafyText from "@/components/ui/leafy-text";
import React, { useEffect, useState } from "react";
import { Image, Pressable, ScrollView, Text, View } from "react-native";

interface Cast {
  adult: boolean,
  gender: number,
  id: number,
  known_for_department: string;
  name: string,
  original_name: string;
  popularity: number;
  profile_path: string;
  cast_id: number,
  character: string;
  credit_id: string;
  order: number;
};

interface Crew {
  adult: boolean;
  gender: number,
  id: number,
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number,
  profile_path: string;
  credit_id: string;
  department: string;
  job: string;
};

interface ProductionCompany {
  id: number;
  logo_path: string;
  name: string;
  origin_countriy: string;
};

interface Genre {
  id: number;
  name: string;
};

interface ProductCountry {
  iso_3166_1: string;
  name: string;
};

interface SpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
};

interface Film {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: any;
  budget: number;
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProductionCompany[];
  production_countries: ProductCountry[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  credits: {
    cast: Cast[];
    crew: Crew[];
  },
  directors: any;
};

export default function FilmDetailScreen({ route, navigation }: any) {
  const [film, setFilm] = useState<Film | null>(null);
  console.log("Film ID in filmdetailsscreen: ", route.params.currentFilmID);
  useEffect(() => {
    async function loadFilmDetails() {
      const data: Film = await getDetailedFilmByID(route.params.currentFilmID);
      if (!data) return;
      data.directors = data.credits.crew.filter(member => member.job === "Director").map(member => member.name);
      setFilm(data);
    }
    loadFilmDetails();
  }, []);

  return (
    <ScrollView style={filmDetailScreenStyle.mainScrollView}>
      <LeafyReturnArrowButton rect={{ x: "5%", y: 5 }} onPress={() => navigation.navigate("HomePageScreen")} />
      <View style={filmDetailScreenStyle.filmBasicInfo.view}>
        <View style={filmDetailScreenStyle.filmBasicInfo.posterView}>
          <Image
            source={{ uri: "https://image.tmdb.org/t/p/w500" + film?.poster_path }}
            style={{ height: "100%", width: "100%" }} />
        </View>
        <View style={filmDetailScreenStyle.filmBasicInfo.infoView.view}>
          <Text style={filmDetailScreenStyle.filmBasicInfo.infoView.title}>{film?.title}</Text>
          <View style={filmDetailScreenStyle.filmBasicInfo.infoView.yearView}>
            <Text style={filmDetailScreenStyle.yellow14}>{"Year"}</Text>
            <Text style={filmDetailScreenStyle.white14}>{`: ${film?.release_date.slice(0, 4)}`}</Text>
          </View>
          <View style={filmDetailScreenStyle.filmBasicInfo.infoView.directorView}>
            <Text style={filmDetailScreenStyle.yellow14}>{"Director"}</Text>
            <Text style={filmDetailScreenStyle.white14}>{`: ${film?.directors[0]}`}</Text>
          </View>
          <View style={filmDetailScreenStyle.filmBasicInfo.infoView.starsView}>
            <Text style={filmDetailScreenStyle.yellow14}>{"Stars: "}</Text>
            {film?.credits.cast.slice(0, Math.min(4, film?.credits.cast.length)).map((star, index) =>
              <Text key={index} style={[filmDetailScreenStyle.white14, filmDetailScreenStyle.filmBasicInfo.infoView.stars]}>{`${star.name}`}</Text>
            )}
          </View>
          <LeafyText text={`IMDb: ${film?.vote_average.toFixed(1)}`} style={filmDetailScreenStyle.filmBasicInfo.infoView.imdbText} />
        </View>
      </View>
      <ScrollView horizontal={true}
        style={filmDetailScreenStyle.filmBasicInfo.genreCellView}
        contentContainerStyle={{ paddingHorizontal: 10 }}
        showsHorizontalScrollIndicator={false}
      >
        {
          film?.genres.map((genre, index) => {
            const name: string = genre.name;
            return (
              <Pressable key={index} style={[{ alignItems: "center", backgroundColor: genresInfo[name]?.color }, filmDetailScreenStyle.filmBasicInfo.genreCell]}>
                <Text style={[filmDetailScreenStyle.filmBasicInfo.genreCellText]}>{name}</Text>
              </Pressable>
            )
          })
        }
      </ScrollView>

      <View style={{ flexDirection: "column", top: "50%", left: "5%" }}>
        <Text style={[{ width: "80%" }, filmDetailScreenStyle.yellow18]}>Overview:</Text>
        <Text style={[{ width: "90%" }, filmDetailScreenStyle.white14]}>   {film?.overview}</Text>
      </View>
    </ScrollView >
  );
}