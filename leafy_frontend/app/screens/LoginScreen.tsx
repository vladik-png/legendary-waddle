import { LoginRequest } from "@/api/loginPageApi";
import { textStyle } from "@/components/styles/textStyles";
import LeafyContinueButton from "@/components/ui/leafy-continue-button";
import LeafyIconButton from "@/components/ui/leafy-icon-button";
import LeafyText from "@/components/ui/leafy-text";
import LeafyInput from "@/components/ui/leafy-text-input";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";


export default function LoginScreen({ navigation }: any) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.main}>

        <Text style={[textStyle.white18, { fontSize: 32, marginTop: "25%", alignSelf: "center" }]}>Hi, Welcome Back!</Text>

        <Text style={[textStyle.white18, { marginLeft: "1%" }]}>Full Name</Text>
        <LeafyText fontSize={16} align="center" text="Input your registered account!"
          rect={{ x: "centered", y: 136, w: "100%", h: 24 }} />

        <View style={[styles.darkRect]}>

          <LeafyInput text="Email" placeholder="Enter your email address"
            value={email} onChangeText={setEmail}
            rect={{ x: "5%", y: "8%", w: "90%", h: 52 }} />

          <LeafyInput text="Password" placeholder="Enter your password"
            value={password} onChangeText={setPassword}
            rect={{ x: "5%", y: "18%", w: "90%", h: 52 }} />

          <LeafyContinueButton text="Continue with Email" color="white"
            onPress={() => LoginRequest({ email, password, navigation })}
            rect={{ x: "5%", y: 250, w: "90%", h: 56 }} />


          <LeafyIconButton text="Sign In with Google" textAlign="center" source="google"
            rect={{
              x: "4%", y: 379, w: "96%", h: 56,
              img: {
                x: 50,
                y: 13,
              }
            }} color="dark" />

          <LeafyIconButton text="Sign In with Apple" textAlign="center" source="apple"
            rect={{
              x: "4%", y: 450, w: "96%", h: 56,
              img: {
                x: 50,
                y: 13,
              }
            }} color="dark" />

          <LeafyText fontSize={14} align="center"
            text="Dont have an account ? Sign up here"
            rect={{ x: "centered", y: 530, w: "100%", h: 18 }}
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
    backgroundColor: "#02332B",
  },
  darkRect: {
    backgroundColor: "rgba(15, 14, 26, 1)",
    width: "102%",
    marginLeft: "-1%",
    height: "70%",
    position: "absolute",
    marginTop: "70%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderWidth: 0.5,
    borderColor: "rgba(255, 255, 255, 0.25)",
    padding: "2%",
  },
  main: {
    width: "100%",
    height: "100%",
  },
});