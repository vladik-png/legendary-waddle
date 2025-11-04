import LeafyReturnArrowButton from "@/components/ui/leafy-retur-arrow-btn";
import React from "react";
import { ImageBackground, ScrollView, TextInput, View } from "react-native";

export default function SearchScreen({ navigation }: any) {
  return (
    <ImageBackground source={require("@/assets/images/background.png")} style={{ flex: 1, padding: "2%", paddingTop: "10%" }}>
      <ScrollView style={{ flex: 1 }}>
        <View style={{ height: 80, width: "100%", flexDirection: "column", justifyContent: "center" }}>
          <View style={{ backgroundColor: "rgba(255, 255,255, 0.03)", height: 52, width: "100%", flexDirection: "row", borderRadius: 21, padding: 0.5, borderWidth: 1, borderColor: "rgba(255, 255, 255, 0.08)" }}>
            <LeafyReturnArrowButton style={{ marginLeft: 4, marginTop: 4, height: 40, width: 40 }} onPress={() => navigation.navigate("ExploreScreen")} />
            <TextInput style={[{ width: "100%", color: "white", fontSize: 18, height: "100%", paddingLeft: 20 }]} placeholderTextColor={"rgba(255, 255, 255, 0.6)"} placeholder="Enter request" />
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  )
}