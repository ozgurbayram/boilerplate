import { View, Text, ViewProps } from "react-native";
import React, { FC, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

interface BaseViewProps extends ViewProps {}

const BaseView: FC<BaseViewProps> = (props) => {
  const viewClassName = twMerge(`
    ${props.className}
  `);

  return (
    <View className={viewClassName} {...props}>
      {props.children}
    </View>
  );
};

export default BaseView;
