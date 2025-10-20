import { LoginRequest } from "@/api/loginPageApi";
import LeafyContinueButton from "@/components/ui/leafy-continue-button";
import LeafyIconButton from "@/components/ui/leafy-icon-button";
import LeafyReturnArrowButton from "@/components/ui/leafy-retur-arrow-btn";
import LeafyText from "@/components/ui/leafy-text";
import React from "react";
import { StyleSheet, View } from "react-native";


export default function SettingScreen({ navigation }: any) {

  return (
    <View style={styles.container}>
      <View style={styles.main}>

        <LeafyReturnArrowButton rect={{ x: "8%", y: 50, w: 25, h: 25 }}
          onPress={() => navigation.navigate("Login")} />

        <LeafyText fontSize={20} align="center" text="Setting"
          rect={{ x: "centered", y: 63, w: "100%", h: "10%" }} />


        <LeafyText fontSize={14} align="left" text="Personal Info"
          rect={{ x: "8%", y: 205, w: "100%", h: "10%" }} />

        <LeafyIconButton text="Profile" textAlign="left" style={styles.menuButton} rect={{ x: 0, y: 233, w: "100%", h: 50 }} />
        <LeafyIconButton text="Voucher" style={styles.menuButton} rect={{ x: 0, y: 289, w: "100%", h: 50 }} />
        <LeafyIconButton text="Profile" style={styles.menuButton} rect={{ x: 0, y: 345, w: "100%", h: 50 }} />
        <LeafyIconButton text="Profile" style={styles.menuButton} rect={{ x: 0, y: 401, w: "100%", h: 50 }} />

        <LeafyContinueButton text="Log Out" color="white"
          onPress={() => LoginRequest({ email })}
          rect={{ x: "centered", y: "90%", w: "90%", h: 56 }} />

      </View>
    </View >
  );
}

const styles = StyleSheet.create({
  menuButton: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderWidth: 0,
    paddingLeft: "8%"
  },
  container: {
    padding: 0,
    position: "relative",
    backgroundColor: "#181725",
  },
  main: {
    width: "100%",
    height: "100%",
  },
});