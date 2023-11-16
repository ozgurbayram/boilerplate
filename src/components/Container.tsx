import { View, Text, ViewProps } from "react-native";
import React, { FC, PropsWithChildren } from "react";
import BaseView from "./BaseView";
import { twMerge } from "tailwind-merge";

type Cont = PropsWithChildren & ViewProps;

interface ContainerProps extends Cont {}

const Container: FC<ContainerProps> = ({
  children,
  className,
  ...restProps
}) => {
  const containerClassName = twMerge(`
    bg-black dark:bg-black flex-1 p-4
    ${className}
  `);

  return (
    <BaseView className={containerClassName} {...restProps}>
      {children}
    </BaseView>
  );
};

export default Container;
