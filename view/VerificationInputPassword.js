import React from 'react';
import {Text, Image, View, TextInput, TouchableOpacity} from 'react-native';
import HideWithKeyboard from 'react-native-hide-with-keyboard';

import {ImagesAssets} from '../assets/ImagesAssets';

import {useNavigation} from '@react-navigation/native';
var styles = require('./style/styles');

const VerificationInputPassword = () => {
  const nav = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <View style={styles.loginPage}>
          <Text style={[styles.loginText, styles.nunitoSans]}>
            Create new password
          </Text>
          <View style={styles.inputMain}>
            <Text style={[styles.labelInput, styles.nunitoSans]}>
              Phone Number / Email
            </Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={[styles.textInput, styles.nunitoSans]}
                placeholder={''}
              />
            </View>

            <TouchableOpacity
              style={[styles.loginScreenButton, styles.loginTextInput]}
              underlayColor="#fff"
              onPress={() => nav.navigate('Forget password')}>
              <Text style={[styles.loginText1, styles.nunitoSans]}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <HideWithKeyboard style={styles.sand}>
        <Image source={ImagesAssets.sand} style={styles.sand} />
      </HideWithKeyboard>
    </View>
  );
};

export default VerificationInputPassword;
