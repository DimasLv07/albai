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
import {ImagesAssets} from '../assets/ImagesAssets';

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
        <Image
          source={{
            uri: 'https://www.c-store.com.au/wp-content/uploads/2018/02/Woolworths_MarrickvilleMetro_Store-Front.jpg?w=1200',
          }}
          style={{
            width: 80,
            height: 80,
            backgroundColor: 'black',
            borderRadius: 50,
            marginRight: 10,
            marginLeft: 15,
          }}
        />

        <View>
          <Text style={{fontSize: 17, fontWeight: 'bold', color: '#282828'}}>
            Berkah Store
          </Text>
          <View style={[styles.row, {alignItems: 'center'}]}>
            <Feather size={15} name={'user'} />
            <Text style={{marginLeft: 4, fontSize: 11}}>98 Followers</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              padding: 5,
              width: "67%",
              backgroundColor: 'white',
              justifyContent: 'space-between',
              borderRadius: 5,
              marginTop: 15,
            }}>
            <Text style={{fontSize:11}}>$ Balance</Text>
            <Text style={{fontSize:11}}>Rp 120.000.000</Text>
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
          <IconAwesome size={20} name={'heart-o'} />
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
          <IconMaterialCommunity size={20} name={'store-check-outline'} />
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
          <Icon size={20} name={'ios-star-outline'} />
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
            backgroundColor: 'rgba(172,139,117,0.4)',

            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
          },
        ]}>
        <View>
          <Text style={{color: '#282828', fontWeight: 'bold'}}>
            Your Product
          </Text>
          <Text style={{color: '#282828', fontSize: 11}}>5 Product</Text>
        </View>
        <Text style={{color: '#AC8B75'}}>+ Add Product</Text>
      </TouchableOpacity>
    </View>
  );
};

export default StoreProfileScreen;
