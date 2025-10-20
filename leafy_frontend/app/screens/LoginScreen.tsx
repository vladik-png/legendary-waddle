import { LoginRequest } from "@/api/loginPageApi";
import LeafyContinueButton from "@/components/ui/leafy-continue-button";
import LeafyIconButton from "@/components/ui/leafy-icon-button";
import LeafyText from "@/components/ui/leafy-text";
import LeafyInput from "@/components/ui/leafy-text-input";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";


export default function LoginScreen({ navigation }: any) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.main}>

        <LeafyText fontSize={28} align="center" text="Hi, Welcome Back!"
          rect={{ x: "centered", y: 92, w: "100%", h: 32 }} />

        <LeafyText fontSize={16} align="center" text="Input your registered account!"
          rect={{ x: "centered", y: 136, w: "100%", h: 18 }} />

        <View style={styles.darkRect}>
          <LeafyInput text="Email" placeholder="Enter your email address"
            value={email} onChangeText={setEmail}
            rect={{ x: "centered", y: 78, w: "90%", h: 56 }} />

          <LeafyContinueButton text="Continue with Email" color="white"
            onPress={() => LoginRequest({ email })}
            rect={{ x: "centered", y: 166, w: "90%", h: 56 }} />

          <LeafyText fontSize={14} align="center" text="Or continue with"
            rect={{ x: "centered", y: 260, w: "100%", h: 15 }} />

          <LeafyIconButton text="Sign In with Google" source="google"
            rect={{
              x: "centered", y: 304, w: "90%", h: 56,
              img: {
                x: 50,
                y: 13,
              }
            }} color="dark" />

          <LeafyIconButton text="Sign In with Apple" source="apple"
            rect={{
              x: "centered", y: 375, w: "90%", h: 56,
              img: {
                x: 50,
                y: 13,
              }
            }} color="dark" />

          <LeafyText fontSize={14} align="center"
            text="Dont have an account ? Sign up here"
            rect={{ x: "centered", y: 510, w: 234, h: 18 }}
            onPress={() => navigation.navigate("Registration")} />
        </View>

      </View>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 0,
    position: "relative",
    backgroundColor: "#005C4D",
  },
  darkRect: {
    backgroundColor: "#181725",
    width: "100%",
    height: "75%",
    position: "absolute",
    top: "25%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  main: {
    width: "100%",
    height: "100%",
  },
});