import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/homescreens/HomeScreen';
import NotificationsScreen from '../screens/otherscreens/NotificationsScreen';
import ProfileScreen from '../screens/otherscreens/ProfileScreen';
import SettingsScreen from '../screens/otherscreens/SettingsScreen';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabs from './BottomTabs';
import SplashScreen from '../screens/starterscreens/SplashScreen';
import OnBoardingScreens from '../screens/starterscreens/OnBoardingScreens';
import {useEffect, useState} from 'react';
import {getItem} from '../screens/utils/asyncStorage';
import LoginScreen from '../screens/authscreens/LoginScreen';
import WelcomeScreen from '../screens/starterscreens/WelcomeScreen';
import RegisterScreen from '../screens/authscreens/RegisterScreen';

const Stack = createStackNavigator();

export function MainStackScreens() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="HomeStacks" component={BottomTabs} />
        <Stack.Screen
          name="Splash"
          options={{header: () => null}}
          component={SplashScreen}
        />
        <Stack.Screen
          name="Welcome"
          options={{header: () => null}}
          component={WelcomeScreen}
        />
        <Stack.Screen
          name="Login"
          options={{header: () => null}}
          component={LoginScreen}
        />
        <Stack.Screen
          name="Register"
          options={{header: () => null}}
          component={RegisterScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
