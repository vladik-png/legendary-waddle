import React from "react";
import LeafyNavigator from "./navigation/navigator";

type RootStackParamList = {
  Login: undefined;
  Registration: undefined;
}

export default function Page() {
  return (
    <LeafyNavigator />
  );
}