import BottomBar from "@/app/screens/bars/bottomBar";
import FilmCardList from "@/components/ui/leafy-film-list";
import GenresList from "@/components/ui/leafy-genres-list";
import { textStyle } from "@/styles/textStyles";
import React from "react";
import { Image, ImageBackground, ScrollView, Text } from "react-native";
import { heightPercentageToDP } from "react-native-responsive-screen";
import PremiereCarousel from "./components/PremiereCarousel";

export default function HomePageScreen({ navigation }: any) {
  const [selectedGenre, setSelectedGenre] = React.useState<number>(0);

  return (

    <ImageBackground source={require("@/assets/images/background.png")} style={{ flex: 1 }}>
      <ScrollView style={{ backgroundColor: "transparent", padding: "1%" }}
        showsVerticalScrollIndicator={false}>

        <Image source={require("@/assets/images/filmTape.png")} style={{ position: "absolute", opacity: 0.15, width: "104%", height: heightPercentageToDP("50%"), borderRadius: 20, margin: "-4%" }} />

        <Text style={[textStyle.homePageTrandingText, { marginTop: "5%" }]}>Now in cinemas</Text>
        <PremiereCarousel />

        <Text style={[textStyle.homePageTrandingText, { marginTop: "5%" }]}>Genres</Text>
        <GenresList setSelectedGenre={setSelectedGenre} />

        <Text style={[textStyle.homePageTrandingText, { marginTop: "5%" }]}>Trending</Text>
        <FilmCardList selectedGenre={selectedGenre} />
      </ScrollView>
      <BottomBar />
    </ImageBackground >
  );
}