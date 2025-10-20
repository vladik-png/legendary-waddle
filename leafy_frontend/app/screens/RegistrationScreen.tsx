import { RegistrationRequest } from "@/api/registrationPageApi";
import LeafyContinueButton from "@/components/ui/leafy-continue-button";
import LeafyReturnArrowButton from "@/components/ui/leafy-retur-arrow-btn";
import LeafyText from "@/components/ui/leafy-text";
import LeafyInput from "@/components/ui/leafy-text-input";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

export default function RegistrationScreen({ navigation }: any) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.main}>

        <LeafyReturnArrowButton rect={{ x: "5%", y: 50, w: 25, h: 25 }}
          onPress={() => navigation.navigate("Login")} />

        <LeafyText fontSize={25} text="Create account"
          rect={{ x: "5%", y: 92, w: 330, h: 32 }} />

        <LeafyInput text="First Name" placeholder="Type your First Name"
          value={firstName} onChangeText={setFirstName}
          rect={{ x: "5%", y: 165, w: "44%", h: 56 }} />

        <LeafyInput text="Last Name" placeholder="Type your Last Name"
          value={lastName} onChangeText={setLastName}
          rect={{ x: "51%", y: 165, w: "44%", h: 56 }} />

        <LeafyInput text="Username" placeholder="Type your username"
          value={username} onChangeText={setUsername}
          rect={{ x: "5%", y: 264, w: "90%", h: 56 }} />

        <LeafyInput text="Email" placeholder="Type your email"
          value={email} onChangeText={setEmail}
          rect={{ x: "5%", y: 363, w: "90%", h: 56 }} />

        <LeafyInput text="Password" placeholder="Type your password"
          value={password} onChangeText={setPassword}
          rect={{ x: "5%", y: 462, w: "90%", h: 56 }} />

        <LeafyInput text="Confirm password" placeholder="Type your password"
          value={confirmPassword} onChangeText={setConfirmPassword}
          rect={{ x: "5%", y: 561, w: "90%", h: 56 }} />

        <LeafyContinueButton text="Sign Up" color="white"
          onPress={() => RegistrationRequest({ firstName, lastName, email, password, confirmPassword })}
          rect={{ x: "5%", y: 660, w: "90%", h: 56 }} />

        <LeafyText fontSize={14} align="center" text="Already have an account ? Login"
          rect={{ x: "centered", y: 730, w: 234, h: 18 }} onPress={() => navigation.navigate("Login")} />

      </View>
    </View>
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