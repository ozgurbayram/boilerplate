import React from "react";
import BasePressable from "./BasePressable/BasePressable";
import { Ionicons } from "@expo/vector-icons";
import { ParamListBase, useNavigation } from "@react-navigation/core";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { twMerge } from "tailwind-merge";

const DrawerButton = () => {
  const navigation = useNavigation<DrawerNavigationProp<ParamListBase>>();

  const onPress = () => {
    navigation.openDrawer();
  };

  const containerClassName = twMerge(`
    ml-4
  `);

  return (
    <BasePressable className={containerClassName} onPress={onPress}>
      <Ionicons name="menu" size={32} color={"#fff"} />
    </BasePressable>
  );
};

export default DrawerButton;
