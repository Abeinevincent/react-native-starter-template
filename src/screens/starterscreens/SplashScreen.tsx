import {View, Image, StyleSheet, StatusBar, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {primaryColor} from '../../globals/colors';

export default function SplashScreen({navigation}: any) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Welcome');
    }, 3000);
  }, []);

  return (
    <>
      <View style={[styles.container, {backgroundColor: primaryColor}]}>
        <StatusBar
          hidden={false}
          backgroundColor={primaryColor}
          barStyle="light-content"
        />

        <View>
          <Text style={{color: 'white', fontSize: 25}}>TrackSmart</Text>
        </View>

        {/* <Image
          style={{width: 200, height: 200}}
          source={require('../images/logo.png')}
        /> */}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
});
