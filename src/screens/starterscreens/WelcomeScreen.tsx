import {View, Image, Text, StyleSheet} from 'react-native';
import React from 'react';
import TextComp from '../../components/uicomponents/text/TextComp';
import SocialButtons from '../../components/uicomponents/buttons/SocialButtons';
import Buttons from '../../components/uicomponents/buttons/Buttons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {prePrimaryColor} from '../../globals/colors';

const WelcomeScreen = () => {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.loginimage}
          source={{
            uri: 'https://img.freepik.com/free-vector/forgot-password-concept-illustration_114360-1123.jpg?size=626&ext=jpg&ga=GA1.1.1304378105.1690012069&semt=ais',
          }}
        />
      </View>

      <TextComp size={20} color="#444" weight="500">
        Lets get you in
      </TextComp>

      <View style={styles.socialButtonsContainer}>
        <SocialButtons buttonLabel="Google" buttonTextColor="white" />
        <SocialButtons buttonLabel="Apple" buttonTextColor="white" />
        <SocialButtons buttonLabel="Facebook" buttonTextColor="white" />
      </View>

      <TextComp size={20} color="#444" weight="500">
        OR
      </TextComp>

      <Buttons buttonLabel="Login with Password" buttonTextColor="white" />

      <View style={styles.linkToRegister}>
        <TextComp size={15} color="#444" weight="500">
          New to ScholarTrack?
        </TextComp>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <TextComp size={15} color={prePrimaryColor} weight="500">
            Create Account
          </TextComp>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },

  loginimage: {
    width: 300,
    height: 400,
  },

  socialButtonsContainer: {
    gap: 10,
    justifyContent: 'space-around',
    flexDirection: 'row',
    paddingHorizontal: 15,
    marginVertical: 20,
  },

  linkToRegister: {
    alignItems: 'center',
    gap: 7,
    justifyContent: 'center',
    flexDirection: 'row',
  },
});

export default WelcomeScreen;
