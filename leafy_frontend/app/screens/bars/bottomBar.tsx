import React from "react";
import { View } from "react-native";
import BottomBarIconButton from "./components/BottomBarIconButton";

export default function BottomBar() {
  return (
    <View style={[{ flexDirection: "row", justifyContent: "space-evenly", alignItems: "center", backgroundColor: "rgba(19, 18, 34, 0.9)", height: "7%", width: "100%", position: "absolute", bottom: 0, borderWidth: 0.3, borderColor: "rgba(180, 190, 210, 0.1)" }]} >
      <BottomBarIconButton source="home" navigateTo="HomePageScreen" />
      <BottomBarIconButton source="compass" navigateTo="ExploreScreen" />
      <BottomBarIconButton source="newContent" />
      <BottomBarIconButton source="chats" />
      <BottomBarIconButton source="profile" navigateTo="UserProfileScreen" isCurrentUser={false} />
    </View>
  );
}