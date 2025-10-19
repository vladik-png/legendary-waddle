import LeafyCarousel from "@/components/ui/leafy-carousel";
import React from "react";
import { StyleSheet, View } from "react-native";

export default function OnboardingScreen({ navigation }: any) {
  return (
    <View style={styles.mainStyle}>
      <LeafyCarousel navigation={navigation} rect={{ x: "centered", y: 66, w: 332, h: 325 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  mainStyle: {
    height: "100%",
    width: "100%",
    backgroundColor: "#005C4D",
  }
});