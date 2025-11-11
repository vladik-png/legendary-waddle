import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import ActorProfileScreen from "../screens/ActorPage/ActorProfileScreen";
import CollectionScreen from "../screens/CollectionPage/CollectionScreen";
import Error500Screen from "../screens/error/500";
import ExploreScreen from "../screens/ExplorePage/ExploreScreen";
import SearchScreen from "../screens/ExplorePage/SearchScreen";
import HomePageScreen from "../screens/HomePage/HomePageScreen";
import FilmCreditsScreen from "../screens/MovieDetailsPage/MovieCreditsScreen";
import FilmDetailScreen from "../screens/MovieDetailsPage/MovieDetailScreen";
import SettingScreen from "../screens/SettingScreen";
import CurrentUserProfileScreen from "../screens/UserPage/CurrentUserProfileScreen";
import UserProfileScreen from "../screens/UserPage/UserProfileScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator>
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
  );
}