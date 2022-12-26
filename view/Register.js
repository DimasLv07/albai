import React, {useState, useEffect} from 'react';
import {Text, Image, View, TextInput, TouchableOpacity} from 'react-native';
import {ImagesAssets} from '../assets/ImagesAssets';
import {useNavigation, useIsFocused} from '@react-navigation/native';

var styles = require('./style/styles');

const RegisterScreen = () => {
  const isFocused = useIsFocused();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  // const [passwordError, setPasswordError] = useState('');
  // const [borderColor, setBorderColor] = useState('DDDFE2');

  useEffect(() => {
    setEmailError(null);
    // setPasswordError(null);
  }, [isFocused]);

  const handlerEmail = val => {
    setEmail(val);
    setEmailError('');
  };

  const handlerPassword = val => {
    setPassword(val);
    setEmailError('');
  };

  const handlerName = val => {
    setName(val);
    setEmailError('');
  };

  const handlerLogin = () => {
    if (email === '' || password === '' || name === '') {
      setEmailError('Sorry, something wrong with your personal data');
    }

    if (email !== '' && password !== '' && name !== '') {
      nav.navigate('Email Verification');
    }
  };
  const nav = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <Image source={ImagesAssets.logo} style={styles.logo} />
        <View style={styles.loginPage}>
          <Text style={styles.loginText}>Register</Text>
          <View style={styles.inputMain}>
            <Text style={styles.labelInput}>Full Name</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.textInput}
                onChangeText={value => handlerName(value)}
                placeholder={''}
              />
            </View>
            <Text style={styles.labelInput}>Phone Number / Email</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.textInput}
                onChangeText={value => handlerEmail(value)}
                placeholder={''}
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
              underlayColor="#fff"
              onPress={() => {
                handlerLogin();
              }}>
              <Text style={styles.loginText1}>Next</Text>
            </TouchableOpacity>
            <Text style={styles.denganMe}>
              Dengan mendaftar, saya menyetujui{' '}
            </Text>
            <Text style={styles.denganMe1}>
              {' '}
              <Text style={styles.denganMeb}>
                Syarat dan Ketentuan
              </Text> serta{' '}
              <Text style={styles.denganMeb}>Kebijakan Privasi</Text>
            </Text>
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

          <View style={styles.pemisah}></View>
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
          <Text style={styles.registerText}>Have an account? </Text>
          <TouchableOpacity onPress={() => nav.goBack()}>
            <Text style={[styles.register, styles.registerText]}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default RegisterScreen;
