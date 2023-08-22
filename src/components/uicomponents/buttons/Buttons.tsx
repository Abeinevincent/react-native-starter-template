import React from 'react';
import {
  TouchableOpacity,
  Text,
  TouchableOpacityProps,
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

const Buttons = ({
  buttonLabel,
  textStyle,
  buttonTextColor,
  ...restProps
}: SocialButtonsProps) => {
  return (
    <TouchableOpacity style={[styles.container, {}]} {...restProps}>
      <Text style={[styles.textStyle, {color: buttonTextColor}]}>
        {buttonLabel}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: primaryColor,
    width: '90%',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },

  textStyle: {
    fontSize: 16,
  },
});

export default Buttons;
