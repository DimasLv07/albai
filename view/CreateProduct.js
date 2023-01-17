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
import {ImagesAssets} from '../assets/ImagesAssets';

import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import Entypo from 'react-native-vector-icons/Entypo';

import {CardCategories, CardPromo, CardTab} from './components';
import Icon from 'react-native-vector-icons/Ionicons';
import IconAwesome from 'react-native-vector-icons/FontAwesome';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import IconMaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';

import Feather from 'react-native-vector-icons/Feather';

import {useNavigation} from '@react-navigation/native';
var styles = require('./style/styles');
import CarouselC from './Carousel';

const CreateProduct = () => {
  const [productName, setProductName] = useState('');
  const [productNameError, setProductNameError] = useState('');
  const [password, setPassword] = useState('');

  const handlerProductName = val => {
    setProductName(val);
    setProductNameError(null);
  };

  return (
    <View style={[styles.container, {padding: 15}]}>
      <Text style={{fontWeight: 'bold', fontSize: 16, marginBottom: 15}}>
        Input your product Info
      </Text>
      <Text>
        Product Photo <Text style={{color: '#DF2929'}}>*</Text>
      </Text>

      <View style={{flexDirection: 'row', marginBottom: 15}}>
        <Image
          style={[styles.profileUser, {marginRight: 10}]}
          source={ImagesAssets.profileUser}
        />
        <View
          style={{
            marginTop: 15,
            width: 55,
            height: 55,
            borderRadius: 8,
            marginBottom: 5,
            backgroundColor: '#D7D7D7',
          }}>
          <Entypo
            style={{alignSelf: 'center', marginTop: 10}}
            color="white"
            size={28}
            name={'plus'}
          />
        </View>
      </View>
      <Text style={styles.labelInput}>
        Product Name <Text style={{color: '#DF2929'}}>*</Text>
      </Text>
      <View style={[styles.inputContainer, styles.nunitoSans]}>
        <TextInput
          style={[styles.textInput, styles.nunitoSans]}
          placeholder={''}
          onChangeText={value => handlerProductName(value)}
        />
      </View>
      <TouchableOpacity
        style={[
          styles.row,
          {
            marginTop: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
          },
        ]}>
        <View>
          <Text style={{color: '#282828', fontWeight: 'bold', opacity: 1}}>
            Category <Text style={{color: '#DF2929'}}>*</Text>
          </Text>
          <View style={{flexDirection: 'row', marginTop: 10}}>
            <Text
              style={{
                color: 'white',
                fontSize: 11,
                opacity: 1,
                backgroundColor: '#E3CAA5',
                padding: 8,
                paddingHorizontal: 15,
                borderRadius: 5,
              }}>
              Foods
            </Text>
            <Text
              style={{
                color: 'white',
                fontSize: 11,
                opacity: 1,
                backgroundColor: '#D7D7D7',
                padding: 8,
                borderRadius: 5,
                marginLeft: 5,
              }}>
              <Entypo
                style={{alignSelf: 'center', marginTop: 10}}
                color="white"
                size={13}
                name={'plus'}
              />
            </Text>
          </View>
        </View>
        <Text style={{color: '#AC8B75'}}>+ Add Category</Text>
      </TouchableOpacity>
      <Text style={styles.labelInput}>
        Brand <Text style={{color: '#DF2929'}}>*</Text>
      </Text>
      <View style={[styles.inputContainer, styles.nunitoSans]}>
        <TextInput
          style={[styles.textInput, styles.nunitoSans]}
          placeholder={''}
          onChangeText={value => handlerProductName(value)}
        />
      </View>
      <Text style={styles.labelInput}>
        Price <Text style={{color: '#DF2929'}}>*</Text>
      </Text>
      <View style={[styles.inputContainer, styles.nunitoSans]}>
        <TouchableOpacity>
          <Text style={{marginLeft: 10}}>Rp</Text>
        </TouchableOpacity>
        <TextInput
          style={[styles.textInput, styles.nunitoSans]}
          placeholder={''}
          onChangeText={value => handlerProductName(value)}
        />
      </View>

      <Text style={[styles.labelInput, {marginRight: 120}]}>
        Condition <Text style={{color: '#DF2929'}}>*</Text>
      </Text>

      <View style={{flexDirection: 'row', marginTop: 5}}>
        <TouchableOpacity
          style={[
            styles.inputContainer,
            styles.nunitoSans,
            {
              width: '48%',
              backgroundColor: '#AC8B75',
              justifyContent: 'space-between',
              paddingHorizontal: 10,
              borderColor: '#AC8B75',
            },
          ]}>
          <Text style={{color: 'white'}}>New</Text>

          <TouchableOpacity
            style={{
              width: 20,
              height: 20,
              borderWidth: 1,
              borderColor: 'white',
              borderRadius: 20,
              justifyContent: 'center',
            }}>
            <View
              style={{
                width: 10,
                height: 10,
                backgroundColor: 'white',
                alignSelf: 'center',
                borderRadius: 10,
              }}
            />
          </TouchableOpacity>
        </TouchableOpacity>
        <View style={{width: 10}} />

        <TouchableOpacity
          style={[
            styles.inputContainer,
            styles.nunitoSans,
            {
              width: '48%',
              borderColor: '#AC8B75',
              justifyContent: 'space-between',
              paddingHorizontal: 10,
            },
          ]}>
          <Text style={{color: '#AC8B75'}}>Second-Hand</Text>

          <TouchableOpacity
            style={{
              width: 20,
              height: 20,
              borderWidth: 1,
              borderColor: '#AC8B75',
              borderRadius: 20,
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CreateProduct;
