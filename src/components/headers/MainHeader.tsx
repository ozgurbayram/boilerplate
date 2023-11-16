import { View, Text } from "react-native";
import React from "react";
import { BottomTabHeaderProps } from "@react-navigation/bottom-tabs";
import DrawerButton from "../DrawerButton";

const MainHeader = ({}) => {
  return (
    <View
      style={[
        {
          height: 100,
          marginTop: 50,
          backgroundColor: "red",
        },
      ]}
    >
      <DrawerButton />
      <Text>MainHeader</Text>
    </View>
  );
};

export default MainHeader;
