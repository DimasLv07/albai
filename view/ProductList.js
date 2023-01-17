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

import {CardCategories, CardPromo, CardTab} from './components';
import Icon from 'react-native-vector-icons/Ionicons';
import IconAwesome from 'react-native-vector-icons/FontAwesome';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import IconMaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';

import Feather from 'react-native-vector-icons/Feather';

import {useNavigation} from '@react-navigation/native';
var styles = require('./style/styles');
import CarouselC from './Carousel';

const ProductList = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');

  const handlerEmail = val => {
    setEmail(val);
    setEmailError(null);
  };
  return (
    <View style={styles.container}>
      <View
        style={{
          padding: 20,
          borderBottomWidth: 1,
          paddingBottom: 10,
          borderColor: '#D7D7D7',
        }}>
        <View style={{flexDirection: 'row'}}>
          <View style={[styles.inputContainer, {width: '88%'}]}>
            <Pressable>
              <Text style={{marginLeft: 5}}>
                {' '}
                <Icon name={'search'} size={19} color="#232323" />
              </Text>
            </Pressable>
            <TextInput
              style={[styles.textInput, styles.nunitoSans]}
              onChangeText={value => handlerEmail(value)}
              placeholder={'Search your product...'}
              value={email}
              enablesReturnKeyAutomatically
              autoCapitalize="none"
            />
          </View>
          <Pressable
            style={{
              borderWidth: 1,
              borderColor: '#525252',
              borderRadius: 14,
              position: 'relative',
              marginLeft: 5,
              width: 39,
              height: 39,
            }}>
            <Text
              style={{
                position: 'absolute',
                bottom: 3,
                right: 10,
                transform: [{rotateY: '180deg'}],
              }}>
              <IconMaterialCommunity
                name={'toggle-switch-outline'}
                size={19}
                color="#232323"
              />
            </Text>

            <Text style={{position: 'absolute', top: 3, right: 10}}>
              <IconMaterialCommunity
                name={'toggle-switch-outline'}
                size={19}
                color="#232323"
              />
            </Text>
          </Pressable>
        </View>
      </View>

      <Text style={{marginLeft: 15, color: '#282828', marginVertical: 10}}>
        3 Product
      </Text>
      <View
        style={{backgroundColor: 'white', marginBottom: 5, paddingBottom: 17}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image
            style={[styles.profileUser, {marginLeft: 15, marginRight: 10}]}
            source={ImagesAssets.profileUser}
          />
          <View>
            <Text style={{fontWeight: 'bold'}}>Iphone</Text>
            <Text>Rp 9.000.000 </Text>
            <Text>Stock: 19</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 15,
            marginTop: 13,
          }}>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: '#1877F2',
              flex: 1,
              padding: 4,
              justifyContent: 'space-evenly',
              borderRadius: 6,
            }}>
            <Icon color="white" name={'eye-outline'} />
            <Text style={{color: 'white'}}>Show</Text>
          </TouchableOpacity>
          <View style={{width: 10}} />
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: '#AC8B75',
              flex: 1,
              padding: 4,
              justifyContent: 'space-evenly',
              borderRadius: 6,
            }}>
            <IconMaterialCommunity color="white" name={'pencil-outline'} />
            <Text style={{color: 'white'}}>Edit</Text>
          </TouchableOpacity>
          <View style={{width: 10}} />
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: '#EF4444',
              flex: 1,
              padding: 4,
              justifyContent: 'space-evenly',
              borderRadius: 6,
            }}>
            <IconMaterialCommunity color="white" name={'trash-can-outline'} />
            <Text style={{color: 'white'}}>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{backgroundColor: 'white', marginBottom: 5, paddingBottom: 17}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image
            style={[styles.profileUser, {marginLeft: 15, marginRight: 10}]}
            source={ImagesAssets.profileUser}
          />
          <View>
            <Text style={{fontWeight: 'bold'}}>Iphone</Text>
            <Text>Rp 9.000.000 </Text>
            <Text>Stock: 19</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 15,
            marginTop: 13,
          }}>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: '#1877F2',
              flex: 1,
              padding: 4,
              justifyContent: 'space-evenly',
              borderRadius: 6,
            }}>
            <Icon color="white" name={'eye-outline'} />
            <Text style={{color: 'white'}}>Show</Text>
          </TouchableOpacity>
          <View style={{width: 10}} />
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: '#AC8B75',
              flex: 1,
              padding: 4,
              justifyContent: 'space-evenly',
              borderRadius: 6,
            }}>
            <IconMaterialCommunity color="white" name={'pencil-outline'} />
            <Text style={{color: 'white'}}>Edit</Text>
          </TouchableOpacity>
          <View style={{width: 10}} />
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: '#EF4444',
              flex: 1,
              padding: 4,
              justifyContent: 'space-evenly',
              borderRadius: 6,
            }}>
            <IconMaterialCommunity color="white" name={'trash-can-outline'} />
            <Text style={{color: 'white'}}>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{backgroundColor: 'white', marginBottom: 5, paddingBottom: 17}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image
            style={[styles.profileUser, {marginLeft: 15, marginRight: 10}]}
            source={ImagesAssets.profileUser}
          />
          <View>
            <Text style={{fontWeight: 'bold'}}>Iphone</Text>
            <Text>Rp 9.000.000 </Text>
            <Text>Stock: 19</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 15,
            marginTop: 13,
          }}>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: '#1877F2',
              flex: 1,
              padding: 4,
              justifyContent: 'space-evenly',
              borderRadius: 6,
            }}>
            <Icon color="white" name={'eye-outline'} />
            <Text style={{color: 'white'}}>Show</Text>
          </TouchableOpacity>
          <View style={{width: 10}} />
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: '#AC8B75',
              flex: 1,
              padding: 4,
              justifyContent: 'space-evenly',
              borderRadius: 6,
            }}>
            <IconMaterialCommunity color="white" name={'pencil-outline'} />
            <Text style={{color: 'white'}}>Edit</Text>
          </TouchableOpacity>
          <View style={{width: 10}} />
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: '#EF4444',
              flex: 1,
              padding: 4,
              justifyContent: 'space-evenly',
              borderRadius: 6,
            }}>
            <IconMaterialCommunity color="white" name={'trash-can-outline'} />
            <Text style={{color: 'white'}}>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProductList;
