import BottomBar from "@/app/screens/bars/bottomBar";
import { textStyle } from "@/components/styles/textStyles";
import { viewStyle } from "@/components/styles/viewStyle";
import FilmCardList from "@/components/ui/leafy-film-list";
import GenresList from "@/components/ui/leafy-genres-list";
import React from "react";
import { Image, ImageBackground, ScrollView, Text, View } from "react-native";

export default function HomePageScreen({ navigation }: any) {
  const [selectedGenre, setSelectedGenre] = React.useState<number>(0);
  return (

    <ImageBackground source={require("@/assets/images/background.png")} style={{ flex: 1 }}>
      <ScrollView style={{ backgroundColor: "transparent", padding: "2%" }}
        showsVerticalScrollIndicator={false}>
        <View style={viewStyle.homePageQuoteView}>
          <Image source={require("@/assets/images/filmTape.png")} style={{ width: "100%", height: "100%", borderRadius: 20 }} />
        </View>
        <Text style={[textStyle.homePageTrandingText, { marginTop: "-22%" }]}>Genres</Text>
        <GenresList setSelectedGenre={setSelectedGenre} />
        <Text style={[textStyle.homePageTrandingText, { marginTop: "5%" }]}>Trending</Text>
        <FilmCardList selectedGenre={selectedGenre} />
      </ScrollView>
      <BottomBar />
    </ImageBackground >
  );
}