import React from 'react';
import {
  TextInput,
  StyleSheet,
  TextInputProps,
  StyleProp,
  ViewStyle,
  View,
} from 'react-native';

interface CustomInputProps extends TextInputProps {
  customStyle?: StyleProp<ViewStyle>; // You can define additional custom props here
}

const CustomInput = ({customStyle, ...restProps}: CustomInputProps) => {
  const mergedStyles = [restProps.style, customStyle];

  return (
    <View style={styles.container}>
      <TextInput {...restProps} style={mergedStyles} />;
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'gray',
    paddingHorizontal: 10,
    width: 200,
  },
});

export default CustomInput;
