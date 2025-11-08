import { getDetailedMovieByID } from "@/api/tmdbApi";
import BottomBar from "@/app/screens/bars/bottomBar";
import { MONTH } from "@/app/utils/month";
import { genresInfo } from "@/components/styles/genreStyle";
import { textStyle } from "@/components/styles/textStyles";
import MovieCardList from "@/components/ui/leafy-film-list";
import LeafyReturnArrowButton from "@/components/ui/leafy-retur-arrow-btn";
import { useNavigation } from "expo-router";
import React, { useEffect, useState } from "react";
import { Dimensions, Image, ImageBackground, Linking, Pressable, ScrollView, Text, View } from "react-native";
import { heightPercentageToDP } from "react-native-responsive-screen";
import YoutubePlayer from "react-native-youtube-iframe";
import ActorCard from "./components/CreditsCard";
import DetailRow from "./components/DetailRow";
import { movieDetailScreenStyle } from "./styles";
import { Movie } from "./types";


const { width: screenW, height: screenH } = Dimensions.get("window");

export default function MovieDetailScreen({ route }: any) {
  const navigation = useNavigation();
  const [movie, setMovie] = useState<Movie | null>(null);
  console.log("Movie ID in moviedetailsscreen: ", route.params?.currentMovieID || 13);

  const inCinemas: boolean = route.params?.inCinemas;
  const maximum = route.params?.maximum;

  useEffect(() => {
    async function loadMovieDetails() {
      const data: Movie = await getDetailedMovieByID(route.params?.currentMovieID || 13);
      if (!data) return;
      data.directors = data.credits.crew?.filter(member => member.job === "Director").map(member => member.name);
      setMovie(data);
    }
    loadMovieDetails();
  }, []);

  const trailerKey = movie?.videos?.results?.find(
    video => video.site === "YouTube" && video.type === "Trailer"
  )?.key;

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={require("@/assets/images/background.png")} style={{ flex: 1 }}>

        <ScrollView showsVerticalScrollIndicator={false} style={{ padding: "2%" }}>
          <LeafyReturnArrowButton style={{ marginTop: "5%", zIndex: 2 }} onPress={() => navigation.goBack()} />

          <ImageBackground
            source={{ uri: "https://image.tmdb.org/t/p/w500" + movie?.images?.backdrops[movie?.images?.backdrops?.length - 1]?.file_path }}
            style={movieDetailScreenStyle.ImageBackground}>
            <View style={{ backgroundColor: "rgba(0, 0, 0, 0.75)", marginRight: "-2%", marginTop: "1%", height: heightPercentageToDP("40%") }}>

              <View style={{ flexDirection: "column", marginLeft: "3%", marginTop: "20%", justifyContent: "space-between" }}>

                <Text style={movieDetailScreenStyle.mainView.movieBasicInfo.title}
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  {movie?.title}
                </Text>

                <View style={movieDetailScreenStyle.mainView.movieBasicInfo.view}>

                  <View style={movieDetailScreenStyle.mainView.movieBasicInfo.posterView}>
                    <Image
                      source={{ uri: "https://image.tmdb.org/t/p/w500" + movie?.poster_path }}
                      style={{ height: "100%", width: "100%" }} />
                    {
                      inCinemas ? (
                        <View style={{ position: "absolute", top: "3%", width: "100%", backgroundColor: "rgba(50, 158, 79, 0.9)" }}>
                          <Text style={[textStyle.white12, { textTransform: "uppercase", textAlign: "center", alignSelf: "center" }]}>{`In cinemas till ${(maximum.slice(3, 5) + ' ' + MONTH[maximum.slice(0, 2)])}`}</Text>
                        </View>
                      ) : (<></>)
                    }
                  </View>

                  <View style={movieDetailScreenStyle.mainView.movieBasicInfo.infoView.view}>
                    <View style={movieDetailScreenStyle.mainView.movieBasicInfo.infoView.textInfoView}>
                      <View style={movieDetailScreenStyle.mainView.movieBasicInfo.infoView.yearView}>
                        <Text style={movieDetailScreenStyle.yellow16}>{"Year"}</Text>
                        <Text style={movieDetailScreenStyle.white16}>{`: ${movie?.release_date.slice(0, 4)}`}</Text>
                      </View>

                      <View style={movieDetailScreenStyle.mainView.movieBasicInfo.infoView.directorView}>
                        <Text style={movieDetailScreenStyle.yellow16}>{"Director"}</Text>
                        <Text style={movieDetailScreenStyle.white16}>{`: ${movie?.directors[0]}`}</Text>
                      </View>

                      <View style={movieDetailScreenStyle.mainView.movieBasicInfo.infoView.starsView}>
                        <Text style={movieDetailScreenStyle.yellow16}>{"Stars: "}</Text>
                        {
                          movie?.credits?.cast?.slice(0, Math.min(4, movie?.credits?.cast?.length)).map((star, index) =>
                            <Text key={index} style={
                              [movieDetailScreenStyle.white16,
                              movieDetailScreenStyle.mainView.movieBasicInfo.infoView.stars]
                            }>
                              {`${star.name}`}
                            </Text>
                          )
                        }
                      </View>

                      <View style={{ width: 100, height: 20, flexDirection: "row" }}>
                        <Text style={movieDetailScreenStyle.yellow16}>Runtime: </Text>
                        <Text style={movieDetailScreenStyle.white16}>{movie?.runtime} </Text>
                        <Text style={movieDetailScreenStyle.yellow16}>min</Text>
                      </View>

                      <Pressable style={movieDetailScreenStyle.mainView.movieBasicInfo.infoView.imdbText.view}
                        onPress={async () => {
                          const url = `https://www.imdb.com/title/${movie?.imdb_id}`;
                          const sup = await Linking.canOpenURL(url);
                          if (sup) Linking.openURL(url);
                        }}
                      >

                        <Text style={movieDetailScreenStyle.mainView.movieBasicInfo.infoView.imdbText.text}>
                          {
                            `IMDb: ${movie?.vote_average.toFixed(1)}`
                          }
                        </Text>
                      </Pressable>

                    </View>
                  </View>
                </View>
              </View>
            </View>
          </ImageBackground>


          <View style={movieDetailScreenStyle.actionRow.view}>
            <Pressable style={movieDetailScreenStyle.actionRow.saveBtn}>
              <Text style={[movieDetailScreenStyle.white18, { width: "100%", textAlign: "center" }]}>Save</Text>
            </Pressable>

            <Pressable style={movieDetailScreenStyle.actionRow.markAsWatchedBtn}>
              <Text style={[movieDetailScreenStyle.white18, { width: "100%", textAlign: "center" }]}>Mark as Watched</Text>
            </Pressable>

            <Pressable style={movieDetailScreenStyle.actionRow.shareBtn}>
              <Text style={[movieDetailScreenStyle.white18, { width: "100%", textAlign: "center" }]}>Share</Text>
            </Pressable>
          </View>

          <View style={movieDetailScreenStyle.sectionView}>
            <Text style={[movieDetailScreenStyle.yellow18, { padding: 0, margin: 0 }]}>Genres</Text>
            <ScrollView horizontal={true}
              style={movieDetailScreenStyle.genreCellView}
              contentContainerStyle={{ paddingHorizontal: 10 }}
              showsHorizontalScrollIndicator={false}
            >
              {
                movie?.genres.map((genre, index) => {
                  const name: string = genre.name;
                  return (
                    <Pressable key={index} style={[movieDetailScreenStyle.genreCell, { alignItems: "center", backgroundColor: genresInfo[name]?.color, borderColor: genresInfo[name]?.borderColor }]}>
                      <Text style={[movieDetailScreenStyle.genreCellText]}>{name}</Text>
                    </Pressable>
                  )
                })
              }
            </ScrollView>
          </View>

          <View style={movieDetailScreenStyle.sectionView}>
            <Text style={[movieDetailScreenStyle.yellow18, { padding: 0, margin: 0 }]}>Providers</Text>
            <ScrollView horizontal={true}
              style={[movieDetailScreenStyle.genreCellView, { height: 40 }]}
              contentContainerStyle={{ paddingHorizontal: 10 }}
              showsHorizontalScrollIndicator={false}
            >
              {
                movie?.providers?.["US"]?.flatrate?.map((flat: any, index: number) => (
                  <Image key={index} source={{ uri: "https://image.tmdb.org/t/p/w500" + flat?.logo_path }} style={{ height: 32, width: 32, borderRadius: 4, marginRight: "4" }} />
                ))
              }
            </ScrollView>
          </View>

          <Text style={[{ width: "80%", marginTop: "5%" }, movieDetailScreenStyle.yellow18]}>Trailer</Text>
          <View style={{ marginLeft: "-6%", marginTop: "2%" }}>
            <YoutubePlayer height={250} width={"103%"} play={false} videoId={trailerKey} />
          </View>

          <View style={[movieDetailScreenStyle.sectionView, { flexDirection: "column" }]}>
            <Text style={movieDetailScreenStyle.yellow18}>Overview</Text>
            <Text style={[{ width: "100%", textAlign: "justify" }, movieDetailScreenStyle.white16]}>   {movie?.overview}</Text>
          </View>

          <View style={{ width: "100%", marginTop: "10%" }}>

            <Text style={movieDetailScreenStyle.credits.text}
              onPress={() => navigation.navigate("FilmCreditsScreen", { credits: movie?.credits, poster: movie?.poster_path })}>Cast</Text>
            <View style={movieDetailScreenStyle.credits.view}>
              {
                movie?.credits?.cast?.slice(0, Math.min(6, movie.credits.cast.length - 1)).map((person, index) => {
                  return (
                    <ActorCard key={index} cast={person} />
                  )
                })
              }
            </View>

            <Text style={movieDetailScreenStyle.credits.text}>Crew</Text>
            <View style={movieDetailScreenStyle.credits.view}>
              {
                movie?.credits?.crew?.slice(0, Math.min(6, movie.credits.crew.length - 1))?.map((person: any, index: any) => {
                  return (
                    <ActorCard key={index} cast={person} />
                  )
                })
              }
            </View>

          </View>
          <View style={{ marginTop: "5%", marginBottom: heightPercentageToDP("5%"), backgroundColor: "rgba(255, 255, 255, 0.05)", padding: 6, paddingTop: 0, borderWidth: 0.5, borderColor: "rgba(255, 255, 255, 0.2)", borderRadius: 12 }}>
            <Text style={[movieDetailScreenStyle.yellow18]}>Details</Text>
            <View style={{ flexDirection: "column" }}>
              <DetailRow label="Release date" item={movie?.release_date} maxW="75%" />
              <DetailRow label="Spoken languages" items={movie?.spoken_languages} prop="english_name" maxW="75%" />
              <DetailRow label="Countries" items={movie?.production_countries} prop="name" maxW="75%" />
              <DetailRow label="Companies" items={movie?.production_companies} prop="name" maxW="75%" />
              <DetailRow label="Revenue" item={movie?.revenue + "$"} maxW="75%" />
              <DetailRow label="Tagline" item={movie?.tagline || "Nothing"} maxW="75%" />
              <DetailRow label="IMDb ID" item={movie?.imdb_id || "Not available"} maxW="75%" />
            </View>
          </View>


          <Text style={[movieDetailScreenStyle.yellow18]}>Similar movies</Text>
          <MovieCardList navigation={navigation} movieID={movie?.id} movieGenre={movie?.genres[0]?.id} />
        </ScrollView >
      </ImageBackground >
      <BottomBar />
    </View >
  );
}