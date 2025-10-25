import { buttonStyle } from "@/components/styles/buttonStyle";
import LeafyIconButton from "@/components/ui/leafy-icon-button";
import React from "react";
import { View } from "react-native";

export default function BottomBar() {

  return (
    <View style={[{ backgroundColor: "rgba(44, 43, 56, 0.6)", height: "6%", width: "100%", top: "84%" }]} >
      <LeafyIconButton source="home" rect={{
        x: 40, y: 0, w: 70, h: "100%",
        img: {
          x: 20,
          y: "centered",
          h: 30,
          w: 30,
        }
      }} style={buttonStyle.bottomBarButtons} />
      <LeafyIconButton source="compass" rect={{
        x: 120, y: 0, w: 70, h: "100%",
        img: {
          x: 20,
          y: "centered",
          h: 30,
          w: 30,
        }
      }} style={buttonStyle.bottomBarButtons} />
      <LeafyIconButton source="" rect={{
        x: 200, y: 0, w: 70, h: "100%",
        img: {
          x: 20,
          y: "centered",
          h: 30,
          w: 30,
        }
      }} style={buttonStyle.bottomBarButtons} />
      <LeafyIconButton source="" rect={{ x: 280, y: 0, w: 70, h: "100%" }} style={buttonStyle.bottomBarButtons} />
    </View >
  );
}