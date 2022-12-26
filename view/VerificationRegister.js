import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import HideWithKeyboard from 'react-native-hide-with-keyboard';
import {useNavigation} from '@react-navigation/native';

import {ImagesAssets} from '../assets/ImagesAssets';

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

const styles = StyleSheet.create({
  root: {flex: 1},
  container: {
    padding: 60,
    flex: 5,
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    color: 'black',
  },
  subtitle: {
    marginTop: 5,
    textAlign: 'center',
    fontSize: 12,
    fontWeight: 'SemiBold',
  },
  veri: {
    fontWeight: 'SemiBold',
    marginTop: 45,
    marginBottom: 5,
    textAlign: 'center',
    fontSize: 12,
  },
  error: {
    fontWeight: 'SemiBold',
    marginTop: 45,
    marginBottom: 5,
    textAlign: 'center',
    fontSize: 12,
  },
  brownText: {
    color: '#AC8B75',
  },
  codeFiledRoot: {
    marginTop: 20,
    width: 200,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  cellRoot: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  cellText: {
    color: '#000',
    fontSize: 25,
    textAlign: 'center',
  },
  focusCell: {
    borderBottomColor: '#AC8B75',
    borderBottomWidth: 2,
  },

  loginScreenButton: {
    marginTop: 30,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#E0E0E0',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  loginText1: {
    color: '#525252',
    textAlign: 'center',
    paddingLeft: 10,
    fontWeight: 'bold',
    paddingRight: 10,
  },
  sand: {
    width: '100%',
    flex: 1,
  },
});

const CELL_COUNT = 4;

const VerificationRegister = () => {
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const nav = useNavigation();
  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <Text style={styles.title}>Input your verification code</Text>
        <Text style={styles.subtitle}>
          We have sent the verification code to contohaja@gmail.com
        </Text>
        <Text style={styles.veri}>Verification Code</Text>
        <CodeField
          ref={ref}
          {...props}
          value={value}
          onChangeText={setValue}
          cellCount={CELL_COUNT}
          rootStyle={styles.codeFiledRoot}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          renderCell={({index, symbol, isFocused}) => (
            <View
              // Make sure that you pass onLayout={getCellOnLayoutHandler(index)} prop to root component of "Cell"
              onLayout={getCellOnLayoutHandler(index)}
              key={index}
              style={[styles.cellRoot, isFocused && styles.focusCell]}>
              <Text style={styles.cellText}>
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
            </View>
          )}
        />
        <TouchableOpacity
          onPress={() => nav.navigate('Home')}
          style={styles.loginScreenButton}
          underlayColor="#fff">
          <Text style={styles.loginText1}>Next</Text>
        </TouchableOpacity>
        <Text style={styles.error}>
          Didnt recieve the code? <Text style={styles.brownText}>Resend</Text>{' '}
          or Register <Text style={styles.brownText}>with Phone Number</Text>
        </Text>
      </View>
      <HideWithKeyboard style={styles.sand}>
        <Image source={ImagesAssets.sand} style={styles.sand} />
      </HideWithKeyboard>
    </View>
  );
};

export default VerificationRegister;
