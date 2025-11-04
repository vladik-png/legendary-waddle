import { filmDetailScreenStyle } from "@/components/styles/filmDetailScreenStyle";
import React from "react";
import { Text, View } from "react-native";
import JoinedText from "./JoinedText";

interface DetailRowProps {
  label: string,
  items: any[],
  prop: string,
  maxWidth: any,
  item: any,
}

export default function DetailRow({ label, items, prop, maxWidth, item }: DetailRowProps) {
  const component = (!item && items)
    ? (
      <View style={{ flexDirection: "row" }}>
        <Text style={filmDetailScreenStyle.yellow16}>{label}: </Text>
        <JoinedText maxWidth={maxWidth} items={items} prop={prop} />
      </View>
    ) : (
      <View style={{ flexDirection: "row" }}>
        <Text style={filmDetailScreenStyle.yellow16}>{label}: </Text>
        <Text style={[filmDetailScreenStyle.white16, maxWidth]}>{item}</Text>
      </View>
    );

  return component;
}