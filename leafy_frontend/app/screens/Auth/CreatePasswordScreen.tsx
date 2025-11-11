import { LoginRequest } from "@/api/loginPageApi";
import LeafyContinueButton from "@/components/ui/leafy-continue-button";
import LeafyReturnArrowButton from "@/components/ui/leafy-return-arrow-btn";
import LeafyText from "@/components/ui/leafy-text";
import LeafyInput from "@/components/ui/leafy-text-input";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";


export default function CreatePasswordScreen({ navigation }: any) {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.main}>

        <LeafyReturnArrowButton rect={{ x: "8%", y: 50, w: 25, h: 25 }}
          onPress={() => navigation.navigate("Login")} />

        <LeafyText fontSize={28} align="center" text="Create a 
New Password"
          rect={{ x: "centered", y: "16%", w: "100%", h: "10%" }} />

        <LeafyText fontSize={14} align="center" text="Enter your new password"
          rect={{ x: "centered", y: "26%", w: "100%", h: 18 }} />

        <LeafyInput text="New Password" placeholder="Enter new password"
          value={password} onChangeText={setPassword}
          rect={{ x: "centered", y: 304, w: "90%", h: 52 }} />

        <LeafyInput text="Confirm Password" placeholder="Confirm your password"
          value={confirmPassword} onChangeText={setConfirmPassword}
          rect={{ x: "centered", y: 410, w: "90%", h: 52 }} />

        <LeafyContinueButton text="Continue" color="white"
          onPress={() => LoginRequest({ email })}
          rect={{ x: "centered", y: 490, w: "90%", h: 56 }} />

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