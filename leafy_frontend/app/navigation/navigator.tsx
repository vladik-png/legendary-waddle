import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import ActorProfileScreen from "../screens/ActorPage/ActorProfileScreen";
import CreatePasswordScreen from "../screens/Auth/CreatePasswordScreen";
import EmailVerifyingScreen from "../screens/Auth/EmailVerifyingScreen";
import ForgotPasswordScreen1 from "../screens/Auth/ForgotPasswordScreen1";
import LoginScreen from "../screens/Auth/LoginScreen";
import RegistrationScreen from "../screens/Auth/RegistrationScreen";
import CollectionScreen from "../screens/CollectionPage/CollectionScreen";
import Error500Screen from "../screens/error/500";
import ExploreScreen from "../screens/ExplorePage/ExploreScreen";
import SearchScreen from "../screens/ExplorePage/SearchScreen";
import HomePageScreen from "../screens/HomePage/HomePageScreen";
import FilmCreditsScreen from "../screens/MovieDetailsPage/MovieCreditsScreen";
import FilmDetailScreen from "../screens/MovieDetailsPage/MovieDetailScreen";
import OnboardingScreen from "../screens/OnboardingScreen";
import SettingScreen from "../screens/SettingScreen";
import CurrentUserProfileScreen from "../screens/UserPage/CurrentUserProfileScreen";
import UserProfileScreen from "../screens/UserPage/UserProfileScreen";

const Stack = createNativeStackNavigator();

export default function LeafyNavigator() {

  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <StatusBar hidden={true} />
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Onboarding" component={OnboardingScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ForgotPasswordScreen1" component={ForgotPasswordScreen1} options={{ headerShown: false }} />
        <Stack.Screen name="CreatePasswordScreen" component={CreatePasswordScreen} options={{ headerShown: false }} />
        <Stack.Screen name="EmailVerifying" component={EmailVerifyingScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Registration" component={RegistrationScreen} options={{ headerShown: false }} />
        <Stack.Screen name="HomePageScreen" component={HomePageScreen} options={{ headerShown: false }} />
        <Stack.Screen name="CollectionScreen" component={CollectionScreen} options={{ headerShown: false }} />
        <Stack.Screen name="UserProfileScreen" component={UserProfileScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SettingScreen" component={SettingScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Error500Screen" component={Error500Screen} options={{ headerShown: false }} />
        <Stack.Screen name="FilmDetailScreen" component={FilmDetailScreen} options={{ headerShown: false }} />
        <Stack.Screen name="CurrentUserProfileScreen" component={CurrentUserProfileScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ExploreScreen" component={ExploreScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SearchScreen" component={SearchScreen} options={{ headerShown: false }} />
        <Stack.Screen name="FilmCreditsScreen" component={FilmCreditsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ActorProfileScreen" component={ActorProfileScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </SafeAreaProvider>
  )
}