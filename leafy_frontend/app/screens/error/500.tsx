import { backgroundStyle } from "@/components/styles/backgroundStyle";
import React from "react";
import { Image, View } from "react-native";

export default function Error500Screen() {
  return (
    <View style={[backgroundStyle.darkBlueBackground, { alignItems: "center", justifyContent: "center" }]}>
      <Image source={require('@/assets/images/error500.png')} style={{ height: 140, width: 200 }} />
    </View>
  );
}