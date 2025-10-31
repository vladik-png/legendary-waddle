import { getDetailedFilmByID } from "@/api/omdbApi";
import { filmDetailScreenStyle } from "@/components/styles/filmDetailScreenStyle";
import { genresInfo } from "@/components/styles/genreStyle";
import LeafyReturnArrowButton from "@/components/ui/leafy-retur-arrow-btn";
import LeafyText from "@/components/ui/leafy-text";
import React, { useEffect, useState } from "react";
import { Dimensions, Image, ImageBackground, Pressable, ScrollView, Text, View } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import BottomBar from "./bars/bottomBar";


const { width: screenW, height: screenH } = Dimensions.get("window");

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
  origin_country: string;
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

interface Video {
  name: string;
  key: string;
  type: string;
  site: string;
};

interface Film {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: string;
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
  videos: {
    results: Video[];
  },
  directors: any;
  images: any;
};

export default function FilmDetailScreen({ route, navigation }: any) {
  const [film, setFilm] = useState<Film | null>(null);
  console.log("Film ID in filmdetailsscreen: ", route.params.currentFilmID);
  useEffect(() => {
    async function loadFilmDetails() {
      const data: Film = await getDetailedFilmByID(route.params.currentFilmID);
      if (!data) return;
      data.directors = data.credits.crew?.filter(member => member.job === "Director").map(member => member.name);
      setFilm(data);
    }
    loadFilmDetails();
  }, []);

  const trailerKey = film?.videos?.results?.find(
    video => video.site === "YouTube" && video.type === "Trailer"
  )?.key;

  const castLength = film.credits.cast.length;

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={filmDetailScreenStyle.mainScrollView}>

        <LeafyReturnArrowButton style={{ marginTop: "5%", zIndex: 2 }} onPress={() => navigation.navigate("HomePageScreen")} />

        <ImageBackground
          source={{ uri: "https://image.tmdb.org/t/p/w500" + film?.images?.backdrops[0]?.file_path }}
          style={{ height: (screenH / 100) * 40, width: "104%", marginLeft: "-3%", marginRight: "-3%", marginTop: "-20%" }}>
          <View style={{ backgroundColor: "rgba(0, 0, 0, 0.65)", marginRight: "-2%" }}>

            <View style={{ flexDirection: "column", marginLeft: "3%", marginTop: "20%", justifyContent: "space-between" }}>

              <Text style={filmDetailScreenStyle.mainView.filmBasicInfo.title}>{film?.title}</Text>

              <View style={filmDetailScreenStyle.mainView.filmBasicInfo.view}>

                <View style={filmDetailScreenStyle.mainView.filmBasicInfo.posterView}>
                  <Image
                    source={{ uri: "https://image.tmdb.org/t/p/w500" + film?.poster_path }}
                    style={{ height: "100%", width: "100%" }} />
                </View>

                <View style={filmDetailScreenStyle.mainView.filmBasicInfo.infoView.textInfoView}>
                  <View style={filmDetailScreenStyle.mainView.filmBasicInfo.infoView.yearView}>
                    <Text style={filmDetailScreenStyle.yellow16}>{"Year"}</Text>
                    <Text style={filmDetailScreenStyle.white16}>{`: ${film?.release_date.slice(0, 4)}`}</Text>
                  </View>

                  <View style={filmDetailScreenStyle.mainView.filmBasicInfo.infoView.directorView}>
                    <Text style={filmDetailScreenStyle.yellow16}>{"Director"}</Text>
                    <Text style={filmDetailScreenStyle.white16}>{`: ${film?.directors[0]}`}</Text>
                  </View>

                  <View style={filmDetailScreenStyle.mainView.filmBasicInfo.infoView.starsView}>
                    <Text style={filmDetailScreenStyle.yellow16}>{"Stars: "}</Text>
                    {film?.credits?.cast?.slice(0, Math.min(4, film?.credits?.cast?.length)).map((star, index) =>
                      <Text key={index} style={[filmDetailScreenStyle.white16, filmDetailScreenStyle.mainView.filmBasicInfo.infoView.stars]}>{`${star.name}`}</Text>
                    )}
                  </View>

                  <View style={{ width: 100, height: 20, flexDirection: "row" }}>
                    <Text style={filmDetailScreenStyle.yellow16}>Runtime: </Text>
                    <Text style={filmDetailScreenStyle.white16}>{film?.runtime} </Text>
                    <Text style={filmDetailScreenStyle.yellow16}>min</Text>
                  </View>

                  <LeafyText text={`IMDb: ${film?.vote_average.toFixed(1)}`} style={filmDetailScreenStyle.mainView.filmBasicInfo.infoView.imdbText} />

                </View>
              </View>
            </View>
          </View>
        </ImageBackground>


        <View style={filmDetailScreenStyle.actionRow.view}>
          <Pressable style={filmDetailScreenStyle.actionRow.saveBtn}>
            <Text style={[filmDetailScreenStyle.white18, { width: "100%", textAlign: "center" }]}>Save</Text>
          </Pressable>

          <Pressable style={filmDetailScreenStyle.actionRow.markAsWatchedBtn}>
            <Text style={[filmDetailScreenStyle.white18, { width: "100%", textAlign: "center" }]}>Mark as Watched</Text>
          </Pressable>

          <Pressable style={filmDetailScreenStyle.actionRow.shareBtn}>
            <Text style={[filmDetailScreenStyle.white18, { width: "100%", textAlign: "center" }]}>Share</Text>
          </Pressable>
        </View>

        <View style={{ backgroundColor: "rgba(255, 255, 255, 0.02)", padding: 6, paddingTop: 0, borderWidth: 1, borderColor: "rgba(255, 255, 255, 0.1)", borderRadius: 5 }}>
          <Text style={[filmDetailScreenStyle.yellow18, { padding: 0, margin: 0 }]}>Genres:</Text>
          <ScrollView horizontal={true}
            style={filmDetailScreenStyle.genreCellView}
            contentContainerStyle={{ paddingHorizontal: 10 }}
            showsHorizontalScrollIndicator={false}
          >
            {
              film?.genres.map((genre, index) => {
                const name: string = genre.name;
                return (
                  <Pressable key={index} style={[filmDetailScreenStyle.genreCell, { alignItems: "center", backgroundColor: genresInfo[name]?.color, borderColor: genresInfo[name]?.borderColor }]}>
                    <Text style={[filmDetailScreenStyle.genreCellText]}>{name}</Text>
                  </Pressable>
                )
              })
            }
          </ScrollView>
        </View>

        <Text style={[{ width: "80%", marginTop: "5%" }, filmDetailScreenStyle.yellow18]}>Trailer:</Text>
        <View style={{ marginLeft: "-6%", marginTop: "2%" }}>
          <YoutubePlayer height={250} width={"110%"} play={false} videoId={trailerKey} />
        </View>
        <View style={{ flexDirection: "column", marginTop: "10%" }}>
          <Text style={filmDetailScreenStyle.yellow18}>Overview:</Text>
          <Text style={[{ width: "100%", textAlign: "justify" }, filmDetailScreenStyle.white16]}>   {film?.overview}</Text>
        </View>

        <View style={{ width: "100%", marginBottom: "25%", marginTop: "10%" }}>
          <Text style={[filmDetailScreenStyle.yellow18, { marginTop: "5%" }]}>Cast:</Text>
          <View style={{ flexDirection: "column", borderColor: "rgba(255, 255, 255, 0.05)", borderRadius: 5, borderWidth: 1, padding: 2, justifyContent: "space-between", gap: 5 }}>
            {
              film?.credits?.cast?.map((person, index) => {
                return (
                  <View key={index} style={{ flexDirection: "row", height: 84, backgroundColor: "rgba(255, 255, 255, 0.02)", borderRadius: 4, borderWidth: 1, borderColor: "rgba(255, 255, 255, 0.1)" }}>
                    <Image source={person.profile_path ? { uri: "https://image.tmdb.org/t/p/w500" + person?.profile_path } : require("@/assets/images/noPhoto.png")}
                      style={{ height: "100%", width: "25%", borderTopLeftRadius: 4, borderBottomLeftRadius: 4 }} />
                    <View style={{ flexDirection: "column", marginLeft: "5%", justifyContent: "space-between", padding: 5 }}>
                      <Text style={filmDetailScreenStyle.white18}>{person.name}</Text>
                      <Text style={filmDetailScreenStyle.white14}>{person.character}</Text>
                      <Text style={filmDetailScreenStyle.white14}>{person.known_for_department}</Text>
                    </View>
                  </View>
                )
              })
            }
          </View>

          <Text style={[filmDetailScreenStyle.yellow18, { marginTop: "5%" }]}>Crew:</Text>
          <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", borderColor: "rgba(255, 255, 255, 0.05)", borderRadius: 5, borderWidth: 1, padding: 2 }}>
            {
              film?.credits?.crew?.map((person, index) => {
                return (
                  <View key={index} style={{ justifyContent: "center", flexDirection: "column", height: 84, padding: 5, width: "32%", marginBottom: "2%", backgroundColor: "rgba(255, 255, 255, 0.02)", borderRadius: 4, borderWidth: 1, borderColor: "rgba(255, 255, 255, 0.1)" }}>
                    <Text style={[filmDetailScreenStyle.white16, { textAlign: "center" }]}>{person.name}</Text>
                    <Text style={[filmDetailScreenStyle.white12, { textAlign: "center" }]}>{person.department}</Text>
                  </View>
                )
              })
            }
          </View>
        </View>
      </ScrollView >
      <BottomBar />
    </View >
  );
}