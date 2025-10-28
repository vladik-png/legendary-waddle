import BottomBar from "@/app/screens/bars/bottomBar";
import { backgroundStyle } from "@/components/styles/backgroundStyle";
import { inputStyle } from "@/components/styles/inputStyle";
import { textStyle } from "@/components/styles/textStyles";
import { viewStyle } from "@/components/styles/viewStyle";
import FilmCardList from "@/components/ui/leafy-film-list";
import GenresList from "@/components/ui/leafy-genres-list";
import React from "react";
import { ScrollView, Text, TextInput, View } from "react-native";


export default function HomePageScreen({ navigation }: any) {
  return (
    <View style={[backgroundStyle.darkBlueBackground, { flex: 1, position: "relative" }]}>
      <TextInput style={inputStyle.homePageSearchInputStyle} />
      <ScrollView style={{ backgroundColor: "transparent", flex: 1 }}>
        <View style={viewStyle.homePageQuoteView}>
          <Text style={textStyle.homePageQuoteText}>Never rat on your friends and always
            keep your mouth shut
          </Text>
          <Text style={textStyle.homePageQuoteOriginText}>
            Goodfellas ~ 1990
          </Text>
        </View>
        <Text style={textStyle.homePageTrandingText}>Tranding</Text>
        <GenresList />
        <FilmCardList />
      </ScrollView>
      <BottomBar />
    </View >
  );
}