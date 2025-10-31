import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import LeafyNavigator from "./navigation/navigator";

export default function Page() {
  return (
    <SafeAreaProvider>
      <StatusBar hidden />
      <LeafyNavigator />
    </SafeAreaProvider>
  );
}