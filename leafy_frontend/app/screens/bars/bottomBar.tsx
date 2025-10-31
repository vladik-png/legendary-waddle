import { buttonStyle } from "@/components/styles/buttonStyle";
import LeafyIconButton from "@/components/ui/leafy-icon-button";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View } from "react-native";

export default function BottomBar() {
  const navigation = useNavigation();

  return (
    <View style={[{ backgroundColor: "rgba(180, 190, 200, 0.12)", height: 60, width: "100%", position: "absolute", bottom: 0, borderWidth: 1.5, borderColor: "rgba(255, 255, 255, 0.15)" }]} >
      <LeafyIconButton source="profile" rect={{
        x: "10%", y: 0, w: 70, h: "100%",
        img: {
          x: "5%",
          y: "centered",
          h: "100%",
          w: "33%",
        }
      }}
        style={buttonStyle.bottomBarButtons}
        onPress={() => navigation.navigate("CurrentUserProfileScreen")} />

      <LeafyIconButton source="home" rect={{
        x: "43%", y: 0, w: 70, h: "100%",
        img: {
          x: "20%",
          y: "centered",
          h: "100%",
          w: "33%",
        }
      }} style={buttonStyle.bottomBarButtons}
        onPress={() => navigation.navigate("HomePageScreen")} />

      <LeafyIconButton source="compass" rect={{
        x: "77%", y: 0, w: 70, h: "100%",
        img: {
          x: "5%",
          y: "centered",
          h: "100%",
          w: "33%",
        }
      }} style={buttonStyle.bottomBarButtons}
        onPress={() => navigation.navigate("ExploreScreen")} />

      <LeafyIconButton source="" rect={{ x: 280, y: 0, w: 70, h: "100%" }} style={buttonStyle.bottomBarButtons} />
    </View >
  );
}