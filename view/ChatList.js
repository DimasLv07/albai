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
} from 'react-native';
import {Searchbar} from 'react-native-paper';

import {TabView, SceneMap, TabBar} from 'react-native-tab-view';

import {CardCategories, CardPromo, CardTab, ChatBox} from './components';
import Icon from 'react-native-vector-icons/Ionicons';
import IconAwesome from 'react-native-vector-icons/FontAwesome';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';

import {useNavigation} from '@react-navigation/native';
var styles = require('./style/styles');
import CarouselC from './Carousel';

const ChatList = () => {
  const nav = useNavigation();
  return (
    <View style={{padding: 20}}>
      <ChatBox />
      <ChatBox />
      <ChatBox />
      <ChatBox />
    </View>
  );
};

export default ChatList;
