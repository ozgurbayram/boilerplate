import React from "react";
import Container from "../../components/Container";
import { ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/core";

const Home = () => {
  const navigation = useNavigation();
  return (
    <Container className="justify-center items-center">
      <ScrollView className="w-full flex-1 flex-col  gap-4"></ScrollView>
    </Container>
  );
};

export default Home;
