import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Pressable } from "react-native";
import React from "react";
import { tabs } from "./bottonNavigation.constants";
import {
  BottomTabNavigationProps,
  IBottomTabNavigation,
} from "./bottomNavigation.types";

const Tab = createBottomTabNavigator<BottomTabNavigationProps>();

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarButton: ({ children, ...restProps }) => (
          <Pressable {...restProps} android_ripple={{ color: "#ddd" }}>
            {children}
          </Pressable>
        ),
        tabBarLabelStyle: {
          fontFamily: "Poppins-Regular",
        },
        tabBarActiveTintColor: "#fff",
        headerShown: true,
        tabBarStyle: {
          borderTopWidth: 0,
        },
      }}
    >
      {tabs.map((tab) => (
        <Tab.Screen
          key={tab.name}
          name={tab.name}
          component={tab.component}
          options={tab.options}
        />
      ))}
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
