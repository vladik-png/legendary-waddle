import BottomBar from "@/app/screens/bars/bottomBar";
import { backgroundStyle } from "@/components/styles/backgroundStyle";
import { textStyle } from "@/components/styles/textStyles";
import { viewStyle } from "@/components/styles/viewStyle";
import FilmCardList from "@/components/ui/leafy-film-list";
import GenresList from "@/components/ui/leafy-genres-list";
import React from "react";
import { Image, ScrollView, Text, View } from "react-native";

/*       <View style={viewStyle.homePageQuoteView}>
         <Text style={textStyle.homePageQuoteText}>Never rat on your friends and always
           keep your mouth shut
         </Text>
         <Text style={textStyle.homePageQuoteOriginText}>
           Goodfellas ~ 1990
         </Text>
       </View>
*/

export default function HomePageScreen({ navigation }: any) {
  const [selectedGenre, setSelectedGenre] = React.useState<number>(0);
  return (
    <View style={[backgroundStyle.darkBlueBackground, { flex: 1, position: "relative" }]}>
      <ScrollView style={{ backgroundColor: "transparent" }}
        showsVerticalScrollIndicator={false}>
        <View style={viewStyle.homePageQuoteView}>
          <Image source={require("@/assets/images/filmTape.jpg")} style={{ width: "100%", height: "100%", borderRadius: 8 }} />
        </View>
        <Text style={[textStyle.homePageTrandingText, { marginTop: "-25%" }]}>Genres</Text>
        <GenresList setSelectedGenre={setSelectedGenre} />
        <Text style={[textStyle.homePageTrandingText, { marginTop: "5%" }]}>Trending</Text>
        <FilmCardList navigation={navigation} selectedGenre={selectedGenre} />
      </ScrollView>
      <BottomBar />
    </View >
  );
}