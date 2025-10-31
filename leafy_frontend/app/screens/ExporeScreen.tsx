import { backgroundStyle } from "@/components/styles/backgroundStyle";
import { inputStyle } from "@/components/styles/inputStyle";
import React from "react";
import { TextInput, View } from "react-native";
import BottomBar from "./bars/bottomBar";

export default function ExploreScreen() {
  return (
    <View style={backgroundStyle.darkBlueBackground}>
      <TextInput style={inputStyle.homePageSearchInputStyle} placeholder="Enter request" />
      <BottomBar />
    </View>
  );
}