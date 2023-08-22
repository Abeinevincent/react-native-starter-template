import {TouchableOpacity, TouchableOpacityProps} from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface ReusableIconProps extends TouchableOpacityProps {
  name: any; // The name of the FontAwesome5 icon you want to display
  size?: number; // Size of the icon, optional
  color?: string; // Color of the icon, optional
}

export const FontAwesome5Icon: React.FC<ReusableIconProps> = ({
  name,
  size = 20,
  color = 'white',
  ...props
}) => {
  return (
    <TouchableOpacity {...props} style={{marginRight: 4}}>
      <FontAwesome5 name={name} size={size} color={color} />
    </TouchableOpacity>
  );
};

export const IoniconsIcon: React.FC<ReusableIconProps> = ({
  name,
  size = 20,
  color = 'white',
  ...props
}) => {
  return (
    <TouchableOpacity {...props} style={{marginRight: 4}}>
      <Ionicons name={name} size={size} color={color} />
    </TouchableOpacity>
  );
};

export const AntDesignIcon: React.FC<ReusableIconProps> = ({
  name,
  size = 20,
  color = 'white',
  ...props
}) => {
  return (
    <TouchableOpacity {...props}>
      <AntDesign name={name} size={size} color={color} />
    </TouchableOpacity>
  );
};

export const EntypoIcon: React.FC<ReusableIconProps> = ({
  name,
  size = 20,
  color = 'white',
  ...props
}) => {
  return (
    <TouchableOpacity {...props}>
      <Entypo name={name} size={size} color={color} />
    </TouchableOpacity>
  );
};

export const MaterialCommunityIconsIcon: React.FC<ReusableIconProps> = ({
  name,
  size = 20,
  color = 'white',
  ...props
}) => {
  return (
    <TouchableOpacity {...props}>
      <MaterialCommunityIcons name={name} size={size} color={color} />
    </TouchableOpacity>
  );
};
