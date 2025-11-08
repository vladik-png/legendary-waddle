import { textStyle } from "@/components/styles/textStyles";
import React, { useState } from "react";
import { ImageBackground, Modal, Pressable, ScrollView, Text, View } from "react-native";
import { heightPercentageToDP } from "react-native-responsive-screen";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function BiographyModal({ bio }: { bio: string }) {
  const [open, setOpen] = useState(false);

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View style={{ maxHeight: heightPercentageToDP("30%"), backgroundColor: "rgba(255, 255, 255, 0.05)", padding: 6, paddingTop: 0, borderWidth: 0.5, borderColor: "rgba(255, 255, 255, 0.2)", borderRadius: 12 }}>
          <Text style={[textStyle.yellow18]}>Biography</Text>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text onPress={() => setOpen(true)} style={[textStyle.white16]}>{bio}</Text>
          </ScrollView>
        </View>

        <Modal visible={open} transparent={true} animationType="slide">
          <ImageBackground
            style={{
              width: "100%",
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "rgba(0, 0, 0, 0.6)",
            }}>
            <View style={{
              width: "90%",
              backgroundColor: "rgba(42, 41, 55, 0.9)",
              padding: "2%",
              borderRadius: 12,
              maxHeight: "80%",
              borderWidth: 0.5, borderColor: "rgba(255, 255, 255, 0.2)"
            }}>
              <Text style={[textStyle.yellow22, { marginBottom: "2%" }]}>Biography</Text>

              <ScrollView style={{ borderRadius: 6, borderWidth: 0.5, borderColor: "rgba(255, 255, 255, 0.2)" }}>
                <View style={{ backgroundColor: "rgba(255, 255, 255, 0.05)", padding: 8 }}>
                  <Text style={{ color: "white", fontSize: 16 }}>
                    {bio}
                  </Text>
                </View>
              </ScrollView>

              <Pressable style={{ borderWidth: 0.5, borderColor: "rgba(255, 255, 255, 0.5)", backgroundColor: "rgba(255, 255, 255, 0.3)", marginTop: 10, justifyContent: "center", width: "40%", alignSelf: "center", height: 42, borderRadius: 6 }}
                onPress={() => setOpen(false)}>
                <Text style={[textStyle.yellow22, { textAlign: "center" }]}>
                  Close
                </Text>
              </Pressable>
            </View>
          </ImageBackground>
        </Modal>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}