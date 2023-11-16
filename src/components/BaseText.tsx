import { View, Text, TextProps } from "react-native";
import React, { FC } from "react";
import { twMerge } from "tailwind-merge";

interface BaseTextProps extends TextProps {
  text: string;
  className?: string;
}

const BaseText: FC<BaseTextProps> = ({ text, className, ...restProps }) => {
  const textClassName = twMerge(`
    font-sans 
    ${className}
  `);

  return (
    <Text className={textClassName} {...restProps}>
      {text}
    </Text>
  );
};

export default BaseText;
