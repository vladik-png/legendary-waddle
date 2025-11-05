import { buttonStyle } from "@/components/styles/buttonStyle";
import { inputStyle } from "@/components/styles/inputStyle";
import { textStyle } from "@/components/styles/textStyles";
import LeafyIconButton from "@/components/ui/leafy-icon-button";
import LeafyText from "@/components/ui/leafy-text";
import React, { useState } from "react";
import { ImageBackground, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";


export default function LoginScreen({ navigation }: any) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.main}>

        <Text style={[textStyle.white18, { fontSize: 32, marginTop: "25%", alignSelf: "center" }]}>Hi, Welcome Back!</Text>

        <ImageBackground source={require("@/assets/images/background.png")} style={[styles.darkRect]}>

          <View style={{ flexDirection: "column", marginTop: "5%" }}>
            <Text style={[textStyle.white18, { marginLeft: "1%" }]}>Username</Text>
            <TextInput onPressIn={() => navigation.navigate("SearchScreen")} style={inputStyle.defaultInput} placeholderTextColor={"rgba(255, 255, 255, 0.6)"} placeholder="Enter request" />
          </View>

          <View style={{ flexDirection: "column", marginTop: "5%" }}>
            <Text style={[textStyle.white18, { marginLeft: "1%" }]}>Password</Text>
            <TextInput onPressIn={() => navigation.navigate("SearchScreen")} style={inputStyle.defaultInput} placeholderTextColor={"rgba(255, 255, 255, 0.6)"} placeholder="Enter request" />
          </View>

          <Pressable style={[buttonStyle.continueButton, { marginTop: "5%" }]}>
            <Text style={[textStyle.white20]}>
              Continue
            </Text>
          </Pressable>

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
        </ImageBackground>

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
    width: wp("102%"),
    marginLeft: "-1%",
    height: hp("65%"),
    position: "absolute",
    marginTop: hp("35%"),
    borderWidth: 0.5,
    borderColor: "rgba(255, 255, 255, 0.25)",
    padding: "2%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  main: {
    width: "100%",
    height: "100%",
  },
});

/**
           <LeafyContinueButton text="Continue with Email" color="white"
            onPress={() => LoginRequest({ email, password, navigation })}
            rect={{ x: "5%", y: 250, w: "90%", h: 56 }} />
 */