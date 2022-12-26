import React from 'react';

import {ImagesAssets} from '../assets/ImagesAssets';

import {Text, Image, View, TouchableOpacity, ScrollView} from 'react-native';

import {CardTab} from './components';

var styles = require('./style/styles');

const PromoScreen = () => {
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={styles.container}>
        <Image
          style={styles.imagePromoBanner}
          source={ImagesAssets.imageBannerExample}
        />

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
        <View style={styles.containerP2}>
          <View style={styles.containerPP}>
            <CardTab />
            <CardTab />
          </View>
          <View style={styles.containerPP}>
            <CardTab />
            <CardTab />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default PromoScreen;
