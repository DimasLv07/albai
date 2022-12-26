import React, {useState, useEffect} from 'react';
import {Text, Image, View, TextInput, TouchableOpacity} from 'react-native';
import HideWithKeyboard from 'react-native-hide-with-keyboard';

import {ImagesAssets} from '../assets/ImagesAssets';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

import {useNavigation, useIsFocused} from '@react-navigation/native';

var styles = require('./style/styles');

const LoginScreen = () => {
  const isFocused = useIsFocused();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  // const [passwordError, setPasswordError] = useState('');

  useEffect(() => {
    setEmailError(null);
    // setPasswordError(null);
  }, [isFocused]);

  const handlerEmail = val => {
    setEmail(val);
    setEmailError(null);
  };

  const handlerPassword = val => {
    setPassword(val);
    setEmailError(null);
  };

  const handlerLogin = () => {
    if (email === '' || password === '') {
      setEmailError(
        'Sorry, your password or email was incorrect. Please double-check your password',
      );
    }

    if (email !== '' && password !== '') {
      nav.navigate('Home');
    }
  };

  const nav = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <Image source={ImagesAssets.logo} style={styles.logo} />
        <View style={styles.loginPage}>
          <Text style={styles.loginText}>Login</Text>
          <View style={styles.inputMain}>
            <Text style={styles.labelInput}>Phone Number / Email</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.textInput}
                placeholder={''}
                onChangeText={value => handlerEmail(value)}
              />
            </View>
            <Text style={styles.labelInput}>Password</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.textInput}
                onChangeText={value => handlerPassword(value)}
                placeholder={''}
              />
            </View>

            <View style={styles.checkboxContainer}>
              <View style={styles.checkInner}>
                <BouncyCheckbox
                  size={20}
                  fillColor="#000000"
                  unfillColor="#FFFFFF"
                  innerIconStyle={{borderWidth: 1}}

                  // style={styles.checkbox}
                />
                <Text style={styles.label}>Simpan Info Login</Text>
              </View>
              <TouchableOpacity
                onPress={() => nav.navigate('VerificationInputPassword')}>
                <Text style={styles.labelForgot}>Forget Password?</Text>
              </TouchableOpacity>
            </View>
            {!!emailError && (
              <Text
                duration={1000}
                animation="fadeInRight"
                style={{
                  fontSize: 10,
                  color: '#FF0000',
                  textAlign: 'center',
                  amrginTop: 4,
                  padding: 5,
                  borderRadius: 6,
                  marginBottom: 5,
                }}>
                {emailError}
              </Text>
            )}
            <TouchableOpacity
              style={styles.loginScreenButton}
              onPress={() => handlerLogin()}
              underlayColor="#fff">
              <Text style={styles.loginText1}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.or}>
          <View style={styles.orLine} />
          <View>
            <Text style={styles.orText}>OR</Text>
          </View>
          <View style={styles.orLine} />
        </View>
        <View style={styles.signContainer}>
          <TouchableOpacity
            style={styles.sign}
            onPress={() => {
              console.log('does not work');
            }}>
            <View
              style={styles.signContainer1}
              onPress={() => console.log('sdds')}>
              <Image
                source={ImagesAssets.google_logo}
                style={styles.signLogo}
              />
              <Text style={styles.signText}>Google</Text>
            </View>
          </TouchableOpacity>

          <View style={styles.pemisah} />
          <TouchableOpacity
            style={styles.sign}
            onPress={() => {
              console.log('does not work');
            }}>
            <View style={styles.signContainer1}>
              <Image
                source={ImagesAssets.facebook_logo}
                style={styles.signLogo}
              />
              <Text style={styles.signText}>Facebook</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.containerRegisterAcc}>
          <Text style={styles.registerText}>Dont have an account? </Text>
          <TouchableOpacity onPress={() => nav.navigate('Register')}>
            <Text style={[styles.register, styles.registerText]}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
      <HideWithKeyboard style={styles.sand}>
        <Image source={ImagesAssets.sand} style={styles.sand} />
      </HideWithKeyboard>
    </View>
  );
};

export default LoginScreen;
