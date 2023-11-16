import { View, Text } from "react-native";
import React from "react";
import DrawerNavigation from "./DrawerNavigation";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import MainNavigation from "./MainNavigation";

const RootNavigation = () => {
  return (
    <NavigationContainer
      theme={{
        dark: true,
        colors: {
          background: "#010101",
          border: "#333",
          card: "#010101",
          text: "#fff",
          primary: "#010101",
          notification: "#ccc",
        },
      }}
    >
      <MainNavigation />
    </NavigationContainer>
  );
};

export default RootNavigation;
