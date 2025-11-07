import React from "react";
import { View } from "react-native";
import BottomBarIconButton from "./components/BottomBarIconButton";
import { bottomBar } from "./styles";

export default function BottomBar() {
  return (
    <View style={bottomBar.view} >
      <BottomBarIconButton source="home" navigateTo="HomePageScreen" />
      <BottomBarIconButton source="compass" navigateTo="ExploreScreen" />
      <BottomBarIconButton source="newContent" />
      <BottomBarIconButton source="chats" />
      <BottomBarIconButton source="profile" navigateTo="UserProfileScreen" isCurrentUser={false} />
    </View>
  );
}