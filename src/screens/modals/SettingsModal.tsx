import { View, Text, Button, ScrollView } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/core";

const SettingsModal = () => {
  const navigate = useNavigation();
  return (
    <View>
      <ScrollView style={{ flexDirection: "column" }}>
        <View
          style={{
            height: 100,
            width: 300,
            borderColor: "red",
            borderWidth: 2,
          }}
        ></View>
        <View
          style={{
            height: 100,
            width: 300,
            borderColor: "red",
            borderWidth: 2,
          }}
        ></View>
        <View
          style={{
            height: 100,
            width: 300,
            borderColor: "red",
            borderWidth: 2,
          }}
        ></View>
        <View
          style={{
            height: 100,
            width: 300,
            borderColor: "red",
            borderWidth: 2,
          }}
        ></View>
        <View
          style={{
            height: 100,
            width: 300,
            borderColor: "red",
            borderWidth: 2,
          }}
        ></View>
        <View
          style={{
            height: 100,
            width: 300,
            borderColor: "red",
            borderWidth: 2,
          }}
        ></View>
        <View
          style={{
            height: 100,
            width: 300,
            borderColor: "red",
            borderWidth: 2,
          }}
        ></View>
      </ScrollView>
    </View>
  );
};

export default SettingsModal;
