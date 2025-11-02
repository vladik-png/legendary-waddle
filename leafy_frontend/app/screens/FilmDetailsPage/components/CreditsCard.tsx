import { filmDetailScreenStyle } from "@/components/styles/filmDetailScreenStyle";
import React from "react";
import { Image, Text, View } from "react-native";
import Cast from "../types";

export default function ActorCard({ cast }: { cast: Cast }) {

  return (
    <View style={{ flexDirection: "row", height: 84, backgroundColor: "rgba(255, 255, 255, 0.03)", borderRadius: 8, borderWidth: 1, borderColor: "rgba(255, 255, 255, 0.12)", margin: 1.5 }}>
      <Image source={cast.profile_path ? { uri: "https://image.tmdb.org/t/p/w500" + cast?.profile_path } : require("@/assets/images/noPhoto.png")}
        style={{ height: "100%", width: "25%", borderTopLeftRadius: 8, borderBottomLeftRadius: 8 }} />
      <View style={{ flexDirection: "column", marginLeft: "5%", justifyContent: "space-between", padding: 5 }}>
        <Text style={filmDetailScreenStyle.white18}>{cast.name}</Text>
        <Text style={filmDetailScreenStyle.grey14} numberOfLines={1}
          ellipsizeMode="tail">{cast.character}</Text>
        <Text style={filmDetailScreenStyle.grey14} >{cast.known_for_department}</Text>
      </View>
    </View>
  );
}