import React from 'react';
import {
  TouchableOpacity,
  Text,
  TouchableOpacityProps,
  TextProps,
  StyleProp,
  TextStyle,
  ViewStyle,
  StyleSheet,
} from 'react-native';
import {primaryColor} from '../../../globals/colors';

export interface SocialButtonsProps extends TouchableOpacityProps {
  buttonLabel: string;
  buttonTextColor: string;
  textStyle?: StyleProp<TextStyle>; // Style for the Text component
  containerStyle?: StyleProp<ViewStyle>; // Style for the TouchableOpacity container
}

const SocialButtons = ({
  buttonLabel,
  textStyle,
  buttonTextColor,
  ...restProps
}: SocialButtonsProps) => {
  return (
    <TouchableOpacity style={[styles.container, {}]} {...restProps}>
      <Text style={[textStyle, {color: buttonTextColor}]}>{buttonLabel}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: primaryColor,
    width: 90,
    height: 90,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SocialButtons;
