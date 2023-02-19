import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {getHeaderTitle} from '@react-navigation/elements';
import {useNavigation} from '@react-navigation/native';

import {
  View,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Button,
} from 'react-native';
import IconAwesome from 'react-native-vector-icons/FontAwesome';
import IconAwesome5 from 'react-native-vector-icons/FontAwesome5';
import IconFeather from 'react-native-vector-icons/Feather';
import IconMaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Text from './TextAlbai';
import Icon from 'react-native-vector-icons/Ionicons';

import LoginScreen from './Login';
import RegisterScreen from './Register';
import VerificationRegister from './VerificationRegister';
import VerificationPassword from './VerificationPassword';
import VerificationInputPassword from './VerificationInputPassword';
import CreateNewPassword from './CreateNewPassword';
import HomeScreen from './Home';
import PromoScreen from './Promo';
import CategoriesScreen from './Categories';
import CategoryDetail from './CategoryDetail';
import ItemDetail from './ItemDetail';
import StoreDetail from './StoreDetail';
import ChatList from './ChatList';
import ChatDetail from './ChatDetail';
import ProfileView from './ProfileView';
import CreateStorePhone from './CreateStorePhone';
import CreateStoreDomain from './CreateStoreDomain';
import CreateStoreLocation from './CreateStoreLocation';
import CreateStoreFinish from './CreateStoreFinish';
import KeranjangScreen from './KeranjangScreen';
import WishlistScreen from './WishlistScreen';
import StoreProfileScreen from './StoreProfile';
import ProductList from './ProductList';
import CreateProduct from './CreateProduct';

const Stack = createStackNavigator();
const AppNavigator = () => {
  const nav = useNavigation();
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 0.3,
          },
          shadowRadius: 3.84,
          elevation: 2,
        },
        cardStyle: {backgroundColor: '#fff'},
      }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen
        options={{headerShown: false}}
        name="ItemDetail"
        component={ItemDetail}
      />

      <Stack.Screen
        option={{title: 'Register'}}
        name="Register"
        component={RegisterScreen}
      />
      <Stack.Screen
        name="CreateProduct"
        options={{
          title: 'Create Product',
          headerStyle: {
            backgroundColor: 'white',
          },
        }}
        component={CreateProduct}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Home"
        component={HomeScreen}
      />

      <Stack.Screen
        option={{title: 'Keranjang'}}
        name="KeranjangScreen"
        component={KeranjangScreen}
      />
      <Stack.Screen
        name="ProductList"
        options={{
          title: 'Product List',
          headerStyle: {
            backgroundColor: 'white',
          },
          headerRight: () => (
            <TouchableOpacity
              onPress={() => nav.navigate('CreateProduct')}
              style={{marginRight: 18}}>
              <Entypo color="#AC8B75" size={28} name={'plus'} />
            </TouchableOpacity>
          ),
        }}
        component={ProductList}
      />
      <Stack.Screen
        name="StoreProfileScreen"
        options={{
          title: 'My Store',
          headerStyle: {
            backgroundColor: '#E3CAA5',
          },
          headerLeft: () => (
            <TouchableOpacity
              style={{marginLeft: 20, alignSelf: 'center'}}
              onPress={() => nav.navigate('Profile')}>
              <Icon color="black" size={25} name={'arrow-back'} />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                onPress={() => nav.navigate('Home')}
                style={{marginRight: 18, flexDirection: 'row'}}>
                <IconAwesome color="black" size={20} name={'home'} />
                <Text style={{marginLeft: 5}}>Go to home</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{marginRight: 18}}>
                <IconAwesome color="black" size={18} name={'envelope'} />
              </TouchableOpacity>
              <TouchableOpacity style={{marginRight: 23}}>
                <IconMaterialCommunity
                  color={'black'}
                  size={20}
                  name={'bell'}
                />
              </TouchableOpacity>
            </View>
          ),
        }}
        component={StoreProfileScreen}
      />
      <Stack.Screen
        name="WishlistScreen"
        options={{
          title: 'Wishlist',
          headerRight: () => (
            <TouchableOpacity style={{marginRight: 23}}>
              <IconFeather size={18} name={'shopping-cart'} />
            </TouchableOpacity>
          ),
        }}
        component={WishlistScreen}
      />

      <Stack.Screen
        options={{
          title: 'Profile',
          headerStyle: {
            backgroundColor: '#E3CAA5',
          },
        }}
        name="Profile"
        component={ProfileView}
      />

      <Stack.Screen
        name="Email Verification"
        component={VerificationRegister}
      />
      <Stack.Screen
        option={{title: 'Forget Password'}}
        name="Forget password"
        component={VerificationPassword}
      />
      <Stack.Screen
        name="VerificationInputPassword"
        component={VerificationInputPassword}
      />
      <Stack.Screen
        option={{title: 'Create New Password'}}
        name="CreateNewPassword"
        component={CreateNewPassword}
      />

      <Stack.Screen
        options={{headerShown: false}}
        name="Promo"
        component={PromoScreen}
      />
      <Stack.Screen name="Categories" component={CategoriesScreen} />
      <Stack.Screen
        options={{headerShown: false}}
        name="CategoryDetail"
        component={CategoryDetail}
      />

      <Stack.Screen
        options={{headerShown: false}}
        name="StoreDetail"
        component={StoreDetail}
      />
      <Stack.Screen
        options={{
          title: 'Chat',
          headerRight: () => (
            <TouchableOpacity style={{marginRight: 23}}>
              <IconAwesome size={18} name={'search'} />
            </TouchableOpacity>
          ),
        }}
        name="ChatList"
        component={ChatList}
      />
      <Stack.Screen
        options={{
          headerTitle: props => <LogoTitle {...props} />,
          headerRight: () => (
            <TouchableOpacity style={{marginRight: 23}}>
              <IconMaterialCommunity size={18} name={'dots-vertical'} />
            </TouchableOpacity>
          ),
        }}
        name="ChatDetail"
        component={ChatDetail}
      />
      <Stack.Screen
        options={{title: ''}}
        name="CreateStorePhone"
        component={CreateStorePhone}
      />
      <Stack.Screen
        name="Create Store Domain"
        component={CreateStoreDomain}
        options={{title: ''}}
      />
      <Stack.Screen
        name="Create Store Location"
        component={CreateStoreLocation}
        options={{title: ''}}
      />
      <Stack.Screen
        name="Create Store Finish"
        component={CreateStoreFinish}
        options={{title: ''}}
      />
    </Stack.Navigator>
  );
};

const LogoTitle = () => {
  return (
    <View style={{flexDirection: 'row'}}>
      <View
        style={{
          width: 35,
          height: 35,
          backgroundColor: 'black',
          borderRadius: 30,
          marginRight: 10,
        }}
      />
      <View>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 16,
            color: '#282828',
            paddingBottom: 2,
          }}>
          I-Box
        </Text>
        <Text style={{fontSize: 11, color: '#9C9C9C'}}>
          Last seen 15 minutes ago
        </Text>
      </View>
    </View>
  );
};

export default AppNavigator;
