import {Text, TextProps} from 'react-native';
import React from 'react';

export interface CustomTextProps extends TextProps {
  color: string;
  size: number;
  weight?:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900'
    | undefined;
  children: React.ReactNode;
}

const TextComp = ({
  color,
  size,
  weight,
  children,
  ...otherTextProps
}: CustomTextProps) => {
  return (
    <Text
      {...otherTextProps}
      style={{color: color, fontSize: size, fontWeight: weight}}>
      {children}
    </Text>
  );
};

export default TextComp;
