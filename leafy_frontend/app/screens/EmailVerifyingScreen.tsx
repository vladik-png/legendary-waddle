import { EmailVerificationRequest } from "@/api/emailVerificationApi";
import LeafyContinueButton from "@/components/ui/leafy-continue-button";
import LeafyCodeInput from "@/components/ui/leafy-digit-code-input";
import LeafyReturnArrowButton from "@/components/ui/leafy-return-arrow-btn";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

export default function RegistrationScreen({ navigation }: any) {
  const [email, setEmail] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.main}>

        <LeafyReturnArrowButton rect={{ x: "5%", y: 50, w: 25, h: 25 }}
          onPress={() => navigation.navigate("Login")} />

        <LeafyCodeInput cellsQuantity={4}
          value={email} onChangeText={setEmail}
          borderRadius={25}
          borderColor="#005C4D" cellsPadding={30}
          rect={{ x: "10%", y: 220, w: "80%", h: 58 }} />

        <LeafyContinueButton text="Continue" color="white"
          onPress={() => EmailVerificationRequest({ email })}
          rect={{ x: "5%", y: 320, w: "90%", h: 56 }} />

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