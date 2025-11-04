import { backgroundStyle } from "@/components/styles/backgroundStyle";
import React from "react";
import { View } from "react-native";
import BottomBar from "../bars/bottomBar";

export default function CurrentUserProfileScreen() {
  return (
    <View style={backgroundStyle.darkBlueBackground}>
      <BottomBar />
    </View>
  );
}