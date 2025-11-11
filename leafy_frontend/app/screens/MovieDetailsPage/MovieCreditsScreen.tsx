import LeafyReturnArrowButton from "@/components/ui/leafy-return-arrow-btn";
import { textStyle } from "@/styles/textStyles";
import React from "react";
import { FlatList, ImageBackground, ScrollView, Text, View } from "react-native";
import BottomBar from "../bars/bottomBar";
import ActorCard from "./components/CreditsCard";

export default function FilmCreditsScreen({ route, navigation }: any) {
  const { credits, poster } = route.params;

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={{ uri: "https://image.tmdb.org/t/p/w500" + poster }} style={{ flex: 1 }}>
        <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnabled={true} style={{ padding: "2%", backgroundColor: "rgba(0, 0, 0, 0.85)" }}>
          <LeafyReturnArrowButton style={{ marginTop: "5%", zIndex: 2 }} onPress={() => navigation.goBack()} />
          <Text style={[textStyle.yellow22, { fontSize: 26, marginTop: "-2%", marginBottom: "5%", alignSelf: "center" }]}>Cast</Text>
          <FlatList
            data={credits?.cast}
            keyExtractor={(item) => item?.id}
            numColumns={3}
            columnWrapperStyle={{ justifyContent: "space-between" }}
            renderItem={({ item }) => <ActorCard cast={item} />} />


          <Text style={[textStyle.yellow22, { fontSize: 26, marginTop: "10%", alignSelf: "center" }]}>Crew</Text>
          <FlatList
            data={credits?.crew}
            keyExtractor={(item) => item?.id}
            numColumns={3}
            columnWrapperStyle={{ justifyContent: "space-between" }}
            renderItem={({ item }) => <ActorCard cast={item} />} />

        </ScrollView>
        <BottomBar />
      </ImageBackground>
    </View >
  )
}