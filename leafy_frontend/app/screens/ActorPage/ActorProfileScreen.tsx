import { getFilmographyByPerson } from "@/api/tmdbApi";
import BottomBar from "@/app/screens/bars/bottomBar";
import LeafyReturnArrowButton from "@/components/ui/leafy-return-arrow-btn";
import { textStyle } from "@/styles/textStyles";
import { useNavigation } from "expo-router";
import React, { useEffect, useState } from "react";
import { Dimensions, Image, ImageBackground, Linking, Pressable, ScrollView, Text, View } from "react-native";
import { heightPercentageToDP } from "react-native-responsive-screen";
import BiographyModal from "./components/BiographyModal";
import PhotosModal from "./components/PhotosModal";
import { actorDetailScreen } from "./styles";

const { width: screenW, height: screenH } = Dimensions.get("window");



export default function ActorProfileScreen({ route }: any) {
  const navigation = useNavigation();
  const [actor, setActor] = useState<any>(null);
  const [movies, setMovies] = useState<any>(null);
  const [images, setImages] = useState<any>(null);
  const [backdrop, setBackdrop] = useState<any>(null);


  const personID = route.params?.personID;
  useEffect(() => {
    async function loadActorDetails() {
      const data = await getFilmographyByPerson(personID);
      if (data) {

        console.log("MOVIES:   ", data?.filmography);
        data?.filmography?.sort((a: object, b: object) => (b?.year - a?.year));

        setActor(data?.details);
        setMovies(data?.filmography);
        setImages(data?.images?.profiles);
        setBackdrop(data?.backdrop);
      }
    }
    loadActorDetails();

  }, []);

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={require("@/assets/images/background.png")} style={{ flex: 1 }}>

        <ScrollView nestedScrollEnabled={true} showsVerticalScrollIndicator={false} style={{ padding: "2%", flex: 1 }} >
          <LeafyReturnArrowButton style={{ marginTop: "5%", zIndex: 2 }} onPress={() => navigation.goBack()} />

          <ImageBackground
            source={{ uri: "https://image.tmdb.org/t/p/w200" + images?.[images?.length - 1]?.file_path }}
            style={{ height: (screenH / 100) * 40, width: "104%", marginLeft: "-3%", marginRight: "-3%", marginTop: "-25%" }}>
            <View style={{ backgroundColor: "rgba(0, 0, 0, 0.75)", marginRight: "-2%", marginTop: "1%", height: heightPercentageToDP("40%") }}>

              <View style={{ flexDirection: "column", marginLeft: "3%", marginTop: "20%", justifyContent: "space-between" }}>

                <Text style={actorDetailScreen.mainView.actorBasicInfo.title}
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  {actor?.name}
                </Text>

                <View style={actorDetailScreen.mainView.actorBasicInfo.view}>

                  <View style={actorDetailScreen.mainView.actorBasicInfo.posterView}>
                    <Image
                      source={actor?.profile_path ? { uri: "https://image.tmdb.org/t/p/w200" + actor?.profile_path } : require("@/assets/images/noPhoto.png")}
                      style={{ height: "100%", width: "100%" }} />
                  </View>

                  <View style={actorDetailScreen.mainView.actorBasicInfo.infoView.view}>
                    <View style={actorDetailScreen.mainView.actorBasicInfo.infoView.textInfoView}>
                      <View style={actorDetailScreen.mainView.actorBasicInfo.infoView.bdayView}>
                        <Text style={textStyle.yellow16}>{"Birthday"}</Text>
                        <Text style={textStyle.white16}>{`: ${actor?.birthday || "Not available"}`}</Text>
                      </View>

                      <View style={actorDetailScreen.mainView.actorBasicInfo.infoView.bdayView}>
                        <Text style={textStyle.yellow16}>{"Deathday"}</Text>
                        <Text style={textStyle.white16}>{`: ${actor?.deathday || "Still alive"}`}</Text>
                      </View>

                      <View style={actorDetailScreen.mainView.actorBasicInfo.infoView.genderView}>
                        <Text style={textStyle.yellow16}>{"Gender"}</Text>
                        <Text style={textStyle.white16}>{`: ${actor?.gender === 1 ? "Female" : "Male"}`}</Text>
                      </View>

                      <View style={{ width: "100%", flexDirection: "column" }}>
                        <Text style={textStyle.yellow16}>{"Place of birth: "}</Text>

                        <Text style={[textStyle.white16, { width: "100%" }]}
                          numberOfLines={1} ellipsizeMode="tail">  {actor?.place_of_birth || "unknown"} </Text>
                      </View>

                      <View style={{ width: "100%", flexDirection: "row" }}>
                        <Text style={textStyle.yellow16}>{"Department: "}</Text>
                        <Text style={textStyle.white16}>{actor?.known_for_department} </Text>
                      </View>

                      <View style={{ width: "100%", flexDirection: "row" }}>
                        <Text style={textStyle.yellow16}>{"Popularity: "}</Text>
                        <Text style={textStyle.white16}>{actor?.popularity} </Text>
                      </View>

                      <Pressable style={actorDetailScreen.mainView.actorBasicInfo.infoView.imdbText.view}
                        onPress={async () => {
                          const url = `https://www.imdb.com/name/${actor?.imdb_id}`;
                          const sup = await Linking.canOpenURL(url);
                          if (sup) Linking.openURL(url);
                        }}
                      >
                        <Text style={actorDetailScreen.mainView.actorBasicInfo.infoView.imdbText.text}>IMDb</Text>
                      </Pressable>

                    </View>
                  </View>
                </View>
              </View>
            </View>
          </ImageBackground>


          <View style={actorDetailScreen.actionRow.view}>
            <Pressable style={actorDetailScreen.actionRow.markAsWatchedBtn}>
              <Text style={[actorDetailScreen.white18, { width: "100%", textAlign: "center" }]}>Subscribe</Text>
            </Pressable>

            <Pressable style={actorDetailScreen.actionRow.saveBtn}>
              <Text style={[actorDetailScreen.white18, { width: "100%", textAlign: "center" }]}>Mark as Favourite</Text>
            </Pressable>

            <Pressable style={actorDetailScreen.actionRow.shareBtn}>
              <Text style={[actorDetailScreen.white18, { width: "100%", textAlign: "center" }]}>Share</Text>
            </Pressable>
          </View>

          <BiographyModal bio={actor?.biography || "It`s empty here for now..."} />

          <PhotosModal images={images} backdrop={backdrop} />


        </ScrollView >
      </ImageBackground >

      <BottomBar />
    </View >
  );
}