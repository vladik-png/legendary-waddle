import { inputStyle } from "@/components/styles/inputStyle";
import React from "react";
import { ImageBackground, ScrollView, TextInput, View } from "react-native";

export default function SearchScreen({ navigation }: any) {
  return (
    <ImageBackground source={require("@/assets/images/background.png")} style={{ flex: 1, padding: "2%", paddingTop: "10%" }}>
      <ScrollView style={{ flex: 1 }}>
        <View style={{ height: 80, width: "100%", flexDirection: "column", justifyContent: "center" }}>
          <TextInput style={inputStyle.defaultInput} placeholderTextColor={"rgba(255, 255, 255, 0.6)"} placeholder="Enter request" />
        </View>
      </ScrollView>
    </ImageBackground>
  )
}