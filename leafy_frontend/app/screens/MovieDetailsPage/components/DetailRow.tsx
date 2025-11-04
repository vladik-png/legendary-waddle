import { movieDetailScreenStyle } from "@/components/styles/movieDetailScreenStyle";
import React from "react";
import { Text, View } from "react-native";
import JoinedText from "./JoinedText";

interface DetailRowProps {
  label: string,
  items: any[],
  prop: string,
  maxWidth: string | number,
  item: any,
}

export default function DetailRow({ label, items, prop, maxW, item }: DetailRowProps) {
  const component = (!item && items)
    ? (
      <View style={{ flexDirection: "row" }}>
        <Text style={movieDetailScreenStyle.yellow16}>{label}: </Text>
        <JoinedText maxWidth={maxW} items={items} prop={prop} />
      </View>
    ) : (
      <View style={{ flexDirection: "row", maxWidth: maxW }}>
        <Text style={movieDetailScreenStyle.yellow16}>{label}: </Text>
        <Text style={[movieDetailScreenStyle.white16, { maxWidth: maxW }]}>{item}</Text>
      </View>
    );

  return component;
}