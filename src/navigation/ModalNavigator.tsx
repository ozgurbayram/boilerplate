import { View, Text, Pressable } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductModal from "../screens/modals/ProductModal";
import SettingsModal from "../screens/modals/SettingsModal";
import { useNavigation } from "@react-navigation/core";
const ModalStack = createNativeStackNavigator();

const ModalNavigator = () => {
  const navigation = useNavigation();

  return (
    <ModalStack.Navigator
      screenOptions={{
        presentation: "modal",
        headerBackTitleVisible: true,
        headerBlurEffect: "systemChromeMaterialLight",
        headerRight: () => (
          <Pressable
            onPress={() => {
              navigation.goBack();
            }}
            style={{
              height: 40,
              width: 40,
              backgroundColor: "gray",
              borderRadius: 100,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text>X</Text>
          </Pressable>
        ),
      }}
    >
      <ModalStack.Screen name="ProductModal" component={ProductModal} />
      <ModalStack.Screen name="SettingsModal" component={SettingsModal} />
    </ModalStack.Navigator>
  );
};

export default ModalNavigator;
