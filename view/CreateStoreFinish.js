import React, {useState, useEffect} from 'react';
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
import HideWithKeyboard from 'react-native-hide-with-keyboard';
import {ImagesAssets} from '../assets/ImagesAssets';

import {TabView, SceneMap, TabBar} from 'react-native-tab-view';

import {CardCategories, CardPromo, CardTab} from './components';
import Icon from 'react-native-vector-icons/Ionicons';
import IconAwesome from 'react-native-vector-icons/FontAwesome';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';

import {useNavigation} from '@react-navigation/native';
var styles = require('./style/styles');
import CarouselC from './Carousel';

const CreateStoreFinish = () => {
  const nav = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      nav.navigate('StoreProfileScreen');
    }, 2000);
  }, []);
  return (
    <View style={styles.container}>
      <View style={[styles.view1, {alignItems: 'center', marginTop: 40}]}>
        <Text style={{fontWeight: 'bold', fontSize: 25, color: '#282828'}}>
          CONGRATULATIONS
        </Text>
        <Image source={ImagesAssets.toko} style={{width: 200, height: 200}} />
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 25,
            color: '#282828',
            textAlign: 'center',
          }}>
          Your Store has been created!
        </Text>
      </View>
      <HideWithKeyboard style={styles.sand}>
        <Image source={ImagesAssets.sand} style={styles.sand} />
      </HideWithKeyboard>
    </View>
  );
};

export default CreateStoreFinish;
