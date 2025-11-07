import { movieDetailScreenStyle } from "@/components/styles/movieDetailScreenStyle";
import { useNavigation } from "expo-router";
import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import { Cast } from "../types";

export default function ActorCard({ cast }: { cast: Cast }) {
  const navigator = useNavigation();
  return (
    <Pressable style={{
      flexDirection: "row", height: 84, backgroundColor: "rgba(255, 255, 255, 0.05)", borderRadius: 8, borderWidth: 1, borderColor: "rgba(255, 255, 255, 0.2)", margin: 1.5
    }} onPress={() => { navigator?.push("ActorProfileScreen", { personID: cast.id }) }}>
      <Image source={cast.profile_path ? { uri: "https://image.tmdb.org/t/p/w500" + cast?.profile_path } : require("@/assets/images/noPhoto.png")}
        style={{ height: "100%", width: "25%", borderTopLeftRadius: 8, borderBottomLeftRadius: 8 }} />
      <View style={{ flexDirection: "column", marginLeft: "5%", justifyContent: "space-between", padding: 5 }}>
        <Text style={movieDetailScreenStyle.white18}>{cast?.name}</Text>
        <Text style={movieDetailScreenStyle.grey14} numberOfLines={1}
          ellipsizeMode="tail">{cast?.character}</Text>
        <Text style={movieDetailScreenStyle.grey14} >{cast?.known_for_department}</Text>
      </View>
    </Pressable>
  );
}