import { getDetailedFilmByID } from "@/api/tmdbApi";
import BottomBar from "@/app/screens/bars/bottomBar";
import { filmDetailScreenStyle } from "@/components/styles/filmDetailScreenStyle";
import { genresInfo } from "@/components/styles/genreStyle";
import FilmCardList from "@/components/ui/leafy-film-list";
import LeafyReturnArrowButton from "@/components/ui/leafy-retur-arrow-btn";
import LeafyText from "@/components/ui/leafy-text";
import { useNavigation } from "expo-router";
import React, { useEffect, useState } from "react";
import { Dimensions, Image, ImageBackground, Pressable, ScrollView, Text, View } from "react-native";
import { heightPercentageToDP } from "react-native-responsive-screen";
import YoutubePlayer from "react-native-youtube-iframe";
import ActorCard from "./components/CreditsCard";
import DetailRow from "./components/DetailRow";
import { Film } from "./types";


const { width: screenW, height: screenH } = Dimensions.get("window");



export default function FilmDetailScreen({ route }: any) {
  const navigation = useNavigation();
  const [film, setFilm] = useState<Film | null>(null);
  console.log("Film ID in filmdetailsscreen: ", route.params?.currentFilmID || 13);
  useEffect(() => {
    async function loadFilmDetails() {
      const data: Film = await getDetailedFilmByID(route.params?.currentFilmID || 13);
      if (!data) return;
      data.directors = data.credits.crew?.filter(member => member.job === "Director").map(member => member.name);
      setFilm(data);
    }
    loadFilmDetails();
  }, []);

  const trailerKey = film?.videos?.results?.find(
    video => video.site === "YouTube" && video.type === "Trailer"
  )?.key;

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={require("@/assets/images/background.png")} style={{ flex: 1 }}>

        <ScrollView showsVerticalScrollIndicator={false} style={{ padding: "2%" }}>
          <LeafyReturnArrowButton style={{ marginTop: "5%", zIndex: 2 }} onPress={() => navigation.goBack()} />

          <ImageBackground
            source={{ uri: "https://image.tmdb.org/t/p/w500" + film?.images?.backdrops[0]?.file_path }}
            style={{ height: (screenH / 100) * 40, width: "104%", marginLeft: "-3%", marginRight: "-3%", marginTop: "-25%" }}>
            <View style={{ backgroundColor: "rgba(0, 0, 0, 0.75)", marginRight: "-2%", marginTop: "1%", height: heightPercentageToDP("40%") }}>

              <View style={{ flexDirection: "column", marginLeft: "3%", marginTop: "20%", justifyContent: "space-between" }}>

                <Text style={filmDetailScreenStyle.mainView.filmBasicInfo.title}
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  {film?.title}
                </Text>

                <View style={filmDetailScreenStyle.mainView.filmBasicInfo.view}>

                  <View style={filmDetailScreenStyle.mainView.filmBasicInfo.posterView}>
                    <Image
                      source={{ uri: "https://image.tmdb.org/t/p/w500" + film?.poster_path }}
                      style={{ height: "100%", width: "100%" }} />
                  </View>

                  <View style={filmDetailScreenStyle.mainView.filmBasicInfo.infoView.view}>
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
                        {
                          film?.credits?.cast?.slice(0, Math.min(4, film?.credits?.cast?.length)).map((star, index) =>
                            <Text key={index} style={[filmDetailScreenStyle.white16, filmDetailScreenStyle.mainView.filmBasicInfo.infoView.stars]}>{`${star.name}`}</Text>
                          )
                        }
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

          <View style={{ backgroundColor: "rgba(255, 255, 255, 0.05)", padding: 6, paddingTop: 0, borderWidth: 0.5, borderColor: "rgba(255, 255, 255, 0.2)", borderRadius: 12 }}>
            <Text style={[filmDetailScreenStyle.yellow18, { padding: 0, margin: 0 }]}>Genres</Text>
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

          <Text style={[{ width: "80%", marginTop: "5%" }, filmDetailScreenStyle.yellow18]}>Trailer</Text>
          <View style={{ marginLeft: "-6%", marginTop: "2%" }}>
            <YoutubePlayer height={250} width={"103%"} play={false} videoId={trailerKey} />
          </View>
          <View style={{ flexDirection: "column", marginTop: "10%" }}>
            <Text style={filmDetailScreenStyle.yellow18}>Overview</Text>
            <Text style={[{ width: "100%", textAlign: "justify" }, filmDetailScreenStyle.white16]}>   {film?.overview}</Text>
          </View>

          <View style={{ width: "100%", marginTop: "10%" }}>
            <Text style={[filmDetailScreenStyle.yellow18, { marginTop: "5%", textDecorationLine: "underline" }]}
              onPress={() => navigation.navigate("FilmCreditsScreen", { credits: film?.credits })}>Cast</Text>
            <View style={{ flexDirection: "column", borderColor: "rgba(255, 255, 255, 0.1)", borderRadius: 10, borderWidth: 1, justifyContent: "space-between", gap: 5 }}>
              {
                film?.credits?.cast?.slice(0, Math.min(6, film.credits.cast.length - 1)).map((person, index) => {
                  return (
                    <ActorCard key={index} cast={person} />
                  )
                })
              }
            </View>

            <Text style={[filmDetailScreenStyle.yellow18, { marginTop: "5%", textDecorationLine: "underline" }]}>Crew</Text>
            <View style={{ flexDirection: "column", borderColor: "rgba(255, 255, 255, 0.1)", borderRadius: 10, borderWidth: 1, justifyContent: "space-between", gap: 5 }}>
              {
                film?.credits?.crew?.slice(0, Math.min(6, film.credits.crew.length - 1))?.map((person: any, index: any) => {
                  return (
                    <ActorCard key={index} cast={person} />
                  )
                })
              }
            </View>
          </View>
          <View style={{ marginTop: "5%", marginBottom: heightPercentageToDP("5%"), backgroundColor: "rgba(255, 255, 255, 0.05)", padding: 6, paddingTop: 0, borderWidth: 0.5, borderColor: "rgba(255, 255, 255, 0.2)", borderRadius: 12 }}>
            <Text style={[filmDetailScreenStyle.yellow18]}>Details</Text>
            <View style={{ flexDirection: "column" }}>
              <DetailRow label="Release date" item={film?.release_date} prop="english_name" maxWidth="75%" />
              <DetailRow label="Spoken languages" items={film?.spoken_languages} prop="english_name" maxWidth="75%" />
              <DetailRow label="Countries" items={film?.production_countries} prop="name" maxWidth="75%" />
              <DetailRow label="Companies" items={film?.production_companies} prop="name" maxWidth="75%" />
              <DetailRow label="Revenue" item={film?.revenue + "$"} maxWidth="75%" />
              <DetailRow label="Tagline" item={film?.tagline || "Nothing"} maxWidth="75%" />
              <DetailRow label="IMDb ID" item={film?.imdb_id} maxWidth="75%" />
            </View>
          </View>


          <Text style={[filmDetailScreenStyle.yellow18]}>Similar movies</Text>
          <FilmCardList navigation={navigation} movieID={film?.id} />
        </ScrollView >
      </ImageBackground>
      <BottomBar />
    </View >
  );
}