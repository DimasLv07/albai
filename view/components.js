import React from 'react';

import {Card, Paragraph} from 'react-native-paper';

import {ImagesAssets} from '../assets/ImagesAssets';
import {useNavigation} from '@react-navigation/native';

import {Image, View, TouchableOpacity, StyleSheet} from 'react-native';

var styles = require('./style/styles');
const getRandomNumber = () => {
  return Math.floor(Math.random() * 15 + 12);
};

export const CardCategories = props => {
  const nav = useNavigation();
  return (
    <Card style={styles.cardCategories}>
      <TouchableOpacity onPress={() => nav.navigate('CategoryDetail')}>
        <Card.Cover
          style={styles.cardCategoriesImage}
          source={{
            uri:
              'https://source.unsplash.com/random/200x200?sig=' +
              getRandomNumber(),
          }}
        />
        <Paragraph style={styles.categoriesTitle}>Food</Paragraph>
      </TouchableOpacity>
    </Card>
  );
};

export const BintangLima = () => {
  return (
    <View style={stylePribadi.row}>
      <Image
        style={stylePribadi.bintangItemDetail}
        source={ImagesAssets.bintang}
      />
      <Image
        style={stylePribadi.bintangItemDetail}
        source={ImagesAssets.bintang}
      />
      <Image
        style={stylePribadi.bintangItemDetail}
        source={ImagesAssets.bintang}
      />
      <Image
        style={stylePribadi.bintangItemDetail}
        source={ImagesAssets.bintang}
      />
      <Image
        style={stylePribadi.bintangItemDetail}
        source={ImagesAssets.bintang}
      />
    </View>
  );
};

export const CardTab = props => {
  const nav = useNavigation();
  return (
    <Card style={styles.cardAlbaiTab}>
      <TouchableOpacity onPress={() => nav.navigate('ItemDetail')}>
        <Card.Cover
          style={styles.cardAlbaiImageTab}
          source={{
            uri:
              'https://source.unsplash.com/random/200x200?sig=' +
              getRandomNumber(),
          }}
        />
        <View style={styles.albaiPromoContent}>
          <Paragraph numberOfLines={2} style={styles.albaiCardTitle}>
            Cosmos 17-WFG Kipas angin dingin
          </Paragraph>
          <View style={styles.albaiPromoMerahContainer}>
            <Paragraph style={styles.albaiCardHarga}>Rp200.000</Paragraph>
            <Paragraph style={styles.empatPuluh}>40%</Paragraph>
          </View>
          <Paragraph style={styles.albaiCardHargaPromo}>Rp200.000</Paragraph>
          <View style={styles.albaiLogoContainer}>
            <Image style={styles.logoAlbaiPromo} source={ImagesAssets.rumah} />
            <Paragraph style={styles.textSampingLogoAlbai}>
              Jakarta pusat
            </Paragraph>
          </View>
          <View style={styles.albaiLogoContainer}>
            <Image
              style={styles.logoAlbaiPromo}
              source={ImagesAssets.bintang}
            />
            <Paragraph style={styles.textSampingLogoAlbai}>
              4.5 | 500 Sold
            </Paragraph>
          </View>
          <Image
            style={styles.freeShipping}
            source={ImagesAssets.freeShipping}
          />
        </View>
      </TouchableOpacity>
    </Card>
  );
};

export const CardPromo = props => {
  const nav = useNavigation();
  return (
    <Card style={styles.cardAlbai}>
      <TouchableOpacity onPress={() => nav.navigate('ItemDetail')}>
        <Card.Cover
          style={styles.cardAlbaiImage}
          source={{
            uri:
              'https://source.unsplash.com/random/200x200?sig=' +
              getRandomNumber(),
          }}
        />
        <View style={styles.albaiPromoContent}>
          <Paragraph numberOfLines={2} style={styles.albaiCardTitle}>
            Cosmos 17-WFG Kipas angin dingin
          </Paragraph>
          <View style={styles.albaiPromoMerahContainer}>
            <Paragraph style={styles.albaiCardHarga}>Rp200.000</Paragraph>
            <Paragraph style={styles.empatPuluh}>40%</Paragraph>
          </View>
          <Paragraph style={styles.albaiCardHargaPromo}>Rp200.000</Paragraph>
          <View style={styles.albaiLogoContainer}>
            <Image style={styles.logoAlbaiPromo} source={ImagesAssets.rumah} />
            <Paragraph style={styles.textSampingLogoAlbai}>
              Jakarta pusat
            </Paragraph>
          </View>
          <View style={styles.albaiLogoContainer}>
            <Image
              style={styles.logoAlbaiPromo}
              source={ImagesAssets.bintang}
            />
            <Paragraph style={styles.textSampingLogoAlbai}>
              4.5 | 500 Sold
            </Paragraph>
          </View>
          <Image
            style={styles.freeShipping}
            source={ImagesAssets.freeShipping}
          />
        </View>
      </TouchableOpacity>
    </Card>
  );
};

const stylePribadi = StyleSheet.create({
  bintangItemDetail: {
    alignSelf: 'center',
    width: 15,
    height: 15,
  },

  row: {
    flexDirection: 'row',
  },
});
