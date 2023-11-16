import {
  BottomTabNavigationOptions,
  BottomTabNavigationProp,
} from "@react-navigation/bottom-tabs";
import { ParamListBase } from "@react-navigation/core";

export type BottomTabNavigationProps = {
  Home: undefined;
  Togheter: undefined;
  Fitness: undefined;
  Profile: undefined;
};

export type ITab = {
  name: keyof BottomTabNavigationProps;
  component: React.FC<ParamListBase>;
  options: BottomTabNavigationOptions;
};

export type IBottomTabNavigation =
  BottomTabNavigationProp<BottomTabNavigationProps>;
