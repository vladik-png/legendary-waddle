import { filmDetailScreenStyle } from "@/components/styles/filmDetailScreenStyle";
import LeafyReturnArrowButton from "@/components/ui/leafy-retur-arrow-btn";
import React from "react";
import { ScrollView, Text, View } from "react-native";
import { heightPercentageToDP } from "react-native-responsive-screen";
import BottomBar from "../bars/bottomBar";
import ActorCard from "./components/CreditsCard";
import { Cast } from "./types";

export default function FilmCreditsScreen({ route, navigation }: any) {
  const { credits } = route.params;
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={filmDetailScreenStyle.mainScrollView}>
        <LeafyReturnArrowButton style={{ marginTop: "5%", zIndex: 2 }} onPress={() => navigation.goBack()} />
        <Text style={[filmDetailScreenStyle.yellow18, { marginTop: "5%" }]}>Cast</Text>
        {
          credits?.cast?.map((person: Cast, index: number) => {
            return (
              <ActorCard key={index} cast={person} />
            )
          })
        }

        <Text style={[filmDetailScreenStyle.yellow18, { marginTop: "5%" }]}>Crew</Text>
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
    </View>
  )
}