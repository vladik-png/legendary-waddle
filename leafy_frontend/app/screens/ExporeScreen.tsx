import React from "react";
import { Image, ImageBackground, ScrollView, Text, TextInput, View } from "react-native";
import BottomBar from "./bars/bottomBar";

import { widthPercentageToDP as wp } from "react-native-responsive-screen";

export default function ExploreScreen({ navigation }: any) {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={require("@/assets/images/background.png")} style={{ flex: 1, padding: "2%", paddingTop: "10%" }}>
        <TextInput onPressIn={() => navigation.navigate("SearchScreen")} style={[{ width: "100%", color: "white", fontSize: 16, height: 52, paddingLeft: 20, backgroundColor: "rgba(255, 255,255, 0.03)", borderRadius: 21, padding: 0.5, borderWidth: 1, borderColor: "rgba(255, 255, 255, 0.08)" }]} placeholderTextColor={"rgba(255, 255, 255, 0.6)"} placeholder="Enter request" />

        <View style={{ backgroundColor: "rgba(255, 255, 255, 0.03)", flexDirection: "column", borderWidth: 1, padding: "1.5%", paddingTop: 0, marginTop: "5%", borderColor: "rgba(255, 255, 255, 0.1)", borderRadius: 10 }}>
          <Text style={{ color: "white", fontSize: 20, marginTop: "2%" }}>Your Collections</Text>

          <ScrollView horizontal={true} style={{ padding: 4, borderWidth: 1, backgroundColor: "rgba(255, 255, 255, 0.05)", borderColor: "rgba(255, 255, 255, 0.2)", marginTop: "5%", borderRadius: 8 }}>
            <View style={{ marginRight: "3%", width: wp("28%"), height: wp("28%"), backgroundColor: "rgba(255, 255, 255, 0.02)", borderRadius: 6, borderWidth: 1, borderColor: "rgba(255, 255, 255, 0.05)" }}>
              <Image source={require("@/assets/images/noPhoto.png")} style={{ width: "100%", height: "100%", borderRadius: 6 }} />
            </View>
            <View style={{ marginRight: "3%", width: wp("28%"), height: wp("28%"), backgroundColor: "rgba(255, 255, 255, 0.02)", borderRadius: 6, borderWidth: 1, borderColor: "rgba(255, 255, 255, 0.05)" }}>
              <Image source={require("@/assets/images/noPhoto.png")} style={{ width: "100%", height: "100%", borderRadius: 6 }} />
            </View>
            <View style={{ marginRight: "3%", width: wp("28%"), height: wp("28%"), backgroundColor: "rgba(255, 255, 255, 0.02)", borderRadius: 6, borderWidth: 1, borderColor: "rgba(255, 255, 255, 0.05)" }}>
              <Image source={require("@/assets/images/noPhoto.png")} style={{ width: "100%", height: "100%", borderRadius: 6 }} />
            </View>
          </ScrollView>
        </View>

        <Text style={{ color: "white", fontSize: 20, marginTop: "5%" }}>Top Collections</Text>

        <View style={{ padding: 4, borderWidth: 1, backgroundColor: "rgba(255, 255, 255, 0.05)", borderColor: "rgba(255, 255, 255, 0.2)", flexDirection: "row", justifyContent: "space-between", marginTop: "5%", borderRadius: 8 }}>
          <View style={{ width: wp("28%"), height: wp("28%"), backgroundColor: "rgba(255, 255, 255, 0.02)", borderRadius: 6, borderWidth: 1, borderColor: "rgba(255, 255, 255, 0.05)" }}></View>
          <View style={{ width: wp("28%"), height: wp("28%"), backgroundColor: "rgba(255, 255, 255, 0.02)", borderRadius: 6, borderWidth: 1, borderColor: "rgba(255, 255, 255, 0.05)" }}></View>
          <View style={{ width: wp("28%"), height: wp("28%"), backgroundColor: "rgba(255, 255, 255, 0.02)", borderRadius: 6, borderWidth: 1, borderColor: "rgba(255, 255, 255, 0.05)" }}></View>
        </View>
      </ImageBackground>
      <BottomBar />
    </View>
  );
}