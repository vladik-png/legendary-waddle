import { filmDetailScreenStyle } from "@/components/styles/filmDetailScreenStyle";
import React from "react";
import { Text } from "react-native";

export default function JoinedText({ items, prop, maxWidth }: { items: any, prop: string, maxWidth: any }) {
  return (
    <Text style={[filmDetailScreenStyle.white16, { maxWidth: maxWidth }]} numberOfLines={1} ellipsizeMode="tail">
      {
        items?.map((item: any) => item[prop]).join(", ")
      }
    </Text>
  )
}