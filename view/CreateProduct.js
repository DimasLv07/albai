import React, {useState} from 'react';
import Text from './TextAlbai';

import {
  View,
  TouchableOpacity,
  ScrollView,
  FlatList,
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

const DATACONDITION = [
  {
    id: 'bd7acbDASSAea-c1b1-46c2-aed5-3aasdd53abb28ba',
    condition: 'New',
  },
  {
    id: '3ac68dsfafc-c605asd-48d3-a4f8-fbd91aa97f63',
    condition: 'Second-Hand',
  },
];

const ConditionsInput = ({
  item,
  onPress,
  borderColor,
  backgroundColor,
  textColor,
  eclipseOutline,
}) => (
  <TouchableOpacity
    onPress={onPress}
    style={[
      {
        borderWidth: 1,
        height: 40,
        marginBottom: 5,
        borderRadius: 10,
        borderColor: '#525252',
        flexDirection: 'row',
        alignItems: 'center',
      },
      styles.nunitoSans,
      {
        width: 157,
        marginRight: 10,
        borderColor: '#AC8B75',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        backgroundColor: backgroundColor,
      },
    ]}>
    <Text style={{color: textColor}}>{item.condition}</Text>

    <View
      style={{
        width: 20,
        height: 20,
        borderWidth: 1,
        borderColor: eclipseOutline,
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
    </View>
  </TouchableOpacity>
);

const CreateProduct = () => {
  const [selectedIdCondition, setSelectedIdCondition] = useState(
    'bd7acbDASSAea-c1b1-46c2-aed5-3aasdd53abb28ba',
  );
  const renderItemCondition = ({item}) => {
    const backgroundColor =
      item.id === selectedIdCondition ? '#AC8B75' : 'white';
    const textColor = item.id === selectedIdCondition ? 'white' : '#AC8B75';
    const eclipseOutline =
      item.id === selectedIdCondition ? 'white' : '#AC8B75';

    return (
      <ConditionsInput
        item={item}
        onPress={() => setSelectedIdCondition(item.id)}
        backgroundColor={backgroundColor}
        textColor={textColor}
        eclipseOutline={eclipseOutline}
      />
    );
  };
  const [productName, setProductName] = useState('');
  const [productNameError, setProductNameError] = useState('');
  const [password, setPassword] = useState('');

  const handlerProductName = val => {
    setProductName(val);
    setProductNameError(null);
  };

  return (
    <ScrollView style={[styles.container, {padding: 15}]}>
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
          style={[styles.textInput, styles.nunitoSans, {fontSize: 13}]}
          placeholder={''}
          onChangeText={value => handlerProductName(value)}
        />
      </View>

      <View style={{flexDirection: 'row', marginTop: 5}}>
        <View style={{width: '48%'}}>
          <Text style={styles.labelInput}>
            Stock <Text style={{color: '#DF2929'}}>*</Text>
          </Text>
          <View
            style={[
              styles.inputContainer,
              styles.nunitoSans,
              {
                marginTop: 5,
                width: '100%',
                justifyContent: 'space-between',
                paddingHorizontal: 10,
              },
            ]}>
            <Text>1</Text>
            <View>
              <Icon
                style={{transform: [{rotate: '90deg'}], marginBottom: -4}}
                name={'chevron-back'}
              />
              <Icon
                style={{transform: [{rotate: '-90deg'}]}}
                name={'chevron-back'}
              />
            </View>
          </View>
        </View>

        <View style={{width: 10}} />

        <View style={{width: '48%'}}>
          <Text style={styles.labelInput}>
            Minimum Order <Text style={{color: '#DF2929'}}>*</Text>
          </Text>
          <View
            style={[
              styles.inputContainer,
              styles.nunitoSans,
              {
                marginTop: 5,
                width: '100%',
                justifyContent: 'space-between',
                paddingHorizontal: 10,
              },
            ]}>
            <Text>1</Text>
            <View>
              <Icon
                style={{transform: [{rotate: '90deg'}], marginBottom: -4}}
                name={'chevron-back'}
              />
              <Icon
                style={{transform: [{rotate: '-90deg'}]}}
                name={'chevron-back'}
              />
            </View>
          </View>
        </View>
      </View>

      <Text style={[styles.labelInput, {marginRight: 120}]}>
        Condition <Text style={{color: '#DF2929'}}>*</Text>
      </Text>

      <FlatList
        data={DATACONDITION}
        horizontal
        renderItem={renderItemCondition}
        keyExtractor={item => item.id}
        extraData={selectedIdCondition}
      />

      <Text style={styles.labelInput}>
        Description <Text style={{color: '#DF2929'}}>*</Text>
      </Text>
      <View style={[styles.inputContainer, styles.nunitoSans]}>
        <TextInput
          style={[styles.textInput, styles.nunitoSans]}
          placeholder={''}
        />
      </View>

      <Text style={styles.labelInput}>
        Variant <Text style={{color: '#DF2929'}}>*</Text>
      </Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottomColor: '#D7D7D7',
          borderBottomWidth: 1,
          marginBottom: 10,
          paddingBottom: 10,
        }}>
        <Text style={{fontWeight: 'bold'}}>Color</Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{fontWeight: 'bold'}}>Sub Variant :</Text>
          <Text
            style={{
              paddingHorizontal: 10,
              fontSize: 11,
              backgroundColor: '#E3CAA5',
              color: 'white',
              borderRadius: 4,
              paddingVertical: 2,
              marginRight: 10,
              marginLeft: 10,
            }}>
            white
          </Text>
          <View
            style={{
              width: 20,
              height: 20,
              alignSelf: 'center',
              borderRadius: 2,

              backgroundColor: '#D7D7D7',
            }}>
            <Entypo
              style={{alignSelf: 'center', justifySelf: 'center', marginTop: 5}}
              color="white"
              size={10}
              name={'plus'}
            />
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          borderBottomColor: '#D7D7D7',
          borderBottomWidth: 1,
          marginBottom: 10,
          paddingBottom: 10,
        }}>
        <Entypo
          style={{alignSelf: 'center', justifySelf: 'center', marginRight: 10}}
          color="#525252"
          size={15}
          name={'plus'}
        />
        <Text>Add New Variant</Text>
      </View>
      <Text style={styles.labelInput}>
        Price <Text style={{color: '#DF2929'}}>*</Text>
      </Text>
      <View
        style={[styles.inputContainer, styles.nunitoSans, {marginBottom: 30}]}>
        <TextInput
          style={[
            styles.textInput,
            styles.nunitoSans,
            {fontSize: 13, width: '86%'},
          ]}
          placeholder={''}
          onChangeText={value => handlerProductName(value)}
        />
        <TouchableOpacity>
          <Text style={{marginRight: 10}}>Gram</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default CreateProduct;
