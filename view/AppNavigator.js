import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

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

const Stack = createStackNavigator();

const AppNavigator = () => (
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
    <Stack.Screen name="Register" component={RegisterScreen} />
    <Stack.Screen name="Email Verification" component={VerificationRegister} />
    <Stack.Screen name="Forget password" component={VerificationPassword} />
    <Stack.Screen
      name="VerificationInputPassword"
      component={VerificationInputPassword}
    />
    <Stack.Screen name="CreateNewPassword" component={CreateNewPassword} />
    <Stack.Screen name="Promo" component={PromoScreen} />
    <Stack.Screen name="Categories" component={CategoriesScreen} />
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="CategoryDetail" component={CategoryDetail} />
    <Stack.Screen name="ItemDetail" component={ItemDetail} />
  </Stack.Navigator>
);

export default AppNavigator;
