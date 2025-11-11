import LeafyReturnArrowButton from "@/components/ui/leafy-return-arrow-btn";
import { textStyle } from "@/styles/textStyles";
import React, { useState } from "react";
import { ImageBackground, Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function RegistrationScreen({ navigation }: any) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <ImageBackground source={require("@/assets/images/background.png")} style={{ flex: 1 }}>

      <LeafyReturnArrowButton style={{ marginTop: "8%" }}
        onPress={() => navigation.navigate("Login")} />

      <Text style={[textStyle.white22, { fontSize: 30, marginTop: "30%", marginBottom: "2%", alignSelf: "center" }]}>Create Your Account</Text>
      <Text style={[textStyle.grey22, { marginBottom: "10%", alignSelf: "center" }]}>All your entertainment in one place</Text>

      <View style={{ flexDirection: "column", gap: "2%" }}>
        <View style={{ flexDirection: "column", gap: 5 }}>
          <Text style={[textStyle.white18, { marginLeft: "1%" }]}>Full Name</Text>
          <TextInput style={[textStyle.white18, { width: "100%", color: "white", fontSize: 18, height: 52, paddingLeft: 20, backgroundColor: "rgba(255, 255,255, 0.03)", borderRadius: 21, padding: 0.5, borderWidth: 1, borderColor: "rgba(255, 255, 255, 0.1)" }]} placeholderTextColor={"rgba(255, 255, 255, 0.6)"} placeholder="Enter email" />
        </View>
        <View style={{ flexDirection: "column", gap: 5 }}>
          <Text style={[textStyle.white18, { marginLeft: "1%" }]}>Email address</Text>
          <TextInput style={[textStyle.white18, { width: "100%", color: "white", fontSize: 18, height: 52, paddingLeft: 20, backgroundColor: "rgba(255, 255,255, 0.03)", borderRadius: 21, padding: 0.5, borderWidth: 1, borderColor: "rgba(255, 255, 255, 0.1)" }]} placeholderTextColor={"rgba(255, 255, 255, 0.6)"} placeholder="Enter email" />
        </View>
        <View style={{ flexDirection: "column", gap: 5 }}>
          <Text style={[textStyle.white18, { marginLeft: "1%" }]}>Password</Text>
          <TextInput style={[textStyle.white18, { width: "100%", color: "white", fontSize: 18, height: 52, paddingLeft: 20, backgroundColor: "rgba(255, 255,255, 0.03)", borderRadius: 21, padding: 0.5, borderWidth: 1, borderColor: "rgba(255, 255, 255, 0.1)" }]} placeholderTextColor={"rgba(255, 255, 255, 0.6)"} placeholder="Enter email" />
        </View>
      </View>

      <Pressable style={{
        marginTop: "5%",
        backgroundColor: "#004338",
        borderColor: "rgba(255, 255, 255, 0.7)",
        borderWidth: 0.5,
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center",
        height: 52,
      }}>
        <Text style={textStyle.white18}>Sign Up</Text>
      </Pressable>

    </ImageBackground>
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