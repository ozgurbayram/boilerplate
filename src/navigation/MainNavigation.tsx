import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabNavigation from "./BottomNavigation.tsx/BottomTabNavigation";
import ModalNavigator from "./ModalNavigator";

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Bottom"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Bottom" component={BottomTabNavigation} />
      <Stack.Screen
        name="ModalNavigator"
        component={ModalNavigator}
        options={{
          presentation: "modal",
          animation: "slide_from_right",
          customAnimationOnGesture: true,
        }}
      />
    </Stack.Navigator>
  );
};

export default MainNavigation;
