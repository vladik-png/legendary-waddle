import BottomBar from "@/app/screens/bars/bottomBar";
import { backgroundStyle } from "@/components/styles/backgroundStyle";
import { textStyle } from "@/components/styles/textStyles";
import { viewStyle } from "@/components/styles/viewStyle";
import FilmCardList from "@/components/ui/leafy-film-list";
import GenresList from "@/components/ui/leafy-genres-list";
import React from "react";
import { ScrollView, Text, View } from "react-native";



export default function HomePageScreen({ navigation }: any) {
  const [selectedGenre, setSelectedGenre] = React.useState<number>(0);

  return (
    <View style={[backgroundStyle.darkBlueBackground, { flex: 1, position: "relative" }]}>
      <ScrollView style={{ backgroundColor: "transparent", marginBottom: 64 }}
        showsVerticalScrollIndicator={false}>
        <View style={viewStyle.homePageQuoteView}>
          <Text style={textStyle.homePageQuoteText}>Never rat on your friends and always
            keep your mouth shut
          </Text>
          <Text style={textStyle.homePageQuoteOriginText}>
            Goodfellas ~ 1990
          </Text>
        </View>
        <Text style={[textStyle.homePageTrandingText, { top: "3%" }]}>Genres</Text>
        <GenresList setSelectedGenre={setSelectedGenre} />
        <Text style={[textStyle.homePageTrandingText, { top: "3.7%" }]}>Trending</Text>
        <FilmCardList navigation={navigation} selectedGenre={selectedGenre} />
      </ScrollView>
      <BottomBar />
    </View >
  );
}