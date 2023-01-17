import React, {useState} from 'react';
import {
  Text,
  Image,
  View,
  TextInput,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import HideWithKeyboard from 'react-native-hide-with-keyboard';

import {ImagesAssets} from '../assets/ImagesAssets';

import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useTogglePasswordVisibility} from './useTogglePasswordVisibility';
var styles = require('./style/styles');

const VerificationInputPassword = () => {
  const {passwordVisibility, rightIcon, handlePasswordVisibility} =
    useTogglePasswordVisibility();
  const [passwordNew, setPasswordNew] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const handlerPasswordNew = val => {
    setPasswordNew(val);
  };
  const handlerPasswordConfirm = val => {
    setPasswordConfirm(val);
  };
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
              New Password
            </Text>
            <View style={styles.inputContainer}>
              <TextInput
                value={passwordNew}
                style={[styles.textInput, styles.nunitoSans]}
                placeholder={''}
                onChangeText={value => handlerPasswordNew(value)}
                enablesReturnKeyAutomatically
                autoCapitalize="none"
                secureTextEntry={passwordVisibility}
              />
              <Pressable onPress={handlePasswordVisibility}>
                <Text>
                  {' '}
                  <Icon name={rightIcon} size={19} color="#232323" />
                </Text>
              </Pressable>
            </View>

            <Text style={[styles.labelInput, styles.nunitoSans]}>
              Confirm New Password
            </Text>
            <View style={styles.inputContainer}>
              <TextInput
                value={passwordConfirm}
                style={[styles.textInput, styles.nunitoSans]}
                placeholder={''}
                enablesReturnKeyAutomatically
                onChangeText={value => handlerPasswordConfirm(value)}
                autoCapitalize="none"
                secureTextEntry={passwordVisibility}
              />
              <Pressable onPress={handlePasswordVisibility}>
                <Text>
                  {' '}
                  <Icon name={rightIcon} size={19} color="#232323" />
                </Text>
              </Pressable>
            </View>

            <TouchableOpacity
              style={[styles.loginScreenButton, styles.loginTextInput]}
              underlayColor="#fff"
              onPress={() => nav.navigate('Login')}>
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
