import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import { ParamListBase } from "@react-navigation/core";
import Home from "../../screens/main/Home";
import { FontAwesome } from "@expo/vector-icons";
import Togheter from "../../screens/main/Togheter";
import Fitness from "../../screens/main/Fitness";
import Profile from "../../screens/main/Profile";
import { ITab } from "./bottomNavigation.types";

export const tabs: Array<ITab> = [
  {
    name: "Home",
    component: Home,
    options: {
      tabBarIcon: ({ color }) => (
        <FontAwesome name="home" size={21} color={color} />
      ),
      headerTitle: "SAMSUNG Health",
    },
  },
  {
    name: "Togheter",
    component: Togheter,
    options: {
      tabBarIcon: ({ color }) => (
        <FontAwesome name="user" size={21} color={color} />
      ),
    },
  },
  {
    name: "Fitness",
    component: Fitness,
    options: {
      tabBarIcon: ({ color }) => (
        <FontAwesome name="inbox" size={21} color={color} />
      ),
      tabBarLabel: "Sale",
    },
  },
  {
    name: "Profile",
    component: Profile,
    options: {
      tabBarIcon: ({ color }) => (
        <FontAwesome name="shopping-cart" size={21} color={color} />
      ),
      tabBarLabel: "Purchase",
    },
  },
];
