import { View, Text, Button } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/core";

const ProductModal = () => {
  const navigate = useNavigation();
  return (
    <View>
      <Button
        title="Go To Settings"
        onPress={() =>
          navigate.navigate("ModalNavigator", { screen: "SettingsModal" })
        }
      />
    </View>
  );
};

export default ProductModal;
