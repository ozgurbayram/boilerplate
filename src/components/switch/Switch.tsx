import { View, Text } from "react-native";
import React from "react";
import { Canvas, Circle } from "@shopify/react-native-skia";

const Switch = () => {
  const r = 128;

  return (
    <Canvas style={{ width: 100, height: 50 }}>
      <Circle cx={0} cy={0} r={r} color="#333" />
    </Canvas>
  );
};

export default Switch;
