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

import {useNavigation} from '@react-navigation/native';
var styles = require('./style/styles');
import CarouselC from './Carousel';

const CreateStoreDomain = () => {
  const nav = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <View style={styles.loginPage}>
          <Text style={[styles.loginText, styles.nunitoSans]}>
            Input your store info
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
            <Text>You can’t change your store name after this!</Text>
            <Text style={[styles.labelInput, styles.nunitoSans]}>
              Domain Name
            </Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={[styles.textInput, styles.nunitoSans]}
                placeholder={''}
              />
            </View>
            <TouchableOpacity
              style={[styles.loginScreenButton, styles.loginTextInput]}
              underlayColor="#fff"
              onPress={() => nav.navigate('Create Store Location')}>
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

export default CreateStoreDomain;
