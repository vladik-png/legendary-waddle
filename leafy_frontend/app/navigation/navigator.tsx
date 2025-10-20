import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import EmailVerifyingScreen from "../screens/EmailVerifyingScreen";
import LoginScreen from "../screens/LoginScreen";
import OnboardingScreen from "../screens/OnboardingScreen";
import RegistrationScreen from "../screens/RegistrationScreen";

const Stack = createNativeStackNavigator();

export default function LeafyNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="EmailVerifying" component={EmailVerifyingScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Onboarding" component={OnboardingScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Registration" component={RegistrationScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}