import React, {useState} from 'react';
import Text from './TextAlbai';

import {
  View,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  TextInput,
  Pressable,
  StyleSheet,
  Image,
} from 'react-native';
import {Searchbar} from 'react-native-paper';

import {TabView, SceneMap, TabBar} from 'react-native-tab-view';

import {CardCategories, CardPromo, CardTab} from './components';
import Icon from 'react-native-vector-icons/Ionicons';
import IconAwesome from 'react-native-vector-icons/FontAwesome';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import IconMaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';

import {useNavigation} from '@react-navigation/native';
var styles = require('./style/styles');
import CarouselC from './Carousel';
const getRandomNumber = () => {
  return Math.floor(Math.random() * 15 + 12);
};

const ChatDetail = () => {
  const [chat, setChat] = useState('');
  const [chatError, setChatError] = useState('');

  const nav = useNavigation();
  const handlerChat = val => {
    setChat(val);
    setChatError(null);
  };
  return (
    <View style={[styles.container]}>
      <View style={{padding: 20, flex: 9}}>
        <View
          style={{
            padding: 10,
            flexDirection: 'row',
            backgroundColor: 'white',
            width: '50%',
            justifyContent: 'space-between',
            position: 'relative',
            borderRadius: 20,
            borderTopLeftRadius: 0,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            marginBottom: 20,
            elevation: 5,
          }}>
          <Text style={{fontSize: 12}}>Assalamualaikum</Text>
          <Text
            style={{
              fontSize: 9,
              alignSelf: 'flex-end',
              position: 'absolute',
              right: 9,
              bottom: 5,
            }}>
            08.19
          </Text>
        </View>
        <View
          style={{
            backgroundColor: '#AC8B75',
            alignSelf: 'flex-end',
            padding: 10,
            flexDirection: 'row',
            width: '50%',
            justifyContent: 'space-between',
            position: 'relative',
            borderRadius: 20,
            borderTopRightRadius: 0,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            marginBottom: 20,
            elevation: 5,
          }}>
          <Text style={{fontSize: 12, color: 'white'}}>Waalaikumsalam</Text>
          <Text
            style={{
              fontSize: 9,
              alignSelf: 'flex-end',
              position: 'absolute',
              right: 9,
              bottom: 5,
              color: 'white',
            }}>
            08.19
          </Text>
        </View>
        <View
          style={{
            padding: 10,
            flexDirection: 'row',
            backgroundColor: 'white',
            width: '25%',
            justifyContent: 'space-between',
            position: 'relative',
            borderRadius: 20,
            borderTopLeftRadius: 0,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            marginBottom: 20,
            elevation: 5,
          }}>
          <Text style={{fontSize: 12}}>Info</Text>
          <Text
            style={{
              fontSize: 9,
              alignSelf: 'flex-end',
              position: 'absolute',
              right: 9,
              bottom: 5,
            }}>
            08.19
          </Text>
        </View>
        <View
          style={{
            backgroundColor: '#AC8B75',
            alignSelf: 'flex-end',
            height: 150,
            flexDirection: 'row',
            width: '50%',
            justifyContent: 'space-between',
            position: 'relative',
            borderRadius: 20,
            borderTopRightRadius: 0,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            marginBottom: 20,
            elevation: 5,
            borderColor: '',
          }}>
          <Image
            style={{width: '100%', height: '80%', borderTopLeftRadius: 20}}
            source={{
              uri:
                'https://source.unsplash.com/random/200x200?sig=' +
                getRandomNumber(),
            }}
          />
          <Text
            style={{
              fontSize: 9,
              alignSelf: 'flex-end',
              position: 'absolute',
              right: 9,
              bottom: 5,
              color: 'white',
            }}>
            08.19
          </Text>
        </View>
        <View
          style={{
            padding: 10,
            flexDirection: 'row',
            backgroundColor: 'white',
            width: '36%',
            justifyContent: 'space-between',
            position: 'relative',
            borderRadius: 20,
            borderTopLeftRadius: 0,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            marginBottom: 20,
            elevation: 5,
          }}>
          <Text style={{fontSize: 12}}>Ok siap</Text>
          <Text
            style={{
              fontSize: 9,
              alignSelf: 'flex-end',
              position: 'absolute',
              right: 9,
              bottom: 5,
            }}>
            08.19
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: '#AC8B75',
          flex: 1,
          position: 'absolute',
          bottom: 0,
          padding: 10,
          width: '100%',
        }}>
        <IconMaterialCommunity size={29} name={'link-variant'} />
        <View
          style={[
            styles.inputContainer,
            {
              backgroundColor: 'white',
              marginBottom: 0,
              marginRight: 10,
              marginLeft: 10,
              borderRadius: 30,
              borderWidth: 0,
              borderColor: 'white',
            },
          ]}>
          <TouchableOpacity style={{marginLeft: 10}}>
            <Text>
              {' '}
              <IconAwesome name={'smile-o'} size={19} color="#232323" />
            </Text>
          </TouchableOpacity>
          <TextInput
            style={[
              {fontSize: 10, paddingLeft: 10, width: '73%'},
              styles.nunitoSans,
            ]}
            onChangeText={value => handlerChat(value)}
            placeholder={''}
            value={chat}
            enablesReturnKeyAutomatically
            autoCapitalize="none"
          />
        </View>
        <TouchableOpacity>
          <Text>
            <Icon name={'send'} size={25} color="#232323" />
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChatDetail;
