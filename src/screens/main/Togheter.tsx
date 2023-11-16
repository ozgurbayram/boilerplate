import { View, Text, Button } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/core";
import Container from "../../components/Container";

const Togheter = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <Text>Togheter</Text>
      <Button
        title="Settings"
        onPress={() =>
          navigation.navigate("ModalNavigator", { screen: "SettingsModal" })
        }
      />
    </Container>
  );
};

export default Togheter;
