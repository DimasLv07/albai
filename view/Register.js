import React, {useState, useEffect} from 'react';
import {
  Text,
  Image,
  View,
  TextInput,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import {ImagesAssets} from '../assets/ImagesAssets';
import {useNavigation, useIsFocused} from '@react-navigation/native';
import {useTogglePasswordVisibility} from './useTogglePasswordVisibility';
import Icon from 'react-native-vector-icons/FontAwesome';

var styles = require('./style/styles');

const RegisterScreen = () => {
  const isFocused = useIsFocused();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const {passwordVisibility, rightIcon, handlePasswordVisibility} =
    useTogglePasswordVisibility();
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
          <Text style={[styles.loginText, styles.nunitoSans]}>Register</Text>
          <View style={styles.inputMain}>
            <Text style={[styles.labelInput, styles.nunitoSans]}>
              Full Name
            </Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={[styles.textInput, styles.nunitoSans]}
                onChangeText={value => handlerName(value)}
                placeholder={''}
              />
            </View>
            <Text style={[styles.labelInput, styles.nunitoSans]}>
              Phone Number / Email
            </Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={[styles.textInput, styles.nunitoSans]}
                onChangeText={value => handlerEmail(value)}
                placeholder={''}
              />
            </View>
            <Text style={[styles.labelInput, styles.nunitoSans]}>Password</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={[styles.textInput, styles.nunitoSans]}
                onChangeText={value => handlerPassword(value)}
                placeholder={''}
                value={password}
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
                  fontFamily: 'NunitoSans-Regular',
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
              <Text style={[styles.loginText1, styles.nunitoSans]}>Next</Text>
            </TouchableOpacity>
            <Text style={[styles.denganMe, styles.nunitoSans]}>
              Dengan mendaftar, saya menyetujui{' '}
            </Text>
            <Text style={[styles.denganMe1, styles.nunitoSans]}>
              {' '}
              <Text style={[styles.denganMeb, styles.nunitoSans]}>
                Syarat dan Ketentuan
              </Text>{' '}
              serta{' '}
              <Text style={[styles.denganMeb, styles.nunitoSans]}>
                Kebijakan Privasi
              </Text>
            </Text>
          </View>
        </View>
        <View style={styles.or}>
          <View style={styles.orLine} />
          <View>
            <Text style={[styles.orText, styles.nunitoSans]}>OR</Text>
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
              <Text style={[styles.signText, styles.nunitoSans]}>Google</Text>
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
              <Text style={[styles.signText, styles.nunitoSans]}>Facebook</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.containerRegisterAcc}>
          <Text style={[styles.registerText, styles.nunitoSans]}>
            Have an account?{' '}
          </Text>
          <TouchableOpacity onPress={() => nav.goBack()}>
            <Text
              style={[styles.register, styles.registerText, styles.nunitoSans]}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default RegisterScreen;
