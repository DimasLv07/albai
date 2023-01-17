import React, {useState} from 'react';
import {Text, View, TextInput, Pressable, ScrollView} from 'react-native';
import IconMaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons';

import {CardCategories, CardPromo, CardTabButton} from './components';

var styles = require('./style/styles');

const WishlistScreen = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  // const [passwordError, setPasswordError] = useState('');

  const handlerEmail = val => {
    setEmail(val);
    setEmailError(null);
  };
  return (
    <View>
      <View
        style={{
          padding: 20,
          borderBottomWidth: 1,
          paddingBottom: 10,
          borderColor: '#D7D7D7',
        }}>
        <View style={{flexDirection: 'row'}}>
          <View style={[styles.inputContainer, {width: '88%'}]}>
            <Pressable>
              <Text style={{marginLeft: 5}}>
                {' '}
                <Icon name={'search'} size={19} color="#232323" />
              </Text>
            </Pressable>
            <TextInput
              style={[styles.textInput, styles.nunitoSans]}
              onChangeText={value => handlerEmail(value)}
              placeholder={'Search your product...'}
              value={email}
              enablesReturnKeyAutomatically
              autoCapitalize="none"
            />
          </View>
          <Pressable
            style={{
              borderWidth: 1,
              borderColor: '#525252',
              borderRadius: 14,
              position: 'relative',
              marginLeft: 5,
              width: 39,
              height: 39,
            }}>
            <Text
              style={{
                position: 'absolute',
                bottom: 3,
                right: 10,
                transform: [{rotateY: '180deg'}],
              }}>
              <IconMaterialCommunity
                name={'toggle-switch-outline'}
                size={19}
                color="#232323"
              />
            </Text>

            <Text style={{position: 'absolute', top: 3, right: 10}}>
              <IconMaterialCommunity
                name={'toggle-switch-outline'}
                size={19}
                color="#232323"
              />
            </Text>
          </Pressable>
        </View>
      </View>
      <ScrollView>
        <Text
          style={{
            color: '#282828',
            fontWeight: '500',
            marginLeft: 15,
            marginTop: 15,
          }}>
          3 Product
        </Text>
        <View style={styles.containerP}>
          <View style={styles.containerPP}>
            <CardTabButton />
            <CardTabButton />
          </View>
          <View style={styles.containerPP}>
            <CardTabButton />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default WishlistScreen;
