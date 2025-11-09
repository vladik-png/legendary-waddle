import { movieDetailScreenStyle } from "@/styles/movieDetailScreenStyle";
import { useNavigation } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity } from "react-native";
import { Cast } from "../types";

export default function ActorCard({ cast }: { cast: Cast }) {
  const navigator = useNavigation();
  return (
    <TouchableOpacity
      style={{
        flexDirection: "column",
        height: 180,
        width: 110,
        backgroundColor: "rgba(255, 255, 255, 0.05)",
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "rgba(255, 255, 255, 0.2)",
        margin: 1.5,
        marginRight: 5,
        justifyContent: "space-between",
        alignItems: "center",
        padding: 0.5,
      }}
      onPress={() => { navigator?.push("ActorProfileScreen", { personID: cast.id }) }}>
      <Image source={cast.profile_path ? { uri: "https://image.tmdb.org/t/p/w200" + cast?.profile_path } : require("@/assets/images/noPhoto.png")}
        style={{ height: "70%", width: "100%", borderTopLeftRadius: 6, borderTopRightRadius: 6 }} />
      <Text style={movieDetailScreenStyle.white12}>{cast?.name}</Text>
      <Text style={movieDetailScreenStyle.grey12} numberOfLines={1}
        ellipsizeMode="tail">{cast?.character}</Text>
      <Text style={movieDetailScreenStyle.grey12} >{cast?.known_for_department}</Text>
    </TouchableOpacity>
  );
}