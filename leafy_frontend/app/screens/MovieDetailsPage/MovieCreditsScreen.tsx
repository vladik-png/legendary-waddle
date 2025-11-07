import { textStyle } from "@/components/styles/textStyles";
import LeafyReturnArrowButton from "@/components/ui/leafy-retur-arrow-btn";
import React from "react";
import { ImageBackground, ScrollView, Text, View } from "react-native";
import { heightPercentageToDP } from "react-native-responsive-screen";
import BottomBar from "../bars/bottomBar";
import ActorCard from "./components/CreditsCard";
import { Cast } from "./types";

export default function FilmCreditsScreen({ route, navigation }: any) {
  const { credits, poster } = route.params;
  //require("@/assets/images/background.png")
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={{ uri: "https://image.tmdb.org/t/p/w500" + poster }} style={{ flex: 1 }}>
        <ScrollView showsVerticalScrollIndicator={false} style={{ padding: "2%", backgroundColor: "rgba(0, 0, 0, 0.85)" }}>
          <LeafyReturnArrowButton style={{ marginTop: "5%", zIndex: 2 }} onPress={() => navigation.goBack()} />
          <Text style={[textStyle.yellow22, { fontSize: 26, marginTop: "-2%", alignSelf: "center" }]}>Cast</Text>
          {
            credits?.cast?.map((person: Cast, index: number) => {
              return (
                <ActorCard key={index} cast={person} />
              )
            })
          }

          <Text style={[textStyle.yellow22, { fontSize: 26, marginTop: "10%", alignSelf: "center" }]}>Crew</Text>
          <View style={{ marginBottom: heightPercentageToDP("7.3%") }}>
            {
              credits?.crew?.map((person: Cast, index: number) => {
                return (
                  <ActorCard key={index} cast={person} />
                )
              })
            }
          </View>
        </ScrollView>
        <BottomBar />
      </ImageBackground>
    </View >
  )
}