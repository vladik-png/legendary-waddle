import MovieCardList from "@/components/ui/leafy-film-list";
import LeafyReturnArrowButton from "@/components/ui/leafy-retur-arrow-btn";
import { useNavigation } from "expo-router";
import React from "react";
import { ImageBackground, ScrollView, View } from "react-native";
import { heightPercentageToDP } from "react-native-responsive-screen";
import BottomBar from "../bars/bottomBar";

export default function CollectionScreen({ collection }: { collection: string }) {
  return (
    <ImageBackground source={require("@/assets/images/background.png")} style={{ flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ height: heightPercentageToDP("45%"), width: "100%" }}>
          <ImageBackground source={{ uri: `/home/mrcrabs/Desktop/Practice/semestr/legendary-waddle/leafy_frontend/assets/images/collections/50${collection}Top.png` }} style={{ width: "100%", height: "100%" }} >
            <LeafyReturnArrowButton style={{ marginTop: "5%", marginLeft: "2%", zIndex: 2 }} onPress={() => useNavigation()?.goBack()} />
          </ImageBackground>
        </View>
        <MovieCardList navigation={useNavigation()} movieID={13} />
      </ScrollView>
      <BottomBar />
    </ImageBackground>
  )
}