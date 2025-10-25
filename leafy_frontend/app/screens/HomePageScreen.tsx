import BottomBar from "@/app/screens/bars/bottomBar";
import { backgroundStyle } from "@/components/styles/backgroundStyle";
import React from "react";
import { Image, StyleSheet, View } from "react-native";

export default function HomePageScreen({ navigation }: any) {
  return (
    <View style={[backgroundStyle.darkBlueBackground, { width: "100%", height: "100%" }]}>
      <View style={{ backgroundColor: "rgba(44, 43, 56, 0.6)", left: "0%", top: "0%", height: "10%", width: "100%" }}>
        <View style={{ backgroundColor: "white", height: "40", width: "40", left: "30", top: "30", borderRadius: 20 }}>
          <Image style={{ width: "100%", height: "100%" }} />
        </View>
      </View>
      <BottomBar />
    </View>
  );
}

const styles = StyleSheet.create({
  mainStyle: {
    height: "100%",
    width: "100%",
    backgroundColor: "#005C4D",
  }
});