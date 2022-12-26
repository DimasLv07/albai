import React from 'react';

import {ImagesAssets} from '../assets/ImagesAssets';

import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  ImageBackground,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';

var styles = require('./style/styles');

const CategoriesScreen = () => {
  const nav = useNavigation();
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={stylePribadi.viewCategories}>
          <Text style={stylePribadi.allCategories}>All Categories</Text>
          <View style={stylePribadi.cardCategoriesContainer}>
            <TouchableOpacity
              onPress={() => nav.navigate('CategoryDetail')}
              style={stylePribadi.cardCategories}>
              <ImageBackground
                style={stylePribadi.cardCategories}
                source={ImagesAssets.categoriesCardImage}>
                <View style={stylePribadi.textImageCardCategories}>
                  <Text style={stylePribadi.textImageCardCategoriesColor}>
                    Foods
                  </Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>

            <View style={stylePribadi.pemisahCardCategories} />
            <TouchableOpacity
              onPress={() => nav.navigate('CategoryDetail')}
              style={stylePribadi.cardCategories}>
              <ImageBackground
                style={stylePribadi.cardCategories}
                source={ImagesAssets.categoriesCardImage}>
                <View style={stylePribadi.textImageCardCategories}>
                  <Text style={stylePribadi.textImageCardCategoriesColor}>
                    Foods
                  </Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
          </View>
          <View style={stylePribadi.cardCategoriesContainer}>
            <TouchableOpacity
              onPress={() => nav.navigate('CategoryDetail')}
              style={stylePribadi.cardCategories}>
              <ImageBackground
                style={stylePribadi.cardCategories}
                source={ImagesAssets.categoriesCardImage}>
                <View style={stylePribadi.textImageCardCategories}>
                  <Text style={stylePribadi.textImageCardCategoriesColor}>
                    Foods
                  </Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
            <View style={stylePribadi.pemisahCardCategories} />
            <TouchableOpacity
              onPress={() => nav.navigate('CategoryDetail')}
              style={stylePribadi.cardCategories}>
              <ImageBackground
                style={stylePribadi.cardCategories}
                source={ImagesAssets.categoriesCardImage}>
                <View style={stylePribadi.textImageCardCategories}>
                  <Text style={stylePribadi.textImageCardCategoriesColor}>
                    Foods
                  </Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
          </View>
          <View style={stylePribadi.cardCategoriesContainer}>
            <TouchableOpacity
              onPress={() => nav.navigate('CategoryDetail')}
              style={stylePribadi.cardCategories}>
              <ImageBackground
                style={stylePribadi.cardCategories}
                source={ImagesAssets.categoriesCardImage}>
                <View style={stylePribadi.textImageCardCategories}>
                  <Text style={stylePribadi.textImageCardCategoriesColor}>
                    Foods
                  </Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
            <View style={stylePribadi.pemisahCardCategories} />
            <TouchableOpacity
              onPress={() => nav.navigate('CategoryDetail')}
              style={stylePribadi.cardCategories}>
              <ImageBackground
                style={stylePribadi.cardCategories}
                source={ImagesAssets.categoriesCardImage}>
                <View style={stylePribadi.textImageCardCategories}>
                  <Text style={stylePribadi.textImageCardCategoriesColor}>
                    Foods
                  </Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
          </View>
          <View style={stylePribadi.cardCategoriesContainer}>
            <TouchableOpacity
              onPress={() => nav.navigate('CategoryDetail')}
              style={stylePribadi.cardCategories}>
              <ImageBackground
                style={stylePribadi.cardCategories}
                source={ImagesAssets.categoriesCardImage}>
                <View style={stylePribadi.textImageCardCategories}>
                  <Text style={stylePribadi.textImageCardCategoriesColor}>
                    Foods
                  </Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
            <View style={stylePribadi.pemisahCardCategories} />
            <TouchableOpacity
              onPress={() => nav.navigate('CategoryDetail')}
              style={stylePribadi.cardCategories}>
              <ImageBackground
                style={stylePribadi.cardCategories}
                source={ImagesAssets.categoriesCardImage}>
                <View style={stylePribadi.textImageCardCategories}>
                  <Text style={stylePribadi.textImageCardCategoriesColor}>
                    Foods
                  </Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
          </View>
          <View style={stylePribadi.cardCategoriesContainer}>
            <TouchableOpacity
              onPress={() => nav.navigate('CategoryDetail')}
              style={stylePribadi.cardCategories}>
              <ImageBackground
                style={stylePribadi.cardCategories}
                source={ImagesAssets.categoriesCardImage}>
                <View style={stylePribadi.textImageCardCategories}>
                  <Text style={stylePribadi.textImageCardCategoriesColor}>
                    Foods
                  </Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
            <View style={stylePribadi.pemisahCardCategories} />
            <TouchableOpacity
              onPress={() => nav.navigate('CategoryDetail')}
              style={stylePribadi.cardCategories}>
              <ImageBackground
                style={stylePribadi.cardCategories}
                source={ImagesAssets.categoriesCardImage}>
                <View style={stylePribadi.textImageCardCategories}>
                  <Text style={stylePribadi.textImageCardCategoriesColor}>
                    Foods
                  </Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
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
