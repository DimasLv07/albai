import React, {useState} from 'react';

import {ImagesAssets} from '../assets/ImagesAssets';
import Text from './TextAlbai';

import {
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {useNavigation, useIsFocused} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import IconAwesome from 'react-native-vector-icons/FontAwesome';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';

import {CardCategoryDetail} from './components';

var styles = require('./style/styles');

const CategoriesScreen = () => {
  const nav = useNavigation();
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={stylePribadi.viewCategories}>
          <Text style={stylePribadi.allCategories}>All Categories</Text>
          <View style={stylePribadi.cardCategoriesContainer}>
            <CardCategoryDetail name="Foods" image={ImagesAssets.food} />
            <View style={stylePribadi.pemisahCardCategories} />
            <CardCategoryDetail
              name="Cosmetic & Beauty"
              image={ImagesAssets.beauty}
            />
          </View>
          <View style={stylePribadi.cardCategoriesContainer}>
            <CardCategoryDetail name="Computer & Accesories" image={ImagesAssets.computer} />
            <View style={stylePribadi.pemisahCardCategories} />
            <CardCategoryDetail name="Phone & Accesories" image={ImagesAssets.phone} />
          </View>
          <View style={stylePribadi.cardCategoriesContainer}>
            <CardCategoryDetail name="Man Fashion" image={ImagesAssets.man} />
            <View style={stylePribadi.pemisahCardCategories} />
            <CardCategoryDetail name="Woman Fashion" image={ImagesAssets.woman} />
          </View>
          <View style={stylePribadi.cardCategoriesContainer}>
            <CardCategoryDetail name="Home Appliance" image={ImagesAssets.home} />
            <View style={stylePribadi.pemisahCardCategories} />
            <CardCategoryDetail name="Otomotive" image={ImagesAssets.otomative} />
          </View>
          <View style={stylePribadi.cardCategoriesContainer}>
            <CardCategoryDetail name="Sports" image={ImagesAssets.sport} />
            <View style={stylePribadi.pemisahCardCategories} />
            <CardCategoryDetail name="Gaming" image={ImagesAssets.gaming} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const stylePribadi = StyleSheet.create({
  allCategories: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'black',
    marginBottom: 15,
  },

  imageCardCategories: {
    width: '100%',
  },

  viewCategories: {
    padding: 15,
  },

  cardCategories: {
    backgroundColor: 'black',
    flex: 1,
    height: 150,
    borderRadius: 10,
    overflow: 'hidden',
  },

  cardCategoriesContainer: {
    marginBottom: 7,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  textImageCardCategories: {
    position: 'absolute',

    left: 0,
    right: 0,
    bottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  textImageCardCategoriesColor: {
    color: 'white',
  },

  pemisahCardCategories: {
    width: 8,
  },
});

export default CategoriesScreen;
