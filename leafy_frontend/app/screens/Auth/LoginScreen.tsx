import { LoginRequest } from "@/api/loginPageApi";
import { backgroundStyle } from "@/styles/backgroundStyle";
import { buttonStyle } from "@/styles/buttonStyle";
import { inputStyle } from "@/styles/inputStyle";
import { textStyle } from "@/styles/textStyles";
import * as WebBrowser from "expo-web-browser";
import React, { useState } from "react";
import { Image, ImageBackground, Text, TextInput, TouchableOpacity, View } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";


WebBrowser.maybeCompleteAuthSession();

export default function LoginScreen({ navigation }: any) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.main}>

        <Image source={require("@/assets/images/posters_background.jpg")}
          style={[
            {
              height: "35%",
              width: "100%",
              opacity: 0.2
            }
          ]} />
        <ImageBackground source={require("@/assets/images/background.png")}
          style={[styles.darkRect]}>

          <View style={{ flexDirection: "column", marginTop: "10%" }}>
            <Text style={[textStyle.white18, { marginLeft: "1%" }]}>Username</Text>
            <TextInput onChangeText={(text) => { setEmail(text) }}
              style={[
                inputStyle.defaultInput,
                {
                  marginTop: 5
                }
              ]}
              placeholderTextColor={"rgba(255, 255, 255, 0.6)"}
              placeholder="Enter username" />
          </View>

          <View style={{ flexDirection: "column", marginTop: "5%" }}>
            <Text style={[textStyle.white18, { marginLeft: "1%" }]}>Password</Text>
            <TextInput onChangeText={(text) => { setPassword(text) }}
              style={[
                inputStyle.defaultInput,
                {
                  marginTop: 5
                }
              ]}
              placeholderTextColor={"rgba(255, 255, 255, 0.6)"}
              placeholder="Enter password" />
          </View>

          <TouchableOpacity style={[buttonStyle.continueButton, { borderRadius: 8, marginTop: "5%" }]}
            onPress={() => { LoginRequest(email, password, navigation) }}>
            <Text style={[textStyle.white20]}>
              Sign In
            </Text>
          </TouchableOpacity>

          <View style={[
            {
              backgroundColor: "white",
              height: 0.5,
              width: "80%",
              marginTop: "8%",
              alignSelf: "center"
            }
          ]}></View>

          <TouchableOpacity style={[styles.googleButton.touchable]}
            onPress={() => onSignIn("google")}>
            <View style={[styles.googleButton.view]}>
              <Image source={require("@/assets/images/google_icon.png")}
                style={{
                  alignSelf: "center",
                  width: 36,
                  height: 36
                }} />
              <Text style={[
                textStyle.black20,
                {
                  alignSelf: "center"
                }
              ]}>Sign In with Google</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.appleButton.touchable]}
            onPress={() => onSignIn("apple")}>
            <View style={[styles.appleButton.view]}>
              <Image source={require("@/assets/images/apple.png")}
                style={{
                  alignSelf: "center",
                  width: 36,
                  height: 36
                }} />
              <Text style={[
                textStyle.white20,
                {
                  alignSelf: "center"
                }
              ]}>Sign In with Apple</Text>
            </View>
          </TouchableOpacity>

        </ImageBackground>

      </View>
    </View >
  );
}

const styles = {
  container: {
    padding: 0,
    position: "relative",
    backgroundColor: backgroundStyle.darkBlueBackground.backgroundColor,
  },
  darkRect: {
    width: wp("102%"),
    marginLeft: "-1%",
    height: hp("100%"),
    paddingLeft: "4%",
    paddingRight: "4%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  main: {
    width: "100%",
    height: "100%",
  },
  googleButton: {
    touchable: {
      width: "100%",
      height: 48,
      backgroundColor: "white",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 8,
      marginTop: "5%"
    },
    view: {
      flexDirection: "row",
      gap: "1%",
      justifyContent: "center",
      alignContent: "center"
    }
  },
  appleButton: {
    touchable: {
      width: "100%",
      height: 48,
      backgroundColor: "black",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 8,
      marginTop: "5%"
    },
    view: {
      flexDirection: "row",
      gap: "1%",
      justifyContent: "center",
      alignContent: "center"
    }
  },
};
