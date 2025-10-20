import { LoginRequest } from "@/api/loginPageApi";
import LeafyContinueButton from "@/components/ui/leafy-continue-button";
import LeafyReturnArrowButton from "@/components/ui/leafy-retur-arrow-btn";
import LeafyText from "@/components/ui/leafy-text";
import LeafyInput from "@/components/ui/leafy-text-input";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";


export default function ForgotPasswordScreen({ navigation }: any) {
  const [email, setEmail] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.main}>

        <LeafyReturnArrowButton rect={{ x: "8%", y: 50, w: 25, h: 25 }}
          onPress={() => navigation.navigate("Login")} />

        <LeafyText fontSize={28} align="center" text="Forgot Password"
          rect={{ x: "centered", y: "16%", w: "100%", h: "10%" }} />

        <LeafyText fontSize={14} align="center" text="Recover your account password"
          rect={{ x: "centered", y: "22%", w: "100%", h: 18 }} />

        <LeafyInput text="E-mail" placeholder="Enter your email"
          value={email} onChangeText={setEmail}
          rect={{ x: "centered", y: 270, w: "90%", h: 52 }} />

        <LeafyContinueButton text="Continue" color="white"
          onPress={() => LoginRequest({ email })}
          rect={{ x: "centered", y: "centered", w: "90%", h: 56 }} />

      </View>
    </View >
  );
}

const styles = StyleSheet.create({
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