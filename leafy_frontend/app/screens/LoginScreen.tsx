import { LoginRequest } from "@/api/loginPageApi";
import LeafyButton from "@/components/ui/leafy-button";
import LeafyIconButton from "@/components/ui/leafy-icon-button";
import LeafyText from "@/components/ui/leafy-text";
import LeafyInput from "@/components/ui/leafy-text-input";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";


export default function LoginScreen({ navigation }: any) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.main}>

        <LeafyText fontSize={25} text="Sign in with Email"
          rect={{ x: "centered", y: 92, w: "90%", h: 32 }} />

        <LeafyText fontSize={14} text="Input your registered account!"
          rect={{ x: "centered", y: 136, w: "90%", h: 18 }} />

        <LeafyInput text="Email" placeholder="Type your email"
          value={username} onChangeText={setUsername}
          rect={{ x: "centered", y: 197, w: "90%", h: 56 }} />

        <LeafyInput text="Password" placeholder="Type your password"
          value={password} onChangeText={setPassword}
          rect={{ x: "centered", y: 301, w: "90%", h: 56 }} />

        <LeafyText fontSize={14} align="center" text="Forgot password?"
          rect={{ x: "centered", y: 405, w: 140, h: 18 }}
          onPress={() => {
            console.log("HELLO WORLD");
          }}
        />

        <LeafyButton text="Sign In" color="black"
          onPress={() => LoginRequest({ username, password })}
          rect={{ x: "centered", y: 448, w: "90%", h: 56 }} />

        <LeafyText fontSize={14} text="Or"
          rect={{ x: "centered", y: 530, w: 15, h: 15 }} />

        <LeafyIconButton text="Sign In with Apple" source="apple"
          rect={{
            x: "centered", y: 568, w: "90%", h: 56,
            img: {
              x: 50,
              y: 13,
            }
          }} color="dark" />

        <LeafyIconButton text="Sign In with Google" source="google"
          rect={{
            x: "centered", y: 643, w: "90%", h: 56,
            img: {
              x: 50,
              y: 13,
            }
          }} color="dark" />

        <LeafyText fontSize={14} align="center"
          text="Dont have an account ? Sign up here"
          rect={{ x: "centered", y: 730, w: 234, h: 18 }}
          onPress={() => navigation.navigate("Registration")} />

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 0,
    position: "relative",
    backgroundColor: "#005C4D",
  },
  main: {
    width: "100%",
    height: "100%",
  },
});