import React, {useEffect} from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
// import {
//   AntDesignReusableIcon,
//   ReusableIcon,
//   ReusableIonicon,
// } from '../components/ReusableIcon';
// import {primaryColor} from '../globals/colors';
// import Chats from '../screens/chats/Chats';
// import Contacts from '../images/Contacts';
// import Profile from '../screens/Profile';
// import Settings from '../screens/Settings';
import {useNavigation} from '@react-navigation/native';
import {AntDesignIcon, FontAwesome5Icon} from '../assets/icons/ReusableIcon';
import {primaryColor} from '../globals/colors';
import SettingsScreen from '../screens/otherscreens/SettingsScreen';
import ProfileScreen from '../screens/otherscreens/ProfileScreen';
import NotificationsScreen from '../screens/otherscreens/NotificationsScreen';
import HomeScreen from '../screens/homescreens/HomeScreen';

const Tab = createMaterialBottomTabNavigator();

const BottomTabs = () => {
  const navigation = useNavigation<any>();

  return (
    <Tab.Navigator
      initialRouteName="Chats"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color}) => {
          let iconName;
          if (route.name === 'Contacts') {
            iconName = 'contacts';
            color = focused ? primaryColor : '#ddd';
            return <AntDesignIcon color={color} name={'contacts'} />;
          } else if (route.name === 'Settings') {
            color = focused ? primaryColor : '#ddd';
            iconName = 'cog';
          } else if (route.name === 'Chats') {
            color = focused ? primaryColor : '#ddd';
            iconName = 'chatbubbles-sharp';
            return <FontAwesome5Icon color={color} name={iconName} />;
          } else if (route.name === 'Profile') {
            color = focused ? primaryColor : '#ddd';
            iconName = 'user-alt';
          }
          return <FontAwesome5Icon color={color} name={iconName} />;
        },
      })}>
      <Tab.Screen
        options={{tabBarBadge: 2}}
        name="Settings"
        component={SettingsScreen}
      />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="Notifications" component={NotificationsScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabs;
