import { View, Text, Pressable, PressableProps } from "react-native";
import React, { FC } from "react";
import BaseText from "../BaseText";
import { twMerge } from "tailwind-merge";
import Animated from "react-native-reanimated";

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

interface BasePressableProps extends PressableProps {
  text?: string;
  textClassName?: string;
}

const BasePressable: FC<BasePressableProps> = ({
  text,
  textClassName,
  className,
  children,
  ...restProps
}) => {
  const buttonClasses = twMerge(`
    ${className}
  `);
  const textClasses = twMerge(`
    ${textClassName}
  `);

  return (
    <AnimatedPressable {...restProps} className={className}>
      <>
        {children}
        {text && <BaseText text={text} className={textClassName} />}
      </>
    </AnimatedPressable>
  );
};

export default BasePressable;
