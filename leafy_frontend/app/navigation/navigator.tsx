import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import CreatePasswordScreen from "../screens/CreatePasswordScreen";
import CurrentUserProfileScreen from "../screens/CurrentUserProfileScreen";
import EmailVerifyingScreen from "../screens/EmailVerifyingScreen";
import Error500Screen from "../screens/error/500";
import ExploreScreen from "../screens/ExporeScreen";
import FilmDetailScreen from "../screens/FilmDetailScreen";
import ForgotPasswordScreen1 from "../screens/ForgotPasswordScreen1";
import HomePageScreen from "../screens/HomePageScreen";
import LoginScreen from "../screens/LoginScreen";
import OnboardingScreen from "../screens/OnboardingScreen";
import RegistrationScreen from "../screens/RegistrationScreen";
import SettingScreen from "../screens/SettingScreen";

const Stack = createNativeStackNavigator();

export default function LeafyNavigator() {
  // const insets = useSafeAreaInsets();
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomePageScreen" component={HomePageScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Onboarding" component={OnboardingScreen} options={{ headerShown: false }} />
      <Stack.Screen name="ForgotPasswordScreen1" component={ForgotPasswordScreen1} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="SettingScreen" component={SettingScreen} options={{ headerShown: false }} />
      <Stack.Screen name="CreatePasswordScreen" component={CreatePasswordScreen} options={{ headerShown: false }} />
      <Stack.Screen name="EmailVerifying" component={EmailVerifyingScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Registration" component={RegistrationScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Error500Screen" component={Error500Screen} options={{ headerShown: false }} />
      <Stack.Screen name="FilmDetailScreen" component={FilmDetailScreen} options={{ headerShown: false }} />
      <Stack.Screen name="CurrentUserProfileScreen" component={CurrentUserProfileScreen} options={{ headerShown: false }} />
      <Stack.Screen name="ExploreScreen" component={ExploreScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}