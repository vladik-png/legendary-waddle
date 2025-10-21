import { LoginRequest } from "@/api/loginPageApi";
import LeafyButton from "@/components/ui/leafy-button";
import LeafyContinueButton from "@/components/ui/leafy-continue-button";
import LeafyReturnArrowButton from "@/components/ui/leafy-retur-arrow-btn";
import LeafyText from "@/components/ui/leafy-text";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";


export default function ForgotPasswordScreen({ navigation }: any) {
  const [email, setEmail] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.main}>

        <LeafyReturnArrowButton rect={{ x: "8%", y: 50, w: 25, h: 25 }}
          onPress={() => navigation.navigate("Login")} />

        <LeafyText fontSize={28} align="center" text="Forgot password"
          rect={{ x: "centered", y: "16%", w: "100%", h: "10%" }} />

        <LeafyText fontSize={14} align="center" text="Please select options to send link reset
password"
          rect={{ x: "centered", y: "22%", w: "100%", h: "8%" }} />

        <LeafyButton text="Send to your email" style={styles.bigButtons} rect={{ x: "5%", y: "30%", h: 104, w: "90%" }} />

        <LeafyButton text="Send to your phone number" style={styles.bigButtons} rect={{ x: "5%", y: "50%", h: 104, w: "90%" }} />

        <LeafyContinueButton text="Send link" color="white"
          onPress={() => LoginRequest({ email })}
          rect={{ x: "centered", y: "70%", w: "90%", h: 56 }} />

        <LeafyText fontSize={14} align="center" text="Didn`t receive link ? Resend Link"
          rect={{ x: "centered", y: "80%", w: "100%", h: "10%" }} />

      </View>
    </View >
  );
}

const styles = StyleSheet.create({
  bigButtons: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#005C4D",
    color: "#005C4D",
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