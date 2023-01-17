import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  ListRenderItem,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {Tabs, MaterialTabBar} from 'react-native-collapsible-tab-view';
import {useNavigation, useIsFocused} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconAntDesign from 'react-native-vector-icons/AntDesign';

import IconOcti from 'react-native-vector-icons/Octicons';

import IconAwesome from 'react-native-vector-icons/FontAwesome';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import IconMaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import {CardCategories, CardPromo, CardTab} from './components';
import {ScrollView as GestureHandlerScrollView} from 'react-native-gesture-handler';
import CarouselC from './Carousel';

var styles = require('./style/styles');
import {ImagesAssets} from '../assets/ImagesAssets';

const ProfileView = () => {
  const nav = useNavigation();
  return (
    <View style={styles.container}>
      <View
        style={{
          padding: 20,
          flexDirection: 'row',
          backgroundColor: '#E3CAA5',
          justifyContent: 'space-between',
        }}>
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              marginRight: 10,
              height: 50,
              width: 50,
              borderRadius: 60,
              backgroundColor: 'white',
            }}
          />
          <View>
            <Text>User1910</Text>
            <Text>awoakwk@gmail.com</Text>
            <Text>085714811327</Text>
          </View>
        </View>
        <IconOcti name={'pencil'} />
      </View>
      <TouchableOpacity
        style={[
          styles.row,
          {
            padding: 20,
            marginTop: 20,
            backgroundColor: '#AC8B75',
            opacity: 0.4,
            alignItems: 'center',
          },
        ]}
        onPress={() => nav.navigate('CreateStorePhone')}>
        <Image
          style={[
            styles.logoAlbaiPromo,
            {width: 25, height: 25, marginRight: 10},
          ]}
          source={ImagesAssets.rumah}
        />
        <Text style={{color: '#985325', fontWeight: 'bold'}}>
          Create your store (FREE!)
        </Text>
      </TouchableOpacity>

      <View style={{backgroundColor: 'white', padding: 10, marginBottom: 10}}>
        <Text style={{fontWeight: 'bold'}}>Activity</Text>
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
            <Text>Wishlist</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => nav.navigate('StoreProfileScreen')}
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
          <Icon size={17} name={'ios-newspaper-outline'} />
          <Text style={{marginLeft: 10}}>Transaction</Text>
        </TouchableOpacity>
        <View
          style={[
            styles.row,
            {
              alignItems: 'center',
              marginTop: 10,

              paddingBottom: 10,
            },
          ]}>
          <IconMaterialCommunity size={17} name={'store-check-outline'} />
          <Text style={{marginLeft: 10}}>Followed Store</Text>
        </View>
      </View>
      <View style={{backgroundColor: 'white', padding: 10, marginBottom: 10}}>
        <Text style={{fontWeight: 'bold'}}>Help Center</Text>

        <View
          style={[
            styles.row,
            {
              alignItems: 'center',
              marginTop: 10,

              paddingBottom: 10,
            },
          ]}>
          <IconAntDesign size={17} name={'customerservice'} />
          <Text style={{marginLeft: 10}}>Customer Care</Text>
        </View>
      </View>
      <View style={{backgroundColor: 'white', padding: 10, marginBottom: 10}}>
        <Text style={{fontWeight: 'bold'}}>Account Settings</Text>

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
          <Icon size={17} name={'location-outline'} />
          <Text style={{marginLeft: 10}}>Address List</Text>
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
          <Icon size={17} name={'settings-outline'} />
          <Text style={{marginLeft: 10}}>Other Settings</Text>
        </View>
      </View>
      <View
        style={[
          styles.row,
          {
            alignItems: 'center',
            marginTop: 10,
            padding: 10,
            backgroundColor: 'white',
          },
        ]}>
        <IconEntypo size={17} name={'log-out'} />
        <Text style={{marginLeft: 10}}>Logout</Text>
      </View>
    </View>
  );
};

export default ProfileView;
