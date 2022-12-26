import React from 'react';
import {Text, View, TouchableOpacity, ScrollView} from 'react-native';

import {CardPromo, CardTab} from './components';

import {useNavigation} from '@react-navigation/native';
var styles = require('./style/styles');
import CarouselC from './Carousel';

const CategoryDetail = () => {
  const nav = useNavigation();

  return (
    <ScrollView style={styles.scene}>
      <View style={styles.container}>
        <CarouselC />
        <View style={styles.viewMainHome}>
          <View style={styles.cpluss}>
            <Text style={styles.textCategories}>Top seller</Text>
            <TouchableOpacity onPress={() => nav.navigate('Promo')}>
              <Text>See More</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal={true} style={styles.cardAlbaiContainer}>
            <View style={styles.cardAlbaiContainer}>
              <CardPromo />
              <CardPromo />
              <CardPromo />
              <CardPromo />
              <CardPromo />
              <CardPromo />
            </View>
          </ScrollView>

          <View style={(styles.cpluss, {marginBottom: -20})}>
            <Text style={styles.textCategories}>Choose your Sports needs</Text>
          </View>
        </View>
      </View>
      <View style={styles.filterContainer}>
        <TouchableOpacity style={styles.filterTitle}>
          <Text style={styles.filterText}>Filter</Text>
        </TouchableOpacity>
        <ScrollView style={styles.filterContainerScroll} horizontal={true}>
          <TouchableOpacity style={styles.filterButtonHightLight}>
            <Text style={styles.filterTextButtonHightLight}>Foods</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterTextButton}>Fashion</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterTextButton}>Sport</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterTextButton}>Otomotive</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
      <View style={styles.containerP}>
        <View style={styles.containerPP}>
          <CardTab />
          <CardTab />
        </View>
        <View style={styles.containerPP}>
          <CardTab />
          <CardTab />
        </View>
      </View>
    </ScrollView>
  );
};

export default CategoryDetail;
