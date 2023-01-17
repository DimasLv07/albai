import React, {useState} from 'react';
import {
  Text,
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
import IconMaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';

import {useNavigation} from '@react-navigation/native';
var styles = require('./style/styles');
import CarouselC from './Carousel';

const CreateStoreLocation = () => {
  const nav = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <View style={styles.loginPage}>
          <Text style={[styles.loginText, styles.nunitoSans]}>
            Search your location
          </Text>

          <View style={styles.inputMain}>
            <Text style={[styles.labelInput, styles.nunitoSans]}>
              Your store name
            </Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={[styles.textInput, styles.nunitoSans]}
                placeholder={''}
              />
            </View>
            <Text>
              <IconMaterialCommunity size={15} name={'target'} /> Use your
              current location
            </Text>
            <TouchableOpacity
              style={[styles.loginScreenButton, styles.loginTextInput]}
              underlayColor="#fff"
              onPress={() => nav.navigate('Create Store Finish')}>
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

export default CreateStoreLocation;
