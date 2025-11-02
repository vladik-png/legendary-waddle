import { backgroundStyle } from "@/components/styles/backgroundStyle";
import LeafyReturnArrowButton from "@/components/ui/leafy-retur-arrow-btn";
import React from "react";
import { ScrollView, TextInput, View } from "react-native";

export default function SearchScreen({ navigation }: any) {
  return (
    <ScrollView style={backgroundStyle.darkBlueBackground}>
      <View style={{ backgroundColor: "rgba(0, 0, 0, 0.3)", height: 80, width: "100%", flexDirection: "column", padding: "2%", paddingTop: "10%" }}>
        <View style={{ backgroundColor: "rgba(255, 255,255, 0.03)", height: 42, width: "100%", flexDirection: "row", borderRadius: 21, padding: 0.5, borderWidth: 1, borderColor: "rgba(255, 255, 255, 0.08)" }}>
          <LeafyReturnArrowButton style={{ height: 40, width: 40 }} onPress={() => navigation.navigate("ExploreScreen")} />
          <TextInput style={[{ width: "100%", color: "white", fontSize: 18, height: "100%", paddingLeft: 20 }]} placeholderTextColor={"rgba(255, 255, 255, 0.6)"} placeholder="Enter request" />
        </View>
      </View>
    </ScrollView>
  )
}