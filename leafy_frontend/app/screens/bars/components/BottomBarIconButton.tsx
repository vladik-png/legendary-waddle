import { useNavigation } from "expo-router";
import React from "react";
import { Image, Pressable } from "react-native";

const icons = {
  home: require('@/assets/images/HomeBtn.png'),
  compass: require('@/assets/images/Compass.png'),
  profile: require('@/assets/images/Profile.png'),
  newContent: require('@/assets/images/addNewContent.png'),
  chats: require('@/assets/images/chats.png'),
};

const styles = {
  alignItems: "center",
}

export default function BottomBarIconButton({ source, navigateTo, style }: { source: any, navigateTo: string, style: any }) {
  const navigator = useNavigation();
  return (
    <Pressable onPress={() => navigator.navigate(navigateTo)} style={style || styles}>
      <Image source={icons[source]}></Image>
    </Pressable>
  )
}