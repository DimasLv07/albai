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
} from 'react-native';
import {Searchbar} from 'react-native-paper';

import {TabView, SceneMap, TabBar} from 'react-native-tab-view';

import {CardCategories, CardPromo, CardTab} from './components';
import Icon from 'react-native-vector-icons/Ionicons';
import IconAwesome from 'react-native-vector-icons/FontAwesome';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import IconMaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';

import Feather from 'react-native-vector-icons/Feather';

import {useNavigation} from '@react-navigation/native';
var styles = require('./style/styles');
import CarouselC from './Carousel';

const StoreProfileScreen = () => {
  const nav = useNavigation();
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.row,
          {paddingTop: 10, paddingBottom: 20, backgroundColor: '#E3CAA5'},
        ]}>
        <View
          style={{
            width: 60,
            height: 60,
            backgroundColor: 'black',
            borderRadius: 30,
            marginRight: 10,
            marginLeft: 15,
          }}
        />
        <View>
          <Text style={{fontSize: 17, fontWeight: 'bold', color: '#282828'}}>
            Berkah Store
          </Text>
          <View style={[styles.row, {alignItems: 'center'}]}>
            <Feather size={16} name={'user'} />
            <Text style={{marginLeft: 4}}>98 Followers</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              padding: 5,
              width: 250,
              backgroundColor: 'white',
              justifyContent: 'space-between',
              borderRadius: 5,
              marginTop: 15,
            }}>
            <Text>$ Balance</Text>
            <Text>Rp 120.000.000</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          backgroundColor: 'white',
          padding: 10,
          marginBottom: 10,
          marginTop: 10,
        }}>
        <Text style={{fontWeight: 'bold'}}>SALE</Text>
        <View
          style={[
            styles.row,
            {
              alignItems: 'center',
              marginTop: 10,
              borderBottomColor: '#D7D7D7',
              borderBottomWidth: 1,
              paddingBottom: 10,
            },
          ]}>
          <IconAwesome size={17} name={'heart-o'} />
          <TouchableOpacity
            onPress={() => nav.navigate('WishlistScreen')}
            style={{marginLeft: 10}}>
            <Text>New order</Text>
          </TouchableOpacity>
        </View>
        <View
          style={[
            styles.row,
            {
              alignItems: 'center',
              marginTop: 10,
              borderBottomColor: '#D7D7D7',
              borderBottomWidth: 1,
              paddingBottom: 10,
            },
          ]}>
          <IconMaterialCommunity size={17} name={'store-check-outline'} />
          <Text style={{marginLeft: 10}}>Ready to deliver</Text>
        </View>
        <View
          style={[
            styles.row,
            {
              alignItems: 'center',
              marginTop: 10,

              paddingBottom: 10,
            },
          ]}>
          <Icon size={17} name={'ios-star-outline'} />
          <Text style={{marginLeft: 10}}>Reviews</Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => nav.navigate('ProductList')}
        style={[
          styles.row,
          {
            padding: 20,
            marginTop: 20,
            backgroundColor: '#AC8B75',
            opacity: 0.4,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
          },
        ]}>
        <View>
          <Text style={{color: '#282828', fontWeight: 'bold', opacity: 1}}>
            Your Product
          </Text>
          <Text style={{color: '#282828', fontSize: 11, opacity: 1}}>
            5 Product
          </Text>
        </View>
        <Text style={{color: '#AC8B75', opacity: 1}}>+ Add Product</Text>
      </TouchableOpacity>
    </View>
  );
};

export default StoreProfileScreen;
